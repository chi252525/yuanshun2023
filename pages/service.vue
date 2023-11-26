<template>
    <b-container>
        <BreadCrumb currentBread="Service" pageName="service"></BreadCrumb>
        <div class="mt-5 mb-5 ">
            <Title titleEng="Service" titleCh="服務流程"></Title>
        </div>
        <div >
            <div class="row">
                <div class="d-flex justify-content-between">
                    <div class="p-3">
                        <p>Step 1 初步接洽</p>
                    </div>
                    <div class="p-3">
                        <p>瞭解客戶的真實需求，提供室內空間設計諮詢的專業建議。</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="d-flex justify-content-between">
                    <div class="p-3">
                        <p>Step 2 平面規劃</p>
                    </div>
                    <div class="p-3">
                        <p>現場丈量，依客戶需求提供平面規劃，探討室內空間機能、動線及收納面積。</p>
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div class="d-flex justify-content-between">
                    <div class="p-3">
                        <p>Step 3 設計委任</p>
                    </div>
                    <div class="p-3">
                        <p>簽訂設計合約，並依之前的設計提案進行設計優化。</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="d-flex justify-content-between">
                    <div class="p-3">
                        <p>Step 4 工程合約</p>
                    </div>
                    <div class="p-3">
                        <p>說明合約及其付款方式，完整工程報價，簽訂合約。</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="d-flex justify-content-between">
                    <div class="p-3">
                        <p>Step 5 完工交屋</p>
                    </div>
                    <div class="p-3">
                        <p>完工後與客戶偕同驗屋，開心入住，施工資料歸檔結案。</p>
                    </div>
                </div>
            </div>
          
        </div>
    </b-container>
</template>

<style>

</style>

<script>
import Title from '~/components/Title.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
export default {
    components: {
        Title,
        BreadCrumb
    }
}
</script>