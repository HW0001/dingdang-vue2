<template>
  <layout>
    <div class="page">
      <key-page :money.sync="record.money" @submit="saveRecord" />
      <tabs :value.sync="record.type" :tab-items="recordTypes" />
      <form-input notes="备注：" :input-value.sync="record.noteVaule" />
      <form-input
        notes="时间："
        input-type="date"
        :input-value.sync="record.saveTime"
      />
      <TagsView
        class-prefix="home"
        @iconClick="toggleTagSelected"
        :selecteds.sync="record.selectedTags"
      />
    </div>
  </layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import KeyPage from "@/components/home/KeyPage.vue";
import FormInput from "@/components/home/FormInput.vue";
import Tags from "@/components/home/Tags.vue";
import Tabs from "@/components/Tabs.vue";
import VueScroll from "@/mixins/vueSroll";
import TagsView from "@/components/label/TagsView.vue";
import { recordType } from "@/constants/preject";
import { clone } from "../lib/tools";
import { Component, Mixins } from "vue-property-decorator";
import dayjs from "dayjs";

@Component({
  components: {
    Tags,
    FormInput,
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
    saveTime: dayjs().toISOString(),
  };
  saveRecord() {
    this.$store.commit("addMoney", clone(this.record));
    this.record.noteVaule = "";
    this.record.selectedTags = [];
    this.record.money = 0;
    this.record.saveTime = this.record.saveTime || dayjs().toISOString();
    alert("保存成功！");
  }
  toggleTagSelected(id: string) {
    const index = this.record.selectedTags.indexOf(id);
    if (index > -1) {
      this.record.selectedTags.splice(index, 1);
    } else {
      this.record.selectedTags.push(id);
    }
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
