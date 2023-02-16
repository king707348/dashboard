<template>
  <div>
    <el-tabs type="border-card" v-model="activeName" @click="handle">
      <el-tab-pane label="資產" name="assets" >
        <div>
          <tabAsserts />
        </div>
      </el-tab-pane>
      <el-tab-pane label="GCB" name="gcb">
        <div>
          <tabGcb />
        </div>
      </el-tab-pane>
      <el-tab-pane label="VANS" name="vans">
        <div>
          <tabVans />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

import tabAsserts from "@/components/tab-asserts.vue";
import tabGcb from "@/components/tab-gcb.vue";
import tabVans from '@/components/tab-vans.vue'

const activeName = ref('assets')

const handle = (tab) => {
  // console.log(tab)
}


</script>

<style lang="scss" scoped>
.el-tabs--border-card {
  border: none;
  background: #c3c3c3;
  :deep() {
    .el-tabs__header {
      width: fit-content;
      .el-tabs__item {
        background: #c3c3c3;
      }
      .is-active {
        background: #fcfcfc;
      }
    }
    .el-tabs__content {
      background: #fcfcfc;
    }
  }
}
</style>