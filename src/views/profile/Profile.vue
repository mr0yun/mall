<template>
  <div id="profile">
    <!-- <toast message="hahhhhhh  hhhhhhhhhhhh"/> -->
  </div>
</template>

<script>
// import toast from 'components/common/toast'
export default {
  name: 'Profile',
  components:{
  },
  mounted() {
    console.log(this.$toast)
    this.$toast.show('hello world!', 5000);
  },
}
</script>

<style scoped>
  
</style>