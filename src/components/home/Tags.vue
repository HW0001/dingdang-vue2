<template>
<div class="tags">
    <ul>
        <li v-for="(item, index) in currentTags" :key="index" @click="toggle(item)" :class="{ selected: selectTags.indexOf(item) > -1 }">
            {{ item }}
        </li>
    </ul>
    <button @click="addTag">新增标签</button>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import tagsModel from "@/models/tagsModel";
tagsModel.fetch();

import {
    Component,
    PropSync
} from "vue-property-decorator";

@Component
export default class Types extends Vue {
    currentTags = tagsModel.data;

    @PropSync("selectedTags", {
        type: Array,
    })
    selectTags!: string[];

    toggle(tag: string) {
        const index = this.selectTags.indexOf(tag);
        if (index > -1) {
            this.selectTags.splice(index, 1);
        } else {
            this.selectTags.push(tag);
        }
    }
    addTag() {
        const tag = window.prompt("请输入标签名：");
        if (tag) {
            tagsModel.add(tag);
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
