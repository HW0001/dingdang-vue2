<template>
<div class="nav-warp">
    <div class="content" :style="{ height: clictHeight }">
        <slot />
    </div>
    <div class="nav-div">
        <menu-nav />
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuNav from "@/components/MenuNav.vue";
import {
    Component
} from "vue-property-decorator";
@Component({
    components: {
        MenuNav,
    },
})
export default class EditLabel extends Vue {
    get clictHeight() {
        const clict = document.documentElement.getBoundingClientRect();
        return (clict.height || 1000) + "px";
    }
}
</script>

<style lang="scss" scoped>
.nav-warp {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .content {
        overflow: auto;
    }

    .nav-div {
        height: 56px;
    }
}
</style>
