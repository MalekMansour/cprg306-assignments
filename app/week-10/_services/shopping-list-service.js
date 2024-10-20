import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,      // Document ID
        ...doc.data(),   // Document data
      });
    });
    
    return items; 
  } catch (error) {
    console.error("Error fetching items: ", error);
    return []; 
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    
    const docRef = await addDoc(itemsRef, item);
    
    return docRef.id; 
  } catch (error) {
    console.error("Error adding item: ", error);
    return null; 
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const itemRef = doc(db, `users/${userId}/items/${itemId}`);
    
    // Delete the document
    await deleteDoc(itemRef);
    
    return true; 
  } catch (error) {
    console.error("Error deleting item: ", error);
    return false; 
  }
};
