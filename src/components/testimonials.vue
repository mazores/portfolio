<template>
  <section class="testimonialsContainer">
    <div class="testimonials">
      <carousel
        class="carousel"
        :per-page="1"
        centerMode: true
        :mouse-drag="false"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="10000"
        paginationActiveColor="#ffcc67"
        paginationColor="#80cfd4"
      >
        <slide class="slide">
          <h2>
            Working with Mikka prove to always be a great experience. Her talent
            and dedication shines in her ability to code and edit even the most
            complicated design choices and it is always done smartly and
            meticulously, always able to please the people she works for and
            with.
          </h2>

          <h5>Megan Nguyen</h5>
        </slide>

        <slide class="slide">
          <h2>
            Mikka’s great design aesthetic and attention to detail shines
            through in the work she does. She shows great understanding of good
            design and that's demonstrated in the consistent high-quality work
            she produces in all facets of digital media.
          </h2>

          <h5>Nour Al-Osman</h5>
        </slide>

        <slide class="slide">
          <h2>
            <br />Mikka’s skills in design and development perfectly complements
            each other in the masterful pieces she creates.
          </h2>

          <h5>Taylor Dronfield</h5>
        </slide>

        <slide class="slide">
          <h2>
            Mikka is an intuitive person who, when working with her, you learn a
            lot from. She has demonstrated a vast knowledge of interactive
            multimedia. Her fun and vibrant personality matched with her
            dilligence and efficiency in her work shows up every time I work
            with her.
          </h2>

          <h5>Ifekitan Obasa</h5>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "testimonials",
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="scss" scoped>
.testimonialsContainer {
  background-color: $navy;
  width: 100%;
  padding: 0 10px;
  border-radius: 30px 30px 0 0;

  .testimonials {
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;

    .carousel {
      h2 {
        letter-spacing: 1px;
        line-height: 1.4;
        padding: 10px 10px;
        font-size: 14px;
      }

      .slide {
        align-items: center;
      }
    }
  }
}

.slide:nth-child(1n) {
  h2,
  h5 {
    color: $yellow;
  }
}

.slide:nth-child(2n) {
  h2,
  h5 {
    color: $blue;
  }
}

@media screen and (min-width: 375px) {
  .testimonialsContainer {
    padding: 0 30px;
    .testimonials {
      padding-top: 100px;
    }
  }
}

@media screen and (min-width: 720px) {
  .testimonialsContainer {
    padding: 0 100px;

    .testimonials {
      padding-top: 100px;

      .carousel {
        h2 {
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .testimonialsContainer {
    padding: 0 200px;

    .testimonials {
      .carousel {
        h2 {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
