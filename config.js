import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD2iLH7nWRWnB650W8tPoZphBE-9ACFXQM",
  authDomain: "c77-77606.firebaseapp.com",
  databaseURL: "https://c77-77606.firebaseio.com",
  projectId: "c77-77606",
  storageBucket: "c77-77606.appspot.com",
  messagingSenderId: "559712109584",
  appId: "1:559712109584:web:e488873dd48ec455f53695"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
