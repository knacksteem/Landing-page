<template>
  <div class="header">
    <div class="container py-5 d-flex align-items-center">
      <div class="row">
        <div class="col col-md-8">
          <h1 class="text-white font-weight-bold">Invest in your creativity</h1>
          <p class="text-white">
            Expose your creative talents directly to your audience and get rewarded via a decentralized voting based system (steem)
          </p>
          <a href="#" class="btn btn-lg btn-white mt-3">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import "../assets/css/variables"

  .header
    background-color: $brand-color
    > .container
      h1
        font-size: 2.8rem

  @media (min-width: 992px)
    .header
      .container
        min-height: 620px
        // background image only on large screens
        // otherwise we have white text on white background
        background-image: url('/img/header.png')
        background-position: right
        background-size: contain
        background-repeat: no-repeat
</style>
