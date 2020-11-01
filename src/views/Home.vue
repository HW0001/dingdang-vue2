<template>
<layout>
    <div class="page">
        <key-page :money.sync="record.money" @submit="saveRecord" />
        <tabs :value.sync="record.type" :tab-items="recordTypes" />
        <notes :note-value.sync="record.noteVaule" />
        <TagsView class-prefix="home" @iconClick="toggleTagSelected" :selecteds.sync="record.selectedTags" />
    </div>
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import KeyPage from "@/components/home/KeyPage.vue";
import Notes from "@/components/home/Notes.vue";
import Tags from "@/components/home/Tags.vue";
import Tabs from "@/components/Tabs.vue";
import VueScroll from "@/mixins/vueSroll";
import TagsView from "@/components/label/TagsView.vue";
import {
    recordType
} from "@/constants/preject";
import {
    clone
} from "../lib/tools";
import {
    Component,
    Mixins
} from "vue-property-decorator";

@Component({
    components: {
        Tags,
        Notes,
        Tabs,
        KeyPage,
        Layout,
        TagsView,
    },
})
export default class Home extends Mixins(VueScroll) {
    recordList = this.$store.state.moneyRecord;
    recordTypes = recordType;
    record: MoneyObject = {
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
    toggleTagSelected(id: string) {
        const index = this.record.selectedTags.indexOf(id);
        if (index > -1) {
            this.record.selectedTags.splice(index, 1);
        } else {
            this.record.selectedTags.push(id);
        }
        console.log(this.record);
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    height: 100%;
    overflow: auto;
}

::v-deep {
    .home-icons {
        font-size: 12px;
        justify-content: flex-start;
        padding-left: 16px;
        padding-top: 8px;

        .tag-item {
            width: 15%;
            padding: 8px 0;

            span {
                font-size: 1em;
            }
        }
    }
}
</style>
