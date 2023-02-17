<template>
  <div class="data-title">
    <!-- 資產總數 -->
    <div class="obj-data element">
      <div class="icons">
        <el-icon :size="40"><ElementPlus color="#00f" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData.vans_total }}</div>
        <div class="directions">資產總數</div>
      </div>
    </div>
    <!-- 無風險 -->
    <div class="obj-data circle-check">
      <div class="icons">
        <el-icon :size="40"><CircleCheck color="#0f0" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData.vans_no_riskLen }}</div>
        <div class="directions">無風險資產數</div>
      </div>
    </div>
    <!-- 低風險 -->
    <div class="obj-data l_risk">
      <div class="icons">
        <el-icon :size="40"><Warning color="#0f0" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData.vans_l_riskLen }}</div>
        <div class="directions">低風險資產數</div>
      </div>
    </div>
    <!-- 中風險 -->
    <div class="obj-data m_risk">
      <div class="icons">
        <el-icon :size="40"><Warning color="#FFA500" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData.vans_m_riskLen }}</div>
        <div class="directions">中風險資產數</div>
      </div>
    </div>
    <!-- 高風險 -->
    <div class="obj-data h_risk">
      <div class="icons">
        <el-icon :size="40"><CircleClose color="#f00" /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{counterStore.newData.vans_h_riskLen  }}</div>
        <div class="directions">高風險資產數</div>
      </div>
    </div>
    <!-- 未稽查 -->
    <div class="obj-data no_audit">
      <div class="icons">
        <el-icon :size="40"><QuestionFilled /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">{{ counterStore.newData.vans_no_auditLen }}</div>
        <div class="directions">未稽查資產數</div>
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
  .l_risk,
  .m_risk,
  .h_risk {
    .data {
      color: #f00;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .l_risk {
    .data {
      color: #0f0;
    }
  }
  .m_risk {
    .data {
      color: #ffa500;
    }
  }
  .no_audit{
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