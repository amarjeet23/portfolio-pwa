<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({

})
export default class App extends Vue{
  public modalStatus !:any;

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414242;
}
body {
  margin: 0px;
  padding: 0px;
  background-color: #f5f5f5; /* font-family: "Open Sans Condensed", sans-serif; */
  font-family: Maven Pro, sans-serif;
  /* font-size: 2rem; */
  line-height: 2rem;
  letter-spacing: 0.1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  margin-left: 15%;
  margin-top: 5%;
  margin-right: 7%;
}
@media screen and (max-width: 992px) {
  .main-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 7%;
    margin-right: 7%;
  }
}
</style>
