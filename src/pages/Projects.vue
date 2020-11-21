<template>
  <section id="projects">
    <div class="container-fluid">
      <h1>Projects</h1>
      <div class="row no-wrap">
        <ul class="list-inline mx-auto filters">
          <li class="list-inline-item filter">
            <a href="#">Development</a>
          </li>
          <li class="list-inline-item filter">
            <a href="#">Design</a>
            </li>
          <li class="list-inline-item filter">
            <a href="#">#IAMTUF</a>
          </li>
        </ul>
      </div>
      <h2>Filter</h2>
      <div class="row">
        <div class="col-sm-12 col-md-4 flex-col">
          <div class="portfolio-item">
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
        <div class="col-sm-12 col-md-4 flex-col">
          <div class="portfolio-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 flex-col">
          <div class="portfolio-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../data/data.json";


export default {
  name: 'Projects',
  props: {
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
