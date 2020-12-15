import Vue from "vue";
import App from "./App.vue";
import $ from "jquery";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// HIGHLIGHT NAV MENU ITEM ON SCROLL
// Cache selectors
var lastId,
  topMenu = $("#navbar-nav"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // // All list items
  menuItems = topMenu.find("a"),
  // // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// put sections in an array
var sections = [];
$("#navbar-nav li").each(function() {
  sections.push(
    $(this)
      .find("a")
      .attr("href")
  );
});
sections = sections.map((x) => x.slice(1));

// Bind to scroll
$(window).on("scroll", function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  // get the next section
  if (id !== "contact") {
    const currentIndex = sections.indexOf(id);
    var nextIndex = currentIndex + 1;
    var nextSection = sections[nextIndex];
    // make the arrow jump to the next section
    $(".arrow-icon").attr("href", `#${nextSection}`);
  } else {
    $(".arrow-icon").attr("href", "#");
  }

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active-nav")
      .end()
      .filter("[href=\\#" + id + "]")
      .parent()
      .addClass("active-nav");
  }
});
