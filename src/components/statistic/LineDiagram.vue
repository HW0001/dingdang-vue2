<template>
  <div id="main" class="main" v-show="recordList.length > 0"></div>
</template>

<script lang="ts">
import Vue from "vue";
import echarts from "echarts";
import dayjs from "dayjs";
import { Component, Prop } from "vue-property-decorator";

type Charts = {
  setOption: Function;
};

@Component
export default class LineDiagram extends Vue {
  dateType = "day";
  @Prop(String) moneyType: string | undefined;
  get recordList() {
    const lists = this.$store.state.monryRecord as MoneyObject[];
    if (lists.length !== 0) {
      return lists.filter((d) => {
        return (
          dayjs(d.saveTime).isAfter(dayjs().subtract(7, "d"), "d") &&
          d.type === this.moneyType
        );
      });
    } else return [] as MoneyObject[];
  }
  get title() {
    return this.moneyType === "-" ? "近七日支出" : "近七日收入";
  }
  dateInterval: string[] = [];

  moneyTotal: string[] = [];

  charts: Charts | undefined = undefined;

  options = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["近七日支出", "近七日收入"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: this.dateInterval,
    },
    yAxis: {
      type: "value",
    },

    series: [
      {
        name: this.title,
        type: "line",
        stack: "总量",
        data: this.moneyTotal,
        itemStyle: {
          borderWidth: 10,
        },
      },
    ],
  };

  getStatisData() {
    const day = dayjs();
    this.dateInterval.splice(0, this.dateInterval.length);
    this.moneyTotal.splice(0, this.moneyTotal.length);
    for (let i = 6; i >= 0; i--) {
      const curret = day.subtract(i, "d");
      this.moneyTotal.push(
        this.recordList
          .filter((e) => dayjs(e.saveTime).isSame(curret, "d"))
          .reduce((curr, d) => curr + d.money, 0)
          .toString()
      );
      this.dateInterval.push(curret.format("M-D"));
    }
  }
  drawLine() {
    if (this.recordList.length === 0) return;
    const div = document.getElementById("main") as HTMLDivElement;
    if (div) {
      this.charts = echarts.init(div);
      if (!this.charts) return;
      this.charts.setOption(this.options);
    }
  }
  mounted() {
    this.getStatisData();
    this.$nextTick(function() {
      this.drawLine();
    });
  }
}
</script>

<style scoped>
.main {
  width: 95%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
