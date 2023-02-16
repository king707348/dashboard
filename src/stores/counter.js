import { ref, reactive, computed, inject } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const axios = inject("axios");
  const newData = reactive([
    {
      asset: [{
        assetLen:'',
        noneAssets30ResData: '',
        noneAssetsResData:''
      }],
      gcb: [],
      vans: []
    }
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
  };

  const assetData = async () => {
    await axios.get('src/components/data/API_response/assets_今日回報數.json').then((res) => {
      newData[0].asset.assetLen = res.data.results.totalRow
      // console.log(newData[0].asset.assetLen)
    });
  }

  const noneAssets30ResData = async () => {
    await axios.get('src/components/data/API_response/assets_今日未回報數.json').then((res) => {
      newData[0].asset.noneAssets30ResData = res.data.results
      newData[0].asset.noneAssets30ResDataLen = res.data.results.totalRow
      // console.log(newData[0].asset.noneAssets30ResData)
    });
  }

  const noneAssetsResData = async () => {
    await axios.get('src/components/data/API_response/assets_30天未回報數.json').then((res) => {
      newData[0].asset.noneAssetsResData = res.data.results
      newData[0].asset.noneAssetsResDataLen = res.data.results.totalRow
      console.log(newData[0].asset.noneAssetsResData)

    });
  };
  const gcb = async () => {
    await axios.get('src/components/data/API_response/gcb.json').then((res) => {
      // console.warn("status:", res.status);
      // console.log('noneResData', res.data)
    });
  };

  const vans = async () => {
    await axios.get('src/components/data/API_response/vans.json').then((res) => {
      // console.log(res.data.results.calc.asset_calc)
      newData[0].vans = res.data.results.calc.asset_calc
      newData[0].vans.m_riskLen = res.data.results.calc.asset_calc.m_risk.length
      newData[0].vans.no_riskLen = res.data.results.calc.asset_calc.no_risk.length
      newData[0].vans.l_riskLen = res.data.results.calc.asset_calc.l_risk.length
      newData[0].vans.h_riskLen = res.data.results.calc.asset_calc.h_risk.length
      newData[0].vans.no_auditLen = res.data.results.calc.asset_calc.no_audit.length
    });
  };



  getData();

  return { count, doubleCount, increment, newData }
})
