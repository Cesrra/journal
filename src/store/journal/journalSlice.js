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
        },
        setNotes: ( state, { payload } ) => {
            state.notes = payload
        },
        setSaving: ( state ) => {

        },
        updateNote: ( state, action ) => {

        },
        deleteNoteById: ( state, action ) => {

        },        
    },
})

export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
    deleteNoteById 
} = journalSlice.actions