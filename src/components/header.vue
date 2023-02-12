<template>
    <div class="header">
        <div class="logo">
            <img :src="webLogo" alt="logo">
        </div>
        <div class="title">
            {{ webTitle }}
        </div>
        <div class="tools">
            <template v-for="item in webTools" :key="item">
                <a href="javascript:;">{{ item }}</a>
            </template>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const webLogo = ref('https://fakeimg.pl/125x50/ff0000/')
    const webTitle = ref('政府組態(GCB)|政府機關弱點通報機制(VANS)')
    const webTools = reactive({
        0: '說明',
        1: '登出'
    })
</script>

<style lang="scss" scoped >

    $black: #8a8a8a;

    .header{

        display: flex;
        border-bottom: 1px solid $black;
        .logo{
            display: flex;
            margin: auto 0;
            flex: 1;
        }
        .title{
            color: $black;
            margin: auto 0;
            flex: 8;
        }
        .tools{
            display: flex;
            justify-content: space-around;
            margin: auto 0;
            flex: 1;
            a{
                color: $black;
                &:hover{
                    color: #1a1a1a;
                    background: none;
                }
            }
        }
    }    

</style>