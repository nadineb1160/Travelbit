import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserProvider } from "./state/UserContext";

const firebaseConfig = {
    apiKey: "AIzaSyBI_TADYflj_M4qeZD0XslBFWqo46zpYYg",
    authDomain: "travelbit-ce02a.firebaseapp.com",
    databaseURL: "https://travelbit-ce02a.firebaseio.com",
    projectId: "travelbit-ce02a",
    storageBucket: "travelbit-ce02a.appspot.com",
    senderId: "830021166356",
    appId: "1:830021166356:web:ab84a29578bb2e476a8e01"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // user
    }
})


export const generateUserDocument = async(user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName } = user;
        try {
            await userRef.set({
                displayName,
                email,
                ...additionalData
                
            });
        } catch (error) {
            console.error("Error creating user document", error)
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
  
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
}


// export default fireBaseApp;
