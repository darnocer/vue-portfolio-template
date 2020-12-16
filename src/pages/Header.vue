<template>
  <header id="home" class="bg">
    <nav class="navbar navbar-expand-lg fixed-top dark-bg">
      <a class="navbar-brand" href="#">
        <div v-if="main.logo"><img src="../assets/images/logo.png" alt="logo" id="Logo"></div>
        <div v-if="!main.logo">
          <span id="FirstName">{{main.name.first}}</span> <span id="LastName">{{main.name.last}}</span>
        </div>
        </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
        <ul id="navbar-nav" class="navbar-nav ml-auto">
          <li class="active">
            <a class="nav-item nav-link" href="#home">Home</a>
          </li>
          <li><a class="nav-item nav-link" href="#about">About</a></li>
          <li><a class="nav-item nav-link" href="#skills">Skills</a></li>
          <li><a class="nav-item nav-link" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-item nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <Banner />
    <Arrow />
  </header>
</template>

<script>
import Arrow from "../components/Arrow.vue";
import data from "../data/data.json";
import Banner from "../components/Banner.vue";

export default {
  name: "Header",
  components: {
    Banner,
    Arrow,
  },
  props: {},
  data() {
    return {
      main: data.main,
    };
  },
};
</script>

<style lang="scss"></style>
