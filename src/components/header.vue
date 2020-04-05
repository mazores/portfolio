<template>
  <div>
    <nav>
      <a href="#" v-scroll-to="'#top'">
        <div class="logo" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="3000" data-aos-easing="ease-out-back">
          <img src="@/assets/logo.svg" alt="Mikka Azores cover photo" />
        </div>
      </a>

      <ul>
        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="2000" data-aos-easing="ease-out-back"><a href="#" v-scroll-to="'#top'">Home</a></li>
        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="2100" data-aos-easing="ease-out-back"><a href="#" v-scroll-to="'#about'">About</a></li>
        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="2200" data-aos-easing="ease-out-back"><a href="#" v-scroll-to="'#projects'">Work</a></li>
        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="2300" data-aos-easing="ease-out-back"><a href="#" v-scroll-to="'#testimonials'">What People Say</a></li>
        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="2400" data-aos-easing="ease-out-back"><a href="#" v-scroll-to="'#contact'">Contact</a></li>
      </ul>
    </nav>

    <nav class="scrolling-nav"
      data-aos="fade-down"
      data-aos-anchor="#trigger-nav"
      data-aos-anchor-placement="center-center">
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

export default {
  name: "headernav",
  components: {
    // FixedHeader
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px;
  margin-bottom: 20px;

  .logo {
    img {
      &:hover {
        -webkit-transition: all 200ms ease 0s;
        -webkit-transform: scale(1.1); 
        -ms-transition: all 200ms ease 0s;
        -ms-transform: scale(1.1); 
        -moz-transition: all 200ms ease 0s;
        -moz-transformz : scale(1.1);
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
        //font-size: 28px;
        font-size: 1.56vw;
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

  .logo {
    img {
      width: 70%;
    }
  }

  ul {
    li {
      a {
        font-size: 1.0vw;

        &:hover {
          color: $yellow;
        }

        &:after {
          height: 5px;
          bottom: 0;
          background: $red;
        }
      }
    }
  }
}
</style>
