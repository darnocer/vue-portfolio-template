<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>Skills</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col">
          <h2>{{categories.categoryA}}</h2>
          <ul>
            <li v-for="item in skills.categoryA" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 flex-col">
          <h2>{{categories.categoryB}}</h2>
          <ul>
            <li v-for="item in skills.categoryB" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col">
          <h2>{{categories.categoryC}}</h2>
          <ul>
            <li v-for="item in skills.categoryC" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 flex-col">
          <h2>{{categories.categoryD}}</h2>
          <ul>
            <li v-for="item in skills.categoryD" :key="item">
              {{item}}
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
  name: "Skills",
  props: {},
  components: {
    Arrow,
    },
  data() {
    return {
      categories: data.skills.categories,
      skills: data.skills.skillLists
    };
  },
};
</script>

<style lang="scss">
</style>
