import Vue from 'vue'
import VueSteemConnect from 'vue-steemconnect'

Vue.use(VueSteemConnect, {
  app: 'knacksteem.app',
  callbackURL: process.env.scRedirectUrl || 'https://knacksteem.org/callback',
  scope: ['login', 'custom_json', 'claim_reward_balance', 'vote', 'comment', 'comment_options', 'delete_comment']
})
