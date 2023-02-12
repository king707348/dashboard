<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="資產"> 
        <div>
            <viewDataList />
        </div>
        </el-tab-pane>
      <el-tab-pane label="GCB"> Config </el-tab-pane>
      <el-tab-pane label="VANS"> Role </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
    import viewDataList from '../components/viewDataList.vue';


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