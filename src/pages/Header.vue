<template>
<header class="bg">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">dariannocera.</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#about">About</a>
      <a class="nav-item nav-link" href="#skills">Skills</a>
      <a class="nav-item nav-link" href="#projects">Projects</a>
      <a class="nav-item nav-link" href="#contact">Contact</a>
    </div>
  </div>
</nav>
<Hero/>
</header>
</template>

<script>

import Hero from '../components/Hero.vue'
import data from "../data/data.json";

export default {
  name: 'Header',
  components: {
    Hero
  },
  props: {
  },
  data() {
    return {
      data: data,
      }
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";

</style>
