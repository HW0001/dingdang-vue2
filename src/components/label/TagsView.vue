<template>
<div class="wrapping" :class="{ [`${classPrefix}-icons`]: classPrefix }">
    <div v-for="item in savedTags" :key="item.id" class="tag-item" @click="iconClick(item)" :class="{ selected: selectedTags && selectedTags.indexOf(item.id) > -1 }">
        <icon :name="item.icon" />
        <span>{{ item.name || "无" }}</span>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";

import {
    Component,
    Prop,
    PropSync
} from "vue-property-decorator";

@Component({
    components: {
        Icon,
    },
})
export default class Tabs extends Vue {
    savedTags = this.$store.state.tagsRecord as TagData[];
    @Prop(String) classPrefix: string | undefined;
    @PropSync("selecteds", {
        type: Array,
    })
    selectedTags: string[] | undefined;
    iconClick(item: TagData) {
        this.$emit("iconClick", item.id);
    }
}
</script>

<style lang="scss" scoped>
.wrapping {
    display: flex;
    flex-wrap: wrap;

    .tag-item {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px 0;

        .icon {
            width: 2em;
            height: 2em;
        }

        span {
            font-size: 16px;
            margin-top: 4px;
        }
    }
}
</style>
