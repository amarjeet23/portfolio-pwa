<template>
 <div class="skill">
    <div class="skill-main" v-for="skill in skills" :key="skill.id">
    <!-- <div class="skill-title" >{{skill.title}}</div> -->
    <div class="skill-body">
      <div class="skill-img"><img :src='skill.image'/></div>
      <div class="skill-description">{{skill.description}}</div>
    </div>
  </div>
 </div>
</template>
<script>
export default {
  name: "Skill",
  data() {
    return {
      skills :[
        {id:1,title:'Javascript',image:'/img/jsts.jpeg',description:'I have been learning JavaScript for more than 2-3 years now, every single day! I\'m far from being a specialist, but as Kyle Simpson says: "Nobody really is!". I\'m doing ok with JavaScript in my opinion! and also using typescript with framework like React and Vuejs'
        },
        {id:2,title:'FrameWork',image:'/img/framework.png',description:'I like to think that I am good in javascript framework,specially in React and vuejs.if i talk about React I\'m more comfortable in it,also in  Redux & redux-saga. I am working professionally as React & Vuejs developer and I am building enterprise React/vue apps! My goal is to master React/vue and become a reference point for it!'
        },
        {id:3,title:'Node js',image:'/img/nodejs.png',description:'Node Js is JavaScript running outside its natural environment - the browser! I\'m using Node on daily basis on my job and I can say that I\'m a Node Js developer! Node Js can do much more than API routes with Express, and I use Node for different, not so common tasks!'},
        {id:4,title:'PWA',image:'/img/pwa.png',description:'As PWA is quite becoming popular these days,having PWA skills is a must these days. I have gain quite much experience in developing PWA application and becoming good at it day by day'}


      ]
    };
  }
};
</script>
<style scoped>
.skill{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width:100%
}
.skill-main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f5f5;
  width:100%;
  height:200px;
  margin-bottom:20px;
  border-radius: 10px;
  border:3px solid #eee
}
.skill-title{
  text-align: center;
  flex:0.2;
  margin-top:1%;
  font-size: 2.5rem;
}
.skill-body{
  flex:0.8;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.skill-img{
  flex:0.3;
  /* text-align: center;
   */
  /* border:1px solid #000000; */
  display:flex;
  justify-content: center;
  align-items: center;
}
.skill-img >img{
  /* height:50px; */
  width:80%;
  max-width:100%;
  /* height:130px; */

}
.skill-description{
  flex:0.7;
  margin-left:15px;
  /* border:1px solid #000000 */
}

@media screen and (max-width: 1000px) {
  .skill-main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f5f5;
  width:100%;
  height:auto;
  margin-bottom:20px;
  border-radius: 10px;
   
  }
  .skill-body{
  flex:0.8;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
}
.skill-img img {
  /* height:50px; */
  width:100%;
  /* max-width:100%; */
  /* border-radius:50% */
  /* height:130px; */

}
}
</style>
