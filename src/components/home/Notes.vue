<template>
<div class="notes">
    <label>
        <span>备注:</span>
        <input type="text" placeholder="在这里添加备注" v-model="newNoteValue" />
    </label>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import {
    Component,
    PropSync
} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
    @PropSync('noteValue', {
        type: String,
        default: ''
    }) newNoteValue!: string;
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.notes {
    padding: 0 16px;

    label {
        font-size: 14px;

        span {
            font-size: inherit;
            font-family: $font-hei;
        }

        input {
            font-size: inherit;
            border: none;
            padding: 16px 8px;
        }
    }
}
</style>
