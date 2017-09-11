<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        
        <!-- Favourites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favourites'"
            :class="{active: show === 'favourites'}">
            Favorites
          </button>
        </div>
      </div>

    </div>

    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<<script>

import { mapState, mapActions, mapGetters } from "vuex"

export default {

    data () {
        return {
            show: 'all'
        }
    },

    computed : {
        
        ...mapState([            
            "activeNote"
        ]),

        ...mapGetters([
            'favouriteNotes',
            'allNotes',
            'totalNotes'
        ]),

        filteredNotes() {
            if (this.show === 'all'){                 
                return this.allNotes
            } else if (this.show === 'favourites') {
                return this.favouriteNotes
            }
        }
    },

    methods : {
        ...mapActions([
            'updateActiveNote'
        ])

    }
  
}
</script>
