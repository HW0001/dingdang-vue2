<template>
  <div class="notes">
    <template v-if="inputType === 'text'">
      <label>
        <span>{{ notes }}</span>
        <input
          :type="inputType"
          placeholder="在这里添加备注"
          :value="inputValue"
          @input="$emit('update:inputValue', $event.target.value)"
        />
      </label>
    </template>
    <template v-else>
      <label>
        <span>{{ notes }}</span>
        <input
          :type="inputType"
          placeholder="在这里添加备注"
          :value="forMatDate(inputValue)"
          @change="$emit('update:inputValue', $event.target.value)"
        />
      </label>
    </template>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class FormInput extends Vue {
  @Prop(String) notes: string | undefined;

  @Prop({
    default: "text",
  })
  readonly inputType!: string;

  @Prop(String) inputValue: string | undefined;

  forMatDate(date: string) {
    return dayjs(date).format("YYYY-MM-DD");
  }
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
      padding: 8px 8px;
    }

    input[type="date"] {
      background: rgb(255, 255, 255, 0);
    }
  }
}
</style>
