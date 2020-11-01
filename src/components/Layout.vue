<template>
<div class="nav-warp">
    <div class="content">
        <slot />
    </div>
    <menu-nav />
</div>
</template>

<script lang="ts">
import MenuNav from "@/components/MenuNav.vue";
export default {
    name: "Layout",
    components: {
        MenuNav,
    },
};
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
        height: calc(100vh - 56px);
        overflow: auto;
    }
}
</style>
