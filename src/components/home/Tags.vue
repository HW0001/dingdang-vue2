<template>
  <div class="tags">
    <ul>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <button>新增标签</button>
  </div>
</template>

<script lang='ts'>
export default {
  name: "Tags"
};
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.tags{
  font-size: 14px;
  padding: 20px;
  ul{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    li{
      $h:22px;
      padding: 0 16px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      background-color: rgb(217, 217, 217);
      margin-right: 24px;
    }
  }
  button{
    background-color: transparent;
    border: none;
    color: #999999;
    line-height: 22px;
    border-bottom: 1px solid;
    padding:0 3px;
  }
}

</style>