<template>
  <div>
    <LineChart :chartData="chartConfig" />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter.js";

import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore()
const { chartConfig } = storeToRefs(counterStore);


console.log(chartConfig.value)

Chart.register(...registerables);
</script>

<style lang="scss" scoped >
</style>