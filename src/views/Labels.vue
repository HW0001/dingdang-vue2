<template>
<layout>
    <div class="tags">
        <TagsView />
    </div>
    <router-link class="add-btn" :to="`/labels/edit/add`">
        <icon name="icon-add" />
    </router-link>
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import VueScroll from "@/mixins/vueSroll";
import TagsView from "@/components/label/TagsView.vue";
import {
    Component,
    Mixins
} from "vue-property-decorator";
import TagHelper from "@/mixins/tagHelper";

@Component({
    components: {
        Layout,
        Icon,
        TagsView,
    },
})
export default class Labels extends Mixins(TagHelper, VueScroll) {
    get tags() {
        return this.$store.state.tagsRecord;
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
    border: none;
    width: 48px;
    height: 48px;

    .icon {
        width: 100%;
        height: 100%;
    }
}
</style>
