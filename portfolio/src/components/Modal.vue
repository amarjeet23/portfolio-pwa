<template>
  <div class="modal-main">
    <div class="close-btn">
      <img src="img/close.png" @click="hideModals()" />
    </div>
    <div class="list">
      <div @click="changeRequest('/')">HOME</div>
      <!-- <router-link to="/home">PROJECT</router-link> -->
      <div  @click="changeRequest('/blog')">BLOG</div>
      <div @click="changeRequest('/About')">ABOUT</div>
      <p>amarjeetkohli17@gmail.com</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "myModal",
  dat() {
    return {
      show: false
    };
  },
  methods: {
    ...mapActions("ModalModule", ["hideModal"]),
    onChangeEventHandler() {
      this.mode = !this.mode;
    },
    hideModals() {
      this.$store.dispatch("ModalModule/hideModal", null, { root: true });
    },
    changeRequest(route) {
      this.hideModals();
      this.$router.push(`${route}`);
    }
  }
};
</script>

<style scoped>
.modal-main {
  background-color: #207398;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.close-btn {
  flex: 0.5;
  text-align: right;
  margin: 5px;
}
.close-btn img {
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;
  color: white;
  cursor:pointer
}
.list a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
