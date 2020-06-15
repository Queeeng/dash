const firebaseConfig = {
  apiKey: "AIzaSyArKrnM3yCtiD4S3l-C8Zs1w4tKSdjlvxE",
  authDomain: "codetraders.firebaseapp.com",
  databaseURL: "https://codetraders.firebaseio.com",
  projectId: "codetraders",
  storageBucket: "codetraders.appspot.com",
  messagingSenderId: "236087810453",
  appId: "1:236087810453:web:84cbf73958fd5d737c3e9c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//make auth and firestore references
const auth = firebase.auth();
const db = firebase.database();
