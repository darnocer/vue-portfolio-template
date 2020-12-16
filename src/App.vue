<template>
  <div id="app">
    <Header />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./Vue/pages/Header.vue";
import About from "./Vue/pages/About.vue";
import Skills from "./Vue/pages/Skills.vue";
import Portfolio from "./Vue/pages/Portfolio.vue";
import Contact from "./Vue/pages/Contact.vue";
import Footer from "./Vue/pages/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer,
  },
};
</script>

<style>
@import "./styles/css/main.css";
</style>
