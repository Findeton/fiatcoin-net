<template>
  <div id="app">
    <!--img src="./assets/logo.png"!-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding:0;
}
</style>
