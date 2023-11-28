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