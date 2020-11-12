<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">dariannocera.</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav pull-right">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Skills</a>
      <a class="nav-item nav-link" href="#">Projects</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
<Hero/>
</header>
</template>

<script>

import Hero from './Hero.vue'

export default {
  name: 'Header',
  components: {
    Hero
  },
  props: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import "../styles/css/style.css";

</style>
