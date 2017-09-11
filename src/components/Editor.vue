<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="updateNote"
      class="form-control">
    </textarea>
  </div>
</template>

<<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed : {
    ...mapGetters([
      'activeNoteText'
    ])
  },

  methods: {
    ...mapActions([
      'editNote'
    ]),
    
    updateNote (e) {
      var newNoteText = e.target.value
      this.editNote(newNoteText)
    }
  }
}
</script>
