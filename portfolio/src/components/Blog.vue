<template>
  <div>
    <Home :showDefault="sendProp">
      <div class="skill">
        <div class="skill-main" v-for="skill in skills" :key="skill.id">
          <div class="skill-body">
            <div class="skill-img"><img :src="skill.image" /></div>
            <div class="skill-description">
              <h4>{{ skill.description }}</h4>
              <a :href="`${skill.link}`">Read</a>
            </div>
          </div>
        </div>
      </div>
    </Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: "Blog",
  components: {
    Home
  },
  data() {
    return {
      sendProp: false,
      skills: [
        {
          id: 1,
          title: "Javascript",
          image: "/img/pwawithWorkbox.png",
          description:
            "How to Setup progressive web App(PWA) in vuejs using workbox.",
          link: "https://medium.com/@amarjeet.kumar_84240?p=935c68dab358"
        },
           {
          id: 2,
          title: "Javascript",
          image: "/img/pwawithWorkbox.png",
          description:
            "How to Setup progressive web App(PWA) in vuejs using workbox.",
          link: "https://medium.com/@amarjeet.kumar_84240?p=935c68dab358"
        }
      ]
    };
  }
};
</script>
<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  cursor: pointer;
}
.skill-main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f5f5;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 3px solid #eee;
}
.skill-title {
  text-align: center;
  flex: 0.2;
  margin-top: 1%;
  font-size: 2.5rem;
}
.skill-body {
  flex: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: inherit;
}
.skill-img {
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}
.skill-img > img {
  width: 80%;
  max-width: 100%;
}
.skill-description {
  flex: 0.7;
  margin: 5px;
}

@media screen and (max-width: 1000px) {
  .skill-main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f5f5f5;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .skill-body {
    flex: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .skill-description {
    margin: 5px;
  }
  /* .skill-img img {
    width: 50%;
    border-radius: 50%;
  } */
}
</style>
