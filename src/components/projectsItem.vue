<template>
  <!-- <b-row class="projects align-self-center px-5" align-h="center"> -->
  <b-col cols="6" v-bind:folio="folio" class="project-item w-75">
    <!-- <img v-bind:src="require('./assets/'${folio.image}'')"/> -->
    <!-- <img :src="'images/' + folio.image" alt="movie poster"> -->
    <!-- <img :src="'./assets/'+folio.image+'.png'" alt="movie poster"> -->
    <!-- <img alt="Vue logo" src="'../assets/'${folio.image}" /> -->
    <div class="portImage">
      <img
        src="https://sekko.qodeinteractive.com/wp-content/uploads/2018/08/h1-img-1.jpg"
      />
    </div>

    <div class="portTitle">
      <h5>{{ folio.category }}</h5>
      <h2>{{ folio.title }}</h2>
    </div>
  </b-col>
  <!-- </b-row> -->
</template>

<script>
export default {
  name: "projectsItem",
  props: ["folio"]
};
</script>

<style lang="scss">
.project-item {
  background-color: $blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  margin-bottom: 100px;

  .portImage {
    max-width: 100%;
    margin: 0 auto;

    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
    -webkit-transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-property: clip-path;

    &:hover {
      -webkit-clip-path: inset(30px 30px 30px 30px);
      clip-path: inset(30px 30px 30px 30px);
    }

    img {
      width: 100%;
    }
  }
}

// .projects:nth-child(2) .portImage:hover {
// }

// .projects:nth-child(2) .portImage {
//     height: 70%;
//     width: 70%;
//     transition-property: width;
//     transition-property: height;
//     overflow: hidden;
// }

// .projects:nth-child(2) .portImage:before {
//     height: 70%;
//     width: 70%;
//     transition-property: width;
//     transition-property: height;
//     overflow: hidden;
// }

// .projects:nth-child(2) .portImage:hover {
//     height: 65%;
//     width: 65%;
//     transition: all .2s ease-in-out;
// }
</style>
