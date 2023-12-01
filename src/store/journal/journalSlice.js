import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'Journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activedNote: null,

    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true
        },
        addNewEmptyNote: ( state, { payload } ) => {
            state.notes.push(payload)
            state.isSaving = false
        },
        setActiveNote: ( state, { payload } ) => {
            state.activedNote = payload
            state.messageSaved = ''
        },
        setNotes: ( state, { payload } ) => {
            state.notes = payload
        },
        setSaving: ( state ) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updatedNote: ( state, { payload } ) => {
            state.isSaving = false
            
            state.notes = state.notes.map( note => {
                if( note.id === payload.id ) {
                    return payload
                }
                return note
            })
            state.messageSaved = `${ payload.title }, actualizada correctamente`
        },
        setPhotosUrlToActiveNote: ( state, { payload } ) => {
            state.activedNote.imageUrls = [...state.activedNote.imageUrls, ...payload]
            state.isSaving = false
            state.messageSaved = ''
        },
        clearNotesLogout: ( state ) => {
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.activedNote = null
        },
        deleteByNoteId: ( state, { payload }) => {
            state.notes = state.notes.filter(note => note.id != payload)
            state.activedNote = null
        }
    },
})

export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote, 
    setNotes, 
    setSaving, 
    updatedNote, 
    setPhotosUrlToActiveNote,
    clearNotesLogout,
    deleteByNoteId,
} = journalSlice.actions