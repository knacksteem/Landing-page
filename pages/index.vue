<template>
  <div>
    <Navbar />
    <Header />
    <Footer />



  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Navbar,
      Header,
      Footer
    },
    mounted () {
      // load steem account data via steemconnect
      this.$store.dispatch('login')
    }
  }
</script>
