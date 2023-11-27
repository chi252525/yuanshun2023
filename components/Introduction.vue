<template>
    <b-container>
        <div class="mt-5 mb-5">
            <p> 我們設計團隊是由一群熱愛生活、藝術、異國文化與傳統文化的成員組成。</p>
    
            <p>有些成員曾旅居於日本和美國，並擁有各種不同的興趣和專長。</p>
    
            <p>室內設計，不僅僅是圖紙、尺寸、材質和工法上的專業，</p>
    
            <p>我們需要換位思考，深入了解屋主的生活步調、習慣和喜好，</p>
    
            <p>加上與屋主的交流，雙方一起激盪獨特的靈感，我們才能設計出</p>
    
            <p>承載屋主獨一無二生命故事的家。&nbsp; <span>
                        <nuxt-link :to="{ name: 'about' }">
                            More
                        </nuxt-link>
                    </span></p>
        </div>
        <div class="mt-5 mb-5">
            <p> 風水與室內設計？</p>
    
            <p>我們提供另一項獨特的服務是與房屋相關的傳統儀式，包括風水勘與、開工謝土、</p>
    
            <p>入厝儀式、安神位、祖先牌位、神桌擺設等等都可以交給我們。</p>
    
            <p>我們有一位專業的風水命理老師，可以提供風水諮詢服務，或結合我們的室內設計，</p>
    
            <p>風水與室內設計，兼顧美感又不會突兀，讓風水老師與室內設計師的矛盾不再上演。
                &nbsp; <span>
                        <nuxt-link :to="{ name: 'fengshui' }">
                           More
                        </nuxt-link>
                    </span>
            </p>
        </div>
    </b-container>
</template>

<style lang="scss" scoped>
a {
    color: #000000;
    text-decoration: inherit;
    /* no underline */
    font-size: 20px;
    font-weight: 100;
}
</style>