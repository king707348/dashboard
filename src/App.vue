<script setup>
import { RouterLink, RouterView } from "vue-router";

import setheader from "./components/header.vue";
import setAside from "./components/asideList.vue";
import mainView from './views/mainView.vue'


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <setheader></setheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <setAside></setAside>
        </el-aside>
        <el-main>
          <mainView></mainView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .el-header{
    position: sticky;
    top: 0;
    padding: 0;
    height: auto;
    background: #ffffff;
    z-index: 1000;
  }
  .el-aside{
    position: relative;
    background: #3c3c3c;
    z-index: 999;
  }
  .el-main{
    padding: 0;
  }
</style>
