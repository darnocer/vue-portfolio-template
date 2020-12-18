<template>
  <section id="contact" class="light-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      <div class="row">
        <div
          class="col-sm-12 col-md-6 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
          style="margin: 0 auto;"
        >
          <div class="contact-content">
            <h2>Connect with Me</h2>
            <div class="contact-text">{{ contact.text }}</div>

            <div class="contact-info">
              <ul class="list-group list-group-flush">
                <li v-if="contact.city !==''" class="list-group-item">
                  <h3 class="d-inline">
                    <i class="fas fa-map-marker-alt"></i> Location:
                  </h3>
                  <br class="d-md-none" />
                  <span>&nbsp; {{ contact.city }}</span>
                </li>
                <li class="list-group-item" v-if="contact.email !==''">
                  <h3 class="d-inline">
                    <i class="fa fa-envelope"></i> Email:
                  </h3>
                  <br class="d-md-none" />
                  <a :href="'mailto:'+ contact.email">
                    <span>{{ contact.email }}</span>
                  </a>
                </li>

                <li class="list-group-item" v-if="contact.phone !==''">
                  <h3 class="d-inline">
                    <i class="fas fa-phone"></i>  Phone:
                  </h3>
                  <br class="d-md-none" />
                  
                    <span>{{ contact.phone }}</span>
                  
                </li>
                <li class="list-group-item">
                  <h3 class="d-inline">
                    <i class="fas fa-user-plus"></i> Social:
                  </h3>
                  <br class="d-md-none" />

                  <div
                    v-for="(item, i) in social"
                    :key="i"
                    class="social-item social-spacing list-inline-item"
                  >
                    <a :href="item.url" :alt="item.name">
                      <i :class="'fa-lg '+item.faClass"> </i>
                    </a>
                  </div>
                </li>
                <li class="list-group-item" v-if="contact.resumeLink !==''">
                  <a :href="contact.resumeLink" target="_blank" alt="resume">
                  <button class="btn btn-resume"  target="_blank">
                    <i class="far fa-file-pdf"></i> Resume
                  </button>
                  </a>

                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-6 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
          v-if="contact.form"

        >
          <h2 v-if="contact.formTitle !==''">{{contact.formTitle}}</h2>

<!-- start of contact form  -->

<div class="container contact-form">
  <form :action="contact.formEndPoint" method="POST" target="_blank">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text bg-white">
            <i class="fa fa-user"></i>&nbsp;
          </span>
        </div>
        <input name="name" type="name" placeholder="Name" class="form-control border-left-0" required>
      </div>
    </div>

    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text bg-white">
            <i class="fa fa-envelope"></i>
          </span>
        </div>
        <input name="email" type="email" placeholder="Email" class="form-control border-left-0" required>
      </div>
    </div>

    <div class="form-group">
      <textarea class="form-control" id="message" rows="5" placeholder="Message" required></textarea>
    </div>

    <button type="submit" class="btn">
      <i class="fa fa-paper-plane"></i> 
      Send
    </button>
  </form>
</div>


<!-- end of contact form  -->


        </div>
      </div>
    </div>

    <div class="row arrow-container">
      <a class="arrow-icon" href="#">
        <i class="fas fa-chevron-up fa-4x"></i>
      </a>
    </div>

  </section>
</template>

<script>
import data from "../../data/data.json";

export default {
  name: "Contact",
  props: {},
  components: {},
  data() {
    return {
      contact: data.contact,
      social: data.contact.social,
      heading: data.main.headings.contact,
    };
  },
};
</script>

<style lang="scss"></style>
