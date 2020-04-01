<template>
  <div class="contactus">
    <b-container class="contactContainer">
      <b-row>
        <b-col class="text-left">
          <div class="contacttext">
            <h1>
              Let's create a beautiful, smart, and meaningful something
              together.
            </h1>
            <p>
              If you want to collaborate, hire me, ask questions, or even just
              talk, come say hi!
            </p>
          </div>
        </b-col>

        <b-col>
          <form class="contact-form" @submit.prevent="sendEmail">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              class="noshadow"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              class="noshadow"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              class="noshadow"
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </b-col>
      </b-row>
    </b-container>
    <div class="form"></div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "contact",
  data() {
    return {};
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "default_service",
          "template_U6d1KDHF",
          e.target,
          "user_4wcwbSVo0REINiMZroJvx"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );

      console.log(e.target);
    }
  }
};
</script>

<style lang="scss" scoped>
.contactus {
  width: 100%;
  background-color: $red;
  border-bottom: 50px solid $yellow;

  .contactContainer {
    padding: 100px 50px;

    .contacttext {
      width: 70%;

      h1 {
        font-size: 40px !important;
        color: $yellow;
      }

      p {
        color: $yellow;
        font-size: 28px;
        line-height: 1.5;
      }
    }

    .contact-form {
      input,
      textarea {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        background-color: $yellow;
        border: none;
        border-radius: 4px;
        color: $navy;
        font-family: $Karla;
        font-size: 24px;
      }

      textarea {
        height: 200px;
      }

      input:focus,
      textarea:focus {
        outline: none;
        border-radius: 4px;
      }

      input[type="submit"] {
        width: 50%;
        background-color: $blue;
        border: none !important;
      }

      .noshadow {
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        box-shadow: none !important;
      }
    }
  }
}
</style>
