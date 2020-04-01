<template>
  <!-- <fixed-header :threshold="0"> -->
  <div>
    <nav>
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
    <!-- <b-navbar sticky class="d-flex justify-content-between">
            <b-navbar-brand href="#">
                <img alt="Mikka Azores logo" src="/docs/4.4/assets/brand/bootstrap-solid.svg" />
            </b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav right>
                    <b-nav-item href="#" active>Home</b-nav-item>
                    <b-nav-item href="#">About</b-nav-item>
                    <b-nav-item href="#">Work</b-nav-item>
                    <b-nav-item href="#">What People Say</b-nav-item>
                    <b-nav-item href="#">Contact</b-nav-item>
                </b-navbar-nav>   
            </b-collapse>
        </b-navbar>  -->
  </div>
  <!-- </fixed-header> -->
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
      }
    }
  }
}
</style>
