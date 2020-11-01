<template>
<div>
    404
    <router-link to="/home">返回首页</router-link>
</div>
</template>

<script lang="ts">
import VueScroll from "@/mixins/vueSroll";
import {
    Component,
    Mixins
} from "vue-property-decorator";

@Component
export default class NotFound extends Mixins(VueScroll) {}
</script>

<style lang="scss" scoped></style>
