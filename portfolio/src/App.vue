<template>
  <div id="app">
    <div class="main-content">
      <personal-info></personal-info>
      
      <!-- <project/> -->
      <Experience/>
      
      <Skill></Skill>
    </div>
    <hr>
      <social-media></social-media>
  </div>
</template>
<script>
import Project from "./components/Project.vue"
import personalInfo from "./components/PersonalInfo.vue"
import SocialMedia from "./components/SocialMedia.vue"
import Skill from "./components/Skill.vue";
import Experience from "./components/Experience/Experience.vue"

export default {
  components:{
    // Project,
    personalInfo,
    SocialMedia,
    Skill,
    Experience
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414242;
}
body {
  margin: 0px;
  padding: 0px;
  background-color:#7d7878

}

#nav a.router-link-exact-active {
  color: #42b983;
}
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  margin-left:15%;
  margin-top:5%;
  margin-right:7%;
}
@media screen and (max-width: 992px) {
  .main-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left:7%;
  margin-right:7%;
  }
}

</style>
