<template>
  <div id="app">
    <div class="preloader">
      <div class="wr">
        <h6 class="main">Loading</h6>
      </div>
    </div>
    <cursor-fx :config="BASE_CONFIG"/>
    <button
      type="button"
      data-cursor-hover
      data-cursor-mix-blend-mode="difference"
    >Add `data-cursor-mix-blend-mode` to an every html elements that you want to change the mix-blend-mode type.</button>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.preloader {
  background: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;

  .wr {
    text-align: left;
    padding: 40px;
    bottom: 0;
    position: absolute;
  }
  h6 {
    font-family: "playFair";
    color: white;
    &.main {
      font-size: 20px;
    }
    &.sub {
      margin-top: -40px;
      opacity: 0.6;
    }
  }
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { CursorFx } from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
import { gsap } from "gsap";
export default {
  components: {
    "cursor-fx": CursorFx
  },
  data() {
    return {
      BASE_CONFIG: {
        lerps: {
          dot: 1,
          circle: 0.18,
          custom: 0.23
        },
        scale: {
          ratio: 0.18,
          min: 0.5,
          max: 1
        },
        opacity: 0.1,
        color: "#ffffff"
      }
    };
  },
  mounted() {
    //hide the page here
    window.addEventListener("DOMContentLoaded", event => {
      let g = gsap.timeline();
      g.fromTo(
        ".main",
        1.2,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -1000 }
      ).fromTo(
        ".preloader",
        1,
        { top: 0, bottom: 0 },
        { top: "-2000px", ease: "Power4.easeInOut", delay: 1.5 }
      );
    });
  }
};
</script>
