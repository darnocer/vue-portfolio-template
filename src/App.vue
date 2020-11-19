<template>
  <div id="app">
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />

  </div>
</template>

<script>
import Header from './pages/Header.vue';
import About from './pages/About.vue';
import Skills from './pages/Skills.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    About,
    Skills,
    Projects,
    Contact,
    Footer

  }
}
</script>

<style>
@import "./styles/css/main.css";
</style>
