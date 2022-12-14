import React, { useEffect } from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import QuizesHomePage from "./Components/QuizesHomePage";
import QuizesPage from './Components/QuizFirst';
import QuizesPageSecond from './Components/QuizSecond';
import QuizesPageThird from './Components/QuizThird';
import Results from './Components/Result';
import SplashScreen from "react-native-splash-screen";

const HomeScreen = () => {
  return (
      <View style={styles.container}>
      <QuizesHomePage />      
    </View>
  )
}


const QuizFirst = () => {
  return (
    <View style={styles.container}>
      <QuizesPage></QuizesPage>
    </View>
  );
}

const QuizSecond = () => {
  return (
    <View style={styles.container}>
      <QuizesPageSecond></QuizesPageSecond>
    </View>
  );
}

const QuizThird = () => {
  return (
    <View style={styles.container}
>
      <QuizesPageThird></QuizesPageThird>
    </View>
  );
}

const Result = () => {
  return (
    <View style={styles.container}>
      <Results></Results>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Strona główna" component={HomeScreen} /> 
      <Drawer.Screen name="Wyniki" component={Result} />

      <Drawer.Screen name="Quiz#1" component={QuizFirst} />
      <Drawer.Screen name="Quiz#2" component={QuizSecond} />
      <Drawer.Screen name="Quiz#3" component={QuizThird} />

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (

    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

