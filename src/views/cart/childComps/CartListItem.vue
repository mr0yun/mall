<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton @checkBtnClick="checkedChange" v-model="product.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="('http:' + product.image)" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'CartListItem',
  components:{
    CheckButton
  },
  props:{
    product:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
      checkedChange() {
        this.product.checked = !this.product.checked;
      }
    }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    height: 8rem;
    display: flex;
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    align-items: center;
  }

  .item-selector {
    width: 10%;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    border: 1px solid #000;
    border-radius: 0.25rem;
    /* box-shadow: 1px 1px 1px lightgray; */
  }

  .item-img img {
    width: 6rem;
    border-radius: 0.25rem;
    position: relative;
    top: -40%;
    vertical-align: middle;
  }

  .item-info {
    margin-left: 0.5rem;
    width: 60%;
    font-size: 1rem;
    color: black;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-title{
    font-size: 1.125rem;
    margin-bottom: 0.6rem;
  }

  .item-desc{
    font-size: 0.875rem;
    color: rgb(150, 150, 150);
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .info-bottom {
    margin-top: 10px;
  }

  .info-bottom .item-price {
    color: var(--color-high-text);
    font-weight: bold;
  }
</style>