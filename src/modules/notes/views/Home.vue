<template>
  <notes-wrapper-page>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="i in 10" :key="i">
          <dashboard-notebook-overview :misc="i === 3"/>
        </v-col>
      </v-row>
    </v-container>
  </notes-wrapper-page>
</template>

<script lang="ts">
import Vue from 'vue'
import NotesWrapperPage from '../components/NotesWrapperPage.vue';
import DashboardNotebookOverview from '../components/DashboardNotebookOverview.vue';

export default Vue.extend({
  name: 'NotesHome',
  components: {
    DashboardNotebookOverview,
    NotesWrapperPage
  },
  computed: {
  }
})
</script>