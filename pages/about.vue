<template>
    <b-container>
        <BreadCrumb currentBread="About" pageName="about"></BreadCrumb>
        <div class="mt-5 mb-5">
            <Title titleEng="About" subTitle="YUAN SHUN" titleCh="關於圓順"></Title>
        </div>
        <div class="row mb-5">
            <div class="col-lg-6 col-md-12">
                <img class="img" src="~assets/img/about/S-01.jpg" alt="">
            </div>
            <div class="col-lg-6 col-md-12 text-box">
                <div class="p-3">
                    <p> 我們位於新北市中和南勢角商圈，提供室內設計、裝修、老屋翻新、預售屋客變等服務。</p>
                    <p> 熟悉清新北歐風、優雅新古典風、沉穩日式現代風、極簡侘寂風、工業風和鄉村風等等風格展現，更重要的是在您的預算內展現您的品味與風格。</p>
                    <p> 請選擇擁有室內設計及室內裝修雙證照的公司，合法的設計與監工才有保障。圓順的設計師與軟裝師將一同攜手替您設計溫暖、舒適、實用又有品味的美好居家環境！</p>
                    <p> 我們不追求華麗卻不實用的設計，好的動線與適度的收納空間能使生活更為便利，好的風水更能帶來幸運！</p>
                </div>
            </div>
        </div>
        <div class="row">
    
            <div class="col-lg-6 col-md-12">
                <img src="~assets/img/about/S-02.jpg" alt="">
            </div>
            <div class="col-lg-6 col-md-12 text-box">
                <div class="p-3">
                    <p> 室內設計師負責房屋的硬體設備，天花板、隔間牆、水電配置等，軟裝設計師負責房屋的家具顏色、材質、擺飾、窗簾等可活動的物品。</p>
                    <p> 我們除了傳統的室內設計流程以外，也提供以軟裝設計為主的輕裝修方案！不動隔間牆與梁柱的軟裝設計為未來趨勢，在物價飛漲的時代，利用小預算改造居住空間，</p>
                    <p> 教您精打細算把錢花在刀口上，不無謂鼓吹您做多餘的工程！減輕您煩惱挑選家具家飾的負擔！</p>
                    <p> 實用與共感是我們設計的核心價值，圓順期許每位入住的屋主都能夠順利圓滿的開始嶄新生活。</p>
                </div>
            </div>
        </div>
    </b-container>
</template>

<style scoped>
img {
    height: 350px;
    margin: auto;
    display: block;
}

.text-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

div img{   
    width: 100%;   
    height: 100%;   
    object-fit:cover;   
}  
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