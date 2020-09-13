import firebase from 'firebase';

const firebaseConfig = {
//here are the configurations that you need to put from firebase
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
