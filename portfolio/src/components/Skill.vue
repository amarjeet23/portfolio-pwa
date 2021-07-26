<template>
  <div>
    skills
    <div class="skill-main">
      <div class="list">
        <div>Tech</div>
        <div class="skill-list" v-for="skill in Tech" :key="skill">
          <ul>
            <li><img src="/img/arrow.png" />{{ skill }}</li>
          </ul>
        </div>
      </div>
      <div class="list">
        <div>Framework</div>
        <div class="skill-list" v-for="skill in FrameWork" :key="skill">
          <ul>
            <li><img src="/img/arrow.png" />{{ skill }}</li>
          </ul>
        </div>
      </div>
      <div class="list">
        <div>Tools</div>
        <div class="skill-list" v-for="skill in Tools" :key="skill">
          <ul>
            <li><img src="/img/arrow.png" />{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skill",
  data() {
    return {
      Tech: ["javascript", "Typescript", "Nodejs", "PWA", "HTML", "CSS"],
      FrameWork: [
        "React & Redux",
        "Vuejs",
        "Express",
        "Redux-thunk & Redux-Saga"
      ],
      Tools: ["GitHub", "vs-code"]
    };
  }
};
</script>
<style scoped>
.skill-list {
}
ul li {
  list-style-type: none;
}
.skill-main {
    padding:5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 5px solid #ffff;
  background-color: #ffff;
  border-radius: 5px;
  /* margin-right: 10%; */
  margin-bottom: 3%;
}
img {
  height: 10px;
  margin-right: 10px;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
