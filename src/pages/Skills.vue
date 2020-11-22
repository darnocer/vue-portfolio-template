<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>Skills</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <h2>{{skills.categoryA.name}} <i :class="skills.categoryA.faClass"></i></h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in skills.categoryA.skillList" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <h2>{{skills.categoryB.name}} <i :class="skills.categoryB.faClass"></i></h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in skills.categoryB.skillList" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <h2>{{skills.categoryC.name}} <i :class="skills.categoryC.faClass"></i></h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in skills.categoryC.skillList" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <h2>{{skills.categoryD.name}} <i :class="skills.categoryD.faClass"></i></h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in skills.categoryD.skillList" :key="item">
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
      skills: data.skills
    };
  },
};
</script>

<style lang="scss">
</style>
