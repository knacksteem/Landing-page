import Vue from 'vue'
import VueSteemConnect from 'vue-steemconnect'

Vue.use(VueSteemConnect, {
  app: 'mkt.test',
  callbackURL: process.env.scRedirectUrl || 'http://localhost:3000/auth'
})
