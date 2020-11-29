<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>{{heading}}</h1>
      <!-- Row  -->
      <div class="row">
        <!-- Start of First Column -->
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <!-- First Skill Category  -->
          <div class="category">
            <h2><i :class="skills.categoryA.faClass"></i> {{skills.categoryA.name}}</h2>
            <h3>{{skills.categoryA.subtitle}}</h3>
            <ul>
              <li v-for="item in skills.categoryA.bullets" :key="item">{{item}}</li>
            </ul>
          </div>
          <!-- Second Skill Category  -->
          <div class="category">
            <h2><i :class="skills.categoryB.faClass"></i> {{skills.categoryB.name}}</h2>
            <h3>{{skills.categoryB.subtitle}}</h3>
            <ul>
              <li v-for="item in skills.categoryB.bullets" :key="item">{{item}}</li>
            </ul>
          </div>
      </div>
      <!-- End of First Column  -->

      <!-- Start of Second column  -->
        <div class="col-sm-12 col-md-4 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <!-- Start of Third Skill Category  -->
          <div class="category">
            <h2><i :class="skills.categoryC.faClass"></i> {{skills.categoryC.name}} </h2>
            <h3>{{skills.categoryC.subtitle}}</h3>
            <ul>
              <li v-for="item in skills.categoryC.bullets" :key="item">{{item}}</li>
            </ul>
          </div>
   
        <!-- Start of Fourth Skill Caetgory  -->
        <div class="category">
          <h2><i :class="skills.categoryD.faClass"></i> {{skills.categoryD.name}} </h2>
          <h3>{{skills.categoryD.subtitle}}</h3>
          <ul>
              <li v-for="item in skills.categoryD.bullets" :key="item">{{item}}</li>
            </ul>
        </div>
        </div>
        <!-- End of Second Column  -->

<!-- Start of Skill Levels Column  -->
      <div class="col-sm-12 col-md-4 flex-col skillbars" data-aos="fade-right" data-aos-duration="1000">

         <div class="skill" v-for="item in skills.hardSkills" :key="item.name">
              <h3 class="skill-name" v-html="item.name"></h3>
              <div class="outer-bar">
                  <div :class="'inner-bar level--'+ item.level"></div>
              </div>
          </div>
      </div>
    <!-- End of Column  -->
    </div>
<!-- End of Row  -->
    </div>
    <!-- End of Container  -->
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
      skills: data.skills,
      heading: data.main.headings.skills
    };
  },
};
</script>

<style lang="scss">
</style>
