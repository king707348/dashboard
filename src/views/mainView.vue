<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.el-breadcrumb{
    padding: 1rem;
}
.view{
    background: #c3c3c3;
    padding: 1rem;
    height: 90vh;
}
</style>