import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc, getDoc } from "firebase/firestore";

// Fetch items from Firestore
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
    throw error; // Throw the error instead of returning an empty array
  }
};

// Add item to Firestore
export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    
    const docRef = await addDoc(itemsRef, item);
    
    return docRef.id; 
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error; // Throw the error instead of returning null
  }
};

// Delete item from Firestore
export const deleteItem = async (userId, itemId) => {
  try {
    const itemRef = doc(db, `users/${userId}/items/${itemId}`);
    const docSnap = await getDoc(itemRef);
    
    if (docSnap.exists()) {
      console.log("Item exists, proceeding with deletion:", itemId);
      await deleteDoc(itemRef);  
      console.log("Item successfully deleted:", itemId);
      return true;
    } else {
      console.log("No such document exists:", itemId);
      return false;
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error; // Throw the error instead of returning false
  }
};