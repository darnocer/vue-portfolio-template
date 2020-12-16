<template>
  <section id="about" class="dark-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      <h2 class="tagline" :v-if="about.tagline">{{about.tagline}}</h2>
      <div class="row">
        <div
          class="col-sm-12 col-md-4 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            class="profile-pic"
            src="../assets/images/profile-pic.png"
            alt="profile picture"
          />
        </div>
        <div
          class="col-sm-12 col-md-4 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p id="about-content">
            <span id="greeting">I'm {{ name }}! </span>
            <span id="bio" v-html="about.bio"></span>
          </p>
        </div>

        <div
          class="col-sm-12 col-md-4 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <ul class="list-group list-group-flush">
            <li v-for="item in facts" :key="item.name" class="list-group-item">
              <h3 class="d-inline">{{ item.name }}: </h3>
              <br class="d-md-none" />{{ item.value }}
            </li>
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
      name: data.main.name.first,
      facts: data.about.facts,
      heading: data.main.headings.about,
    };
  },
};
</script>

<style lang="scss"></style>
