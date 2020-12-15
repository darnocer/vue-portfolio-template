<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>

      <!-- start of filters  -->
      <div class="row filters">
        <ul
          class="list-inline mx-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <li
            v-for="item in skills"
            :key="item.category"
            class="list-inline-item filter"
          >
            <a
              class="nav-item"
              :class="item.category === currentCategory ? 'active' : null"
              :data-category="item.category"
              @click="setCategory"
              >{{ item.category }}</a
            >
          </li>
        </ul>
      </div>
      <!-- end of filters  -->

      <!-- start of skill container  -->
      <div
        id="skill-container"
        data-aos="fade-right"
        data-aos-duration="1000"
        v-for="item in filteredSkills"
        :key="item.category"
      >
        <div class="category-heading">
          <h2><i :class="item.faClass"></i> {{ item.category }}</h2>
          <h3>{{ item.subtitle }}</h3>
        </div>

        <div class="skill-content">
          <div v-if="item.bullets.length" class="skill-description">
            <ul class="fa-ul">
              <li v-for="bullet in item.bullets" :key="bullet">
                <span class="fa-li"><i class="fas fa-check"></i></span
                >{{ bullet }}
              </li>
            </ul>
          </div>

          <!-- start of skill bars  -->
          <div v-if="item.skillList.length !== 0" class="skillbars">
            <div
              class="skill"
              v-for="skill in item.skillList"
              :key="skill.name"
            >
              <h3 class="skill-name" v-html="skill.name"></h3>
              <div class="outer-bar">
                <div :class="'inner-bar level--' + skill.level"></div>
              </div>
            </div>
          </div>
          <!-- end of skill bars  -->
        </div>
      </div>
      <!-- end of skill container  -->
    </div>
    <!-- end of main container  -->
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
      skills: data.skills.categories,
      heading: data.main.headings.skills,
      currentCategory: data.skills.defaultCategory,
    };
  },
  computed: {
    filteredSkills() {
      var skills = data.skills.categories;
      var category = this.currentCategory;
      var filtered = skills.filter(function(x) {
        if (x.category === category) {
          return x;
        }
      });

      console.log(filtered);

      return filtered;
    },
  },
  methods: {
    setCategory(event) {
      this.currentCategory = event.target.dataset.category;
    },
  },
};
</script>

<style lang="scss"></style>
