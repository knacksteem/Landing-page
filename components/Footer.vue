<template>
  <div class="footer py-3 py-lg-0">
    <div class="container d-flex flex-column flex-lg-row align-items-center">
      <a href="#" class="d-inline-block">
        <img src="/img/logo.png" alt="KnackSteem" />
      </a>

      <span class="text-muted d-inline-block ml-lg-3">All rights reserved.</span>

      <ul class="nav ml-lg-auto flex-column flex-sm-row text-center">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
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
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import "../assets/css/variables"

  .footer
    background: $secondary-bg
    .container
      min-height: 60px
      .nav
        .nav-link
          color: #2a2a2a
          padding-left: .5rem
          padding-right: .5rem
        .active
          > .nav-link
            color: $brand-color
            font-weight: bold

  @media (min-width: 992px)
    .footer
      .nav
        .nav-link
          padding-left: .8rem
          padding-right: .8rem
</style>
