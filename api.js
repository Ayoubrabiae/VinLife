import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxJ2q1-7C6xGhiPW31iM3S-5A7tt2IZc8",
  authDomain: "vinelife-2c8e5.firebaseapp.com",
  projectId: "vinelife-2c8e5",
  storageBucket: "vinelife-2c8e5.appspot.com",
  messagingSenderId: "677090546393",
  appId: "1:677090546393:web:cd262d57badc5437b024c8",
  measurementId: "G-42M8WD8C4Z",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);

// Refactoring the fetching functions
const vansCollection = collection(db, "vans");
const usersCollection = collection(db, "users");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollection);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  const getDocRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(getDocRef);

  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

// Hosting Vans
export async function hostingVan(userId, vineId) {
  await addDoc(usersCollection, { [userId]: vineId });
}

// Get Host Vans
export async function getHostVans() {
  const q = query(vansCollection, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
