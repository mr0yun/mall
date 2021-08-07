<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item" class="tab-control-item" @click="itemClick(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  },
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    justify-content: space-around;
    font-size: 1rem;
    line-height: 2.5rem;
  }
  .tab-control-item{
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 1rem 0;

  }
  .active{
    color: var(--color-tint);
    border-bottom: 3.5px solid var(--color-tint);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    font-weight: bold;
  }
</style>