<template>
  <div class="resume">
    <b-container class="container">
      <b-row class="iconsContainer" align-h="between" align-v="center">
        <b-col class="icons">
          <kinesis-container>
            <b-button class="icons" v-b-modal.modal-resume>
              <kinesis-element :strength="10">
                <img src="@/assets/resume.svg" alt="resume icon" />
              </kinesis-element>
                <h3>Read resume</h3>
            </b-button>
          </kinesis-container>
        </b-col>

        <b-col class="icons right">
          <kinesis-container>
            <b-button class="icons" id="fun-fact" href="#" tabindex="0">
              <kinesis-element :strength="10">
                <img src="@/assets/funfact.svg" alt="fun fact icon" />
              </kinesis-element>
                <h3>Click for a fun fact!</h3>
            </b-button>
          </kinesis-container>
        </b-col>
      </b-row>

      <!-- Resume Lightbox -->
      <b-modal
        id="modal-resume"
        centered
        title="Modal for Demo Reel"
        size="lg"
        busy
        hide-footer
        scrollable
        modal-class="modal-container"
        content-class="modal-content"
        header-class="modal-header"
        body-class="modal-body"
      >
        <div class="resumeCont">
          <img
            src="@/assets/azores_mikka_resume.jpg"
            alt="Mikka Azores' resume"
          />
        </div>
      </b-modal>

      <!-- Tooltip Fun Fact-->
      <b-tooltip
        target="fun-fact"
        title="Fun fact!"
        triggers="hover click"
        placement="bottom"
        custom-class="fun-fact-tip"
        offset="0"
      >
        This portfolio was designed and developed by me using Vue.js and
        Bootstrap! 🚀
      </b-tooltip>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "resume"
};
</script>

<style lang="scss">
.tooltip-inner {
  background-color: $yellow;
  font-family: $Karla;
  opacity: 1 !important;
  color: $navy;
  padding: 0.8em;
  line-height: 1.3;
}

.tooltip.b-tooltip {
  opacity: 1 !important;
  margin-top: 15px;
}

.arrow {
  color: $yellow;
}

.bs-tooltip-auto[x-placement^="bottom"] .arrow::before,
.bs-tooltip-bottom .arrow::before {
  border-bottom-color: $yellow;
}
</style>

<style lang="scss" scoped>
.resume {
  width: 100%;
  background-color: $red;
  z-index: 0;
  padding: 100px 0 50px 0;
  position: relative;
  border-radius: 0 0 30px 30px;
  margin-top: -50px;

  .container {
    .iconsContainer {
      .icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;

        img {
          //display: inline-block;
          margin-right: 30px;
        }

        h3 {
          //display: inline;
          color: $yellow;
          margin-top: 10px;
        }

        .right {
          text-align: right;
        }
      }
    }
  }
}

.resumeCont {
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
