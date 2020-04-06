<template>
  <div class="project-details">
    <div class="project-nav">
      <!-- <router-link :to="{ name: 'Project', params: { id: `${previousFolio}` } }"> -->
      <div v-if="this.$route.params.id == 1">
        <b-button disabled class="project-nav-button">
            <img
            src="@/assets/icon-arrow-back.svg"
            alt="previous project button"
            class="previous"
            />
            <p>Previous Project</p>
        </b-button>
      </div>

      <div v-else>
        <router-link :to="{ name: 'Project', params: { id: previousFolio } }">
            <b-button class="project-nav-button">
                <img
                src="@/assets/icon-arrow-back.svg"
                alt="previous project button"
                class="previous"
                />
                <p>Previous Project</p>
            </b-button>
        </router-link>
      </div>
      
      <router-link to="/">
        <b-button class="project-nav-button to-projects">
          <img
            src="@/assets/icon-projects.svg"
            alt="back to projects button"
            class="to-projects"
          />
        </b-button>
      </router-link>

        <div v-if="this.$route.params.id == 10">
            <b-button disabled class="project-nav-button">
                <p>Next Project</p>
                <img
                src="@/assets/icon-arrow-next.svg"
                alt="next project button"
                class="next"
                />
            </b-button>
        </div>

        <div v-else>
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
    </div>

    <section
      class="project-hero-container"
      v-for="folio in currentFolio"
      :key="folio.id"
      v-bind:folio="folio"
    >
      <!-- HERO SECTION -->
      <div class="project-details-hero">
        <div>
          <!-- VIDEO -->
          <!-- Hero image -->
          <div v-if="folio.herovideo" class="heroimgContainer with-video">
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
            <img src="@/assets/icon-arrow-down.svg" alt="arrow pointing down" />
          </b-button>
        </div>
      </div>
    </section>

    <!-- Red and Yellow Border -->
    <div
      class="border-design red"
      id="portfolio-scroll"
      data-aos="slide-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    ></div>

    <div
      class="border-design yellow"
      data-aos="slide-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-delay="250"
    ></div>
    <!-- END OF HERO SECTION -->

    <!-- PROJECT DETAILS -->
    <b-container
      v-for="folio in currentFolio"
      :key="folio.id"
      v-bind:folio="folio"
    >
      <b-row
        class="project-details-description justify-content-center pt-5"
        h-align="center"
      >
        <!-- Left Column -->
        <b-col
          class="project-info px-5 mb-3"
          cols="12"
          md="4"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          data-aos-delay="450"
        >
          <ul class="project-category">
            <li
              v-for="category in folio.categoriesList"
              :key="category.categoryId"
            >
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
        <b-col
          cols="12"
          md="6"
          class="project-description px-5 pt-2"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="600"
          data-aos-delay="650"
        >
          <h4>Project Description</h4>
          <ul>
            <li
              v-for="description in folio.descriptions"
              :key="description.descriptionId"
            >
              <p>{{ description.paragraph }}</p>
            </li>
          </ul>
        </b-col>
      </b-row>

      <b-row
        class="project-images justify-content-center pt-5"
        h-align="center"
      >
        <!-- Images -->
        <b-col cols="12">
          <ul>
            <li
              v-for="image in folio.images"
              :key="image.imageId"
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
        <youtube :video-id="folio.videoId" ref="youtube" @playing="playing"></youtube>
      </div>
    </b-modal>
    <footercomp />
  </div>
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
    //   folioId: this.$route.params.id,
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
              paragraph:
                "The Ifugaos are one of the indigenous people the Philippines. Unfortunately, their indigenous knowledge—the things that make up one’s culture—is experiencing a loss of transfer to the Ifugao youth. In order to solve this and avoid the culture being lost forever, the local government provided a the IPEd curriculum, or Indigenous Peoples Education curriculum, that teaches their culture to its high school students."
            },
            {
              descriptionId: 2,
              paragraph:
                "Stories from the Grain is an online multimedia learning material that aims to provide support to the IPEd curriculum. It is a website where students can access different infographic videos that tell the different legends of Ifugao."
            },
            {
              descriptionId: 3,
              paragraph:
                "My project makes use of the rice grain as a symbol in my logo. It symbolizes how the Ifugao rice terraces, the most important and major symbol of their culture, originated from a single grain. Similarly, legends tell us the story of how the Ifugao culture came to be, which is why the grain was the perfect symbol for the project. Both legends and grains represent the origins of the Ifugao’s culture."
            },
            {
              descriptionId: 4,
              paragraph:
                "I wanted the campaign to feel like familiar stories being told from home to the Ifugao youth. In their culture, Indigenous Knowledge is passed on orally from the elders. My branding revolved around this fact. I made use of red, which is the color the Ifugaos are known for. To complement this, I used colors that reminded one of nature: green, blue, and brown."
            },
            {
              descriptionId: 5,
              paragraph:
                "For the videos, I wanted it to feel like it was being told from a pop-up storybook to symbolize their culture coming alive, which is why much of the animation involves elements popping up."
            },
            {
              descriptionId: 6,
              paragraph:
                "Lastly, the website was built with the knowledge that the Ifugao youth was not as technologically savvy. With this in mind, I made sure that the website was direct to the point. It provided instructions to the user, whether it be as simple as clicking next and back to scroll through a carousel or clicking a button to go to another page."
            },
            {
            descriptionId: 7,
            paragraph:
                "Creating a multimedia solution for indigenous peoples involve dealing with very sensitive topics. I had to make sure that the project did not misrepresent or disrespect the Ifugaos’ culture, while also making sure that it was worthy of representing them. In order to do this, I worked very closely with the Ifugaos. I had to go through a process and request approval from their local government. I worked closely with one of the IPEd curriculum’s author who provided me guidance in making sure that my information and illustrations were accurate. I hired an Ifugao translator and narrators for my videos just so that I can create it in their dialect. Most importantly, I worked closely with the Ifugao students; I consulted with them through focus group discussions and quality test sessions."
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
            }
          ]
        },

        {
          id: 2,
          title: "Medical Website Template",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Web"
            },
            {
              categoryId: 2,
              multimedia: "Design"
            },
          ],
          heroimage: "hwcc.png",
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "I have always wanted to design a website that followed the web trend of illustrations. I picked a medical/clinical website to design according to this trend."
            },
            {
              descriptionId: 2,
              paragraph:
              "Most medical websites today seem to blend together as they make use of the same aesthetic: green, blue, and red colors, generic photos, corporate fonts. I wanted to challenge this and stray away from this aesthetic to create a different design."
            },
            {
              descriptionId: 3,
              paragraph:
              "For this design, I wanted a balance between modern and professional, while injecting a little bit of fun. I achieved this by using illustrations as the website’s main images. I then used light but fun colors to complement the illustrations. By doing so, I was able to give focus to the illustrations. Lastly, I decided on a serif font that wasn’t too formal nor too quirky."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "hwcc01.png"
            },
            {
              imageId: 2,
              visual: "hwcc02.png"
            },
            {
              imageId: 3,
              visual: "hwcc03.png"
            }
          ]
        },

        {
          id: 3,
          title: "Araw-Araw Desserts",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Web"
            }
          ],
          cover: "araw.png",
          herovideo: "",
          heroimage: "araw.png",
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "I decided to create a fictional cupcake business wherein I was the photographer, graphic designer, and website designer and developer."
            },
            {
              descriptionId: 2,
              paragraph:
                "Araw araw translates to everyday in Filipino. The cupcake brand only serves five flavours of cupcakes and a classic chocolate chip cookie. It was started by a Filipino who moved to London, Ontario and wanted to bring her idea of home a thousand miles away through the dessert recipes she learned from her family."
            },
            {
              descriptionId: 3,
              paragraph:
                "The logo’s icon is a sun which symbolizes the Filipino word araw araw, while the cookie and cupcake merged together symbolizes the dessert menu. I decided to use warm colors throughout the brand’s materials in order to signify home. "
            },
            {
              descriptionId: 4,
              paragraph:
                "I wanted the photos to be bright and colorful. However, grain was added to give it a film and “at-home” look. This timelessness signifies the recipes lasting through time."
            },
            {
              descriptionId: 5,
              paragraph:
                "The photos are greatly used throughout the website and it is balanced out by solid shapes and colors. With only three pages, the website is able to achieve a simple and straightforward design." 
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "araw01.png"
            },
            {
              imageId: 2,
              visual: "araw02.jpg"
            },
            {
              imageId: 3,
              visual: "araw03.jpg"
            },
            {
              imageId: 4,
              visual: "araw04.jpg"
            },
            {
              imageId: 5,
              visual: "araw05.jpg"
            }
          ]
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
              categoryId: 1,
              multimedia: "Branding"
            }
          ],
          cover: "inmotion.png",
          herovideo: "yes",
          heroimage: "inmotion.png",
          videoId: "GIrZhiTU_iw",
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "The emphasis of this project is to be able to animate HUDS and GUIS in AfterEffects and integrate it into the video, whose theme is “The Art and Physics of Sports.” However, proper branding was still needed."
            },
            {
              descriptionId: 2,
              paragraph:
                "The name “In Motion” come from the fact that physics is about matter and energy and how they interact with each other. Because the topic of the video is sports, In Motion was an apt title as the physics of sports study how sports interact with our bodies and other matter."
            },
            {
              descriptionId: 3,
              paragraph:
                "I wanted the brand to still feel like typical HUDS and GUIS, but not completely. I did this by choosing a font that looks athletic while also looking futuristic. For the colors, I kept the typical light and dark blues but decided to use the bright and striking colors pink, purple, and yellow as a contrast to the darks."
            },
            {
              descriptionId: 4,
              paragraph:
                "Besides trim paths and animating, I explored tracking and rotoscoping in much more depth. More than that, I was also able to explore how the animated HUDS and GUIS could interact with the videos much more seamlessly by checking for their motion and force."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "inmotion01.gif"
            },
            {
              imageId: 2,
              visual: "inmotion02.gif"
            },
            {
              imageId: 3,
              visual: "inmotion03.jpg"
            },
            {
              imageId: 4,
              visual: "inmotion04.jpg"
            },
            {
              imageId: 5,
              visual: "inmotion05.jpg"
            },
            {
              imageId: 6,
              visual: "inmotion06.jpg"
            }
          ]
        },

        {
          id: 5,
          title: "Thermal Security",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            }
          ],
          cover: "thermo.png",
          herovideo: "yes",
          heroimage: "thermo.png",
          videoId: "dEhwp8UzJHY",
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
          ],
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "For a 24-hour hack-a-thon, we were tasked with a multimedia project for a smart home thermometer. Our group wanted to stray away from the usual smart thermometers in the market that make use of black and blue and decided to implement white and wood material."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "thermo01.jpg"
            },
            {
              imageId: 2,
              visual: "thermo02.jpg"
            },
            {
              imageId: 3,
              visual: "thermo03.jpg"
            }
          ]
        },

        {
          id: 6,
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
          heroimage: "yellowcab.png",
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "Yellow Cab is one of the biggest pizza chains in the Philippines. In relation to their name and product (New York-style pizza), they rely heavily on a New York-inspired branding, focusing specifically on one of New York’s symbols: the yellow cab."
            },
            {
              descriptionId: 2,
              paragraph:
                "The app is designed and created for Yellow Cab customers who want another method to order from the chain. Through the app, they would be able to order food, access special promos, and contact customer service."
            },
            {
              descriptionId: 3,
              paragraph:
                "Following their branding, the app is designed in the colors yellow and black, while using white as a balancing color. Another important aspect of Yellow Cab’s branding is their boldness which is applied in the font used as well as the icons, both of which has a bold look through the incorporation of heavy weights and outlines."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "yellowcab01.jpg"
            }
          ]
        },

        {
          id: 7,
          title: "Menstrual Cup Ad",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            }
          ],
          cover: "cup.png",
          herovideo: "yes",
          heroimage: "cup.png",
          videoId: "iF2vTpMO08Y",
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                  "Something that I religiously stand for is the use of menstrual cups. I have always encouraged the people I know to start using them because it is so good for your body."
            },
            {
              descriptionId: 2,
              paragraph:
                "I wanted to create an ad that showcased the menstrual cup differently. Usually, when one talks about the cup, they only talk about how it’s good for the environment. I wanted to talk about how it’s good for your body and/or period."
            },
            {
              descriptionId: 3,
              paragraph:
                "However, I didn’t just want to talk and list all the benefits. I have always been interested in videos that are suggestive and controversial; the ones where you know what’s going on even though it doesn’t completely show it."
            },
            {
              descriptionId: 4,
              paragraph:
                "My approach to the video was simple. I asked a question: If all the things that you hated about your period could be gone, would you take it? Meanwhile, symbols of these flashed on the screen (ex. Stains showed red paint dripping). By doing this, I am able to catch the user’s attention through the use of curiosity and images that are kind-of-gross-but-not-too-gross."
            }
          ]
        },

        {
          id: 8,
          title: "Glossier",
          categoriesList: [
            {
              categoryId: 1,
              multimedia: "Motion"
            }
          ],
          cover: "glossier.png",
          herovideo: "hi",
          heroimage: "glossier.png",
          videoId: "YTpR3lp0QXE",
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "To practice Cinema4D’s morphing effect, we were tasked to create an advertisement." 
            },
            {
              descriptionId: 2,
              paragraph:
                "Glossier is a beauty brand that focuses on creating and perfecting existing beauty products. They make products that people wish they had, thus their focus being on thoughtful design. They are known for being one of the first brands to market through social media and their customers as well as for the branding itself." 
            },
            {
              descriptionId: 3,
              paragraph:
                "I decided to create an advertisement for them that features their make up set which involves three of their best-selling products - boy brow, cloud paint, and lash slick - which is why I thought it would be best to showcase this set."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "glossier01.jpg"
            },
            {
              imageId: 2,
              visual: "glossier02.jpg"
            },
            {
              imageId: 3,
              visual: "glossier03.jpg"
            },
            {
              imageId: 4,
              visual: "glossier04.jpg"
            }
          ]
        },

        {
          id: 9,
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
          videoId: "3yPcRLKdvrI",
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
          ],
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "The brief of this project was to create a multimedia project that will encourage tourists to travel to Ontario during summer, which is its peak season. "
            },
            {
              descriptionId: 2,
              paragraph:
                "We were given a lot of leeway for the video; the only instruction was to include the tagline “Make yourself at home” and use the videos provided. This gave me the inspiration to make the video feel like home - happy, safe, at peace."
            },
            {
              descriptionId: 3,
              paragraph:
                "I started the video by introducing the various types of locations Ontario has and then transitioning it to different shots of people who look and feel happy."
            },
            {
              descriptionId: 4,
              paragraph:
                "As for UI/UX, I helped our web designer through the finalization of the design. We were stuck with the provinces page which contained all the things to do in that specific province. We wanted to implement the full screen vertical carousel web trend but couldn’t find the proper layout for it as the title slide (the first slide) looked too similar to and blended in with the rest of the slides. After countless tests and wireframes, we were able to find the perfect design matched with the best user experience."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "osummer01.gif"
            },
            {
              imageId: 2,
              visual: "osummer02.jpg"
            }
          ]
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
          ],
          descriptions: [
            {
              descriptionId: 1,
              paragraph:
                "In Maybelline, I worked under different brand managers. My work ranged from eye, lips, and to face makeup. More specifically, I did print and LED billboard ads, social media posts, agency video edits, Instagram stories, PR packaging, offline store collaterals, photo manipulation, and more."
            }
          ],
          images: [
            {
              imageId: 1,
              visual: "mny01.gif"
            },
            {
              imageId: 2,
              visual: "mny02.png"
            },
            {
              imageId: 3,
              visual: "mny03.png"
            },
            {
              imageId: 4,
              visual: "mny04.png"
            },
            {
              imageId: 5,
              visual: "mny05.png"
            },
            {
              imageId: 6,
              visual: "mny06.gif"
            }
          ]
        }
      ]
    };
  },

  computed: {
    currentFolio: function() {
      let folioId = this.$route.params.id;
      return this.folios.filter(function(folio) {
        // let folioId = folioId;
        return folio.id == folioId;
      });
    },

    nextFolio: function() {
        let nextId = parseInt(this.$route.params.id);
        return nextId = nextId + 1;
    },

    previousFolio: function() {
        let previousId = parseInt(this.$route.params.id);
        return previousId = previousId - 1;
    }
  }
};
</script>

<style lang="scss">
.herovideoCont {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .herovideo,
  iframe {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 auto;
  }
}

.btn-secondary {
  background-color: transparent !important;
  border: none !important;
}
</style>

<style lang="scss" scoped>
.project-details {
  a {
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
  }

  .project-nav {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: $navy;
    padding: 20px 20px;
    position: fixed;
    z-index: 100;

    .project-nav-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

      p {
        margin: 0;
        padding: 0 20px;
        color: $blue;
      }
    }

  .to-projects {
    transition: transform 1s;

    &:hover,
    :active {
      transform: rotate(90deg);
    }
  }
}

.project-hero-container {
  width: 100vw;
  height: 80vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $blue;
  border-radius: 0 0 30px 30px;

  .project-details-hero {
    .with-video {
        &:hover {
            cursor: pointer;
        }
    }

    .heroimgContainer {
      width: 90%;
      margin: 0 auto;
      border-radius: 20px;
      z-index: 2;
      overflow: hidden;
      position: relative;
      transition: box-shadow 0.5s;

      &:hover,
      :active {
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
  margin-top: -30px;
  z-index: -1;
}

.yellow {
  background-color: $yellow;
  margin-top: -10px;
  z-index: -2;
}

.project-details-description {
  position: relative;
  margin-top: 40px;
  text-align: left;

  h2 {
    color: $red;
    margin-bottom: 10px;
  }
  h4 {
    color: $blue;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;

    li {
      display: inline;
      padding: 0 5px 0 0;
    }
  }

  .project-info {
    p {
      color: $red;
      margin: 0;
      line-height: 0;
    }

    .project-category li {
      display: inline-block;
      color: $blue;
      padding: 0 5px 0 0;
    }

    .role,
    .team,
    .award {
      margin: 15px 0 15px 0;
    }
  }

  .project-description {
    ul {
      li {
        display: block;
      }
    }
  }
}

.project-images {
  ul {
    list-style-type: none;
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

@media screen and (min-width: 375px) {
  .project-details {
    .red {
      margin-top: -35px;
    }
  }
}

@media screen and (min-width: 720px) {
  .project-details {
    .project-hero-container {
      height: 60vh;
      .project-details-hero {
        .heroimgContainer {
          width: 70%;
        }
      }
    }

    .red {
      margin-top: -60px;
    }

    .yellow {
      margin-top: -30px;
    }

    .project-details-description {
      margin-top: 100px;

      h2 {
        margin-bottom: 30px;
      }

      h4 {
        margin-bottom: 0;
      }

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
        p {
          color: $red;
          margin: 0;
          line-height: 23px;
          display: inline-block;
        }

        .project-category li {
          display: inline-block;
          color: $blue;
          padding: 0 5px 0 0;
        }

        .role,
        .team,
        .award {
          margin: 15px 0 30px 0;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
.project-details {
  .project-details-description {
      margin-top: 130px;
  }

  .red {
    margin-top: -80px;
  }

  .yellow {
    margin-top: -35px;
  }
}

}

@media screen and (min-width: 1280px) {
  .project-details {
    .project-hero-container {
      height: 100vh;
    }

    .project-details-description {
      h4 {
        margin-bottom: 15px;
      }
      
      .project-info {
        p {
          color: $red;
          margin: 0;
          line-height: 0;
          display: block;
        }

        .project-category li {
          display: inline-block;
          color: $blue;
          padding: 0 5px 0 0;
        }
      }
    }
  }

  .red {
    margin-top: -30px!important;
  }

  .yellow {
    margin-top: 10px!important;
  }
}

</style>
