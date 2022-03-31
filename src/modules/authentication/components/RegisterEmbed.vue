<template>
  <v-sheet>
    <div :style="{'max-width': maxWidth == null ? 'auto' : `${maxWidth}px`}">
      <v-stepper v-model="step" elevation="0" :outlined="border">
        <v-stepper-header>
          <v-stepper-step :completed="step > 1" step="1">
            Basic Info
          </v-stepper-step>
          <v-divider />
          <v-stepper-step :completed="step > 2" step="2">
            Contact Info
          </v-stepper-step>
          <v-divider />
          <v-stepper-step :completed="step > 3" step="3">
            Finish
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form class="pa-2">
              <v-row dense>
                <v-col cols="12">
                  <h3>Basic Information</h3>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Username" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Display name" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Email" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Confirm Email" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="justify-left">
                  <v-btn @click="goBack" v-show="showBack" :disabled="backDisabled">
                    {{backText}}
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex justify-end">
                    <v-btn @click="goNext" v-show="showNext" :disabled="nextDisabled">
                      {{nextText}}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-form class="pa-2">
              <v-row dense>
                <v-col cols="12">
                  <h3>Core Contact Information</h3>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="First name" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Last name" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Primary Phone" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Secondary Phone" />
                </v-col>
              </v-row>
              <v-row dense v-if="requireAddress">
                <v-col cols="12">
                  <h3>Primary Address (optional)</h3>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Street address" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Line 2 address" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="City" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Postal code" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="State" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Country" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="justify-left">
                  <v-btn @click="goBack" v-show="showBack" :disabled="backDisabled">
                    {{backText}}
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex justify-end">
                    <v-btn @click="goNext" v-show="showNext" :disabled="nextDisabled">
                      {{nextText}}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-form class="pa-2">
              <v-row dense>
                <v-col cols="12">
                  <h3>Set a password</h3>
                  <v-subheader class="pa-0">
                    We have the following password requirements:
                  </v-subheader>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Password" />
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Confirm Password" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="justify-left">
                  <v-btn @click="goBack" v-show="showBack" :disabled="backDisabled">
                    {{backText}}
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex justify-end">
                    <v-btn @click="goNext" v-show="showNext" :disabled="nextDisabled">
                      {{nextText}}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-form class="pa-2">
              <v-row dense>
                <v-col cols="12">
                  Thank you for creating an account with us! As part of the sign up process we will send you an email momentarily containing a verification code. To complete your account activiation please enter the code here, or follow the link in the email. Please note that your account will not be useable until you activate it.
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Activation Code" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="justify-left">
                  <v-btn @click="goBack" v-show="showBack" :disabled="backDisabled">
                    {{backText}}
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex justify-end">
                    <v-btn @click="goNext" v-show="showNext" :disabled="nextDisabled">
                      {{nextText}}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-form class="pa-2">
              <v-row dense>
                <v-col cols="12">
                  Thank you for activating your account with us! We hope you enjoy using our product.
                </v-col>
                <v-col cols="6">
                  Placeholder for joining an organization with invite code + prompt for 2fa
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="justify-left">
                  <v-btn @click="goBack" v-show="showBack" :disabled="backDisabled">
                    {{backText}}
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex justify-end">
                    <v-btn @click="goNext" v-show="showNext" :disabled="nextDisabled">
                      {{nextText}}
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RegisterEmbed',
  computed: {
    showBack () {
      if (this.step === 1) {
        return false;
      }
      return true;
    },
    showNext () {
      return true;
    },

    backText () {
      return 'Back'
    },
    nextText () {
      if (this.step === 3) {
        return 'Submit'
      } else if (this.step === 4) {
        return 'Activate'
      }
      return 'Next'
    },

    nextDisabled () {
      return false
    },
    backDisabled () {
      if (this.step === 4) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      step: 1,
      requireAddress: false,
    }
  },
  methods: {
    goNext () {
      this.step = this.step + 1;
    },
    goBack () {
      this.step = this.step - 1;
    },
  },
  props: {
    border: {
      type: Boolean,
      default: true,
      required: false,
    },
    maxWidth: {
      type: String,
      default: null,
      required: false,
    },
  }
})
</script>
<style scoped>
.embed-wrapper {
  padding: 20px;
}
.v-stepper .v-stepper__header {
  box-shadow: none;
}
</style>