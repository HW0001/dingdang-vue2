<template>
<layout>
    <tabs :tab-items="recordType" :value.sync="record" classPrefix="record" />
    <tabs :tab-items="intervalType" :value.sync="interval" classPrefix="interval" />
    <ol>
        <li v-for="(group, index) in groupedList" :key="index" class="record-title">
            <h3>{{ handleDate(group.title) }}</h3>
            <ol>
                <li v-for="(item, index2) in group.items" :key="index2" class="record-info">
                    <span class="tags">{{ getTagsName(item.selectedTags) }}</span>
                    <span class="notes">{{ item.noteVaule }} </span>
                    <span class="moeny">￥{{ item.money }}</span>
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
import dayjs from "dayjs";
import {
    recordType,
    intervalType
} from "@/constants/preject";
import {
    Component
} from "vue-property-decorator";
import {
    clone
} from "@/lib/tools";

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
    recordList = this.$store.state.monryRecord as MoneyObject[];

    get groupedList() {
        type itemType = {
            title: string;
            items: MoneyObject[];
        };
        const hashItem: itemType[] = [];
        const newRecodList = clone(this.recordList);
        newRecodList.sort(
            (a, b) => dayjs(b.saveTime).valueOf() - dayjs(a.saveTime).valueOf()
        );
        newRecodList.forEach((e) => {
            if (e.saveTime) {
                const current = dayjs(e.saveTime).format("YYYY-MM-DD");
                const lastIrem = hashItem[hashItem.length - 1];
                if (lastIrem && lastIrem.title === current) {
                    lastIrem.items.push(e);
                } else {
                    hashItem.push({
                        title: current,
                        items: [e],
                    });
                }
            }
        });
        return hashItem;
    }

    getTagsName(tag: TagData[]) {
        return tag.map((e) => e.name).join(",") || "无";
    }
    handleDate(date: string) {
        const now = dayjs();
        const current = dayjs(date);
        if (now.isSame(current, "d")) {
            return "今天";
        } else if (now.isSame(current.add(1, "d"), "d")) {
            return "昨天";
        } else if (now.isSame(current.add(2, "d"), "d")) {
            return "前天";
        } else if (now.isSame(current, "y")) {
            return current.format("M月D日");
        } else {
            return current.format("YYYY年M月D日");
        }
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

    h3 {
        color: #000000;
        font-size: 18px;
        border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    }

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
