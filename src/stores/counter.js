import { ref, computed, inject } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const axios = inject("axios");
  const newData = ref([
    // {
    //   asset: {
    //     assetLen: '',
    //     noneAssets30ResData: '',
    //     noneAssetsResData: ''
    //   },
    //   gcb: [],
    //   vans: []
    // }
  ])
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const getData = async () => {
    assetData()
    noneAssets30ResData()
    noneAssetsResData()
    gcb()
    vans()
    // console.log(newData)
  };

  const assetData = async () => {
    try{
      const res = await axios.get('src/components/data/API_response/assets_今日回報數.json')
      newData.value.push(res.data.results)
      newData.value.assetData = res.data.results.totalRow
      console.log(newData.value.assetData)
    }catch(error){
      console.log(error)
    }

    
  }

  const noneAssetsResData = async () => {
    try{
      const res = await axios.get('src/components/data/API_response/assets_今日未回報數.json')
      newData.value.push(res.data.results)
      newData.value.noneResData = res.data.results.totalRow
      console.log(newData.value.noneResData)
    }catch(error){
      console.log(error)
    }
  }

  const noneAssets30ResData = async () => {
    try{
      const res = await axios.get('src/components/data/API_response/assets_30天未回報數.json')
      newData.value.push(res.data.results)
      newData.value.none30ResData = res.data.results.totalRow

    }catch(error){
      console.log(error)
    }
  };
  const gcb = async () => {
    try{
      const res = await axios.get('src/components/data/API_response/gcb.json')
      newData.value.push(res.data.results)
      newData.value.agentPassStat_pass = res.data.results.agentPassStat.passed
      newData.value.agentPassStat_failed = res.data.results.agentPassStat.failed
      newData.value.agentPassStat_other = res.data.results.agentPassStat.other
    }catch(error){
      console.log(error)
    }
  };

  const vans = async () => {
    try {
      const res = await axios.get('src/components/data/API_response/vans.json')
      // console.log(res.data.results.calc.asset_calc)
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
  getData();

  return { count, doubleCount, increment, newData }
})
