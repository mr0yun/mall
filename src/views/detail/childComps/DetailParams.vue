<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length != 0">
    <table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailParams',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style>
.param-info {
  font-size: 0.875rem;
  padding: 1.25rem 1rem;
  border-bottom: 5px solid #f2f5f8;
}

.params-info, table{
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr{
  height: 2.65rem;
}

.param-info table tr td{
  border-bottom: 1px solid rgba(100,100,100, 0.1);
}

.info-param-key{
  width: 6rem;
}

.info-param{
  border-top: 1px solid rgba(0,0,0,0.1);
}

.param-value{
  color: var(--color-high-text)
}

.info-img img {
  width: 100%;
}
</style>
