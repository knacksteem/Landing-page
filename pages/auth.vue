<template>
  <section class="container text-center">
    <h1>You will be redirected in a moment...</h1>
  </section>
</template>

<script>
  export default {
    async mounted () {
      // get access token from url and save in local storage
      let accessToken = this.$route.query['access_token']
      if (accessToken) {
        localStorage.setItem('access_token', accessToken)
      }
      // load steem account data via steemconnect and redirect to homepage
      await this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
</script>
