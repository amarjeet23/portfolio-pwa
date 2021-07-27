<template>
<div class="exp-head">
     <div>
          <h2>Experience : -</h2>
      </div>
  <div class="exp-main">
    <div class="exp-list">
      <div class="selected-list"  v-for="comp in company" :key="comp.id">
        <img src="/img/arrow.png" v-if="comp.selected" />
        <div :class="comp.selected ? 'show-border' :''" @click="selectCurrent(comp)">{{ comp.name }}</div>
      </div>
    </div>
    <div class="exp-desc">
      <!-- {{ExperienceList[current]}}-->
      <div class="desc-header">
        <div>Duration : {{ ExperienceList[current].time }}</div>
        <div>Designation : {{ ExperienceList[current].designation }}</div>
      </div>
      <div class="desc-content">
        <div class="" v-for="list in ExperienceList[current].work" :key="list">
          <img src="/img/arrow.png" />{{ list }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "Experience",
  data() {
    return {
      current: 0,
      ExperienceList: [
        {
          id: 1,
          time: "14 Dec,20 - Present",
          designation: "Javascript Developer",
          work: [
            "worked on  an offline Based PWA application used by Real estate company to inspect and verify the condition of property and rooms before selling,buying or renting.",
            "User can use entire application in offline mode but required internet connection if user login for the first time in the application.",
            "worked on developing frontend",
            "API integration",
            "detecting first time login for user",
            "Offline first approach with PWA",
            "Bug Fixing and Code Refactoring"
          ]
        },
        {
          id: 2,
          time: "1 Jan,20 - 1 july 2020",
          designation: "Software Engineer",
          work: [
            "worked on a web based application in which the record for the services used by different customer are tracked.",
            "worked on developing frontend",
            "API integration",
            "detecting first time login for user",
            "Offline first approach with PWA",
            "Bug Fixing and Code Refactoring"
          ]
        },
        {
          id: 3,
          time: "2 Oct,2019 - 2 Dec,2019",
          designation: "React Developer-Trainee",
          work: [
            "worked on a project based on freelancing concept where client can post the requirement forproject and developer can apply for related post and interact with each other as per their requirement.",
            "Responsible for developing frontend",
            "Api and store Integration",
            "worked on redux-saga",
            "Bug Fixing and Code Refactoring"
          ]
        }
      ],
      company: [
        { id: 0, name: "Unthinkable", selected: true },
        { id: 1, name: "Shephertz", selected: false },
        { id: 2, name: "Axovel", selected: false }
      ]
    };
  },
  methods: {
    selectCurrent(company) {
      this.current = company.id;
      let selectedCompany = this.company.indexOf(company);
      this.company.forEach((comp) => {
        comp.selected = false;
      });
      this.company[selectedCompany].selected = true;
    }
  }
};
</script>
<style scoped>
.exp-head{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
}
.exp-main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  border: 5px solid #ffff;
  background-color: #ffff;
  border-radius: 5px;
  /* margin-right: 10%; */
  margin-bottom: 3%;
}
.exp-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0.2;
  border-right: 2px solid green;
  margin-right: 5px;
}
.exp-desc {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  flex: 0.8;
}
.desc-header {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 2px solid;
  margin-bottom: 5px;
}
.desc-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.desc-content img {
  height: 10px;
  margin-right: 10px;
}
img {
  height: 10px;
  margin-right: 10px;
}
.selected-list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.show-border{
    border-bottom : 2px solid green
}
</style>
