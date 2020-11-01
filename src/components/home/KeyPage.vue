<template>
<div>
    <div class="output">{{ output }}</div>
    <div class="inoutMenu" @click="operation">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import {
    Component,
    Prop
} from "vue-property-decorator";

@Component
export default class Home extends Vue {
    @Prop(Number) money!: number;
    output = this.money.toString();
    operation(e: MouseEvent) {
        const button = e.target;
        let txt = "0";
        if (button) {
            txt = (button as HTMLButtonElement).textContent || "";
            if (isNaN(parseInt(txt)) && txt !== ".") {
                if (txt === "删除") {
                    this.remove();
                } else if (txt === "清空") {
                    this.output = "0";
                } else {
                    this.enter();
                }
            } else {
                this.changeValue(txt);
            }
        }
    }
    changeValue(txt: string) {
        if (this.output.length === 16) return;
        this.output === "." && txt === "." && (txt = "");
        this.output === "0" && txt === "." && (txt = "0.");
        this.output.includes(".") && txt === "." && (txt = "");
        if (this.output === "0") {
            this.output = txt;
        } else if (this.output === ".") {
            this.output = "0." + txt;
        } else {
            this.output += txt;
        }
    }
    remove() {
        this.output.length === 1 && (this.output = "0");
        this.output.length > 1 && (this.output = this.output.slice(0, -1));
    }
    enter() {
        this.$emit("update:money", parseFloat(this.output));
        this.$emit("submit");
        this.output = "0";
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.output {
    height: 64px;
    line-height: 64px;
    font-size: 36px;
    text-align: right;
    font-family: Consolas, monospace;
    box-shadow: inset 0 -4px 4px -4px rgba(0, 0, 0, 0.6);
    padding: 0 4px;
}

.inoutMenu {
    @extend %clearFix;

    button {
        float: left;
        $h: 64px;
        width: 25%;
        font-size: 18px;
        height: $h;
        line-height: $h;
        border: none;

        &.ok {
            height: $h * 2;
            float: right;
        }

        &.zero {
            width: 25% * 2;
        }

        &:active {
            background-color: rgba(151, 151, 151);
        }
    }

    $bg: #f2f2f2;

    :nth-child(1) {
        background-color: $bg;
    }

    :nth-child(2),
    :nth-child(5) {
        background-color: darken($bg, 4%);
    }

    :nth-child(3),
    :nth-child(6),
    :nth-child(9) {
        background-color: darken($bg, 4% * 2);
    }

    :nth-child(4),
    :nth-child(7),
    :nth-child(10) {
        background-color: darken($bg, 4% * 3);
    }

    :nth-child(8),
    :nth-child(11),
    :nth-child(13) {
        background-color: darken($bg, 4% * 4);
    }

    :nth-child(14) {
        background-color: darken($bg, 4% * 5);
    }

    :nth-child(12) {
        background-color: rgb(230, 182, 115);
    }
}
</style>
