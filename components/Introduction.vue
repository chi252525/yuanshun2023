<template>
    <b-container>
        <div class="mt-5 mb-5 text-box">
            <div>
                <p> 我們設計團隊是由一群熱愛生活、藝術、異國文化與傳統文化的成員組成。</p>
    
                <p>有些成員曾旅居於日本和美國，並擁有各種不同的興趣和專長。</p>
    
                <p>室內設計，不僅僅是圖紙、尺寸、材質和工法上的專業，我們需要換位思考，</p>
    
                <p>深入了解屋主的生活步調、習慣和喜好，加上與屋主的交流，雙方一起激盪獨特的靈感，</p>
                <div class="d-flex">
                    <span class="mr-2">我們才能設計出承載屋主獨一無二生命故事的家。</span>
                    <b-button @click="goToAbout" pill variant="outline-secondary" class="m-0">
                        <span>More</span>
                    </b-button>
    
                </div>
            </div>
        </div>
        <div class="mt-5 mb-5 text-box">
            <div>
                <p> 風水與室內設計？</p>
    
                <p>我們提供獨特的服務是與房屋相關的傳統儀式，</p>
    
                <p>包括風水勘輿、開工謝土、入厝儀式、安神位、祖先牌位、神桌擺設等等都可以交給我們。</p>
    
                <p>我們有一位專業的風水命理老師，可以提供風水諮詢服務，或結合我們的室內設計，</p>
    
                <div class="d-flex ">
                    <span>風水與室內設計，兼顧美感又不會突兀，讓風水老師與室內設計師的矛盾不再上演。</span> &nbsp;
                    <span><b-button @click="goToFengshui" pill variant="outline-secondary"><span>More</span>
                    </b-button>
                    </span>
                </div>
    
    
            </div>
        </div>
    </b-container>
</template>

<style lang="scss" scoped>
a {
    color: #000000;
    text-decoration: inherit;
    /* no underline */
    font-size: 26px;
    font-weight: 100;
}

.text-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
export default {
    methods: {
        goToAbout() {
            this.$router.push({ name: 'about' });
        },
        goToFengshui() {
            this.$router.push({ name: 'fengshui' });
        }
    }
};
</script>