<template>
  <div class="overview-container">
    <div class="overview-nav">
      <div v-for="(tab, idx) in tabs"
          :key="tab.name"
          :class="{'overview-nav-tab active': selectedTab === idx, 'overview-nav-tab': selectedTab !== idx}"
          @click="selectTab(idx)"
      >
        <v-icon v-if="selectedTab === idx" color="primary"> 
          {{tab.icon}}
        </v-icon>
        <v-icon v-else> 
          {{tab.icon}}
        </v-icon>
      </div>
      <div :class="{'overview-nav-tab active': selectedTab === 3, 'overview-nav-tab': selectedTab !== 3, 'hidden': !misc}"
          @click="selectTab(3)"
      >
        <v-icon>
          mdi-dots-horizontal
        </v-icon>
      </div>
    </div>
    <div class="overview-pane">
      <div class="page-info-pane" v-if="selectedTab === 0">
        <div class="note-info-title title">
          <div class="heading">
            <div class="heading-title">
              Notebook title
            </div>
          </div>
          <div class="title-top-functionality">
            <v-icon>
              mdi-eye
            </v-icon>
            <v-icon>
              mdi-pencil
            </v-icon>
            <v-icon>
              mdi-share
            </v-icon>
            <v-icon>
              mdi-delete
            </v-icon>
          </div>
        </div>
        <div class="heading-subtitle">
          Last edit: 1 hour ago
        </div>
        <div class="note-info-body">
          <div class="note-info-description">
            <generic-preview-component>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra tristique nulla, sit amet volutpat ante imperdiet ut. Ut fringilla consectetur aliquet. Donec fringilla aliquet elit sed maximus. In vitae magna nulla. In hac habitasse platea dictumst. Duis turpis odio, ornare quis risus in, suscipit pulvinar nibh. Quisque eu sapien ultricies, posuere purus eu, ultricies magna.
            </generic-preview-component>
          </div>
          <div class="note-info-tags">
            <v-chip>
              Tag 1
            </v-chip>
            <v-chip color="yellow" close>
              Tag 2
            </v-chip>
            <v-chip>
              Tag custom something
            </v-chip>
            <v-chip color="red">
              Tag random
            </v-chip>
            <v-chip color="green">
              not always named tag
            </v-chip>
          </div>
        </div>
      </div>
      <div class="content-pane padded-pane" v-if="selectedTab !== 0">
        This is some information on our page
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import GenericPreviewComponent from '@/components/GenericPreviewComponent.vue';
import Vue from 'vue'
export default Vue.extend({
  components: { GenericPreviewComponent },
  data: () => {
    return {
      selectedTab: 0,
      tabs: [
        {name: 'info', icon: 'mdi-information-outline'},
        {name: 'page 1', icon: 'mdi-numeric-1-box'},
        {name: 'page 2', icon: 'mdi-numeric-2-box'},
        {name: 'page 3', icon: 'mdi-numeric-3-box'},
      ]
    }
  },
  methods: {
    selectTab(idx: number) {
      this.selectedTab = idx;
    }
  },
  props: {
    misc: {
      type: Boolean,
      default: false,
    }
  }
})
</script>
<style scoped>
.overview-container {
  display: flex;
}
.overview-nav {
  width: 50px;
}
.overview-nav .overview-nav-tab {
  border: 1px solid #CCC;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  align-content: center;
  position: relative;
  left: 1px;
}
.overview-nav .overview-nav-tab.active{
  border-right: solid #fff;
}
.overview-nav .overview-nav-tab:not(:first-of-type) {
  border-top-left-radius: 0px;
}
.overview-pane {
  border: 1px solid #CCC;
  flex-grow: 1;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.note-info-title {
  display: flex;
}
.note-info-title .heading {
  flex-grow: 1;
  margin-left: 10px;
  margin-top: 5px;
}

.heading-subtitle {
  font-size: 14px;
  margin-top: 0px;
  color: #666;
  padding-left: 10px;
  padding-right: 10px;
}

.title-top-functionality {
  flex-shrink: 1;
  flex-grow: 0;
  font-size: 12px;
  border: 1px solid #ccc;
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.note-info-tags {
  padding-top: 5px;
}
.note-info-tags .v-chip {
  margin: 3px;
}

.note-info-body {
  padding: 10px;
}

.padded-pane {
  padding: 5px;
}

.hidden {
  display: none;
}
</style>