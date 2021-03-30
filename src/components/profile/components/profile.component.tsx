import React from 'react';
import { View, Text, Image } from 'react-native';
import { IProfileProps } from './profile.model';
import { stylesProfile } from './profile.styles';

export const Profile = ({ user }: IProfileProps) => {
    const styles = stylesProfile;
    const preview =
        user.preview && user.preview !== ''
            ? { uri: user.preview }
            : require('./resources/no-image.jpg');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.generalImg}
                    source={require('./resources/profile-img.jpg')}
                />
                <View style={styles.previewWrap}>
                    <Image style={styles.preview} source={preview} />
                </View>
            </View>
            <Text>Имя: {user.name}</Text>
            <Text>Тел: {user.phone}</Text>
            <Text>Aдр: {user.address}</Text>
            <Text>Email: {user.email}</Text>
        </View>
    );
};
