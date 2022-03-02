import { initializeApp } from "firebase/app";
import firebaseconfig from "./config.js"
import { getFirestore, collection, addDoc, query, getDocs, setDoc, doc, deleteDoc} from 'firebase/firestore'

initializeApp(firebaseconfig)

const db = getFirestore();

const col = "products"

const addData = async(data, callback) => {
  console.log("entrando addData", data)
  try {
    const docRef = await addDoc(collection(db, col), data);
    console.log("Document written with ID: ", docRef.id);
    callback();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document");
  }
}

const showData = async (callbackData) => {
  const q = query(collection(db, col));
  try {
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
      let document = doc.data()
      document.id = doc.id
      data.push(document)
    });
    console.log(data);
    callbackData(data);
  } catch (e) {
    console.log("Error", e);
  }
};

const updateData = async (data) => {
  try {
    await setDoc(doc(db, col, data.id), data);
  } catch (e) {
    console.log("Error", e);
    alert("Error agregando documento");
  }
};

const deleteData = async (id) => {
  try {
    await deleteDoc(doc(db, col, id));
  } catch (e) {
    console.log("Error", e);
  }
};
export { addData, showData, updateData, deleteData }