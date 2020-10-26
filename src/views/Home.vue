<template>
<layout>
    <div class="page">
        <key-page :money.sync="record.money" @submit="saveRecord" />
        <types :type.sync="record.type" />
        <notes :note-value.sync="record.noteVaule" />
        <tags :currentTags.sync="currentTags" :selectedTags="record.selectedTags" />
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
    Component,
    Watch
} from 'vue-property-decorator';

type MoneyObject = {
    type: string;
    noteVaule: string;
    selectedTags: string[];
    money: number;
}

@Component({
    components: {
        Tags,
        Notes,
        Types,
        KeyPage,
        Layout
    }
})
export default class Home extends Vue {
    currentTags: string[] = ["衣", "食", "住", "行"]
    recordList: MoneyObject[] = [];
    record: MoneyObject = {
        type: "-",
        noteVaule: "",
        selectedTags: [],
        money: 0
    }
    mounted() {
        const list = localStorage.getItem("moneyobj");
        if (list) {
            this.recordList.splice(0, 0, ...JSON.parse(list));
        }
    }
    saveRecord() {
        this.recordList.push({
            ...this.record
        })
        alert("保存成功！")

    }
    @Watch("recordList")
    onRecordListChange(newList: MoneyObject[]) {
        localStorage.setItem("moneyobj", JSON.stringify(newList))
        this.$set(this.record, "noteVaule", "")
        this.$set(this.record, "selectedTags", [])
        this.$set(this.record, "money", 0)
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
}
</style>
