<template>
  <div class="tags">
    <ul>
      <li
        v-for="(item, index) in currentTags"
        :key="index"
        @click="toggle(item)"
        :class="{ selected: selectTags.indexOf(item) > -1 }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Mixins } from "vue-property-decorator";
import TagHelper from "@/mixins/tagHelper";

@Component
export default class Types extends Mixins(TagHelper) {
  @PropSync("selectedTags", {
    type: Array,
  })
  selectTags!: string[];
  get currentTags() {
    return this.$store.state.tagsRecord;
  }

  toggle(tag: string) {
    const index = this.selectTags.indexOf(tag);
    if (index > -1) {
      this.selectTags.splice(index, 1);
    } else {
      this.selectTags.push(tag);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding: 5px;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;

    li {
      $h: 24px;
      padding: 0 16px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      $bg: rgb(217, 217, 217);
      background-color: $bg;
      margin-right: 12px;
      margin-bottom: 8px;

      &.selected {
        background-color: darken($color: $bg, $amount: 50%);
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: #999999;
    line-height: 22px;
    border-bottom: 1px solid;
    padding: 0 3px;
  }
}
</style>
