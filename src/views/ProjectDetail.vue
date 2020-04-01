<template>
    <div class="project-details">
        <div class="project-nav">
            <router-link :to="{ name: 'Project', params: { id: `${previousFolio}` } }">
            <b-button class="project-nav-button">
                <img
                    src="@/assets/icon-arrow-back.svg"
                    alt="previous project button"
                    class="previous"
                />
                <p>Previous Project</p>
            </b-button>
            </router-link>
            
            <router-link to="/">
            <b-button class="project-nav-button to-projects">
                <img
                    src="@/assets/icon-projects.svg"
                    alt="back to projects button"
                    class="to-projects"
                />
            </b-button>
            </router-link>

            <router-link :to="{ name: 'Project', params: { id: nextFolio } }">
            <b-button class="project-nav-button">
                <p>Next Project</p>
                <img
                    src="@/assets/icon-arrow-next.svg"
                    alt="next project button"
                    class="next"
                />
            </b-button>
            </router-link>
        </div>

        <section class="project-hero-container"
        v-for="folio in currentFolio"
        :key="folio.id"
        v-bind:folio="folio"
        > 
            <!-- HERO SECTION -->
            <div class="project-details-hero">
                <div>
                    <!-- VIDEO -->
                    <!-- Hero image -->
                        <div v-if="folio.herovideo" class="heroimgContainer">
                        <!-- Play button -->
                            <img
                                src="@/assets/icon-play.svg"
                                alt="play button"
                                class="play"
                                v-b-modal.modal-hero
                            />
                        <!-- Hero Image -->
                            <img
                                :src="require(`@/assets/port-hero-${folio.heroimage}`)"
                                alt
                                class="icon"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="600"
                                data-aos-delay="350"
                                v-b-modal.modal-hero
                            />
                        </div>

                        <div v-else class="heroimgContainer">
                        <!-- Hero Image -->
                            <img
                                :src="require(`@/assets/port-hero-${folio.heroimage}`)"
                                alt
                                class="icon"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="600"
                                data-aos-delay="350"
                            />
                        </div>
                </div>

                <!-- Scroll down -->
                <div class="scroll-down-container">
                    <b-button class="scroll-down" v-scroll-to="'#portfolio-scroll'">
                        <img
                            src="@/assets/icon-arrow-down.svg"
                            alt="arrow pointing down"
                        />
                    </b-button>
                </div>
            </div>
        </section>
    
        <!-- Red and Yellow Border -->
        <div class="border-design red" id="portfolio-scroll"
        data-aos="slide-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        >
        </div>

        <div class="border-design yellow"
        data-aos="slide-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
        data-aos-delay="250"
        >
        </div>
    <!-- END OF HERO SECTION -->

    <!-- PROJECT DETAILS -->
    <b-container
        v-for="folio in currentFolio"
        :key="folio.id"
        v-bind:folio="folio"
    >
        <b-row class="project-details-description justify-content-center pt-5" h-align="center">
            <!-- Left Column -->
            <b-col class="project-info" md="3"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="600"
                data-aos-delay="450">
                <ul class="project-category">
                    <li v-for="category in folio.categoriesList" :key="category.categoryId">
                        <h5>{{ category.multimedia }}</h5>
                    </li>
                </ul>

                <h2>{{ folio.title }}</h2>

                <div class="role" v-if="folio.rolesList">
                    <h4>Role</h4>
                    <ul>
                        <li v-for="role in folio.rolesList" :key="role.roleId">
                            <p>{{ role.job }}</p>
                        </li>
                    </ul>
                </div>

                <div class="team" v-if="folio.teamList">
                    <h4>Team</h4>
                    <ul>
                        <li v-for="team in folio.teamList" :key="team.member">
                            <p>{{ team.member }}</p>
                        </li>
                    </ul>
                </div>

                <!-- <div class="technologies" v-if="folio.technologyList">
                    <h4>Technologies</h4>
                    <ul>
                        <li v-for="technology in folio.technologyList" :key="technology.tech">
                            <p>{{ technology.tech }}</p>
                        </li>
                    </ul>
                </div> -->

                <div class="award" v-if="folio.award">
                    <h4>Award</h4>
                    <p>{{ folio.award }}</p>
                </div>
                
            </b-col>

            <!-- Right Column -->
            <b-col md="4" class="project-description"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="600"
                data-aos-delay="650">
                <h4>Project Description</h4>
                <ul>
                    <li v-for="description in folio.descriptions" :key="description.descriptionId">
                        <p>{{ description.paragraph }}</p>
                    </li>
                </ul>
            </b-col>
        </b-row>

        <b-row class="project-images justify-content-center pt-5" h-align="center">
            <!-- Images -->
            <b-col cols="12">
                <ul>
                    <li 
                        v-for="image in folio.images" :key="image.imageId"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="500"
                        data-aos-delay="250"
                        >
                        <img
                            :src="require(`@/assets/port-${image.visual}`)"
                            alt
                            class="portfolio-img"
                        />
                    </li>
                </ul>
            </b-col>
        </b-row>
    </b-container>

    <!-- Hero Video Lightbox -->
    <b-modal
        id="modal-hero"
        centered
        title="Modal for Hero"
        size="lg"
        busy="true"
        hide-footer
        modal-class="modal-container"
        content-class="modal-content"
        header-class="modal-header"
        body-class="modal-body"
    >
        <div 
            class="herovideoCont" 
            v-for="folio in currentFolio"
            :key="folio.id"
            v-bind:folio="folio"
        >
            <youtube :video-id="folio.videoId" class="herovideo" :resize="true" />
        </div>
    </b-modal>
<footercomp />
</div>

  <!-- <img :src="require(`@/assets/${folio.image}.png`)" alt class="icon"  -->
  <!-- <div class="sample" v-bind:folio="folio" v-for="folio in folios" :key="folio.id"> -->
  <!-- v-for="folio in folios[`${this.id}`]"  -->
  <!-- | filterBy {{ this.id }} in 'id' -->
</template>

<script>
import footercomp from "@/components/footer";

export default {
  name: "Project", //named on index.js
  components: {
      footercomp
  },
  // props: ["folios"],
  data() {
    return {
        folioId: this.$route.params.id,
        folios: [
        {
            id: 1,
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
            cover: "storiesfromthegrain.png",
            herovideo: "hi",
            videoId: "LluTzO057Sw",
            heroimage: "storiesfromthegrain.png",
            rolesList: [
                {
                    roleId: 1,
                    job: "Researcher"
                },
                {
                    roleId: 2,
                    job: "Multimedia Specialist"
                }
            ],
            award: "Top 10 Capstone Finalists",
            descriptions: [
                {
                    descriptionId: 1,
                    paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                },
                {
                    descriptionId: 2,
                    paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                },
                {
                    descriptionId: 3,
                    paragraph: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                }
            ],
            images: [
                {
                    imageId: 1,
                    visual: "storiesfromthegrain01.gif"
                },
                {
                    imageId: 2,
                    visual: "storiesfromthegrain02.png"
                },
                {
                    imageId: 3,
                    visual: "storiesfromthegrain03.png"
                },
                {
                    imageId: 4,
                    visual: "storiesfromthegrain04.png"
                },
                {
                    imageId: 5,
                    visual: "storiesfromthegrain05.png"
                },
                {
                    imageId: 6,
                    visual: "storiesfromthegrain06.jpg"
                },
                {
                    imageId: 7,
                    visual: "storiesfromthegrain07.png"
                },
                {
                    imageId: 8,
                    visual: "storiesfromthegrain08.png"
                },
                {
                    imageId: 9,
                    visual: "storiesfromthegrain09.png"
                },
                
            ]
        },
        {
            id: 2,
            title: "Meet HIV",
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
            cover: "storiesfromthegrain.png",
            herovideo: "hi",
            heroimage: "storiesfromthegrain.png",
            rolesList: [
                {
                    roleId: 1,
                    job: "Project Manager"
                }
            ],
            teamList: [
                {
                    member: "Ifekitan Obasa"
                },
                {
                    member: "Nour Al-Osman"
                },
                {
                    member: "Taylor Dronfield"
                },
                {
                    member: "Phrabjot Kaur"
                }
            ],
        },
        {
            id: 3,
            title: "Glossier",
            categoriesList: [
                {
                    categoryId: 1,
                    multimedia: "Motion"
                }
            ],
            cover: "glossier.png",
            herovideo: "hi",
            heroimage: "glossier.png"
        },

        {
            id: 4,
            title: "Araw-Araw Desserts",
            categoriesList: [
                {
                    categoryId: 1,
                    multimedia: "Web"
                }
            ],
            cover: "araw.png",
            herovideo: "",
            heroimage: "araw.png"
        },

        {
            id: 5,
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
            cover: "yellowcab.png",
            herovideo: "",
            heroimage: "yellowcab.png"
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
            cover: "thermo.png",
            herovideo: "hi",
            heroimage: "thermo.png",
            rolesList: [
                {
                    roleId: 1,
                    job: "Motion Designer"
                }
            ],
            teamList: [
                {
                    member: "Kateh Mayman"
                },
                {
                    member: "Megan Nguyen"
                },
                {
                    member: "Daffodil Ho"
                },
                {
                    member: "Nour Al-Osman"
                }
            ]
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
            cover: "osummer.jpg",
            herovideo: "hi",
            heroimage: "osummer.png",
            rolesList: [
                {
                    roleId: 1,
                    job: "Motion Designer"
                },
                {
                    roleId: 2,
                    job: "UI/UX"
                }
            ],
            teamList: [
                {
                    member: "Megan Nguyen"
                },
                {
                    member: "Hyeryn Kim"
                },
                {
                    member: "Gahyun Lee"
                },
                {
                    member: "Dana Marin"
                }
            ]
        },

        {
            id: 8,
            title: "In Motion Branding",
            categoriesList: [
            {
                categoryId: 1,
                multimedia: "Design"
            }
            ],
            cover: "inmotion.png",
            herovideo: "",
            heroimage: "inmotion.jpg",
            rolesList: [
                {
                    roleId: 1,
                    job: "Designer"
                },
                {
                    roleId: 2,
                    job: "Motion Designer"
                }
            ],
            teamList: [
                {
                    member: "Lan Le"
                }
            ]
        },

        {
            id: 9,
            title: "Menstrual Cup Ad",
            categoriesList: [
            {
                categoryId: 1,
                multimedia: "Motion"
            }
            ],
            cover: "cup.png",
            herovideo: "hi",
            heroimage: "cup.png"
        },

        {
            id: 10,
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
            cover: "mny.png",
            herovideo: "",
            heroimage: "mny.png",
            rolesList: [
                {
                    roleId: 1,
                    job: "Multimedia Design Specialist"
                }
            ]
        }
        ]
    };
    },

    computed: {
        currentFolio: function() {
            let folioId = this.$route.params.id;
            return this.folios.filter(function (folio) {
                // let folioId = folioId;
                return folio.id == folioId;
        })
        }

        // nextFolio: function() {
        //     let currentFolioId = this.$route.params.id;
        //     currentFolioId = parseInt(currentFolioId);
        //     return currentFolioId++;
        //     console.log(currentFolioId);
        // },

        // previousFolio: function() {
        //     let folioId = this.$route.params.id;
        //     return folioId--;
        // },
    }
}
</script>

<style lang="scss">
.herovideoCont {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .herovideo, iframe {
    position: absolute!important;
    top: 0!important;
    left: 0!important;
    width: 100%!important;
    height: 100%!important;
    margin: 0 auto;
  }
}

.btn-secondary { background-color: transparent!important; border: none!important; }
</style>

<style lang="scss" scoped>
.project-details {
    .project-nav {
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: $navy;
        padding: 20px 30px;
        position: fixed;
        z-index: 100;

        .project-nav-button {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            p { margin: 0; padding: 0 20px; color: $blue; }
        }

        .to-projects {
            transition: transform 1s;

            &:hover, :active {
                transform: rotate(90deg);
            }
        }
    }

    .project-hero-container {
        width: 100vw;
        height: 100vh;
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: $blue;
        border-radius: 0 0 30px 30px;

        .project-details-hero {
            .heroimgContainer {
                width: 70%;
                margin: 0 auto;
                border-radius: 30px;
                z-index: 2;
                overflow: hidden;
                position: relative;
                transition: box-shadow 0.5s;

                &:hover, :active {
                    box-shadow: 10px 10px $yellow;
                }


                .play {
                height: 3.3vh;
                position: absolute;
                top: 50%;
                }

                img {
                width: 100%;
                }
            }

            .scroll-down-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 10px 0;

                .scroll-down {
                    background: none;
                    border: none;
                }
            }
        }
    }

    .border-design {
        position: absolute;
        width: 100vw;
        height: 10vh;
        border-radius: 0 0 30px 30px;
    }

    .red {
        background-color: $red;
        margin-top: -40px;
        z-index: -1;
    }

    .yellow {
        background-color: $yellow;
        margin-top: -15px;
        z-index: -2;
    }

    .project-details-description {
        position: relative;
        margin-top: 100px;
        text-align: left;

        h2 { color: $red; margin-bottom: 30px; }
        h4 { color: $blue; margin-bottom: 15px; }

        ul {
            list-style-type: none;
            padding: 0;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            padding-inline-start: 0;

            li {
                display: inline;
                padding: 0 5px 0 0;

            }
        }

        .project-info {
            p { color: $red; margin: 0; line-height: 0; }

            .project-category li {
                display: inline-block;
                color: $blue;
                padding: 0 5px 0 0;
            }

            .role, .team, .award {
                margin: 15px 0 15px 0; 
            }
        }

        // .project-description {
        // }
    }

    .project-images {
        ul {
            li {                    
                img {
                    width: 100%;
                    height: 100%;
                    margin-bottom: 10px;
                }
            }
        }
    }
}

</style>