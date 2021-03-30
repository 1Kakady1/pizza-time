import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform, Alert } from 'react-native';
import { IProfileProps } from './profile.model';
import { stylesProfile } from './profile.styles';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUriFileInfo } from '../../../helpers/functions';

export const Profile = ({
    user,
    store,
    fieldUpdateUser,
    updateProfileField
}: IProfileProps) => {
    const styles = stylesProfile;
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [uplodeProgress, setUplodeProgress] = useState<number | undefined>(
        undefined
    );

    const preview =
        selectedImage !== ''
            ? { uri: selectedImage }
            : user.preview && user.preview !== ''
            ? { uri: user.preview }
            : require('./resources/no-image.jpg');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            setSelectedImage(result.uri);
            uplodeImage(result.uri);
        }
    };

    const uplodeImage = async (uri: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const filename = getUriFileInfo(uri).filename;

        if (
            (blob.size < 5242880 && blob.type === 'image/png') ||
            blob.type === 'image/jpg' ||
            blob.type === 'image/jpeg'
        ) {
            const uploadTask = store
                .child(`images/users/${filename}`)
                .put(blob);

            uploadTask.on(
                'state_changed',
                (snapshot: {
                    bytesTransferred: number;
                    totalBytes: number;
                }) => {
                    setUplodeProgress(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (error: string) => {
                    Alert.alert('', error.toString(), [{ text: 'OK' }], {
                        cancelable: false
                    });
                    setUplodeProgress(undefined);
                    setSelectedImage('');
                },
                () => {
                    uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL: string) => {
                            setUplodeProgress(undefined);
                            fieldUpdateUser(
                                user.userID,
                                'preview',
                                downloadURL
                            ).then(() => {
                                updateProfileField(downloadURL, 'preview');
                                setSelectedImage('');
                                setUplodeProgress(undefined);
                            });
                        });
                }
            );
        } else {
            Alert.alert('', 'Ошибка при обработке файла', [{ text: 'OK' }], {
                cancelable: false
            });
        }
    };

    useEffect(() => {
        // (async () => {
        //   if (Platform.OS !== 'web') {
        //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        //     if (status !== 'granted') {
        //       alert('Sorry, we need camera roll permissions to make this work!');
        //     }
        //   }
        // })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.generalImg}
                    source={require('./resources/profile-img.jpg')}
                />
                {uplodeProgress !== undefined ? (
                    <View style={styles.uplodePreview}>
                        <Text style={styles.uplodeText}>Uplode image: </Text>
                        <Text style={styles.uplodeProcent}>
                            {Math.ceil(uplodeProgress).toString()}%
                        </Text>
                    </View>
                ) : null}
                <View style={styles.previewWrap}>
                    <TouchableOpacity
                        onPress={() => !uplodeProgress && pickImage()}
                    >
                        <Image style={styles.preview} source={preview} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>Имя: {user.name}</Text>
            <Text>Тел: {user.phone}</Text>
            <Text>Aдр: {user.address}</Text>
            <Text>Email: {user.email}</Text>
        </View>
    );
};
