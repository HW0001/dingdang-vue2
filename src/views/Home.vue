<template>
<layout>
    <div class="page">
        <key-page :money.sync="record.money" />
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
    Component
} from 'vue-property-decorator';

interface MoneyObject {
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
    record: MoneyObject = {
        type: "-",
        noteVaule: "",
        selectedTags: [],
        money: 0
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
