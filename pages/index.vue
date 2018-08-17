<template>
  <div>
    <Navbar />

    <Header id="top" />

    <!-- The basics are -->
    <div class="section bg-white" id="how-it-works">
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

    <!-- Categories -->
    <div class="section">
      <div class="container">
        <h1 class="text-center mb-5">Categories</h1>
        <p class="text-center mb-5">Varieties of categories and sub-cats which you can contribute to, that best suit your area of expertise.</p>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>DIY</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>ART</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>ONE ALTRUISM</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>FASHION</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>TECH TREND</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>MUSIC</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>JOKE and HUMOR</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-4">
              <h3>GAMING</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Team / Sponsors -->
    <div class="section bg-white" id="team">
      <div class="container">
        <h1 class="text-center">Our Team</h1>
        <p class="text-center mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/ms10398/avatar')"></div>
              <h3>ms10398 (AKA Rebel)</h3>
              <p>Dev instructo</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/radudangratian/avatar')"></div>
              <h3>radudangratian</h3>
              <p>custodian/graphics designer</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/tykee/avatar')"></div>
              <h3>tykee</h3>
              <p>supervisor</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/ckole/avatar')"></div>
              <h3>ckole</h3>
              <p>marven</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/darewealth/avatar')"></div>
              <h3>darewealth</h3>
              <p>marven</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/luschn/avatar')"></div>
              <h3>luschn</h3>
              <p>Front-end dev</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/jaysermendez/avatar')"></div>
              <h3>jaysermendez</h3>
              <p>Back-end dev</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/outwork/avatar')"></div>
              <h3>outwork</h3>
              <p>UI/UX design</p>
            </div>
          </div>
        </div>

        <h1 class="text-center mt-5">Sponsors</h1>
        <p class="text-center mb-5">Our sponsors (delegators) are eligible for 12% of the initial 15% beneficiary reward. The reward is directly proportional to the share of all Steem Power (SP) delegated.</p>
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/ms10398/avatar')"></div>
              <h3>ms10398 (AKA Rebel)</h3>
              <p>Dev instructo</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/radudangratian/avatar')"></div>
              <h3>radudangratian</h3>
              <p>custodian/graphics designer</p>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card flat mb-4">
              <div class="avatar" style="background-image: url('https://steemitimages.com/u/tykee/avatar')"></div>
              <h3>tykee</h3>
              <p>supervisor</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column flex-sm-row">
          <span>Do you like what we do?</span>
          <a href="#" class="btn btn-lg btn-primary mt-3 mt-sm-0 ml-sm-3">Become a sponsor</a>
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
    head: {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-target': '#navbar',
        'data-offset': '100'
      }
    },
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
