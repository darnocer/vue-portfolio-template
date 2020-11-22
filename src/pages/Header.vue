<template>
<header  id="home" class="bg">
  <nav class="navbar navbar-expand-lg fixed-top bg-dark">
    <a class="navbar-brand" href="#">dariannocera.</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
      <ul id="navbar-nav" class="navbar-nav ml-auto">
        <li class="active"><a class="nav-item nav-link" href="#home">Home</a></li>
        <li><a class="nav-item nav-link" href="#about">About</a></li>
        <li><a class="nav-item nav-link" href="#skills">Skills</a></li>
        <li><a class="nav-item nav-link" href="#portfolio">portfolio</a></li>
        <li><a class="nav-item nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
<Banner/>
<Arrow />
</header>
</template>

<script>
import Arrow from '../components/Arrow.vue';
import data from "../data/data.json";
import Banner from '../components/Banner.vue';

export default {
  name: 'Header',
  components: {
    Banner,
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
