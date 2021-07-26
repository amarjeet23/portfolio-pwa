<template>
    <div class="project-main">
       <div>Projects</div>
       <div class="project-list">
           <div class="project" v-for="item in projectList" :key="item.id">
           <h3 class="project-header">{{item.name}}</h3><hr>
           <p class="project-main">{{item.description}}</p>
           <div class="project-footer" v-for="skill in item.skills" :key="skill">
               <div>{{skill}}</div>

           </div>
        </div>
        </div> 
    </div>
</template>
<script>

export default{
    name: "Project",
    data() {
        return{
            projectList:[
                {id:1,name:'Propify-AG',description:'xxxxxxxxx',skills:['javascript,Vuejs,PWA,indexdb']},
                {id:2,name:'Propify-AG',description:'xxxxxxxxx',skills:['javascript,Vuejs,PWA,indexdb']},
                {id:3,name:'Propify-AG',description:'xxxxxxxxx',skills:['javascript,Vuejs,PWA,indexdb']},
            ]

        }
        
    },
}
</script>
<style scoped>
.project-main{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
}
.project-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.project{
    background-color: #ffffff;
    border:2px solid #eee;
    width:35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap:wrap;
    height:300px;
    text-align:center;
    margin:2px;
    border-radius:2%

}
.skills{
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap:wrap
}
.project-header{
    flex:0.2;
}
.project-footer{
    flex:0.3;

}
.project-main{
    flex:0.5;
}
</style>