<template>
<header class="bg" id="home">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">dariannocera.</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ml-auto" id="navbar-nav">
        <li><a class="nav-item nav-link" href="#home">Home</a></li>
        <li><a class="nav-item nav-link" href="#about">About</a></li>
        <li><a class="nav-item nav-link" href="#skills">Skills</a></li>
        <li><a class="nav-item nav-link" href="#projects">Projects</a></li>
        <li><a class="nav-item nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
<Hero/>
<Arrow />
</header>
</template>

<script>
import Arrow from '../components/Arrow.vue';
import Hero from '../components/Hero.vue'
import data from "../data/data.json";

export default {
  name: 'Header',
  components: {
    Hero,
   Arrow
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


</style>
