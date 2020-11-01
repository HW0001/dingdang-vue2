<template>
<layout>
    <div class="wrapping">
        <header>
            <router-link to="/labels">
                <icon name="icon-left" />
            </router-link>
            <span>编辑标签</span>
        </header>
        <main>
            <label>标签名：<input type="text" v-model="currentTag.name" /></label>
            <h3>选择一个图标</h3>
            <icons-view name="icon-icon_business" :selectedIconName.sync="currentTag.icon" />
        </main>
        <icon class="del-btn" @click.native="delTag" name="icon-delete" />
    </div>
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import VueScroll from "@/mixins/vueSroll";
import IconsView from "@/components/label/IconsView.vue";
import {
    Component,
    Mixins,
    Watch
} from "vue-property-decorator";
@Component({
    components: {
        Layout,
        Icon,
        IconsView,
    },
})
export default class EditLabel extends Mixins(VueScroll) {
    currentTag: TagData = {
        id: "",
        name: "",
        icon: "",
    };

    created() {
        const {
            id
        } = this.$route.params;
        const tags = this.$store.state.tagsRecord as TagData[];
        const tag = tags.filter((e) => e.id === id)[0];
        if (tag) {
            this.currentTag = tag;
        } else {
            if (tags.length > 0) {
                this.currentTag.id = (
                    Math.max(...tags.map((e) => +e.id)) + 1
                ).toString();
            } else {
                this.currentTag.id = "1";
            }
        }
    }
    delTag() {
        if (window.confirm("是否删除该标签?") && this.currentTag) {
            this.$store.commit("deleteTag", this.currentTag.id);
            this.$router.replace("/labels");
        }
    }
    @Watch("currentTag", {
        immediate: false,
        deep: true,
    })
    oncurrentTagChanged(val: TagData) {
        this.$store.commit("addTag", val);
    }
}
</script>

<style lang="scss" scoped>
.wrapping {
    height: 100%;
    position: relative;

    header {
        display: flex;
        align-items: center;
        padding: 8px;
        font-size: 16px;

        .icon {
            width: 24px;
            height: 32px;
        }

        span {
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
        }
    }

    main {
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        padding-left: 15px;
        border-bottom: 1px solid rgb(221, 221, 224);

        h3 {
            font-size: 16px;
            text-align: center;
        }

        input {
            border: none;
            font-size: inherit;
        }
    }

    .del-btn {
        display: block;
        position: absolute;
        left: 50%;
        bottom: 32px;
        transform: translateX(-50%);
        width: 3em;
        height: 3em;
    }
}
</style>
