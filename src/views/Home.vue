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
import {
    clone
} from "../lib/tools";
import Vue from "vue";
import {
    Component
} from "vue-property-decorator";

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
    recordList = this.$store.state.moneyRecord;
    record = {
        type: "-",
        noteVaule: "",
        selectedTags: [],
        money: 0,
        saveTime: undefined,
    };
    saveRecord() {
        this.$store.commit("addMoney", clone(this.record));
        this.record.noteVaule = "";
        this.record.selectedTags = [];
        this.record.money = 0;
        this.record.saveTime = undefined;
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
