<template>
  <div class="d-flex flex-column grow">
    <div class="markdown-toolbar">
      <div class="markdown-option-group">
        <v-icon @click="doNothing">
          mdi-format-align-left
        </v-icon>
        <v-icon @click="doNothing">
          mdi-format-align-center
        </v-icon>
        <v-icon @click="doNothing">
          mdi-format-align-right
        </v-icon>
      </div>
      <div class="markdown-option-group">
        <v-icon @click="doNothing">
          mdi-format-bold
        </v-icon>
        <v-icon @click="doNothing">
          mdi-format-italic
        </v-icon>
        <v-icon @click="doNothing">
          mdi-format-underline
        </v-icon>
      </div>
      <div class="markdown-option-group">
        <v-icon @click="doNothing">
          mdi-format-list-bulleted
        </v-icon>
        <v-icon @click="doNothing">
          mdi-format-list-numbered
        </v-icon>
      </div>
      <div class="markdown-option-group">
        <v-icon @click="doNothing">
          mdi-link
        </v-icon>
        <v-icon @click="doNothing">
          mdi-paperclip
        </v-icon>
      </div>
      <!--<div class="markdown-option-group">
        <v-select label="Headings" dense hide-details :items="['none', 'h1', 'h2', 'h3', 'h4']" value="none">

        </v-select>
      </div>-->
    </div>
    <div class="pa-2 grow markdown-text" contenteditable="">
    </div>
  </div>

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    doNothing() {
      console.log('gotcha')
    }
  }
})
</script>
<style scoped>
.markdown-toolbar {
  background-color: var(--v-primary-base);
  padding-top: 8px;
  padding-bottom: 8px;
}
.markdown-option-group {
  display: inline;
}
.markdown-option-group{
  margin-left: 8px;
}
.markdown-option-group .v-select {
  max-width: 300px;
}

.markdown-text {
  min-height: 200px;
  border: 1px solid var(--v-secondary-base);
}
</style>
