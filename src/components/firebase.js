import firebase from "firebase/app";
import  'firebase/auth';

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCLGoq1Lf0sEFAtLtC3D7skIyjoofxe9nc",
    authDomain: "talk-with-jeet.firebaseapp.com",
    projectId: "talk-with-jeet",
    storageBucket: "talk-with-jeet.appspot.com",
    messagingSenderId: "774980299891",
    appId: "1:774980299891:web:ebc69cde1c62856bb34e06"
}).auth();