import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase"

export const loadNotes = async ( uid ) => {
    if ( !uid ) throw new Error('El Uid del usuario no es válido')

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes`)
    const docs = await getDocs( collectionRef )
    const notes = []
    
    docs.forEach(note => {
        notes.push({
            id: note?.id,
            ...note?.data()
        })
    })
    return notes
}