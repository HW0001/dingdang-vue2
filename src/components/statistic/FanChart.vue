<template>
<e-charts class="my-chart" :options="polar" />
</template>

<script lang="ts">
import Vue from "vue";
import {
    Component
} from "vue-property-decorator";

@Component({
    components: {},
})
export default class FanChart extends Vue {
    polar = {
        title: {
            text: "极坐标双数值轴",
        },
        legend: {
            data: ["line"],
        },
        polar: {
            center: ["50%", "54%"],
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
            },
        },
        angleAxis: {
            type: "value",
            startAngle: 0,
        },
        radiusAxis: {
            min: 0,
        },
        series: [{
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: [1, 2, 3, 4, 5, 6],
        }, ],
        animationDuration: 2000,
    };
}
</script>

<style lang="scss" scoped>
.my-chart {
    width: 200px;
    height: 200px;
}
</style>
