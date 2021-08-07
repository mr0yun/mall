<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': checked}" @click="selectItem">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  value: {
		    type: Boolean,
        default: true
      }
    },
    data: function () {
		  return {
		    checked: this.value
      }
    },
    methods: {
      selectItem: function () {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value: function (newValue) {
        this.checked = newValue;
      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .icon-selector img{
    width: 95%;
  }

  .selector-active {
    background-color: var(--color-high-text);
    border-color: var(--color-high-text);
  }
</style>
