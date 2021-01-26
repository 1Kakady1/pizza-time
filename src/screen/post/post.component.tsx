import React from 'react';
import { View} from 'react-native';
import {PostItemContainer} from "../../components/post-screen/post-screen.container"
import { stylesPost } from './post.styles';
import { StatusBar } from 'expo-status-bar';
import { statusBar } from '../../consts/colors.const';
import { PostDefault } from '../../components/containers/post/container.component';
import { CartBtnContainer } from '../../components/cart-btn/cart-brn.container';


const Post = () => {

    const styles = stylesPost;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.color.black} style="light" />
            <PostDefault  back={true} rightComponent={CartBtnContainer}>
                <PostItemContainer />  
            </PostDefault>
        </View>
    );
}

export default Post;
