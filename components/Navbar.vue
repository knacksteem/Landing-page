<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img src="/img/logo.png" alt="KnackSteem" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-content">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-collapse-content">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">How it works?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contribute</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <form class="form-inline ml-auto" v-if="!user">
          <a :href="$steemconnect.getLoginURL()" class="btn btn-outline-secondary mr-2">Login</a>
          <a href="https://signup.steemit.com/?ref=knacksteem.org" target="_blank" class="btn btn-primary">Sign up</a>
        </form>
        <ul class="navbar-nav ml-auto user-menu" v-else>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle py-0" href="#" data-toggle="dropdown">
              <div class="navbar-avatar" :style="'background-image: url(https://steemitimages.com/u/' + user.account.name + '/avatar)'"></div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="#" @click.prevent="$store.dispatch('logout')">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/css/variables"

  .navbar-light
    padding-top: .2rem
    padding-bottom: .2rem
    .navbar-nav
      .nav-link
        color: #2a2a2a
      .active
        > .nav-link
          color: $brand-color
          font-weight: bold
    .user-menu
      .navbar-avatar
        border: solid 1px #ddd
        border-radius: 50%
        width: 38px
        height: 38px
        background-position: center
        background-size: cover
        display: inline-block
      .dropdown-toggle
        &::after
          display: none
    .navbar-toggler
      border: none !important
      outline: none

  @media (min-width: 992px)
    .navbar-light
      .navbar-nav
        .nav-link
          padding-left: .8rem
          padding-right: .8rem
</style>
