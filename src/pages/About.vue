<template>
  <section 
    id="about" 
    class="dark-section"
  >
    <div class="container-fluid">
      <h1>About Me</h1>
      <h2 class="tagline">{{about.tagline}}</h2>
      <div class="row">
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <img
            class="profile-pic"
            src="../assets/images/profile-pic.png"
            alt="profile picture"
          >
        </div>
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <p id="about-content">
            {{about.bio}}
          </p>
          <a href="#">LINK</a>
        </div>
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <ul>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
          </ul>
        </div>
      </div>
    </div>
    <Arrow />
  </section>
</template>

<script>
import data from "../data/data.json";
import Arrow from "../components/Arrow.vue";

export default {
  name: "About",
  components: {
    Arrow,
  },
  props: {},
  data() {
    return {
      about: data.about,
    };
  },
};
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";
</style>
