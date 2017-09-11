const getters = {
    totalNotes: state => {
        return state.notes.length
    },

    favouriteNotes: state => {
        return state.notes.filter(note => note.favourite)
    },

    allNotes: state => {
        return state.notes
    },

    activeNoteText: state => {
        return state.activeNote.text
    }
}

export default getters