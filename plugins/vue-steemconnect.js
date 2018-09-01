import Vue from 'vue'
import VueSteemConnect from 'vue-steemconnect'

Vue.use(VueSteemConnect, {
  app: 'knacksteem.app',
  callbackURL: process.env.scRedirectUrl || 'https://knacksteem.org/callback'
})
