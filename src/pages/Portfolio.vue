<template>
  <section id="portfolio" class="dark-section">
    <div class="container-fluid">
      <h1>{{heading}}</h1>
      <div class="row">
        <ul class="list-inline mx-auto filters">
          <li v-for="item in filters" :key="item.title" class="list-inline-item filter">
            <a class="nav-item" :class="(item.filter === currentFilter) ? 'active': null" :data-filter="item.filter" @click="setFilter">{{item.filter}}</a>
          </li>
        </ul>
      </div>

      <div class="portfolio-container row">
        <div data-aos="fade-right" data-aos-duration="1000" v-for="(item, index) in filteredProjects" :key="index"  class="col-sm-12 col-md-4 flex-col">
          <div class="portfolio-item">
            
            <img :src="require(`../assets/images/portfolio/${item.image}`)" />
            
            <div class="overlay">
              <a :href="item.link" title="Live Demo" target="_blank">
              <div class="portfolio-item-meta">
                <h3>{{item.title}}</h3>
                <h4>{{item.type}}</h4>
                <p>{{item.description}}</p>
                
                <div v-if="item.source" class="link-icons">
                  <a :href="item.source" title="Source Code" target="_blank">
                    <i class="fas fa-code fa-2x"></i>
                  </a>
              </div>
            </div>
              </a>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Arrow />
  </section>
</template>

<script>
import data from "../data/data.json";
import Arrow from "../components/Arrow.vue";


var filterArr = [];

export default {
  name: 'portfolio',
  props: {},
  components: {
    Arrow,
    },
  data() {
    return {
      projects: data.portfolio.projects,
      heading: data.main.headings.portfolio,
      currentFilter: data.portfolio.defaultFilter
      }
    },
    computed: {
      filteredProjects() {
        var projects = data.portfolio.projects;
        var filter = this.currentFilter;
        var filtered = projects.filter(function(x) {
          
            return x.filter === filter;
          });
        return filtered;
      },
      filters() {
        var filterList = [];
        var projects = data.portfolio.projects;
        filterList = projects.filter(function(x) {
          if (!filterList.includes(x.filter)){
            filterList.push(x.filter);
          return x.filter 
          }
        })
        return filterList;
      }
    },
  methods: {
    displayFilters(item) {
      if (!filterArr.includes(item.filter)){
        filterArr.push(item.filter);
        return true;
      }
      return false;
    },
   
    setFilter(event){
      this.currentFilter = event.target.dataset.filter;
      filterArr =[];
    },
  
  }
   
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";


</style>
