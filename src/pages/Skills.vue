<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>Skills</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col test">
          <h2>Front-End</h2>
        </div>
        <div class="col-sm-12 col-md-6 flex-col test">
          <h2>Back-End</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col test">
          <h2>Desgin</h2>
        </div>
        <div class="col-sm-12 col-md-6 flex-col test">
          <h2>Technical</h2>
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
  name: "Skills",
  props: {},
  components: {
    Arrow,
    },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss">
</style>
