<script setup>
import { RouterLink, RouterView } from "vue-router";

import setheader from "./components/header.vue";
import setAside from "./components/asideList.vue";
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
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>

  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->

  <RouterView />
</template>

<style lang="scss" scoped>
  .el-header{
    position: sticky;
    top: 0;
    padding: 0;
    height: auto;
    z-index: 999;
  }
  .el-aside{
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>
