<template>
  <layout>
    <div class="page">
      <key-page/>
      <types/>
      <notes/>
      <tags/>
    </div>
  </layout>
</template>

<script lang='ts'>
import Layout from "@/components/Layout.vue";
import KeyPage from "@/components/home/KeyPage.vue";
import Types from "@/components/home/Types.vue";
import Notes from "@/components/home/Notes.vue";
import Tags from "@/components/home/Tags.vue";
export default {
  name: "Home",
  components: {Tags, Notes, Types, KeyPage, Layout}
}
</script>

<style lang='scss' scoped>
.page{
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100%;
}


</style>