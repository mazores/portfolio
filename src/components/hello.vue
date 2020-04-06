<template>
  <b-container class="hello">
    <h2
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="0"
      data-aos-easing="ease-out-back"
    >
      Hello,
    </h2>
    <h2
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="200"
      data-aos-easing="ease-out-back"
    >
      I'm
    </h2>
    <h2
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="400"
      data-aos-easing="ease-out-back"
    >
      Mikka
    </h2>
    <h2
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="600"
      data-aos-easing="ease-out-back"
    >
      Azores,
    </h2>
    <h2
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="800"
      data-aos-easing="ease-out-back"
    >
      🤘🏽
    </h2>

    <br />
    <h1
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="1200"
      data-aos-easing="ease-out-back"
    >
      a
    </h1>
    <h1
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="1400"
      data-aos-easing="ease-out-back"
    >
      multimedia
    </h1>
    <br />
    <h1
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="1600"
      data-aos-easing="ease-out-back"
    >
      specialist.
    </h1>
    <p
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay="2000"
      data-aos-easing="ease-in"
    >
      I create multimedia solutions in different forms, whether it be through
      design, web development, motion, or all of the above.
    </p>
  </b-container>
</template>

<script>
export default {
  name: "hello"
};
</script>

<style lang="scss" scoped>
.hello {
  margin: 0 auto;
  padding-top: 0;
  text-align: left;
  margin-top: 15git0px;
  margin-bottom: 30px;

  h2 {
    display: inline-block;
    margin-right: 5px;
    color: $navy;
    line-height: 20px;
  }

  h1 {
    color: $red;
    display: inline-block;
    margin-right: 5px;
    line-height: 30px;
  }

  p {
    width: 60%;
  }
}

// TABLET
@media screen and (min-width: 768px) {
  .hello {
    padding-top: 130px;
    margin-bottom: 50px;
    margin-top: 0;

    h2 {
      margin-right: 10px;
      line-height: 30px;
    }

    h1 {
      margin-right: 10px;
      line-height: 40px;
    }

    p {
      width: 30%;
    }
  }
}
</style>
