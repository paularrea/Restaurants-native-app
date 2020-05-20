import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCTF10U1Qb1sJT6aqys1KJos-FisqvjY-k",
    authDomain: "restaurants-native-app.firebaseapp.com",
    databaseURL: "https://restaurants-native-app.firebaseio.com",
    projectId: "restaurants-native-app",
    storageBucket: "restaurants-native-app.appspot.com",
    messagingSenderId: "443090715824",
    appId: "1:443090715824:web:d36a138c75166c8457e775",
    measurementId: "G-G06TS31XR9"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);