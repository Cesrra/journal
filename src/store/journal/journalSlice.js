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
            state.isSaving = true
        },
        updatedNote: ( state, { payload } ) => {
            state.isSaving = false
            
            state.notes = state.notes.map( note => {
                if( note.id === payload.id ) {
                    return payload
                }
                return note
            })
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
    updatedNote, 
    deleteNoteById 
} = journalSlice.actions