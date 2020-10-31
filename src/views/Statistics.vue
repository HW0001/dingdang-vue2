<template>
<layout>
    <tabs :tab-items="recordType" :value.sync="record" classPrefix="record" />
    <tabs :tab-items="intervalType" :value.sync="interval" classPrefix="interval" />
    <ol>
        <li v-for="(group, index) in recordList" :key="index" class="record-title">
            <h3>{{ group.title }}</h3>
            <ol>
                <li v-for="(item, index2) in group.items" :key="index2" class="record-info">
                    <span class="tags">{{ getTagsName(item.selectedTags) }}</span>
                    <span class="notes">{{ item.noteVaule }} </span>
                    <span class="moeny">{{ item.money }}</span>
                </li>
            </ol>
        </li>
    </ol>
</layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Tabs from "@/components/Tabs.vue";
import {
    recordType,
    intervalType
} from "@/constants/preject";
import {
    Component
} from "vue-property-decorator";

@Component({
    components: {
        Layout,
        Tabs,
    },
})
export default class Statistics extends Vue {
    recordType = recordType;
    intervalType = intervalType;
    record = "-";
    interval = "day";
    get recordList() {
        type itemType = {
            title: string;
            items: MoneyObject[];
        };
        const hashItem: {
            [key: string]: itemType;
        } = {};
        (this.$store.state.monryRecord as MoneyObject[]).forEach((e) => {
            if (e.saveTime) {
                const date = e.saveTime.split("T")[0];
                hashItem[date] = hashItem[date] || {
                    title: date,
                    items: [],
                };
                hashItem[date].items.push(e);
            }
        });
        return hashItem;
    }

    getTagsName(tag: TagData[]) {
        return tag.map((e) => e.name).join(",") || "无";
    }
}
</script>

<style lang="scss" scoped>
::v-deep {
    .record-tab-item {
        background: white;

        &.selected {
            background-color: rgb(196, 196, 196);

            &::after {
                height: 0;
            }
        }
    }

    .interval-tab-item {
        height: 48px;
        font-size: 18px;

        &.selected::after {
            height: 3px;
        }
    }
}

.record-title {
    padding: 4px 16px;

    .record-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding: 8px 0;

        .tags {
            color: #000000;
        }

        .notes {
            color: #999;
            margin-left: 8px;
            flex-grow: 1;
        }

        .money {
            color: #000000;
        }
    }
}
</style>
