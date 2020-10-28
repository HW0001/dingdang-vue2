<template>
<layout>
    <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
            <span>{{ tag.name }}</span>
            <icon name="icon-right" />
        </router-link>
    </div>
    <button>增加标签</button>
    <router-view />
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Vue from "vue";
import {
    Component
} from "vue-property-decorator";

import tagsModel from "@/models/tagsModel";
tagsModel.fetch();

@Component({
    components: {
        Layout,
        Icon,
    },
})
export default class Labels extends Vue {
    tags = tagsModel.data;
}
</script>

<style lang="scss" scoped>
.tags {
    font-size: 16px;
    padding: 12px 16px 44px 16px;

    .tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid rgb(221, 221, 224);
    }

    svg {
        width: 24px;
        height: 32px;
    }
}
</style>
