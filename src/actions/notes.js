import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { doc, updateDoc, collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';

export const startNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    console.log(uid);

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await addDoc(
      collection(db, `${uid}`, "journal/notes"),
      newNote
    );

    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async(dispatch,getState) => {
    const {uid} = getState().auth
 
    if(!note.url){
      delete note.url
    }
 
    const noteToFirestore = {...note}
    delete noteToFirestore.id
    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
    await updateDoc(noteRef,noteToFirestore);
    dispatch(refreshNotes(note.id, noteToFirestore));
    Swal.fire('Saved', note.title, 'success');
  }
}

export const refreshNotes = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})

export const startUploading = (file) => {
  return async(dispatch, getState) => {

    const {active:activeNote} = getState().notes;

    const fileUrl = await fileUpload(file);
    console.log(fileUrl);
    
  }
}