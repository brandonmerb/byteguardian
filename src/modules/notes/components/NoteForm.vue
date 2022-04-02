<template>
  <v-sheet class="pa-2 d-flex grow">
    <v-form class="d-flex grow">
      <v-row>
        <v-col cols="12">
          {{customModel.itemId == null ? 'creating' : 'editing'}}
        </v-col>
        <v-col cols="12">
          <markdown-editor />
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
import MarkdownEditor from '../../markdown/components/MarkdownEditor.vue';

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
  },
})
</script>