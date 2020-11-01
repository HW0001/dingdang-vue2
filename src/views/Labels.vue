<template>
<layout>
    <div class="tags">
        <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
            <span>{{ tag.name }}</span>
            <icon name="icon-right" />
        </router-link>
    </div>
    <button class="add-btn" @click="addTag">新建标签</button>
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import VueScroll from "@/mixins/vueSroll";
import {
    Component,
    Mixins
} from "vue-property-decorator";
import TagHelper from "@/mixins/tagHelper";

@Component({
    components: {
        Layout,
        Icon,
    },
})
export default class Labels extends Mixins(TagHelper, VueScroll) {
    get tags() {
        return this.$store.state.tagsRecord;
    }
    addTag() {
        const tag = window.prompt("请输入标签名：");
        if (tag) {
            this.$store.commit("addTag", tag);
        }
    }
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

.add-btn {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    color: #fff;
    border: none;
    background-color: rgb(118, 118, 118);
    padding: 8px 16px;
    border-radius: 4px;
}
</style>
