import * as types from './mutation-types'

const mutations = {
    [types.ADD_NOTE] (state) {
        const newNote = {
            text: 'New note',
            favourite: false,
        }
    
        state.notes.push(newNote)
        state.activeNote = newNote
    },
    
    [types.EDIT_NOTE] (state, text) {
        state.activeNote.text = text
    },
    
    [types.DELETE_NOTE] (state) {
        state.notes.splice(state.notes.indexOf(state.activeNote),1)
        state.activeNote = state.notes[0]
    },
    
    [types.TOGGLE_FAVOURITE] (state) {
        state.activeNote.favourite = !state.activeNote.favourite
    },
    
    [types.SET_ACTIVE_NOTE] (state, note) {
        state.activeNote = note
    }
}

export default mutations