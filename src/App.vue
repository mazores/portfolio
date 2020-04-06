<template>
  <div id="app"> 
    <!-- 
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
body[data-aos-duration='4000'] [data-aos],
  [data-aos][data-aos][data-aos-duration='4000'] {
    transition-duration: 4000ms;
}

#app {
  font-family: $Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
