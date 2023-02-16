<template>
  <div class="data-title">
    <asserts />
  </div>
</template>

<script setup>
import { reactive } from "vue";

import asserts from "./tab-asserts.vue";

defineProps({
  data_title: String,
});
</script>

<style lang="scss" scoped>
.data-title {
  display: flex;
  .obj-data {
    display: flex;
    justify-content: center;
    gap: 1rem;
    border: 1px solid rgba(180, 180, 180, 0.8);
    border-radius: 6px;
    max-width: 15%;
    width: 100%;
    padding: 1.75rem 1rem;
    margin: 0.75rem 1rem;
    .icons {
      display: flex;
      justify-content: center;
      margin: auto 0;
      .el-icon {
        margin: auto 0;
      }
    }
    .show-data {
      margin: auto 0;
    }
  }
  .element {
    .data {
      color: #00f;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .circle-check {
    .data {
      color: #0f0;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .circle-close {
    .data {
      color: #f00;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .question-filled {
    .data {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .directions {
    font-size: 15px;
  }

  .department {
    display: flex;
    flex-direction: column;
    gap: 0;
    .show-data {
      margin: auto;
      select[name="sel-dep"] {
        min-width: 150px;
        width: 100%;
        padding: 0.15rem;
        border-color: rgba(180, 180, 180, 0.4);
      }
    }
  }
  .department-self {
    flex: 0.5;
  }
}
</style>