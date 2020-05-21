<template>
  <div class="home">
    <div class="top-menu" >
      <div class="left" :style="slides[currentSlide] && slides[currentSlide].name == 'contact' ? 'visibility:hidden' : 'visibility:visible'">
        <div>Use the ↑ ↓ to navigate through the site.</div>
      </div>
      <div class="right">
        <div
          class="w"
          :style="isTyping && slides[currentSlide].name !== 'header' ? '    pointer-events: none;': '    pointer-events: painted;'"
          @click="slides[currentSlide] && slides[currentSlide].next ? scrollPage({key: 'ArrowDown'}) : scrollPage({key: 'ArrowUp'})"
        >
          <small
            data-cursor-hover
          >{{slides[currentSlide] && slides[currentSlide].next ? ' Next Up' : 'Prev '}}</small>
          <h3
            class="c-slide"
            v-if="slides[currentSlide] && slides[currentSlide].next"
            style="text-transform: capitalize;"
          >{{slides[currentSlide] && slides[currentSlide].next}}</h3>
          <h3
            class="c-slide"
            v-else
            style="text-transform: capitalize;"
          >{{slides[currentSlide] && slides[currentSlide].prev}}</h3>
        </div>
      </div>
    </div>
    <div class="header-wrapper" ref="header">
      <div id="fog" style="height:80vh !important;width:130vw !important"></div>
      <div class="header-content">
        <h2>Obodugo Rapheal</h2>
        <div class="n-ve-50">
          <span class="tag">
            <a data-cursor-hover>Creative Developer doing cool stuffs from Nigeria!</a>
          </span>
        </div>
      </div>
      <div class="header-scroll item-header">
        <a style="z-index:99;position: absolute;top: -50px;" data-cursor-hover>
          <button class="scrollbottom">
            <div></div>
          </button>
        </a>
      </div>
    </div>

    <!-- about -->
    <div class="about-wrapper" ref="about">
      <div class="about-inner-wrapper">
        <div class="about-wrapper-header text-left pl-5">
          <h3 style="visibility:hidden; position:absolute; top:0;">About me</h3>
          <span class="typewriter" style="visibility:visible">
            <svg class="p" width="90%" height="90%" viewBox="0 0 800 600">
              <filter id="distortionFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.1"
                  numOctaves="5"
                  seed="2"
                  stitchTiles="noStitch"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="noise"
                ></feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="0"
                  xChannelSelector="R"
                  yChannelSelector="B"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  filterUnits="userSpaceOnUse"
                ></feDisplacementMap>
              </filter>
              <g filter="url(#distortionFilter)">
                <image
                  class="p__img"
                  x="50"
                  y="50"
                  xlink:href="@/assets/fonts/me-1.jpg"
                  height="350"
                  width="300"
                ></image>
              </g>
            </svg>
            <div id="appx" class="appx">
              <p style="visibility:visible">
                Hey, I'm
                <a data-cursor-hover class="opor-link p__link" data-hover="Rapheal">
                  Rapheal
                  <!-- <span
                id="profile-img"
                style="  display: block;max-width:270px;max-height:145px;width: 270px;height: 200px;"
                  ></span>-->
                </a>,a Creative developer based in Nigeria with a passion for interactive design and development. Currently working with a like-minded team at
                <a
                  class="opor-link"
                  data-hover="Baobab Partners"
                  data-cursor-hover
                  target="_blank"
                  href="http://baobabpartners.com"
                >Baobab Partners</a>
              </p>
              <p
                style="visibility:visible"
              >I have had to work across multiple roles including Backend development, Mobile development in the past but these days, my interest lie more in; interactive design and front-end implementation.</p>
              <p style="visibility:visible">
                I also have a soft spot for photography, and have since taken some cool shots, some of which you can see
                <a
                  class="opor-link"
                  data-hover="here"
                  href="http://vs.co/kofacts"
                  target="_blank"
                  data-cursor-hover
                >here</a>. I am available for interesting gigs, or talks about design, tech, photography and more.
              </p>
            </div>
          </span>
        </div>
        <!-- <div class="about-wrapper-profile text-right pr-5">
          <div style="visibility:hidden" class="profile-img"></div>
          <div style="visibility:hidden" class="page-count">01</div>
        </div>-->
      </div>
    </div>

    <div class="projects-wrapper" ref="projects">
      <div style="visibility:visible;" class="project" id="project" @mouseenter="animateProject">
        <svg class="distort" width="90%" height="90%" viewBox="0 0 800 600">
          <filter id="distortionFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="5"
              seed="2"
              stitchTiles="noStitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="noise"
            ></feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="B"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              filterUnits="userSpaceOnUse"
            ></feDisplacementMap>
          </filter>
          <g filter="url(#distortionFilter)">
            <image
              class="distort__img"
              x="50"
              y="50"
              xlink:href="@/assets/fonts/Baobab.png"
              height="350"
              width="300"
            ></image>
            <image
              class="distort__img"
              x="50"
              y="50"
              xlink:href="@/assets/fonts/prepclass.png"
              height="350"
              width="300"
            ></image>
            <image
              class="distort__img"
              x="50"
              y="50"
              xlink:href="@/assets/fonts/menofunds.png"
              height="350"
              width="300"
            ></image>
            <image
              class="distort__img"
              x="50"
              y="50"
              xlink:href="@/assets/fonts/gigsjet.png"
              height="350"
              width="300"
            ></image>
            <image
              class="distort__img"
              x="50"
              y="50"
              xlink:href="@/assets/fonts/portfolio.png"
              height="350"
              width="300"
            ></image>
          </g>
        </svg>
        <div>
          <h3 style>Selected Works</h3>
        </div>
        <div class="pj">
          <h4>
            <sup>01.</sup>
            <a
              class="opor-link quote__link"
              href="https://leafbmp.com"
              target="_blank"
              data-hover="Leaf V1"
            >Leaf V1</a>
          </h4>
          <h6>Leaf is a project management system handling stuffs like time tracking, invoicing, billing and many more. Built using Micro Service Architecture.</h6>
          <h6 class="sm">Role: UI Design, Frontend Engineering.</h6>
          <a class="pj-a" data-cursor-hover href="https://leafbmp.com">
            <small class="pj-link" data-hover="View Project">View Project</small>
          </a>
        </div>
        <div class="pj">
          <h4>
            <sup>02.</sup>
            <a
              class="opor-link quote__link"
              href="https://prepclass.com.ng/v2"
              target="_blank"
              data-hover="Prepclass V2"
              data-cursor-hover
            >Prepclass V2</a>
          </h4>
          <h6>Did a revamp on some of the pages on PrepClass to involve experience and usability, duhh</h6>
          <h6 class="sm">Role: Frontend Engineering /Vue JS & Laravel.</h6>
          <a class="pj-a" data-cursor-hover target="_blank" href="https://prepclass.com.ng/v2">
            <small class="pj-link"  data-hover="View Project">View Project</small>
          </a>
        </div>
        <div class="pj">
          <h4>
            <sup>03.</sup>
            <a
              class="opor-link quote__link"
              href="https://dribbble.com/kofacts"
              target="_blank"
              data-hover="Menofunds"
            >Menofunds</a>
          </h4>
          <h6>Did an app revamp for the guys at Menofunds, custom icon sets, fresh UI and more.</h6>
          <h6 class="sm">Role: UX Research, UI design.</h6>
          <a class="pj-a" data-cursor-hover target="_blank" href="https://dribbble.com/kofacts">
            <small class="pj-link"  data-hover="View Project">View Project</small>
          </a>
        </div>
        <div class="pj">
          <h4>
            <sup>04.</sup>
            <a
              class="opor-link quote__link"
              href="https://gigsjet.com"
              target="_blank"
              data-hover="Gigsjet"
            >Gigsjet</a>
          </h4>
          <h6>A Remote jobs board that aims to make getting remote gigs doper. Development been on stealth for a while now</h6>
          <h6 class="sm">Role: UI Design, Backend Engineering.</h6>
          <a class="pj-a" data-cursor-hover target="_blank" href="https://gigsjet.com">
            <small class="pj-link"  data-hover="View Project">View Project</small>
          </a>
        </div>
        <div class="pj">
          <h4>
            <sup>05.</sup>
            <a class="opor-link quote__link" target="_blank" href="https://obodugo.com" data-hover="This Website, Duhh">This Website, Duhh</a>
          </h4>
          <h6>Tried exploring series of concepts for this webpage, trashed a lot of ideas and finally went for this.</h6>
          <h6 class="sm">Role: UI Design, Frontend Engineer /Vue, TweenMax, ThreeJs-WebGL.</h6>
          <a class="pj-a" data-cursor-hover target="_blank" href="https://obodugo.com">
            <small class="pj-link"  data-hover="View Project">View Project</small>
          </a>
        </div>
        <!-- <div style="visibility:visible">
          <div class="project-details">
            <ul>
              <li class="main">Project Name</li>
              <li
                class="description"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quasi voluptate odit saepe ipsa, ex architecto. Dolor nostrum ratione tempora earum maiores voluptatibus rerum impedit pariatur perferendis. Vel, voluptatibus nemo.</li>
              <li class="kx">UX design + Web development</li>
              <li class="kx">
                <small>VueJS, Ant Design, Adobe XD</small>
              </li>
            </ul>
            <ul>
              <li class="case-study-li kx">
                <span data-cursor-hover>View Case study</span>
              </li>
            </ul>
          </div>
        </div>-->
        <!-- <div class="project-details">
          <ul>
            <li class="main">Project Name</li>
            <li
              class="description"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quasi voluptate odit saepe ipsa, ex architecto. Dolor nostrum ratione tempora earum maiores voluptatibus rerum impedit pariatur perferendis. Vel, voluptatibus nemo.</li>
            <li class="kx">UX design + Web development</li>
            <li class="kx">
              <small>VueJS, Ant Design, Adobe XD</small>
            </li>
          </ul>
          <ul>
            <li class="case-study-li kx">
              <span data-cursor-hover>View Case study</span>
            </li>
          </ul>
        </div>
        <div class="arrows p-changer">
          <button>←</button>
          <button>→</button>
        </div>-->
      </div>
    </div>

    <div class="contact-wrapper" ref="contact">
      <div class="contact">
        <div class>
          <!-- <h1 @click="scrollTo(0)" data-cursor-hover class="sticky-scroll">SCROLL UP</h1> -->
          <h3 style>Wanna Work Together?</h3>
          <span class="tag">
            I'm always happy to work on/take a look at interesting projects. You can ping me a mail
            <a
              class="opor-link"
              style="margin-left:4px; margin-right:5px"
              data-hover="here"
            >here</a> or learn more about me with the links below.
          </span>
        </div>
        <div class="links">
          <div>
            <a
              class="opor-link"
              data-hover="Email"
              target="_blank"
              href="mailto:obodugorapheal@gmail.com"
            >Email</a>
          </div>
          <div>
            <a
              class="opor-link"
              data-hover="Twitter"
              target="_blank"
              href="https://twitter.com/thekofacts"
            >Twitter</a>
          </div>
          <div>
            <a
              class="opor-link"
              data-hover="Instagram"
              target="_blank"
              href="https://instagram.com/kofacts"
            >Instagram</a>
          </div>
          <div>
            <a
              class="opor-link"
              data-hover="Dribbble"
              target="_blank"
              href="https://dribbble.com/kofacts"
            >Dribbble</a>
          </div>
          <div>
            <a class="opor-link" data-hover="VSCO" target="_blank" href="https://vs.co/kofacts">VSCO</a>
          </div>
          <div>
            <a
              class="opor-link"
              data-hover="Github"
              target="_blank"
              href="https://github.com/kofacts"
            >Github</a>
          </div>
        </div>
        <div class="footer">
          <h6>Built with ❣️ by <a data-cursor-hover href="https://twitter.com/thekofacts" style="color:wheat" target="_blank">thekofacts</a> using VueJS and GSAP</h6>
          <h6>All Rights Reserved - 2020</h6>
        </div>
      </div>
    </div>
    <!-- <div class="placeholder"></div> -->
  </div>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.waves.min";
import { gsap } from "gsap";
import image_distort from "@/helpers/image_distort.js";
import profile_distort from "@/helpers/profile_distort.js";
import hoverEffect from "hover-effect";
import { setTimeout } from "timers";
import $ from "jquery";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentSlide: 0,
      loading: false,
      isAnimating: false,
      isTyping: true,
      xDown: null,
      yDown: null,
      slides: [
        {
          name: "header",
          prev: "",
          next: "about"
        },
        {
          name: "about",
          prev: "header",
          next: "projects"
        },
        {
          name: "projects",
          prev: "about",
          next: "contact"
        },
        {
          name: "contact",
          prev: "projects",
          next: ""
        }
      ]
    };
  },
  created() {
    // this.type();
    // window.addEventListener("wheel", this.animateScroll);
    document.addEventListener('keydown', this.scrollPage);
    window.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove);
  },
  destroyed() {
    window.removeEventListener("wheel", this.animateScroll);
  },
  methods: {
    scrollPage(e) {
      console.log(e.key);
      if (e.key == "ArrowDown") {
        if (
          this.isAnimating == false &&
          this.slides[this.currentSlide] &&
          this.slides[this.currentSlide].next != ""
        ) {
          console.log(this.isAnimating);
          this.scrollNext(false);
        }
      } else {
        // self.currentSlide = self.currentSlide - 1;
        // self.scrollNext();
        if (
          this.isAnimating == false &&
          this.slides[this.currentSlide].prev != ""
        ) {
          this.scrollNext(true);
        }
      }
    },
    handleTouchStart(evt) {
      console.log(evt.touches[0]);
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    },
    handleTouchMove(evt) {
      if (!this.xDown || !this.yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* left swipe */
        } else {
          /* right swipe */
        }
      } else {
        if (yDiff > 0) {
          /* up swipe */
          console.log("Swipe Up!");
          if (
            this.isAnimating == false &&
            this.slides[this.currentSlide] &&
            this.slides[this.currentSlide].next != ""
          ) {
            console.log(this.isAnimating);
            this.scrollNext(false);
          }
        } else {
          /* down swipe */
          if (
            this.isAnimating == false &&
            this.slides[this.currentSlide].prev != ""
          ) {
            this.scrollNext(true);
          }
        }
      }
      /* reset values */
      this.xDown = null;
      this.yDown = null;
    },
    animateProject() {
      var ani = new hoverEffect({
        parent: document.querySelector(".proj-imgdddd"),
        intensity1: 0.1,
        intensity2: 0.1,
        angle2: Math.PI / 2,
        image1: require("@/assets/fonts/BaobabProjects.png"),
        image2:
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/54512216_2306578392719374_3824684119431591285_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vQOKLuJw0ugAX8EgRRE&oh=425fc9feea8b8afd55f0393d091e9b8d&oe=5EDC2F0A",
        displacementImage:
          "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice2.jpg"
      });
    },
    setCloud() {
      this.vantaEffect = FOG({
        el: "#fog",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x182025,
        shininess: 37.0,
        waveHeight: 40.0,
        zoom: 0.76
      });
    },
    animateScroll(event) {
      let header = this.$refs["header"];
      let about = this.$refs["about"];
      let projects = this.$refs["projects"];
      var lastScrollTop = 0;
    },
    animateAboutMe() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    },
    testmic() {
      console.log("okkkkk");
    },
    type() {
      var app = document.getElementById("appx");
      var typewriter = new Typewriter(app, {
        delay: 1.4
      });
      if (this.isTyping) {
        typewriter
          .pauseFor(2300)
          .typeString(
            `            <p style="visibility:visible">
              Hey, I'm
              <a data-cursor-hover class="opor-link p__link" id="p__link" data-hover="Rapheal">
                Rapheal
                <!-- <span
                id="profile-img"
                style="  display: block;max-width:270px;max-height:145px;width: 270px;height: 200px;"
                ></span>-->
              </a>,a Creative developer based in Nigeria with a passion for interactive design and development, currently working with the awesome people at
              <a
                class="opor-link"
                data-hover="Baobab Partners"
                data-cursor-hover
                href="http://baobabpartners.com"
              >
                Baobab Partners
              </a>
            </p> 
            <p
              style="visibility:visible"
            >In the past, i have had to work across multiple roles including Backend development, Mobile development and Product design but lately,  my interest has gotten more to do with interactive design and front-end implementation.</p>           
             <p style="visibility:visible">
              Also a fan of landscape photography and have tried playing around with mobile photography, some of which you can see
              <a
                class="opor-link"
                data-hover="here"
                data-cursor-hover
                href
              >
                here
              </a>. I am available for very interesting gigs, or talks about design, hip-hop, photography or fooood.
            </p>`
          )
          .start()
          .callFunction(() => {
            this.isTyping = false;
            // require("@/helpers/profile_distort.js"
          });
      }
    },
    animateTo(page, reverse) {
      if (this.isAnimating !== true) {
        // this.isAnimating = true;
        let self = this;
        var animation = "";
        let tl = gsap.timeline({
          paused: true,
          onStart: function() {
            console.log("Started animation");
            self.isAnimating = true;
          },
          onComplete: function() {
            self.isAnimating = false;
            console.log("Finished animation");
          }
        });
        if (page === "header") {
          // this.type();

          animation = tl.fromTo(
            ".c-slide",
            0.5,
            { opacity: 1 },
            { opacity: 0 }
          );

          animation.play();
        }
        if (page === "about") {
          if (this.isTyping) {
            this.type();
          }

          animation = tl
            .fromTo(
              ".header-content",
              0.5,
              {
                height: "100vh",
                opacity: 1,
                y: 0
              },
              {
                height: "0vh",
                opacity: 0,
                y: -200,
                ease: "power2.out"
              }
            )
            // .fromTo(".contact-wrapper", 0.5, { zIndex: 4 }, { zIndex: 0 })
            .fromTo(
              ".item-header",
              0.7,
              {
                bottom: "20px",
                opacity: 1
              },
              {
                bottom: "0px",
                opacity: 0,
                ease: "circ.out"
              }
            )
            .fromTo(
              ".about-wrapper",
              1,
              { height: "0vh", visibility: "hidden", opacity: 0 },
              {
                height: "100vh",
                visibility: "visible",
                opacity: 1,
                ease: "power2.out"
              }
            )
            .fromTo(
              ".about-wrapper-header > h3",
              0.3,
              { visibility: "hidden", x: 0 },
              { visibility: "visible", x: 20 }
            )
            .fromTo(".about-wrapper-header > h3", 0.4, { x: 20 }, { x: 0 })
            .fromTo(
              ".about-wrapper-header  p",
              0.9,
              { visibility: "hidden", y: 0 },
              { visibility: "visible", y: 20 }
            );

          if (reverse) {
            this.currentSlide = this.currentSlide - 1;
            animation.progress(1).reverse();
          } else {
            animation.play();
          }
        }
        if (page === "projects") {
          // let animation2 = "";
          // let tl = gsap.timeline({
          //   paused: true,
          //   onStart: function() {
          //     self.isAnimating = true;
          //   },
          //   onComplete: function() {
          //     self.isAnimating = false;
          //   }
          // });
          animation = tl
            .fromTo(
              ".about-wrapper-header > h3",
              0.9,
              { opacity: 1, height: "100%", ease: "power2.out" },
              { opacity: 0, height: "0%", ease: "power2.out" }
            )
            .fromTo(
              ".about-wrapper-header  p",
              0.5,
              { opacity: 0.7 },
              { opacity: 0, ease: "power2.out" }
            )
            .fromTo(
              ".about-wrapper",
              0.6,
              { height: "100vh" },
              { height: "0vh" }
            )
            .fromTo(
              ".projects-wrapper",
              1,
              { height: "0vh", visibility: "hidden", zIndex: 2, opacity: 0 },
              {
                height: "100vh",
                visibility: "visible",
                opacity: 1,
                zIndex: 4,
                ease: "power2.out"
              }
            )
            .fromTo(
              ".project",
              1,
              { opacity: 0, height: "0%", ease: "power2.out" },
              { opacity: 1, height: "100%", ease: "power2.out" }
            );

          if (reverse) {
            this.currentSlide = this.currentSlide - 1;
            animation.progress(1).reverse();
          } else {
            animation.play();
          }
        }
        if (page === "contact") {
          animation = tl
            .fromTo(".project", 1, { opacity: 1 }, { opacity: 0 })
            .fromTo(
              ".projects-wrapper",
              1,
              { height: "100vh", zIndex: 4, opacity: 1 },
              {
                height: "0vh",
                opacity: 1,
                zIndex: 2,
                ease: "power2.out"
              }
            )
            .fromTo(
              ".contact-wrapper",
              1,
              { height: "0vh", visibility: "hidden", zIndex: 2, opacity: 0 },
              {
                height: "100vh",
                visibility: "visible",
                opacity: 1,
                zIndex: 4,
                ease: "power2.out"
              }
            )
            .fromTo(".contact", 1, { opacity: 0 }, { opacity: 1 });

          if (reverse) {
            this.currentSlide = this.currentSlide - 1;
            animation.progress(1).reverse();
          } else {
            animation.play();
          }
        }
      }
      // animation.reversed( animation.reversed() );
    },
    scrollNext(reverse) {
      if (
        this.slides[this.currentSlide] &&
        this.slides[this.currentSlide].name
      ) {
        if (this.$refs[this.slides[this.currentSlide].name]) {
          let name = "";
          if (reverse) {
            // this.currentSlide = this.currentSlide - 1;
            // console.log(this.currentSlide)

            name = this.slides[this.currentSlide].name;
          } else {
            this.currentSlide = this.currentSlide + 1;
            name = this.slides[this.currentSlide].name;
          }
          console.log(this.currentSlide, name, reverse);
          this.animateTo(name, reverse);
        }
      }
    },
    animateProjectImage() {
      //@/assets/fonts/BaobabProjects.png
    },
    scrollTo(id) {
      this.currentSlide = id;
      this.scrollNext(false);
      console.log(id);
    }
  },
  mounted() {
    // this.type();
    var WheelIndicator = require("wheel-indicator");
    let self = this;
    console.log(this.isTyping);
    var indicator = new WheelIndicator({
      elem: document.querySelector("body"),
      callback: function(e) {
        if (e.direction == "down") {
          if (
            self.isAnimating == false &&
            self.slides[self.currentSlide].next != ""
          ) {
            console.log(self.slides[self.currentSlide]);
            if (self.slides[self.currentSlide].name === "header") {
              self.scrollNext(false);
            } else {
              if (self.isTyping === false) {
                self.scrollNext(false);
              }
            }
          }
        } else {
          // self.currentSlide = self.currentSlide - 1;
          // self.scrollNext();
          if (
            self.isAnimating == false &&
            self.slides[self.currentSlide].prev != ""
          ) {
            self.scrollNext(true);
          }
        }
      }
    });

    //The method call
    indicator.getOption("preventMouse"); // true
    this.setCloud();
    let tl = gsap.timeline();
    // tl.fromTo("#fog", 2, { height: "0%" }, { height: "80vh" });
    tl.from(".header-content > h2", 1.3, {
      delay: 1,
      y: -10,
      opacity: 0,
      ease: "expo.out"
    })
      .fromTo(
        ".header-content .tag",
        1.4,
        {
          height: "0",
          opacity: 0
        },
        {
          height: "100%",
          opacity: 1,
          ease: "power1.out"
        }
      )
      .fromTo(
        ".top-menu",
        1.44,
        {
          height: 0,
          opacity: 0
        },
        {
          height: "auto",
          opacity: 1,
          ease: "circ.out"
        }
      )
      .fromTo(
        ".item-header",
        1.5,
        {
          height: 0,
          opacity: 0
        },
        {
          height: "auto",
          opacity: 1,
          ease: "circ.out"
        }
      );

    //image hover effect
    var ani = new hoverEffect({
      parent: document.querySelector("#profile-img"),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: require("@/assets/fonts/me-1.jpg"),
      image2:
        "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/54512216_2306578392719374_3824684119431591285_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vQOKLuJw0ugAX8EgRRE&oh=425fc9feea8b8afd55f0393d091e9b8d&oe=5EDC2F0A",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice2.jpg"
    });

    var ani = new hoverEffect({
      parent: document.querySelector(".p-img-wrapper"),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: "../assets/fonts/me-1.jpg",
      image2:
        "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/54512216_2306578392719374_3824684119431591285_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vQOKLuJw0ugAX8EgRRE&oh=425fc9feea8b8afd55f0393d091e9b8d&oe=5EDC2F0A",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/ice2.jpg"
    });
  },
  watch: {
    isTyping: function(val) {
      if (val === false) {
        console.log(require("@/helpers/profile_distort.js"));
      }
    }
  }
};
</script>
