import React from 'react';
import { View} from 'react-native';
import { ContainerDefault } from '../../components/containers/default/container.component';
import {PostItemContainer} from "../../components/post-screen/post-screen.container"
import { stylesPost } from './post.styles';
import {useTranslation} from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';

const Post = () => {

    const styles = stylesPost;
    const [t] = useTranslation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.bg[0]} style="light" />
            <ContainerDefault title={t("task")} settings={true} back={true}>
                <PostItemContainer />  
            </ContainerDefault>
        </View>
    );
}

export default Post;
