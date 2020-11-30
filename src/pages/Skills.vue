<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>{{heading}}</h1>

      <!-- start of filters  -->
      <div class="row filters" data-aos="fade-right" data-aos-duration="1000">
 
          <div v-for="item in skills" :key="item.category" class="col-sm-6 col-md-3 flex-col filter">
            <button class="btn btn-primary" :class="(item.category === currentCategory) ? 'active': null" :data-category="item.category" @click="setCategory" data-toggle="collapse" :href="'#'+ categoryId(item)" role="button" aria-expanded="false" :aria-controls="categoryId(item)">{{item.category}}</button>
          </div>
        </div>
     
      <!-- end of filters  -->

<div id="skill-container">
  <div data-parent="#skill-container" v-for="item in skills" :key="item.category" class="collapse multi-collapse" :id="categoryId(item)">
    <div class="category">
      <h2><i :class="item.faClass"></i> {{item.category}}</h2>
        <h3>{{item.subtitle}}</h3>
        <div class="skillbars">
          <div class="skill" v-for="skill in item.skillList" :key="skill.name" >
            <h3 class="skill-name" v-html="skill.name"></h3>
              <div class="outer-bar">
                <div :class="'inner-bar level--'+ skill.level"></div>
              </div>
          </div>
        </div>          
    </div>
  </div>
</div>
  
    <!-- End of Container  -->
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
      skills: data.skills,
      heading: data.main.headings.skills,
      currentCategory: null
    };
  },
  methods: {
    setCategory(event){
      this.currentCategory = event.target.dataset.category;
    },
    categoryId(item){
      var str = item.category;
      return str.toLowerCase().split(" ").join("");
    }
  }
};
</script>

<style lang="scss">
</style>
