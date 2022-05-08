import React, { useEffect, useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import AppNavigator from './src/infrastructure/navigation/app.navigator';
// yarn add firebase@8.10.0
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
//import firebase from '@react-native-firebase/app';
//import auth from '@react-native-firebase/auth';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import * as firebase from 'firebase';
//import firebase from 'firebase/compat';
// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvpw4vbzSH98vOYNwyA5yfj5nGyEvJPIw',
  authDomain: 'mealstogo-51e67.firebaseapp.com',
  projectId: 'mealstogo-51e67',
  storageBucket: 'mealstogo-51e67.appspot.com',
  messagingSenderId: '668610135743',
  appId: '1:668610135743:web:6e2cc5d1b79e1bf4f5a80a',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword('samilabud@mealstogo.com', '123456')
      .then((data) => {
        console.log('logged', data);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.log('error', e);
      });
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
