<template>
<layout>
    <div class="page">
        <key-page :money.sync="record.money" @submit="saveRecord" />
        <types :type.sync="record.type" />
        <notes :note-value.sync="record.noteVaule" />
        <tags :selectedTags="record.selectedTags" />
    </div>
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import KeyPage from "@/components/home/KeyPage.vue";
import Types from "@/components/home/Types.vue";
import Notes from "@/components/home/Notes.vue";
import Tags from "@/components/home/Tags.vue";
import Vue from "vue";
import {
    Component
} from "vue-property-decorator";

import recordModel from "@/models/recordModel";
recordModel.fetch();
@Component({
    components: {
        Tags,
        Notes,
        Types,
        KeyPage,
        Layout,
    },
})
export default class Home extends Vue {
    recordList = recordModel.data;
    record = recordModel.reset();
    saveRecord() {
        recordModel.add(this.record);
        this.record = recordModel.reset();
        alert("保存成功！");
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    height: 100%;
}
</style>
