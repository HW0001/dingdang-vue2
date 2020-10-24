<template>
  <ul class="type">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang='ts'>
export default {
  name: "Types"
};
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.type{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 16px;
  li{
    width: 50%;
    height: 64px;
    line-height: 64px;
    background-color: rgb(196, 196, 196);
    color: #000000;
    font-size: 24px;
    font-family: $font-hei;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      top: 60px;
      left: 0;
      height: 4px;
      width: 100%;
      background-color: #000;
    }
  }
}

</style>