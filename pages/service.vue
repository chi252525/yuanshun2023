<template>
    <div class="container">
        <BreadCrumb currentBread="Service" pageName="service"></BreadCrumb>
        <div class="mt-5 mb-5 p-2">
            <Title titleEng="Service" titleCh="服務流程"></Title>
        </div>
        <div class="container fluid">
            <div class="row justify-content-center">
                <div class="col-lg-1 col-md-0 "></div>
                <div class="col-lg-2 col-md-12 ">
                    <div class="d-flex">
                        <div class="step">
                            <h3>Step 1</h3>
                        </div>
                        <div class="word">
                            <h5>初步</h5>
                            <h5>接洽</h5>
                        </div>
                    </div>
                    <div class="slash">
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 text-box">
                    <div>
                        <p>討論客戶的需求、家庭成員與習慣，了解屋況、格局，提供室內設計與工程規劃的建議。</p>
                    </div>
                </div>
                <!-- ------------------------------------------------------ -->
                <div class="col-lg-1 col-md-0"></div>
                <div class="col-lg-2 col-md-12">
                    <div class="d-flex ">
                        <div class="step">
                            <h3>Step 2</h3>
                        </div>
                        <div class="word">
                            <h5>設計</h5>
                            <h5>委任</h5>
                        </div>
                    </div>
                    <div class="slash">
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 text-box">
                    <div>
                        <p>提供平面設計圖，依設計提案內容簽訂設計合約，簽約後可線上傳圖討論更方便快速。</p>
                        <p>設計完成將提供詳細工程報價。</p>
                    </div>
                </div>
                <!-- ------------------------------------------------------ -->
                <div class="col-lg-1 col-md-0"></div>
                <div class="col-lg-2 col-md-12">
                    <div class="d-flex ">
                        <div class="step">
                            <h3>Step 3</h3>
                        </div>
                        <div class="word">
                            <h5>工程</h5>
                            <h5>合約</h5>
                        </div>
                    </div>
                    <div class="slash">
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 text-box">
                    <div>
                        <p>設計圖、建材、施工工法確認，提供施工進度表，負責現場監工與進度。</p>
                    </div>
                </div>
                <!-- ------------------------------------------------------ -->
                <div class="col-lg-1 col-md-0"></div>
                <div class="col-lg-2 col-md-12">
                    <div class="d-flex ">
                        <div class="step">
                            <h3>Step 4</h3>
                        </div>
                        <div class="word">
                            <h5>家具</h5>
                            <h5> 軟裝</h5>
                        </div>
                    </div>
                    <div class="slash">
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 text-box">
                    <div>
                        <p>有喜好的家具家電可於設計期間提供。如需要全室家具、家飾、軟裝建議提案，費用另計。</p>
                    </div>
                </div>
                <!-- ------------------------------------------------------ -->
                <div class="col-lg-1 col-md-0"></div>
                <div class="col-lg-2 col-md-12">
                    <div class="d-flex ">
                        <div class="step">
                            <h3>Step 5</h3>
                        </div>
                        <div class="word">
                            <h5>完工</h5>
                            <h5> 交屋</h5>
                        </div>
                    </div>
                    <div class="slash">
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 text-box">
                    <div>
                        <p>完工驗屋，開心入住！本公司提供一年非天災、非人為因素損壞之保固期。</p>
                        <p>保固期過後，有需要修繕部分僅酌收修繕費用。</p>
                    </div>
                </div>
                <!-- ------------------------------------------------------ -->
            </div>
        </div>
    </div>
</template>

<style>
.text-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.service-box {
    align-items: center;
    justify-content: flex-start;
}

.step {
    /* border:solid 1px; */
    width: 80px;
    height: 50px;
}

.slash {
    position: relative;
    top: 5px;
    left: 50px;
    bottom: 80px;
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    border-left-style: dotted;
}

.word {
    position: relative;
    top: 80px;
}
</style>

<script>
import Title from '~/components/Title.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
export default {
    components: {
        Title,
        BreadCrumb,
    },
    data() {
        return {
            serviceFlowArr: [
                { id: 1, name: "初步接洽", description: "討論客戶的需求、家庭成員與習慣，了解屋況、格局，提供室內設計與工程規劃的建議。" },
                { id: 2, name: "設計委任", description: "提供平面設計圖，依設計提案內容簽訂設計合約，簽約後可線上傳圖討論更方便快速。設計完成將提供詳細工程報價。" },
                { id: 3, name: "工程合約", description: "設計圖、建材、施工工法確認，提供施工進度表，負責現場監工與進度。" },
                { id: 4, name: "家具軟裝", description: "有喜好的家具家電可於設計期間提供。如需要全室家具、家飾、軟裝建議提案，費用另計。" },
                { id: 5, name: "完工交屋", description: "完工驗屋，開心入住！本公司提供一年非天災、非人為因素損壞之保固期。保固期過後，有需要修繕部分僅酌收修繕費用。" }
            ],
        }
    },
}
</script>
