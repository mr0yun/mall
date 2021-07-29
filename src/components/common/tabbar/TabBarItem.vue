<template>
  <div class="tab-bar-item" @click='itemClick'>
  <!-- 具名插槽 -->
    <div v-if="inActive"><slot name="item-icon"></slot></div> 
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    inActive(){  // 判断当前路径是否是指定跳转的路径
      return this.$route.path.indexOf(this.path);
    },
    activeStyle(){
      return !this.inActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      // console.log('itemClick');
      if(this.inActive)
        this.$router.replace(this.path);
        // 跳转到传入的path的路由
    }
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 0.875rem;
    color: #707070;
  }
  .tab-bar-item img{
    width: 1.75rem;
    height: 1.75rem;
    vertical-align: middle;
  }
/*   .active{
    color: #000;
  } */
</style>