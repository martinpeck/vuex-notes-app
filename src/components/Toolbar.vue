<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavourite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favourite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<<script>

import { mapActions, mapState } from "vuex"

export default {
    methods: {
        ...mapActions([
            "addNote",
            "deleteNote",
            "toggleFavourite"
        ])
    },

    computed: {
        ...mapState([
            "activeNote"
        ])
    }
}
</script>
