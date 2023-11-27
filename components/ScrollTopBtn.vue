<template>
    <Transition name="fade">
        <div v-if="isShow" @click="scrollTop" class="fixed p-1">
            <b-icon variant="dark" font-scale="2" icon="arrow-up"></b-icon>
        </div>
    </Transition>
</template>

<style type="scss" scooped>
.fixed {
    border: 1px solid;
    position: fixed;
    bottom: 100px;
    right: 5%;
    width: 43;
    background-color: #ffffff00;
    cursor: pointer;
}
</style>

<script>
export default {
    name: 'ScrollTopBtn',

    data() {
        return {
            elTop: 0, // 滾動前,捲軸距離視窗頂部的距離
            isShow: false
        }
    },

    mounted() {
        window.addEventListener('scroll', this.scrolling)
        // 資料掛載完, window去監聽scroll事件
    },

    methods: {
        // 要滑到top為0的位置, 使用smooth的模式
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },

        scrolling() {
            // 捲軸距離視窗頂部的距離
            const scrolltoTop = window.pageYOffset

            // 捲軸滾動的距離
            const scrollLength = scrolltoTop - this.elTop

            // 更新: 滾動前,捲軸距離視窗頂部的距離
            this.elTop = scrolltoTop

            // 判斷想要什麼高度讓按鈕出現
            if (scrollLength < 0 && this.elTop < 200) {
                this.isShow = false
            } else {
                this.isShow = true
            }
        }
    }
}
</script>

