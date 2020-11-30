<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>{{heading}}</h1>

      <!-- start of filters  -->
      <div class="row">
      <ul class="list-inline mx-auto filters" data-aos="fade-right" data-aos-duration="1000">
          <li v-for="item in skills" :key="item.category" class="list-inline-item filter">
            <a class="nav-item" :class="(item.category === currentCategory) ? 'active': null" :data-category="item.category" @click="setCategory" data-toggle="collapse" :href="'#'+ categoryId(item)" role="a" aria-expanded="false" :aria-controls="categoryId(item)">{{item.category}}</a>
          </li>
       </ul>
       </div>
      <!-- end of filters  -->

      <!-- start of skill container  -->
      <div id="skill-container">
        <!-- start of individual skill container  -->
        <div data-parent="#skill-container" v-for="item in skills" :key="item.category" class="collapse multi-collapse" :id="categoryId(item)">
          <!-- start of category data  -->
          <div class="category">
            <h2><i :class="item.faClass"></i> {{item.category}}</h2>
              <h3>{{item.subtitle}}</h3>
              <div class="skill-description">
                <ul v-if="item.bullets.length !==0" class="fa-ul">
                  <li v-for="bullet in item.bullets" :key="bullet"><span class="fa-li"><i class="fas fa-check"></i></span>{{bullet}}</li>
                </ul>
              </div>


          <!-- start of skill bars  -->
              <div v-if="item.skillList.length !== 0" class="skillbars">
                <div class="skill" v-for="skill in item.skillList" :key="skill.name" >
                  <h3 class="skill-name" v-html="skill.name"></h3>
                    <div class="outer-bar">
                      <div :class="'inner-bar level--'+ skill.level"></div>
                    </div>
                </div>
              </div>  
          <!-- end of skill bars  -->
          </div>
          <!-- end of category data  -->
        </div>
        <!-- end of individual skill container  -->   
      </div>
  <!-- end of skill container  -->
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
