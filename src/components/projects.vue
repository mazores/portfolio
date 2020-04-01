<template>
  <b-container fluid class="projectsContainer px-5">
    <h1>Projects</h1>
    <b-row
      class="projects align-self-center pt-5 px-5"
      align-h="center"
      align-v="center"
    >
      <!-- HERE -->
      <!-- <projectsItem v-for="folio in folios" :key="folio.id" v-bind:folio="folio v-if=""" /> -->
      <b-col
        cols="5"
        class="project-item w-100"
        v-for="folio in folios"
        :key="folio.id"
        v-bind:folio="folio"
      >
        <!-- Portfolio featured image -->
        <div class="portImage">
          <img
            :src="require(`@/assets/port-cover-${folio.cover}`)"
            alt
            class="icon"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
            data-aos-delay="350"
          />
        </div>

        <!-- Portfolio Title -->
        <router-link :to="{ name: 'Project', params: { id: `${folio.id}` } }">
          <div class="portTitle" data-aos="fade" data-aos-duration="600">
            <ul>
                <li v-for="category in folio.categoriesList" :key="category.categoryId">
                    <a href="#">{{ category.multimedia }}</a>
                </li>
            </ul>
            <!-- <h5>{{ folio.category }}</h5> -->
            <h2>{{ folio.title }}</h2>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
//import projectsItem from "./projectsItem";
//import Parallax from "vue-parallaxy";

export default {
  name: "projects",
  components: {
    //Parallax
  },
  props: ["folios"]
};
</script>

<style lang="scss">
.projectsContainer {
  padding-top: 100px;

  h1 {
    color: $red;
  }

  .projects {
    margin: 0 auto;

    .project-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      text-align: center;
      margin-bottom: 100px;

        .portImage {
            width: 100%;
            margin: 0 auto;
            margin-bottom: 25px;
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

    .portTitle {
        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            margin-bottom: 5px;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            padding-inline-start: 0;

            li {
                display: inline;
                padding: 0 5px;
                a {
                    color: $red;
                    margin: 0;
                }
            }
        }

        h2 {
          color: $red;
        }

        h5 {
          color: $red;
        }
      }
    }
  }
}

.project-item:nth-child(2),
.project-item:nth-child(3),
.project-item:nth-child(6),
.project-item:nth-child(7),
.project-item:nth-child(10) {
  width: 30% !important;
  .portImage {
    width: 80% !important;
  }
}
</style>
