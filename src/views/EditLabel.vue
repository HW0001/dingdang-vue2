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
            <label>标签名：<input type="text" v-model="tag.name" /></label>
        </main>
        <button class="del-btn" @click="delTag">删除标签</button>
    </div>
</layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
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
export default class EditLabel extends Vue {
    tag = {
        id: "",
        name: "",
    };
    created() {
        const {
            id
        } = this.$route.params;
        if (tagsModel.data.map((e) => e.id).indexOf(id) === -1) {
            this.$router.replace("/404");
        } else {
            this.tag = tagsModel.data.filter((e) => e.id === id)[0];
        }
    }
    delTag() {
        if (window.confirm("是否删除该标签?")) {
            tagsModel.delete(this.tag.id);
            this.$router.replace("/labels");
        }
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
        background-color: rgb(118, 118, 118);
        color: #fff;
        border: none;
        padding: 6px 16px;
        font-size: 16px;
    }
}
</style>
