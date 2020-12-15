<template>
  <svg
    class="word-cloud"
    width="100%"
    height="600"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g></g>
    <g
      transform="translate(480,300)scale(1.0062893629074097,1.0062893629074097)"
    >
      <text
        text-anchor="middle"
        transform="translate(-22,68)rotate(-22.5)"
        style="font-size: 10px; fill: rgb(82, 84, 163);"
      ></text>
      <text
        text-anchor="middle"
        transform="translate(144,-101)rotate(-22.5)"
        style="font-size: 96px; fill: rgb(107, 110, 207);"
      >
        Git
      </text>
      <text
        text-anchor="middle"
        transform="translate(-153,0)rotate(-43)"
        style="font-size: 93px; fill: rgb(99, 121, 57);"
      >
        SCSS
      </text>
      <text
        text-anchor="middle"
        transform="translate(122,-31)rotate(-2)"
        style="font-size: 100px; fill: rgb(231, 150, 156);"
      >
        Vuejs
      </text>
      <text
        text-anchor="middle"
        transform="translate(27,108)rotate(18.5)"
        style="font-size: 100px; fill: rgb(214, 97, 107);"
      >
        Reactjs
      </text>
      <text
        text-anchor="middle"
        transform="translate(321,29)rotate(-43)"
        style="font-size: 74px; fill: rgb(140, 109, 49);"
      >
        CSS
      </text>
      <text
        text-anchor="middle"
        transform="translate(-75,-173)rotate(39)"
        style="font-size: 85px; fill: rgb(140, 162, 82);"
      >
        HTML
      </text>
      <text
        text-anchor="middle"
        transform="translate(269,-89)rotate(18.5)"
        style="font-size: 60px; fill: rgb(206, 219, 156);"
      >
        SEO
      </text>
      <text
        text-anchor="middle"
        transform="translate(6,7)rotate(39)"
        style="font-size: 49px; fill: rgb(165, 81, 148);"
      >
        Express
      </text>
      <text
        text-anchor="middle"
        transform="translate(-102,-135)rotate(39)"
        style="font-size: 35px; fill: rgb(214, 97, 107);"
      >
        GoDaddy
      </text>
      <text
        text-anchor="middle"
        transform="translate(-248,-168)rotate(-22.500000000000004)"
        style="font-size: 35px; fill: rgb(231, 150, 156);"
      >
        Squarespace
      </text>
      <text
        text-anchor="middle"
        transform="translate(77,-1)rotate(-2)"
        style="font-size: 35px; fill: rgb(123, 65, 115);"
      >
        Wix
      </text>
      <text
        text-anchor="middle"
        transform="translate(-241,116)rotate(18.499999999999996)"
        style="font-size: 60px; fill: rgb(173, 73, 74);"
      >
        jQuery
      </text>
      <text
        text-anchor="middle"
        transform="translate(-287,4)rotate(-43)"
        style="font-size: 49px; fill: rgb(173, 73, 74);"
      >
        MySQL
      </text>
      <text
        text-anchor="middle"
        transform="translate(230,106)rotate(39)"
        style="font-size: 85px; fill: rgb(189, 158, 57);"
      >
        Design
      </text>
      <text
        text-anchor="middle"
        transform="translate(-295,-184)rotate(-22.5)"
        style="font-size: 49px; fill: rgb(132, 60, 57);"
      >
        MongoDB
      </text>
      <text
        text-anchor="middle"
        transform="translate(-285,-81)rotate(-2)"
        style="font-size: 80px; fill: rgb(231, 186, 82);"
      >
        Nodejs
      </text>
      <text
        text-anchor="middle"
        transform="translate(200,-181)rotate(18.5)"
        style="font-size: 80px; fill: rgb(165, 81, 148);"
      >
        Bootstrap
      </text>
      <text
        text-anchor="middle"
        transform="translate(-130,190)rotate(-2)"
        style="font-size: 85px; fill: rgb(231, 203, 148);"
      >
        Responsive
      </text>
    </g>
  </svg>
</template>

<script>
import data from "../data/data.json";

export default {
  name: "WordCloud",
  props: {},
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss"></style>
