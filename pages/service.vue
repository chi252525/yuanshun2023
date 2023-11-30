<template>
    <b-container>
        <BreadCrumb currentBread="Service" pageName="service"></BreadCrumb>
        <div class="mt-5 mb-5 ">
            <Title titleEng="Service" titleCh="服務流程"></Title>
        </div>
        <div class="row parentCard">
            <div >
                <div v-for="serviceFlow in serviceFlowArr" class="justify-content-center mt-1">
                    <ServiceCard :serviceFlow="serviceFlow"></ServiceCard>
                </div>
            </div>
        </div>
    
    </b-container>
</template>

<style>
.parentCard {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
import Title from '~/components/Title.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import ServiceCard from '~/components/ServiceCard.vue'
export default {
    components: {
        Title,
        BreadCrumb,
        ServiceCard
    },
    data() {
        return {
            serviceFlowArr: [
                { id: 1, name: "初步接洽", description: "瞭解客戶的真實需求，提供室內空間設計諮詢的專業建議。" },
                { id: 2, name: "平面規劃", description: "現場丈量，依客戶需求提供平面規劃，探討室內空間機能、動線及收納面積。" },
                { id: 3, name: "設計委任", description: "簽訂設計合約，並依之前的設計提案進行設計優化。" },
                { id: 4, name: "工程合約", description: "說明合約及其付款方式，完整工程報價，簽訂合約。" },
                { id: 5, name: "完工交屋", description: "完工後與客戶偕同驗屋，開心入住，施工資料歸檔結案。" }
            ],
        }
    },
}
</script>
