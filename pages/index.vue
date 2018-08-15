<template>
  <div>
    <Navbar />
    <section class="container">
      <h1>Knacksteem</h1>
    </section>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'

  export default {
    components: {
      Navbar
    },
    mounted () {
      // load steem account data via steemconnect
      this.$store.dispatch('login')
    }
  }
</script>
