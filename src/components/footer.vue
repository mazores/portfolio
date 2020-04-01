<template>
  <div class="footer">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Mikka Azores cover photo" />
    </div>

    <div class="goodbye">
      <h3>
        Have a good day filled with love and light 🌞💛
      </h3>
    </div>

    <div class="social">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mikka-azores-72ba75128/"
            target="_blank"
            ><img src="@/assets/icon-linkedin.svg" alt="linkedin icon"
          /></a>
        </li>
        <li>
          <a href="https://github.com/mazores" target="_blank"
            ><img src="@/assets/icon-github.svg" alt="github icon"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "footercomp"
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
  }

  .goodbye {
    h3 {
      color: $blue;
    }
  }

  .social {
    ul {
      text-decoration: none;
      list-style-type: none;

      li {
        margin-left: 50px;
        display: inline-block;
      }
    }
  }
}
</style>
