<template>
<layout>
    <tabs :tab-items="recordType" :value.sync="record" classPrefix="record" />
    <record-list :record.sync="record" />
    <GraphStatistic />
</layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Tabs from "@/components/Tabs.vue";
import VueScroll from "@/mixins/vueSroll";
import RecordList from "@/components/statistic/RecordList.vue";
import GraphStatistic from "@/components/statistic/GraphStatistic.vue";
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
        GraphStatistic,
    },
})
export default class Statistics extends Mixins(VueScroll) {
    recordType = recordType;
    record = "-";
}
</script>

<style lang="scss" scoped></style>
