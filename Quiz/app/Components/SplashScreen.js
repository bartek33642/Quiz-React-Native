import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image></Image>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})