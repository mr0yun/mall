<template>
  <div class="toast" v-show="isShow">
    <div class="toast-message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(msg = 'hello toast!', duration = 1000){
      this.message = msg;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    }
  },
}
</script>

<style scoped>
  .toast{
    width: 100%;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: center;
    font-size: 1.125rem;
    color: white;
    display: flex;
    justify-content: center;
    z-index: 999;
  }
  .toast-message{
    padding: 0.5rem 1rem;
    width: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 1.5rem;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
  }
</style>