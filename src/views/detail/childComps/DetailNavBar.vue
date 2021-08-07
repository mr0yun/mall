<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" class="title-item" @click="itemClick(index)" :class="{highlight: currentIndex===index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return{
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('titleClick', index);
    },
    backClick(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    font-size: 1.125rem;
    box-shadow: 0 1.5px 2px rgb(233,233,233)
  }

  .title{
    display: flex;
  }

  .title-item{
    flex: 1;
  }

  .highlight{
    color: var(--color-high-text);
    /* font-weight: bold; */
  }

  .back img{
    vertical-align: middle;
  }
</style>