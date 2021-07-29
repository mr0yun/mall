<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.ace">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
    recommends: {
      type: Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    /* width: 100%; */
    text-align: center;
    padding: 0.6rem 0 1.2rem;
    border-bottom: 0.5rem solid #eee;
  }
  .recommend-item img{
    width: 90%;
    margin-bottom: 0.8rem;
  }
</style>