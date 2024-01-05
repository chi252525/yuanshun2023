<template>
    <b-container>
        <BreadCrumb currentBread="Fengshui" pageName="fengshui"></BreadCrumb>
        <div class="mt-5 mb-5">
            <Title titleEng="About" subTitle="FengShui" titleCh="關於風水"></Title>
        </div>
        <div class="row mb-5">
    
            <div class="col-lg-6 col-md-12">
                <img class="img" src="~assets/img/fengshui/fengshui.JPG" alt="">
            </div>
            <div class="col-lg-6 col-md-12 text-box">
                <div class="py-2">
    
                    <p>風水是一門古老的學問，研究「風和水的流動」，以實現人與自然的和諧與平衡。先人用這門學問來觀察大自然的環境，是一種環境科學。</p>
                    <p>在現代建築中，利用羅盤測量房屋座向，觀察房屋、道路、電纜電線等外煞；察覺室內空間、樑柱的規劃對居住者的影響，就是現代式的風水堪輿。</p>
                    <p>參考風水規劃的同時也在觀察我們的居住環境，因此在動線規劃、平面設計時，我們會融入基礎的居家風水在設計中，修飾風水瑕疵，達到美觀舒適又不突兀的空間設計。</p>
                    <p> 無論是住家或是辦公室，每個房屋和不同屋主都有對應的方位，我們可以利用風水搭配八字規劃出最適合自己的風水配置。傳統習俗上，搬家、蓋房子、裝修等等，需要有動工儀式、謝土儀式、入厝儀式。儀式中要祭拜當地的土地公和地基主。圓順的風水老師提供現場主持儀式、拜拜並進行淨宅的服務。</p>
                    <ul>
                        <li>祭拜儀式需給老師紅包。</li>
                        <li>祭拜時的供品、入厝的用品、小三牲、水果餅乾等等費用另計 （或屋主自備）。
                        </li>
                        <li>儀式要化庫銀（紙錢）給土地公和地基主的費用也另計（不用現場燒紙錢，有專門燒化庫銀的場地）。
                        </li>
                        <li>風水服務可與設計合約並行，也有純風水服務，歡迎洽詢。</li>
                    </ul>
                </div>
            </div>
        </div>
    </b-container>
</template>

<style scoped>

div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-box {
    display: flex;
    justify-content: center;
    align-items: center;
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