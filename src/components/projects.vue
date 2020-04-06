<template>
  <b-container fluid class="projectsContainer px-m-5">
    <h1>Projects</h1>
    <b-row
      class="projects align-self-center pt-5 px-m-5"
      align-h="center"
      align-v="center"
    >
      <!-- HERE -->
      <!-- <projectsItem v-for="folio in folios" :key="folio.id" v-bind:folio="folio v-if=""" /> -->
      <b-col
        cols="12"
        sm="5"
        class="project-item w-100"
        v-for="folio in folios"
        :key="folio.id"
        v-bind:folio="folio"
      >
        <kinesis-container>
          <!-- Portfolio featured image -->
          <router-link :to="{ name: 'Project', params: { id: `${folio.id}` } }">
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
            <div class="portTitle" data-aos="fade" data-aos-duration="600">
              <kinesis-element :strength="3" axis="x">
                <ul>
                  <li
                    v-for="category in folio.categoriesList"
                    :key="category.categoryId"
                  >
                    <h5>{{ category.multimedia }}</h5>
                  </li>
                </ul>
              </kinesis-element>
              <!-- <h5>{{ folio.category }}</h5> -->
              <kinesis-element :strength="10">
                <h2>{{ folio.title }}</h2>
              </kinesis-element>
            </div>
          </router-link>
        </kinesis-container>
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

    a {
      text-decoration: none;
    }

    .project-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      text-align: center;
      margin-bottom: 80px;

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

          &:hover {
            cursor: pointer;
          }
        }
      }

      .portTitle {
        position: relative;
        width: auto;

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          margin-bottom: 5px;
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0;
          padding-inline-start: 0;
          text-decoration: none !important;

          li {
            display: inline;
            padding: 0 5px;
            position: relative;

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

            h5 {
              color: $red;
              margin: 0;
              text-decoration: none !important;
              text-transform: uppercase;
              letter-spacing: 2px;
              display: inline-block;

              &:hover {
                text-decoration: none;
              }
            }
          }
        }

        h2 {
          color: $red;
          text-decoration: none;
          transition: text-shadow 0.2s, color 0.4s;
          margin-top: 10px;

          &:hover {
            text-shadow: 2px 2px $red;
            color: $yellow;
          }

          h5 {
            color: $red;
          }
        }
      }
    }
  }

  .project-item:nth-child(2),
  .project-item:nth-child(4),
  .project-item:nth-child(6),
  .project-item:nth-child(8),
  .project-item:nth-child(10) {
    width: 30%;

    .portImage {
      width: 80%;
    }
  }
}

// TABLET
@media screen and (min-width: 720px) {
  .projects-Container {
    .projects {
      .project-item {
        margin-bottom: 100px;
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

  .project-item:nth-child(4),
  .project-item:nth-child(8) {
    width: 100% !important;

    .portImage {
      width: 100% !important;

      img {
        width: 100% !important;
      }
    }
  }
}

// .projectsContainer {
//   padding-top: 100px;

//   h1 {
//     color: $red;
//   }

//   .projects {
//     margin: 0 auto;

//     a { text-decoration: none; }

//     .project-item {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       align-content: center;
//       text-align: center;
//       margin-bottom: 100px;

//       .portImage {
//         width: 100%;
//         margin: 0 auto;
//         margin-bottom: 25px;
//         -webkit-clip-path: inset(0 0 0 0);
//         clip-path: inset(0 0 0 0);
//         -webkit-transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
//         transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
//         transition-property: clip-path;

//         &:hover {
//           -webkit-clip-path: inset(30px 30px 30px 30px);
//           clip-path: inset(30px 30px 30px 30px);
//         }

//         img {
//           width: 100%;

//           &:hover {
//             cursor: pointer;
//           }
//         }
//       }

//       .portTitle {
//         position: relative;
//         width: auto;

//         ul {
//           list-style-type: none;
//           padding: 0;
//           margin: 0;
//           margin-bottom: 5px;
//           margin-block-start: 0;
//           margin-block-end: 0;
//           margin-inline-start: 0;
//           padding-inline-start: 0;
//           text-decoration: none!important;

//           li {
//             display: inline;
//             padding: 0 5px;
//             position: relative;

//             &:hover {
//               color: $red;
//             }

//             &:after {
//               background: none repeat scroll 0 0 transparent;
//               bottom: 5px;
//               content: "";
//               display: block;
//               height: 10px;
//               left: 0;
//               position: absolute;
//               background: $yellow;
//               transition: width 0.3s ease 0s, left 0.3s ease 0s;
//               width: 0;
//               z-index: -3;
//             }

//             &:hover:after {
//               width: 100%;
//               left: 0;
//             }

//             a {
//               color: $red;
//               margin: 0;
//               text-decoration: none!important;
//               text-transform: uppercase;
//               letter-spacing: 2px;

//               &:hover {
//                 text-decoration: none;
//               }
//             }
//           }
//         }

//         h2 {
//           color: $red;
//           text-decoration: none;
//           transition: text-shadow 0.2s, color 0.4s;
//           margin-top: 10px;

//           &:hover {
//             text-shadow: 2px 2px $red;
//             color: $yellow;
//           }

//         h5 {
//           color: $red;
//         }
//       }
//     }
//   }
//   }
</style>
