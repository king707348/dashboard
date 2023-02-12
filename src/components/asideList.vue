<template>
  <div class="aside">
    <el-scrollbar>
      <el-menu :default-openeds="['1']">
        <router-link to="/">
          <el-menu-item index="1">
            <template #title>
              <el-icon><message /></el-icon>儀表板
            </template>
          </el-menu-item>
        </router-link>
        <router-link to="/assetsManagement">
          <el-menu-item index="2">
            <template #title>
              <el-icon><message /></el-icon>資產管理
            </template>
          </el-menu-item>
        </router-link>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><ChatLineSquare /></el-icon>GCB管理
          </template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Promotion /></el-icon>VANS管理
          </template>
          <el-menu-item index="4-1">Option 1</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><Document /></el-icon>報表管理
          </template>
          <el-menu-item index="5-1">Option 1</el-menu-item>
          <el-menu-item index="5-2">Option 2</el-menu-item>
          <el-menu-item index="5-3">Option 3</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><Position /></el-icon>任務管理
          </template>
          <el-menu-item index="6-1">Option 1</el-menu-item>
          <el-menu-item index="6-2">Option 2</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="7">
          <template #title>
            <el-icon><Position /></el-icon>排程管理
          </template>
        </el-menu-item>
        <el-menu-item index="8">
          <template #title>
            <el-icon><Search Search /></el-icon>搜尋
          </template>
        </el-menu-item>
        <el-sub-menu index="9">
          <template #title>
            <el-icon><Setting /></el-icon>設定
          </template>
          <el-menu-item index="9-1">Option 1</el-menu-item>
          <el-menu-item index="9-2">Option 2</el-menu-item>
          <el-menu-item index="9-3">Option 3</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import {
  Menu as ChatLineSquare,
  Promotion,
  Document,
  Position,
  Message,
  Setting,
  Search,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.aside{
  position: fixed;
}
.el-menu {
  border: none;

  :deep() {
    .el-sub-menu__title,
    .el-menu-item {
      color: #ececec;
      background: #3c3c3c;
    }
    .el-sub-menu .el-menu {
      color: #ececec;
      background: #3c3c3c;
    }
    &:hover {
      background: #6c6c6c;
    }
  }
}
</style>