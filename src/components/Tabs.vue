<template>
<ul class="tabs">
    <li v-for="item in tabItems" :key="item.value" :class="tabClass(item)" @click="currentValue = item.value">
        {{ item.name }}
    </li>
</ul>
</template>

<script lang="ts">
import Vue from "vue";
import {
    Component,
    Prop,
    PropSync
} from "vue-property-decorator";

type TabItems = {
    value: string;
    name: string;
};

@Component
export default class Tabs extends Vue {
    @Prop({
        type: Array,
        required: true,
    })
    tabItems!: TabItems[];
    @Prop(String) classPrefix: string | undefined;
    @PropSync("value", {
        type: String,
        required: true,
    })
    currentValue!: string;

    tabClass(item: TabItems) {
        return {
            [this.classPrefix + "-tab-item"]: this.classPrefix,
            selected: this.currentValue === item.value,
        };
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tabs {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 16px;

    li {
        width: 50%;
        height: 64px;
        line-height: 64px;
        background-color: rgb(196, 196, 196);
        color: #000000;
        font-size: 24px;
        font-family: $font-hei;
        position: relative;

        &.selected::after {
            content: "";
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
