<template>
<div>
    <ol class="record-statistic" v-if="groupedList.length > 0">
        <li v-for="(group, index) in groupedList" :key="index" class="record-title">
            <h3>
                <span>{{ handleDate(group.title) }}</span>
                <span>￥{{ group.total }}</span>
            </h3>
            <ol class="record-table">
                <li v-for="(item, index2) in group.items" :key="index2" class="record-info">
                    <span class="tags">{{ getTagsName(item.selectedTags) }}</span>
                    <span class="notes">{{ item.noteVaule }} </span>
                    <span class="moeny">￥{{ item.money }}</span>
                </li>
            </ol>
        </li>
    </ol>
    <div class="no-record" v-else>目前还没有记录</div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import {
    Component,
    PropSync
} from "vue-property-decorator";
import {
    clone
} from "@/lib/tools";

@Component
export default class Statistics extends Vue {
    @PropSync("record", {
        type: String,
        default: "-",
    })
    recordType: string | undefined;
    recordList = this.$store.state.monryRecord as MoneyObject[];
    tagList = this.$store.state.tagsRecord as TagData[];

    get groupedList() {
        type itemType = {
            title: string;
            total: number;
            items: MoneyObject[];
        };
        const hashItem: itemType[] = [];
        const newRecodList = clone(this.recordList).filter(
            (e) => e.type === this.recordType
        );
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
                        total: 0,
                        items: [e],
                    });
                }
            }
        });
        hashItem.map(
            (e) => (e.total = e.items.reduce((sum, curr) => sum + curr.money, 0))
        );
        return hashItem;
    }

    getTagsName(tag: string[]) {
        return (
            tag.map((e) => this.tagList.find((i) => i.id === e)?.name).join(",") ||
            "无"
        );
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
        background-color: rgb(196, 196, 196);

        &.selected {
            background: white;

            &::after {
                height: 0;
            }
        }
    }
}

.record-statistic {
    padding: 4px 0;

    .record-title {
        padding: 4px 16px;

        h3 {
            color: #000000;
            font-size: 18px;
            font-weight: 500;
            padding: 4px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgb(0, 0, 0, 0.2);
        }

        .record-table {
            .record-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
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
    }
}

.no-record {
    padding: 16px;
    text-align: center;
}
</style>
