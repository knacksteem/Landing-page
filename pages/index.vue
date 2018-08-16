<template>
  <div>
    <Navbar />
    <Header />

    <!-- The basics are -->
    <div class="section bg-white">
      <div class="container">
        <h1 class="text-center">The basics are</h1>
        <p class="text-center mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
        <div class="row">
          <div class="col-sm-4 item">
            <img src="/img/basics-1.png" class="mb-3" />
            <h3>Share your talent, culture, DIVs, and passion with the community.</h3>
            <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div class="col-sm-4 item">
            <img src="/img/basics-2.png" class="mb-3" />
            <h3>Get your crafts curated by people who show interest in what you share.</h3>
            <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div class="col-sm-4 item">
            <img src="/img/basics-3.png" class="mb-3" />
            <h3>Earn reward in steem.</h3>
            <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- We value your creative talents -->
    <div class="section">
      <div class="container">
        <h1 class="text-center mb-5">We value your creative talents</h1>
        <p class="text-center mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
        <div class="row">
          <div class="col-sm-4 item">
            <img src="/img/icon-heart.png" class="mb-3" />
            <h3>We value the things you are passionate about.</h3>
            <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div class="col-sm-4 item">
            <img src="/img/icon-lightbulb.png" class="mb-3" />
            <h3>Invest your time in your passion.</h3>
            <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div class="col-sm-4 item">
            <img src="/img/icon-people.png" class="mb-3" />
            <h3>Let people know what you have to offer.</h3>
            <p class="mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Who can contribute? What is steem? -->
    <div class="section bg-white contribute">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-lg-2">
            <img src="/img/contribute.png" class="img-fluid mb-5 mb-lg-0" alt="" />
          </div>
          <div class="col-lg-6 d-flex flex-column order-lg-1">
            <h1 class="mb-4">Who can contribute?</h1>
            <div class="d-flex">
              <div class="bluedot"><div></div></div>
              <div>Are you creative? And passionate about it? <b>KnackSteem is for you.</b></div>
            </div>
            <div class="d-flex">
              <div class="bluedot"><div></div></div>
              <div>Anyone/everyone from all over the world can share their creativity (culture, talents, DIYs and so many more).</div>
            </div>
            <div class="mt-3">
              <a href="#" class="btn btn-lg btn-primary mt-3">Read more</a>
            </div>
          </div>
        </div>

        <div class="row mt-5 pt-5">
          <div class="col-lg-6">
            <img src="/img/whatissteem.png" class="img-fluid mb-5 mb-lg-0" alt="" />
          </div>
          <div class="col-lg-6 d-flex flex-column">
            <h1 class="mb-4">What is steem?</h1>
            <p>
              To pay the contributor’s rewards, Knacksteem will utilize the Steem blockchain. Which means the money generated would be in the form of a cryptocurrency called STEEM which is the token of the steem blockchain and this is done through community voting. Nobody has to pay for the rewards directly. They are generated and distributed using an algorithm called Proof-of-Brain, which encourages people to create and curate quality content.
            </p>
            <div class="mt-3">
              <a href="#" class="btn btn-lg btn-primary mt-3">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

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
