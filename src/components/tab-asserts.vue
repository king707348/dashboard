<template>
  <div class="data-title">
    <!-- element -->
    <div class="obj-data element">
      <div class="icons">
        <el-icon :size="40"><ElementPlus color="#00f" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData[0].vans.asset_count }}</div>
        <div class="directions">資產總數</div>
      </div>
    </div>
    <!-- CircleCheck -->
    <div class="obj-data circle-check">
      <div class="icons">
        <el-icon :size="40"><CircleCheck color="#0f0" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData[0].asset.assetLen }}</div>
        <div class="directions">今日回報數</div>
      </div>
    </div>
    <!-- CircleClose -->
    <div class="obj-data circle-close">
      <div class="icons">
        <el-icon :size="40"><CircleClose color="#f00" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData[0].asset.noneAssets30ResDataLen }}</div>
        <div class="directions">今日未回報數</div>
      </div>
    </div>
    <!-- QuestionFilled -->
    <div class="obj-data question-filled">
      <div class="icons">
        <el-icon :size="40"><QuestionFilled /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData[0].asset.noneAssetsResDataLen }}</div>
        <div class="directions">30天未回報數</div>
      </div>
    </div>
    <!-- department -->
    <div class="obj-data department department-other">
      <div class="icons">
        <div>部門</div>
        <el-icon :size="15"><Download /></el-icon>
      </div>
      <div class="show-data">
        <select name="sel-dep" id="">
          <option value="all">全部</option>
          <option value="dep1">部門1</option>
          <option value="dep2">部門2</option>
        </select>
      </div>
    </div>
    <!--department  -->
    <div class="obj-data department department-self">
      <div class="icons">
        <div>本部</div>
        <el-icon :size="15"><Warning /></el-icon>
      </div>
      <div class="show-data">
        <el-button type="info">選擇分站</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter.js";
import { storeToRefs } from "pinia";

import {
  Menu as ElementPlus,
  CircleCheck,
  CircleClose,
  QuestionFilled,
  Download,
  Warning,
} from "@element-plus/icons-vue";

const counterStore = useCounterStore();
const { newData } = storeToRefs(counterStore);
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