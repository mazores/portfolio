<template>
  <div class="home">
    <headernav />
    <hello />
    <about id="about" />
    <projects v-bind:folios="folios" id="projects" />
    <testimonials id="testimonials" />
    <contact id="contact" />
    <footercomp />
  </div>
</template>

<script>
// @ is an alias to /src
import headernav from "@/components/header";
import hello from "@/components/hello";
import about from "@/components/about";
import projects from "@/components/projects";
import testimonials from "@/components/testimonials";
import contact from "@/components/contact";
import footercomp from "@/components/footer";

export default {
  name: "Home",
  components: {
    headernav,
    hello,
    about,
    projects,
    testimonials,
    contact,
    footercomp
  },
  data() {
    return {
      folios: [
        {
          id: 1,
          title: "Meet HIV",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "UI/UX"
            },
            {
              categoryId: 2,
              multimedia: "Motion"
            },
            {
              categoryId: 3,
              multimedia: "Design"
            },
            {
              categoryId: 4,
              multimedia: "Web"
            }
          ],
          cover: "meethiv.png"
        },
        {
          id: 2,
          title: "Stories from the Grain",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Web"
            },
            {
              categoryId: 2,
              multimedia: "Motion"
            },
            {
              categoryId: 3,
              multimedia: "Design"
            }
          ],
          cover: "storiesfromthegrain.png"
        },

        {
          id: 3,
          title: "Araw-Araw Desserts",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Web"
            },
            {
              categoryId: 2,
              multimedia: "Photography"
            }
          ],
          cover: "araw.png"
        },

        {
          id: 4,
          title: "In Motion",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            },
            {
              categoryId: 2,
              multimedia: "Branding"
            }
          ],
          cover: "inmotion.png"
        },

        {
          id: 5,
          title: "Maybelline",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Design"
            },
            {
              categoryId: 2,
              multimedia: "Motion"
            }
          ],
          cover: "mny.png"
        },

        {
          id: 6,
          title: "Thermal Security",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            }
          ],
          cover: "thermo.png"
        },

        {
          id: 7,
          title: "Ontario Summer",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            },
            {
              categoryId: 2,
              multimedia: "UI/UX"
            }
          ],
          cover: "osummer.jpg"
        },

        {
          id: 8,
          title: "Menstrual Cup Ad",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            }
          ],
          cover: "cup.png"
        },

        {
          id: 9,
          title: "Glossier",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            }
          ],
          cover: "glossier.png"
        },

        {
          id: 10,
          title: "Yellow Cab App",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "UI/UX"
            },
            {
              categoryId: 2,
              multimedia: "Design"
            }
          ],
          cover: "yellowcab.png"
        }
      ]
    };
  }
};
</script>
