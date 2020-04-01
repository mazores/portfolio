<template>
  <div class="aboutContainer">
    <!-- Demo Reel -->
    <b-container class="reelContainer">
      <h1 class="hidden">Demo Reel</h1>
      <img
        src="@/assets/icon-play.svg"
        alt="play button"
        class="play"
        v-b-modal.modal-reel
      />
      <img
        src="@/assets/video.png"
        alt="demo reel cover photo"
        v-b-modal.modal-reel
      />
    </b-container>

    <!-- Demo Reel Lightbox -->
    <b-modal
      id="modal-reel"
      centered
      title="Modal for Demo Reel"
      size="lg"
      busy="true"
      hide-footer
      modal-class="modal-container"
      content-class="modal-content"
      header-class="modal-header"
      body-class="modal-body"
    >
      <div class="demoreelCont">
        <iframe
          src="https://www.youtube.com/embed/eGVnIxguT-Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding"
          allowfullscreen
          class="demoreel"
        ></iframe>
      </div>
    </b-modal>

    <!-- About Text Content -->
    <div class="aboutContent">
      <b-container>
        <b-row class="text-left">
          <b-col>
            <!-- v-for="folio in folios" :key="folio.id" v-bind:folio="folio" -->
            <h3>Values</h3>
            <div class="values" v-for="value in values" :key="value.id">
              <h4>{{ value.title }}</h4>
              <p>{{ value.desc }}</p>
            </div>
          </b-col>

          <b-col>
            <h3>Traits</h3>
            <div class="traits" v-for="trait in traits" :key="trait.id">
              <h4>{{ trait.title }}</h4>
              <p>{{ trait.desc }}</p>
            </div>
          </b-col>

          <b-col>
            <h3>Skills</h3>
            <div class="skills" v-for="skill in skills" :key="skill.id">
              <h4>{{ skill.title }}</h4>
              <ul>
                <li
                  v-for="skillList in skill.skillLists"
                  :key="skillList.skillListsId"
                >
                  <p>{{ skillList.expertise }}</p>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col>
            <h3>Tools</h3>
            <div class="tools" v-for="tool in tools" :key="tool.id">
              <h4>{{ tool.title }}</h4>
              <ul>
                <li
                  v-for="toolList in tool.toolLists"
                  :key="toolList.toolListsId"
                >
                  <p>{{ toolList.software }}</p>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <resume />
  </div>
</template>

<script>
import resume from "@/components/resume";

export default {
  name: "about",
  components: {
    resume
  },
  data() {
    return {
      // variants: ['transparent', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      // headerBgVariant: 'transparent',
      // headerTextVariant: 'transparent',
      // bodyBgVariant: 'light',
      // footerBgVariant: 'warning',
      // footerTextVariant: 'dark',

      values: [
        {
          id: 1,
          title: "Beauty",
          desc: "Lorem Ipum"
        },

        {
          id: 2,
          title: "Brains",
          desc: "Lorem Ipum"
        },

        {
          id: 3,
          title: "Substance",
          desc: "Lorem Ipum"
        }
      ],

      traits: [
        {
          id: 1,
          title: "Thrives in challenging and fast-paced environments",
          desc: "Lorem Ipum"
        },

        {
          id: 2,
          title: "Motivated and passionate self-starter",
          desc: "Lorem Ipum"
        },

        {
          id: 3,
          title: "Collaborative, communicative, and accountable",
          desc: "Lorem Ipum"
        }
      ],

      skills: [
        {
          id: 1,
          title: "Code",
          skillLists: [
            {
              skillListsId: 1,
              expertise: "HTML"
            },
            {
              skillListsId: 2,
              expertise: "CSS"
            },
            {
              skillListsId: 3,
              expertise: "JavaScript"
            },
            {
              skillListsId: 4,
              expertise: "Sass"
            },
            {
              skillListsId: 5,
              expertise: "Vue.js"
            },
            {
              skillListsId: 6,
              expertise: "Node.js"
            },
            {
              skillListsId: 7,
              expertise: "Express.js"
            },
            {
              skillListsId: 8,
              expertise: "Bootstrap"
            },
            {
              skillListsId: 9,
              expertise: "PHP"
            },
            {
              skillListsId: 10,
              expertise: "MySQL"
            }
          ]
        },

        {
          id: 2,
          title: "Design",
          skillLists: [
            {
              skillListsId: 1,
              expertise: "UI/UX"
            },
            {
              skillListsId: 2,
              expertise: "Branding"
            },
            {
              skillListsId: 3,
              expertise: "Social Media & Web"
            },
            {
              skillListsId: 4,
              expertise: "Packaging"
            },
            {
              skillListsId: 5,
              expertise: "Print"
            }
          ]
        },

        {
          id: 3,
          title: "Motion",
          skillLists: [
            {
              skillListsId: 1,
              expertise: "2D Animation"
            },
            {
              skillListsId: 2,
              expertise: "3D Modeling"
            },
            {
              skillListsId: 3,
              expertise: "3D Animation"
            }
          ]
        }
      ],

      tools: [
        {
          id: 1,
          title: "Adobe",
          toolLists: [
            {
              toolListsId: 1,
              software: "Photoshop"
            },
            {
              toolListsId: 2,
              software: "Illustrator"
            },
            {
              toolListsId: 3,
              software: "XD"
            },
            {
              toolListsId: 4,
              software: "Premiere Pro"
            },
            {
              toolListsId: 5,
              software: "After Effects"
            },
            {
              toolListsId: 6,
              software: "InDesign"
            }
          ]
        },

        {
          id: 2,
          title: "Wordpress"
        },

        {
          id: 3,
          title: "GitHub"
        },

        {
          id: 4,
          title: "Cinema4D"
        },

        {
          id: 5,
          title: "Visual Studio Code"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.modal-backdrop {
  opacity: 0.9 !important;
  background-color: #ffcc67 !important;
}

.modal-content,
.modal-container,
.modal-header,
.modal-body {
  background: none;
}

.modal-content {
  border: none;

  .modal-header {
    border-bottom: none;
    padding: 0 0 10px 0;

    .modal-title {
      display: none;
    }

    .close {
      color: $red;
      opacity: 1;
      text-shadow: none;
    }

    .close:not(:disabled):not(.disabled):focus,
    .close:not(:disabled):not(.disabled):hover {
      opacity: 1;
    }
  }
}

.modal-body {
  padding: 0;
}
</style>

<style lang="scss" scoped>
.demoreelCont {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .demoreel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.aboutContainer {
  width: 100%;
  height: auto;
  position: relative;

  .reelContainer {
    border-radius: 30px;
    z-index: 2;
    overflow: hidden;
    position: relative;

    .play {
      height: 3.3vh;
      position: absolute;
      top: 50%;
    }
    img {
      width: 100%;
    }
  }

  .aboutContent {
    width: 100%;
    background-color: $blue;
    z-index: 1;
    position: relative;
    padding-top: 300px;
    padding-bottom: 50px;
    margin-top: -200px;
    border-radius: 0 0 30px 30px;

    .skills,
    .tools {
      margin-bottom: 25px;

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
          p {
            margin: 0;
          }
        }
      }
    }
  }
}

h3 {
  color: $red;
}

h4 {
  color: $navy;
  margin: 0;
}
</style>
