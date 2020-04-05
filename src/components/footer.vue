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
    img {
      &:hover {
              // transform: scale(1.2);
              -webkit-transition: all 200ms ease 0s;
              -webkit-transform: scale(1.1); 
              -ms-transition: all 200ms ease 0s;
              -ms-transform: scale(1.1); 
              -moz-transition: all 200ms ease 0s;
              -moz-transformz : scale(1.1);
              transition: all 200ms ease 0s;
              transform: scale(1.1);   
            }
    }
    
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

        a {
          img {
            // height: auto;
            // transition: scale 1s ease 0s;

            &:hover {
              // transform: scale(1.2);
              -webkit-transition: all 180ms ease;
              -webkit-transform: scale(1.2); 
              -ms-transition: all 180ms ease;
              -ms-transform: scale(1.2); 
              -moz-transition: all 180ms ease;
              -moz-transform: scale(1.2);
              transition: all 180ms ease;
              transform: scale(1.2);   
            }
          }
        }
      }
    }
  }
}
</style>
