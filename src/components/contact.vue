<template>
  <div class="contactus">
    <b-container class="contactContainer">
      <b-row class="justify-content-center">
        <b-col class="text-left" sm="4">
          <div class="contacttext">
            <h2>
              Let's create together.
            </h2>
            <p>
              If you want to collaborate, hire me, ask questions, or even just
              talk, come say hi!
            </p>
          </div>
        </b-col>

        <b-col sm="6">
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
    padding: 60px 50px;

    .contacttext {
      width: 70%;

      h2 {
        color: $yellow;
      }

      p {
        color: $yellow;
        line-height: 1.5;
      }
    }

    .contact-form {
      input,
      textarea {
        display: block;
        width: 100%;
        padding: 5px 10px;
        margin-bottom: 15px;
        background-color: $yellow;
        border: none;
        border-radius: 4px;
        color: $navy;
        font-family: $Karla;
        font-size: 16px;
      }

      textarea {
        height: 150px;
      }

      input:focus,
      textarea:focus {
        outline: none;
        border-radius: 4px;
      }

      input[type="submit"] {
        width: 80%;
        background-color: $blue;
        border: none !important;
        color: $navy;
        transition: box-shadow 0.3s, background-color 0.3s;

        &:hover,
        :active {
          box-shadow: 5px 5px $yellow;
          background-color: $navy;
          color: $blue;
        }
      }

      .noshadow {
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        box-shadow: none !important;
      }
    }
  }
}

@media screen and (min-width: 720px) {
  .contactus {
    .contactContainer {
      .contact-form {
        input[type="submit"] {
          width: 50%;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .contactus {
    .contactContainer {
      .contacttext {
        h2 {
          font-size: 48px;
        }
      }
    }
  }
}
</style>
