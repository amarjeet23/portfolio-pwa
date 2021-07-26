<template>
   <div class="footer-main">
       <div>
           connect with me:
       </div>
         <div class="social-link">
        <div>
          <a href="https://www.linkedin.com/in/amarjeet-kumar-4662a1a7/">
            <img src="/img/linkedin.png" />
          </a>
        </div>
        <div>
          <a href="https://github.com/amarjeet23">
            <img src="/img/github.png" />
          </a>
        </div>
      </div>
   </div>
</template>
<script>

export default{
    name: "Project",
    data() {
        return{

        }
        
    },
}
</script>
<style scoped>
.social-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: cadetblue;
  height:200px */
}
.social-link img {
  height: 40px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
}
.footer-main{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
     background-color:#125871;
     color:#ffff;
  height:200px
}
</style>
