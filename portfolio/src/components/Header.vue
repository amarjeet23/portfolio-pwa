<template>
  <div class="header">
    <div class="header-left">
      <!-- <div><p>Amarjeet</p></div> -->
      <!-- <div>mode</div> -->
      <div>
          <toggle-button :value="mode"
               color="#B4161B"
               :sync="true"
               :labels="true"
               @change="onChangeEventHandler"
               />
      </div>
    </div>
    <div class="header-right" @click="showModals()"><img src="img/hamber.png"/></div>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  name: "Header",
  data() {
    return {
        mode:false,
        lable:true
    };
  },
  computed:{
  },
  methods:{
    ...mapActions('ModalModule',["showModal","hideModal"]),
      onChangeEventHandler(){
          this.mode = !this.mode
      },
      showModals(){
        this.$store.dispatch('ModalModule/showModal', null, {root:true})
      },
      hideModals(){
        this.$store.dispatch('ModalModule/hideModal', null, {root:true})


      }
  }
};
</script>
<style scoped>
.header {
  height: 6rem;
  width: 100%;
  background-color: #125871;
  position: sticky;
  top: 0;
  z-index: 100;
  font-size: 3rem;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  flex:0.4
}
.header-right{
    margin-right:20px;
}
.header-right img{
  
    height:60px;
    border-radius:50%;
    cursor: pointer;
    /* overflow-y: hidden; */
}

@media screen and (max-width: 1000px) {
  .header {
    height: 6rem;
    width: 100%;
    background-color: #125871;
    position: sticky;
    top: 0;
    z-index: 100;
    font-size: 3rem;
    max-width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
  }
  .header-right{
    margin-right:20px;
}
}
</style>
