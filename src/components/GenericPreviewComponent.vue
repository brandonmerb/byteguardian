<template>
  <div ref="dataView" :class="{'collapsed': !expanded}">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {},
  data() {
    return {
      expanded: false,
    };
  },
  props: {},
});
</script>
<style scoped>
.collapsed {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 100px;
}
</style>