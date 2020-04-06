<template>
  <div id="top">
    <!-- MOBILE -->
    <div class="mobile-open-container" v-bind:class="{ open: isActive }">
      <div class="mobile-open">
        <div class="mobile-open-nav">
          <img
            src="@/assets/logo.svg"
            alt="Mikka Azores cover photo"
            class="logo"
          />
          <img
            @click="isActive = !isActive"
            src="@/assets/icon-close.svg"
            alt="close button"
            class="close-button"
          />
        </div>

        <ul>
          <li
            @click="isActive = !isActive"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="2000"
            data-aos-easing="ease-out-back"
          >
            <a href="#" v-scroll-to="'#top'">Home</a>
          </li>
          <li
            @click="isActive = !isActive"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="2100"
            data-aos-easing="ease-out-back"
          >
            <a href="#" v-scroll-to="'#about'">About</a>
          </li>
          <li
            @click="isActive = !isActive"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="2200"
            data-aos-easing="ease-out-back"
          >
            <a href="#" v-scroll-to="'#projects'">Work</a>
          </li>
          <li
            @click="isActive = !isActive"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="2300"
            data-aos-easing="ease-out-back"
          >
            <a href="#" v-scroll-to="'#testimonials'">What People Say</a>
          </li>
          <li
            @click="isActive = !isActive"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="2400"
            data-aos-easing="ease-out-back"
          >
            <a href="#" v-scroll-to="'#contact'">Contact</a>
          </li>
        </ul>
      </div>
    </div>

    <nav
      class="scrolling-nav-mobile"
      data-aos="fade-down"
      data-aos-anchor="#trigger-nav"
      data-aos-anchor-placement="center-center"
    >
      <div
        class="logo"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="3000"
        data-aos-easing="ease-out-back"
      >
        <img src="@/assets/logo.svg" alt="Mikka Azores cover photo" />
      </div>

      <div
        class="burger-menu"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="2300"
        data-aos-easing="ease-out-back"
      >
        <img
          @click="isActive = !isActive"
          src="@/assets/icon-burger.svg"
          alt="Burger Menu"
        />
      </div>
    </nav>

    <nav class="mobile">
      <a href="#" v-scroll-to="'#top'">
        <div
          class="logo"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="3000"
          data-aos-easing="ease-out-back"
        >
          <img src="@/assets/logo.svg" alt="Mikka Azores cover photo" />
        </div>
      </a>

      <div
        class="burger-menu"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="2300"
        data-aos-easing="ease-out-back"
      >
        <img
          @click="isActive = !isActive"
          src="@/assets/icon-burger.svg"
          alt="Burger Menu"
        />
      </div>
    </nav>

    <!-- DESKTOP -->
    <nav class="tablet">
      <a href="#" v-scroll-to="'#top'">
        <div
          class="logo"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-delay="3000"
          data-aos-easing="ease-out-back"
        >
          <img src="@/assets/logo.svg" alt="Mikka Azores cover photo" />
        </div>
      </a>

      <ul>
        <li
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="2000"
          data-aos-easing="ease-out-back"
        >
          <a href="#" v-scroll-to="'#top'">Home</a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="2100"
          data-aos-easing="ease-out-back"
        >
          <a href="#" v-scroll-to="'#about'">About</a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="2200"
          data-aos-easing="ease-out-back"
        >
          <a href="#" v-scroll-to="'#projects'">Work</a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="2300"
          data-aos-easing="ease-out-back"
        >
          <a href="#" v-scroll-to="'#testimonials'">What People Say</a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="2400"
          data-aos-easing="ease-out-back"
        >
          <a href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
    </nav>

    <nav
      class="scrolling-nav"
      data-aos="fade-down"
      data-aos-anchor="#trigger-nav"
      data-aos-anchor-placement="center-center"
    >
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Mikka Azores cover photo" />
      </div>

      <ul>
        <li><a href="#" v-scroll-to="'#top'">Home</a></li>
        <li><a href="#" v-scroll-to="'#about'">About</a></li>
        <li><a href="#" v-scroll-to="'#projects'">Work</a></li>
        <li><a href="#" v-scroll-to="'#testimonials'">What People Say</a></li>
        <li><a href="#" v-scroll-to="'#contact'">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import FixedHeader from 'vue-fixed-header';
// import { Push } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  name: "headernav",
  components: {
    // Push
    // FixedHeader
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    // openNav: function() {
    // isActive = !isActive;
    // }
  }
};
</script>

<style lang="scss" scoped>
.tablet,
.scrolling-nav {
  display: none;
}
nav {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 20px 20px 0;
  margin-bottom: 0;

  .logo {
    img {
      width: 65%;
      padding: 0;
      margin: 0;

      &:hover {
        -webkit-transition: all 200ms ease 0s;
        -webkit-transform: scale(1.1);
        -ms-transition: all 200ms ease 0s;
        -ms-transform: scale(1.1);
        -moz-transition: all 200ms ease 0s;
        -moz-transformz: scale(1.1);
        transition: all 200ms ease 0s;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  .burger-menu {
    img {
      opacity: 1;
      transition: transform 1s, opacity 1s ease;

      &:hover,
      :active {
        opacity: 0;
        transform: rotate(90deg) scale(0);
      }
    }
  }
}

.mobile-open-container {
  width: 100vw;
  height: 100vh;
  z-index: 600;
  position: fixed;
  background-color: $navy;
  right: -100vw;
  transition: right 1s ease-in-out 0.1s;

  .mobile-open {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    padding: 20px 20px;

    .mobile-open-nav {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      img {
        width: 30%;
        padding: 0;
        margin: 0;
      }

      img.close-button {
        width: 10%;
        transition: transform 0.4s, opacity 1s ease;

        &:active {
          opacity: 0;
          transform: rotate(90deg) scale(0);
        }
      }
    }

    ul {
      text-decoration: none;
      list-style-type: none;
      margin-block-start: 0 !important;
      margin-block-end: 0 !important;
      margin-inline-start: 0 !important;
      margin-inline-end: 0 !important;
      padding-inline-start: 0 !important;
      margin: 0 auto;
      height: 80vh;
      padding-top: 80px;

      li {
        display: block;

        a {
          color: $blue;
          font-family: $Poppins;
          font-size: 28px;
          // font-size: 1.56vw;
          font-weight: 700;
          text-decoration: none;
          position: relative;
          text-transform: lowercase;
          transition: color 0.5s ease 0s;

          &:hover {
            color: $yellow;
          }

          &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 5px;
            content: "";
            display: block;
            height: 10px;
            left: 0;
            position: absolute;
            background: $red;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
            z-index: -3;
          }

          &:hover:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }
}

.open {
  right: 0vw !important;
}

.scrolling-nav-mobile {
  z-index: 500;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 15px 25px 15px 0;
  background-color: $navy;
  opacity: 0.8;
  align-items: center !important;

  .logo {
    img {
      width: 50%;
    }
  }
}

@media screen and (min-width: 375px) {
  .mobile-open-container {
    .mobile-open {
      ul {
        padding-top: 150px;
      }
    }
  }
}

// TABLET
@media screen and (min-width: 768px) {
  .mobile,
  .mobile-open-container {
    display: none;
  }

  .tablet {
    display: block;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 50px 50px;
    margin-bottom: 20px;

    .logo {
      img {
        width: 100%;

        &:hover {
          -webkit-transition: all 200ms ease 0s;
          -webkit-transform: scale(1.1);
          -ms-transition: all 200ms ease 0s;
          -ms-transform: scale(1.1);
          -moz-transition: all 200ms ease 0s;
          -moz-transformz: scale(1.1);
          transition: all 200ms ease 0s;
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }

    ul {
      text-decoration: none;
      list-style-type: none;

      li {
        display: inline-block;
        margin-left: 2.79vw;

        a {
          color: $blue;
          font-family: $Poppins;
          font-size: 18px;
          // font-size: 1.56vw;
          font-weight: 700;
          text-decoration: none;
          position: relative;
          text-transform: lowercase;
          transition: color 0.5s ease 0s;

          &:hover {
            color: $red;
          }

          &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 5px;
            content: "";
            display: block;
            height: 10px;
            left: 0;
            position: absolute;
            background: $yellow;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
            z-index: -3;
          }

          &:hover:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }

  .scrolling-nav {
    z-index: 500;
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 20px 50px;
    background-color: $navy;
    opacity: 0.8;
    display: flex;
    flex-direction: row;
    align-items: center;

    .logo {
      img {
        width: 70%;
      }
    }

    ul {
      text-decoration: none;
      list-style-type: none;

      li {
        display: inline-block;
        margin-left: 2.79vw;

        a {
          color: $blue;
          font-family: $Poppins;
          font-size: 18px;
          // font-size: 1.56vw;
          font-weight: 700;
          text-decoration: none;
          position: relative;
          text-transform: lowercase;
          transition: color 0.5s ease 0s;

          &:hover {
            color: $yellow;
          }

          &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 5px;
            content: "";
            display: block;
            height: 5px;
            left: 0;
            position: absolute;
            background: $red;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
            z-index: -3;
          }

          &:hover:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }
}

// DESKTOP
@media screen and (min-width: 1024px) {
  .tablet {
    ul {
      li {
        a {
          font-size: 28px;
        }
      }
    }
  }
  .scrolling-nav {
    ul {
      li {
        a {
          font-size: 18px;
        }
      }
    }
  }
}
// @media screen and (max-width:375px) {
//   nav {
//     padding: 10px 15px;
//     margin-bottom: 20px;

//     .logo {
//       img {
//         width: 70%;

//         &:hover {
//           -webkit-transition: all 200ms ease 0s;
//           -webkit-transform: scale(1.1);
//           -ms-transition: all 200ms ease 0s;
//           -ms-transform: scale(1.1);
//           -moz-transition: all 200ms ease 0s;
//           -moz-transformz : scale(1.1);
//           transition: all 200ms ease 0s;
//           transform: scale(1.1);
//           cursor: pointer;
//         }
//       }
//     }

//     ul {
//       text-decoration: none;
//       list-style-type: none;
//       padding: 0;x

//       li {
//         display: inline-block;
//         margin-left: 2.79vw;

//         a {
//           color: $blue;
//           font-family: $Poppins;
//           font-size: 12px;
//           // font-size: 1.56vw;
//           font-weight: 700;
//           text-decoration: none;
//           position: relative;
//           text-transform: lowercase;
//           transition: color 0.5s ease 0s;

//           &:hover {
//             color: $red;
//           }

//           &:after {
//             background: none repeat scroll 0 0 transparent;
//             bottom: 5px;
//             content: "";
//             display: block;
//             height: 10px;
//             left: 0;
//             position: absolute;
//             background: $yellow;
//             transition: width 0.3s ease 0s, left 0.3s ease 0s;
//             width: 0;
//             z-index: -3;
//           }

//           &:hover:after {
//             width: 100%;
//             left: 0;
//           }
//         }
//       }
//     }
//   }
// }
</style>
