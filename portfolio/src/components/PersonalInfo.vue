<template>
  <div class="personal-info">
    <div class= "content">
      <img src="/img/profile.jpeg" />
      <p>Amarjeet kumar</p>
    </div>
    <div>
        <p>Hi! I am Amarjeet Kumar! a full stack javascript developer</p>
        <p>having more than 1+yrs of working experience</p>
        <p>Currently i am working at Unthinakble solution as a javascript developer</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalInfo",
  data() {
    return {};
  }
};
</script>
<style scoped>
.personal-info img {
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  cursor: pointer;
}
.personal-info{
    display:flex;
    flex-direction: column;
    border: 5px solid #ffff;
    background-color: #ffff;
    border-radius: 5px;
    /* margin-right:10%; */
    margin-bottom:3%;

    }
.content{
    display: flex;
    flex-direction: row;
    align-items:flex-end;
    border-bottom:1px solid grey;
    /* margin-right:50% */

}

</style>
