import React, { useContext } from 'react';
import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getMessages = async () => {
    const query = db.collection('messages').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const messages = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return messages;
  };

  const getBookmarks = async () => {
    const query = db.collection('bookmarks').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const bookmarks = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return bookmarks;
  };

  const getBookmark = async (id) => {
    const docRef = await db.collection('bookmarks').doc(id);
    const docSnapshot = await docRef.get();
    return {
      uid: docSnapshot.id,
      ...docSnapshot.data()
    };
  };

  const getPokemons = async () => {
    const query = db.collection('pokemons').orderBy('name', 'asc');
    const querySnapshot = await query.get();
    const pokemons = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return pokemons;
  };

  const addBookmark = async (bookmark) => {
    const ref = db.collection('bookmarks');
    const docRef = await ref.add(bookmark);
    return docRef;
  };

  const getMusic = async () => {
    const query = db.collection('music').orderBy('name', 'asc');
    const querySnapshot = await query.get();
    const music = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return music;
  };

  const getTheArtist = async (id) => {
    const docRef = await db.collection('music').doc(id);
    const docSnapshot = await docRef.get();
    return {
      uid: docSnapshot.id,
      ...docSnapshot.data()
    };
  };
  
  return (
    <FirestoreContext.Provider value={{addBookmark, getTheArtist,getMusic, getBookmarks, getBookmark, getMessages, getPokemons}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};