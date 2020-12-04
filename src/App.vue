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
import Header from "./pages/Header.vue";
import About from "./pages/About.vue";
import Skills from "./pages/Skills.vue";
import Portfolio from "./pages/Portfolio.vue";
import Contact from "./pages/Contact.vue";
import Footer from "./pages/Footer.vue";


export default {
  name: "App",
  components: {
    Header,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer
}
}
</script>

<style>
@import "./styles/scss/_variables.scss";
@import "./styles/css/main.css";
</style>
