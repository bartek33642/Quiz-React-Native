import * as React from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const QuizesHomePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.cards}>
            <Text style={styles.header}>Quizy</Text>
            <View style={[styles.card, styles.elevation, styles.colorOne]}>
                <Text style={styles.headerTwo}>Pierwszy Quiz</Text>
                <Text style={styles.paragraf}>Quiz sprawdzający wiedzę o filmach</Text>
                <Text> </Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonTextStyle}>Przejdź do quizu</Text></TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation, styles.colorTwo]}>
                <Text style={styles.headerTwo}>Drugi  Quiz</Text>
                <Text style={styles.paragraf}>Quiz sprawdzający wiedzę ogólną </Text>
                <Text> </Text>
               <TouchableOpacity style={styles.button}><Text style={styles.buttonTextStyle}>Przejdź do quizu</Text></TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation, styles.colorOne]}>
                <Text style={styles.headerTwo}>Trzeci  Quiz</Text>
                <Text style={styles.paragraf}>Quiz sprawdzający wiedzę o muzyce </Text>
                <Text> </Text>
                <TouchableOpacity style={styles.button} ><Text style={styles.buttonTextStyle}>Przejdź do quizu</Text></TouchableOpacity>
            </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.cardResult}>
                    <Text style={{textAlign: 'center', fontSize: 18}}>Sprawdź wyniki</Text>
                    <Text> </Text>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={{textAlign: 'center', fontSize: 16}}>Wyniki</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      fontFamily: 'Arial',
      width: '100%'
    },
    cards: {
        width: '80%',
        alignSelf: 'center',
    },
    card: {
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        marginVertical: 10,       
    },
    button: {
        alignItems: "center",
        backgroundColor: "#4B3AE8",
        padding: 10,
        borderRadius: 8,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTwo: {
        fontSize: 16,
        fontWeight: 'bold',    },
    paragraf: {
        fontSize: 14,
    },
    buttonTextStyle: {
        fontWeight: 'bold',
    },
    colorOne: {
        backgroundColor: '#2E7FE8',
    },
    colorTwo: {
        backgroundColor: '#38E823',
    },
    footer: {
        backgroundColor: '#dbdbdb',
    },
    cardResult: {
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        marginVertical: 10,
    },
  });

export default QuizesHomePage;