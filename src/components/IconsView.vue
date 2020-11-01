<template>
<div class="icons-div">
    <div v-for="item in fileNames" :key="item" class="child-item" :class="{ selected: currentName === getFileName(item) }">
        <icon :name="getFileName(item)" class="icon-item" @click.native="toggle(item)" />
        <icon name="icon-checked" class="icon-checked" v-if="currentName === getFileName(item)" />
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";
import {
    Component,
    PropSync
} from "vue-property-decorator";

@Component({
    components: {
        Icon,
    },
})
export default class Tabs extends Vue {
    fileNames: string[] = [];
    @PropSync("selectedIconName", {
        type: String,
    })
    currentName: string | undefined;

    created() {
        for (let i = 1; i < 23; i++) {
            this.fileNames.push(i < 10 ? "0" + i : i.toString());
        }
    }
    getFileName(item: string) {
        return "icon-icon_" + item;
    }
    toggle(item: string) {
        this.currentName = this.getFileName(item);
    }
}
</script>

<style lang="scss" scoped>
.icons-div {
    display: flex;
    flex-wrap: wrap;
    padding: 16px 16px;

    .child-item {
        position: relative;

        &.selected {
            transform: scale(1.2);
        }

        .icon-item {
            width: 32px;
            height: 32px;
            margin-left: 16px;
            margin-bottom: 24px;
            padding: 0;
        }

        .icon-checked {
            position: absolute;
            top: 34px;
            left: 20px;
            width: 24px;
            height: 24px;
        }
    }
}
</style>
