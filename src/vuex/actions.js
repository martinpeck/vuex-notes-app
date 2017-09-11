import * as types from './mutation-types'

const actions = {    
    addNote (context) {
        context.commit(types.ADD_NOTE)
    },
    
    editNote (context, new_text) {
        context.commit(types.EDIT_NOTE, new_text)
    },
    
    deleteNote (context) {
        context.commit(types.DELETE_NOTE)
    },
      
    updateActiveNote (context, note) {
        context.commit(types.SET_ACTIVE_NOTE, note)
    },
      
    toggleFavourite (context) {
        context.commit(types.TOGGLE_FAVOURITE)
    }
}

export default actions