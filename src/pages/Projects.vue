<template>
  <section id="projects" class="dark-section">
    <div class="container-fluid">
      <h1>Projects</h1>
      <div class="row">
        <ul class="list-inline mx-auto filters">
          <li class="list-inline-item filter">
            <a class="nav-item" href="#">Development</a>
          </li>
          <li class="list-inline-item filter">
            <a class="nav-item" href="#">Design</a>
            </li>
          <li class="list-inline-item filter">
            <a class="nav-item" href="#">#IAMTUF</a>
          </li>
        </ul>
      </div>
      
      <div class="portfolio-container">
      <div class="row">
        <div class="col-sm-12 col-md-4 flex-col test">
          <div class="portfolio-item test">
            <img src="https://via.placeholder.com/150" alt="portfolio item">
            <div class="overlay">
              <div class="portfolio-item-meta">
                <h3>Project Title</h3>
                <p>Project Description</p>
                
                <div class="link-icons">
                  <a href=# title="Live Demo" target="_blank">
                    <i class="fa fa-link fa-2x"></i>
                  </a>
                    
                  <a href=# title="Source Code" target="_blank">
                    <i class="fas fa-code fa-2x"></i>
                  </a>
                  
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 flex-col test">
          <div class="portfolio-item test">
            <img src="https://via.placeholder.com/150"/>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 flex-col test">
          <div class="portfolio-item test">
            <img src="https://via.placeholder.com/150"/>
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


export default {
  name: 'Projects',
  props: {},
  components: {
    Arrow,
    },
  data() {
    return {
      data: data,
      }
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";


</style>
