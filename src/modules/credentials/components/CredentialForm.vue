<template>
  <v-sheet class="pa-2 d-flex grow" max-width="800">
    <v-form>
      <v-card class="credential-form">
        <v-card-text>
          <v-row>
            <v-col cols="12">
              {{customModel.itemId == null ? 'creating' : 'editing'}}
            </v-col>
            <v-col cols="12">
              <v-text-field label="Display name" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Username" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Target's name" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Target URL(s)" />
            </v-col>
            <v-col cols="12">
              <markdown-editor />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-form>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
import MarkdownEditor from '../../markdown/components/MarkdownEditor.vue'

export default Vue.extend({
  components: {
    MarkdownEditor
  },
  props: {
    customModel: {
      type: Object,
      required: false,
    }
  },
  mounted() {
    console.log(this.customModel);
  }
})
</script>
<style scoped>
.credential-form {
  background-color: var(--v-secondary-darken1);
}
</style>