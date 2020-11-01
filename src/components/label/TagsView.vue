<template>
<div class="wrapping">
    <div v-for="item in selectedTags" :key="item.id" class="tag-item" @click="gotoInfo(item)">
        <icon :name="item.icon" />
        <span>{{ item.name }}</span>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";

import {
    Component
} from "vue-property-decorator";

@Component({
    components: {
        Icon,
    },
})
export default class Tabs extends Vue {
    selectedTags = this.$store.state.tagsRecord as TagData[];
    gotoInfo(item: TagData) {
        this.$router.push("/labels/edit/" + item.id);
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
