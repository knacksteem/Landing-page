<template>
  <section class="container">
    <h1>Knacksteem</h1>
    <h2 v-if="$store.state.steemconnect.user">
      Hello {{ $store.state.steemconnect.user.account.name }}!
      <a href="#" @click.prevent="$store.dispatch('logout')">Logout</a>
    </h2>
    <a :href="$steemconnect.getLoginURL()" v-else>Login</a>
  </section>
</template>

<script>
  export default {
    mounted () {
      // load steem account data via steemconnect
      this.$store.dispatch('login')
    }
  }
</script>
