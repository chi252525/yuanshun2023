<template>
    <b-container>
        <BreadCrumb currentBread="Contact" pageName="contact"></BreadCrumb>
        <div class="mt-5 mb-5 row">
            <div class="col-lg-6 col-md-12">
                <img src="https://picsum.photos/555/500/?image=10" alt="">
            </div>
            <div class="col-lg-6 col-md-12 px-5 ">
                <div class="align-middle">
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
        </div>
    </b-container>
</template>

<style lang="scss">

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