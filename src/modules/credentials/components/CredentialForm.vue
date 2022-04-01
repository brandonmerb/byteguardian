<template>
  <v-sheet class="pa-2 d-flex grow" max-width="800">
    <v-form class="d-flex grow">
      <v-row>
        <v-col cols="12">
          {{customModel.itemId == null ? 'creating' : 'editing'}}
        </v-col>
        <v-col cols="12">
          <v-text-field label="Credential name" />
        </v-col>
      </v-row>
    </v-form>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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