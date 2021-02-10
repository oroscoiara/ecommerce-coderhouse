import firebase from 'firebase/app';
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAX3opHB7faqMyc9sZakDfOtxemJp5IKLI",
    authDomain: "sinpulguitas-dfcc0a.firebaseapp.com",
    projectId: "sinpulguitas-dfcc0a",
    storageBucket: "sinpulguitas-dfcc0a.appspot.com",
    messagingSenderId: "155234143124",
    appId: "1:155234143124:web:1a43da14557a5ea4211d81"
});
export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

export function getCatalog() {
  const db = getFirestore();
  const catalog = db.collection("catalog");
  return catalog.get()
}

export function getCategories() {
    const db = getFirestore();
    const categories = db.collection("categorie").orderBy("order", "asc")
    return categories.get() 
  }