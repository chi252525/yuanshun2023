<template>
    <b-container>
        <div class="mt-5 mb-5 d-flex">
            <div class="col-6">

                <img src="https://picsum.photos/555/300/?image=10" alt="">
            </div>
            <div class="col-6 px-5 ">
                <Title titleEng="Contact" titleCh="聯絡我們"></Title>
                <p>新北市中和區捷運路8-8號15樓 </p>
                <p>yuanshun10766@gmail.com | +886 927653108</p>
                <p> 
                    <img style="height: 50px;width: 50px" src="~/assets/img/square-facebook.svg" alt="">
                    <img style="height: 50px;width: 50px" src="~/assets/img/line.svg" alt="">
                    <img style="height: 50px;width: 50px" src="~/assets/img/instagram.svg" alt="">
                </p>
            </div>
        </div>
    </b-container>
</template>

<style lang="scss">
</style>

<script>
import Title from '~/components/Title.vue'
export default {
    components: {
        Title
    }
}
</script>