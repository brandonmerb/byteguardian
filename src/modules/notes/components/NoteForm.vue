<template>
  <v-sheet class="d-flex grow">
    <markdown-editor />
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