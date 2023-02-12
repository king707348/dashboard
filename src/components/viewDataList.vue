<template>
  <div class="data-assets">
    <div class="obj-data">
      <div class="icons">
        <el-icon :size="40"><ElementPlus /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">1</div>
        <div class="directions">文字</div>
      </div>
    </div>
    <div class="obj-data">
      <div class="icons">
        <el-icon :size="40"><ElementPlus /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">1</div>
        <div class="directions">文字</div>
      </div>
    </div>
    <div class="obj-data">
      <div class="icons">
        <el-icon :size="40"><ElementPlus /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">1</div>
        <div class="directions">文字</div>
      </div>
    </div>
    <div class="obj-data">
      <div class="icons">
        <el-icon :size="40"><ElementPlus /></el-icon>
      </div>
      <div class="show-data">
        <div class="data">1</div>
        <div class="directions">文字</div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { Menu as ElementPlus } from "@element-plus/icons-vue";

    const topData = reactive([
        {
            type: 'assets',
            icon: 'ElementPlus',
            data: 1,
            text: '資產總數'

        },{
            type: 'success',
            icon: 'CircleCheck',
            data: 1,
            text: '今日回報數'
        },{
            type: 'error',
            icon: 'CircleClose',
            data: 1,
            text: '今日回報數'
        },{
            type: 'unknown',
            icon: 'QuestionFilled',
            data: 1,
            text: '30天未回報數'
        }
    ])
</script>

<style lang="scss" scoped>
.data-assets {
  display: flex;
  .obj-data {
    display: flex;
    gap: 1rem;
    border: 1px solid gray;
    border-radius: 4px;
    max-width: 15%;
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 1rem;
    .icons {
      display: flex;
      margin: auto 0;
    }
  }
}
</style>