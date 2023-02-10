<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
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
    background: #9c9c9c;
    padding: 1rem;
}
</style>