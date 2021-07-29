<template>
  <div id='tab-bar'>
    <slot></slot>
  </div>
</template>

<script>
import 'assets/css/base.css'
export default {
  name: 'TabBar'
}
</script>


<style scoped>
  /* @import '../../assets/css/base.css'; */
  #tab-bar{
    width: 100%;
    height: 3rem;
    display: flex;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -2px 2px rgb(233, 233, 233);
    background-color: #f6f6f6;
  }
  
</style>
