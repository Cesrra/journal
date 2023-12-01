import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase"
import { addNewEmptyNote, deleteByNoteId, savingNewNote, setActiveNote, setNotes, setPhotosUrlToActiveNote, setSaving, updatedNote } from "./"
import { fileUpload, loadNotes } from "../../helpers"

/*
export const  startNewNote = () => {
    return async ( dispatch ) => {

    }
}
*/

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth
        const notes = await loadNotes( uid )
        dispatch( setNotes( notes ) )
    }
}

export const  startNewNote = () => {
    return async ( dispatch, getState ) => {
        dispatch( savingNewNote() )
        const { uid } = getState().auth
        const newNote = {
            title: 'Example',
            body: 'Common mistake that I was meked it is do not belive in me',
            date: new Date().getTime(),
            imageUrls: []
        }
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) )
        await setDoc( newDoc, newNote )
        newNote.id = newDoc.id

        dispatch( addNewEmptyNote( newNote ) )
        dispatch( setActiveNote( newNote ) )

    }
}

export const  startUpdateNote = () => {
    return async ( dispatch, getState ) => {
        dispatch( setSaving() )

        const { uid } = getState().auth
        const { activedNote } = getState().journal
        
        const noteToFireStore = { ...activedNote }
        delete noteToFireStore.id

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${activedNote.id}` )
        await setDoc( docRef, noteToFireStore, { merge: true } )

        dispatch( updatedNote( activedNote ) )
    }
}

export const startUpladingFiles = ( files = [] ) => {
    return async ( dispatch ) => {
        dispatch( setSaving() )
        // const secure_url = fileUpload( files[0])
        const filesUploadPromises = []
        for( const file of files ) {
            filesUploadPromises.push( fileUpload( file ) )
        }

        const photosUrl = await Promise.all( filesUploadPromises )
        dispatch( setPhotosUrlToActiveNote( photosUrl ) )
    }       
}

export const startDeletingActiveNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth
        const { activedNote } = getState().journal
        
        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ activedNote.id }`)
        await deleteDoc( docRef )

        dispatch( deleteByNoteId( activedNote.id ) )
    }
}