import { ref, reactive, computed, inject } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const axios = inject("axios");
  const newData = reactive([])
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const getData = async () => {
    // vans
    await axios.get('src/components/data/API_response/vans.json').then((res) => {
      console.warn("status:", res.status);
      console.log(res.data.results.calc.asset_calc)
      newData.push(res.data.results.calc.asset_calc.asset_count)
    });
  };
  getData();

  return { count, doubleCount, increment, newData}
})
