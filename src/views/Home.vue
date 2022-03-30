<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Functionality</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card to="/notes">
          <v-card-title>
            Notes
          </v-card-title>
          <v-card-text>
            This is a simple note taking section. We're likely to use Quill.JS, but may consider using something for markdown. 
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card to="/credentials">
          <v-card-title>
            Credentials
          </v-card-title>
          <v-card-text>
            This is a credential manager. It should all be 100% built from scratch, with exception of maybe some note taking functionality
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',
    mounted() {
      this.$store.commit('setLeftNavigation', {items: []});
      this.$store.commit('setMenu', {items: []});
    },
    components: {
    },
  })
</script>
