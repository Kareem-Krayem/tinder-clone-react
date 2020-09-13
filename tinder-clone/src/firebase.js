import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABxPpojYhnmIyXk9mG0QdoEXv2UxwpedA",
    authDomain: "kareem-tinder-clone.firebaseapp.com",
    databaseURL: "https://kareem-tinder-clone.firebaseio.com",
    projectId: "kareem-tinder-clone",
    storageBucket: "kareem-tinder-clone.appspot.com",
    messagingSenderId: "885251383809",
    appId: "1:885251383809:web:0e441cb2fff1fbafb99600"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;