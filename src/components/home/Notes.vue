<template>
  <div class="notes">
    <label>
      <span>备注:</span>
      <input type="text" placeholder="在这里添加备注"/>
    </label>
  </div>
</template>

<script lang='ts'>
export default {
  name: "Notes"
};
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.notes{
  padding: 0 16px ;
  label{
    font-size: 14px;
    span{
      font-size: inherit;
      font-family: $font-hei;
    }
    input{
      font-size: inherit;
      border: none;
      padding: 16px 8px;
    }
  }
}
</style>