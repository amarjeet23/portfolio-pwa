<template>
  <div>
    <Home :showDefault="sendProp">
      <div class="about-main">
        <div>
          <ul>
            <li>
              I am a self-taught web developer. Still learning! If you want to
              know what I am able to do, take a look at my
              <a href="https://github.com/amarjeet23">Github</a>.
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              I know Javascript,TypeScript, React & Redux, Redux-saga, Vue.js,
              Nodejs, ExpressJs, MongoDb, Progressive Web App(PWA). I can use
              all of this technologies in production applications to build
              interesting things.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              I know JavaScript good enough so far, even though I have not
              mastered it perfectly - yet!
            </li>
            <li>I am a humble person willing to learn continuously.</li>
          </ul>
        </div>
      </div>
    </Home>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
export default {
  components: {
    Home
  },
  name: "About",
  data() {
    return {
      sendProp: false
    };
  }
};
</script>
<style scoped>
.about-main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
