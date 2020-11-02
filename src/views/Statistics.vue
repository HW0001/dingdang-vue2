<template>
<layout>
    <tabs :tab-items="recordType" :value.sync="record" classPrefix="record" />
    <div class="separator"></div>
    <line-diagram :moneyType.sync="record" />
    <record-list :record.sync="record" />
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Tabs from "@/components/Tabs.vue";
import VueScroll from "@/mixins/vueSroll";
import RecordList from "@/components/statistic/RecordList.vue";
import LineDiagram from "@/components/statistic/LineDiagram.vue";
import {
    recordType
} from "@/constants/preject";
import {
    Component,
    Mixins
} from "vue-property-decorator";

@Component({
    components: {
        Layout,
        Tabs,
        RecordList,
        LineDiagram,
    },
})
export default class Statistics extends Mixins(VueScroll) {
    recordType = recordType;
    record = "-";
}
</script>

<style lang="scss" scoped>
.separator {
    height: 20px;
}
</style>
