<template>
  <div id="app">
    <homePage/>
  </div>
</template>

<script>
import homePage from './components/homePage'

export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
  html,body{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
