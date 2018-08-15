<template>
  <div>
    <Navbar />
    <Header />
    <section class="container">
      <h1>Knacksteem</h1>
    </section>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import Header from '~/components/Header'

  export default {
    components: {
      Navbar,
      Header
    },
    mounted () {
      // load steem account data via steemconnect
      this.$store.dispatch('login')
    }
  }
</script>
