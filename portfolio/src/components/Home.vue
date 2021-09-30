<template>
  <div>
    <my-modal v-if="modalStatus"></my-modal>
    <div v-else>
      <Header></Header>
      <div class="main-content">
        <personal-info v-if="showDefault"></personal-info>
        <Skill v-if="showDefault"></Skill>
        <slot v-else></slot>
      </div>
      <hr />
      <social-media></social-media>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import myModal from "./Modal.vue";
import Header from "./Header.vue";
import Skill from "./Skill.vue";
import PersonalInfo from "./PersonalInfo.vue";
import SocialMedia from "./SocialMedia.vue";
export default {
  name: "Home",
  props:{
      showDefault:{type:Boolean,default:true}
  },
  components: {
    PersonalInfo,
    SocialMedia,
    Skill,
    Header,
    myModal
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("ModalModule", ["modalStatus",])
  }
};
</script>
