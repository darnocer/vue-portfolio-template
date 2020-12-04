<template>
  <section id="skills" class="light-section">
    <div class="container-fluid">
      <h1>{{heading}}</h1>
<word-cloud/>

 </div>
 <!-- <timeline /> -->
    <Arrow />
  </section>
</template>

<script>
import data from "../data/data.json";
import Arrow from "../components/Arrow.vue";
import WordCloud from "../components/WordCloud.vue";
// import Timeline from "../components/Timeline.vue";

export default {
  name: "Skills",
  props: {},
  components: {
    Arrow,
    WordCloud
    // Timeline
    },
  data() {
    return {
      // skills: data.skills.categories,
      heading: data.main.headings.skills,
      currentCategory: data.skills.defaultCategory
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
    }
  },
  methods: {
    setCategory(event){
      this.currentCategory = event.target.dataset.category;
    }
  }
};
</script>

<style lang="scss">
</style>
