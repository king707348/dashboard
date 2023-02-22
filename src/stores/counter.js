import { ref, computed, inject } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const axios = inject("axios");
  const newData = ref([])
  const assetData_date = ref([])
  const asset_total = ref([])


  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const getData = () => {
    assetData()
    noneAssets30ResData()
    noneAssetsResData()
    gcb()
    vans()
    // console.log(newData.value)
  };

  const assetData = async () => {
    try {
      const res = await axios.get('src/components/data/API_response/assets_今日回報數.json')
      newData.value.push(res.data.results)
      newData.value.assetData = res.data.results.totalRow
    } catch (error) {
      console.log(error)
    }
  }
  const noneAssetsResData = async () => {
    try {
      const res = await axios.get('src/components/data/API_response/assets_今日未回報數.json')
      newData.value.push(res.data.results)
      newData.value.noneResData = res.data.results.totalRow
    } catch (error) {
      console.log(error)
    }
  }
  const noneAssets30ResData = async () => {
    try {
      const res = await axios.get('src/components/data/API_response/assets_30天未回報數.json')
      newData.value.push(res.data.results)
      newData.value.none30ResData = res.data.results.totalRow
    } catch (error) {
      console.log(error)
    }
  };
  const gcb = async () => {
    try {
      const res = await axios.get('src/components/data/API_response/gcb.json')
      newData.value.push(res.data.results)
      newData.value.agentPassStat_pass = res.data.results.agentPassStat.passed
      newData.value.agentPassStat_failed = res.data.results.agentPassStat.failed
      newData.value.agentPassStat_other = res.data.results.agentPassStat.other
      newData.value.assetData_dateInfo = res.data.results.agentAuditDateInfo
      newData.value.assetData_date = Object.keys(newData.value.assetData_dateInfo)
      for (let i in newData.value.assetData_date) {
        assetData_date.value.push(newData.value.assetData_date[i])
      }
      for (let i in newData.value.assetData_dateInfo) {
        asset_total.value.push(newData.value.assetData_dateInfo[i].asset_total)
      }
    } catch (error) {
      console.log(error)
    }
  };

  const vans = async () => {
    try {
      const res = await axios.get('src/components/data/API_response/vans.json')
      newData.value.push(res.data.results)
      newData.value.vans_no_riskLen = res.data.results.calc.asset_calc.no_risk.length
      newData.value.vans_l_riskLen = res.data.results.calc.asset_calc.l_risk.length
      newData.value.vans_m_riskLen = res.data.results.calc.asset_calc.m_risk.length
      newData.value.vans_h_riskLen = res.data.results.calc.asset_calc.h_risk.length
      newData.value.vans_no_auditLen = res.data.results.calc.asset_calc.no_audit.length
      newData.value.vans_total = newData.value.vans_no_riskLen + newData.value.vans_l_riskLen + newData.value.vans_m_riskLen + newData.value.vans_h_riskLen + newData.value.vans_no_auditLen
    } catch (error) {
      console.log(error)
    }
  };

  // chartConfig
  const chartConfig = ref({
      labels: assetData_date.value,
      datasets: [
        {
          label: '',
          backgroundColor: '#f87979',
          data: asset_total.value,
        },
      ]
  })

  getData();

  return { count, doubleCount, increment, newData, assetData_date, chartConfig }
})
