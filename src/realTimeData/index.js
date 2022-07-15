import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


export const firebaseConfig = {
    apiKey: "AIzaSyAg63iSZZcjzDNvD7HfPrYv-NiBkTsK29c",
    authDomain: "contact-manager-62af7.firebaseapp.com",
    databaseURL: "https://contact-manager-62af7-default-rtdb.firebaseio.com",
    projectId: "contact-manager-62af7",
    storageBucket: "contact-manager-62af7.appspot.com",
    messagingSenderId: "88027637943",
    appId: "1:88027637943:web:ebe43161a0dd2836940532",
    measurementId: "G-ZLG2ELV6F9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
/*
// Get a list of cities from your database
async function getPeople(db) {
  const peopleCol = collection(db, 'people');
  const peopleSnapshot = await getDocs(peopleCol);
  const peopleList = peopleSnapshot.docs.map(doc => {
    return doc.data();
  });
  return peopleList;
}

function getFirebaseData() {
    let data = getPeople(db).then(function(item) {
      //console.log(item);
      return item;
    });
    return data;
}

export default getFirebaseData;*/
