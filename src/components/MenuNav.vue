<template>
<nav>
    <router-link to="/labels" active-class="selected">
        <div>
            <icon name="icon-label" /> <span>标签</span>
        </div>
    </router-link>
    <router-link to="/home" active-class="selected">
        <div>
            <icon name="icon-home" /> <span>账本</span>
        </div>
    </router-link>
    <router-link to="/statistics" active-class="selected">
        <div>
            <icon name="icon-statistics" /> <span>统计</span>
        </div>
    </router-link>
</nav>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
export default {
    name: "MenuNav",
    components: {
        Icon,
    },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

nav {
    display: flex;
    box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
    height: 56px;

    >a {
        width: 33.33%;

        >div {
            width: 48px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            border: none;
            border-radius: 50%;
        }

        &.selected>div {
            background-color: $active-color;
            color: white;
            height: 48px;
            padding: 4px;

            span {
                display: none;
            }
        }

        .icon {
            width: 32px;
            height: 32px;
        }

        span {
            font-size: 12px;
        }

        &.selected {
            color: $active-color;
        }
    }
}
</style>
