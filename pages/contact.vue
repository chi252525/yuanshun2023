<template>
    <b-container>
        <BreadCrumb currentBread="Contact" pageName="contact"></BreadCrumb>
        <div class="mt-5 mb-5">
            <Title titleEng="Contact" titleCh="聯絡我們"></Title>
    
        </div>
        <div class="row px-5">
            <div class="col-lg-6 col-md-12">
                <img class="contact" src="~assets/img/contact/contact.jpg" alt="聯絡我們">
            </div>
            <div class="col-lg-6 col-md-12 text-box">
                <div class="py-2">
                    <p>圓順設計室內裝修有限公司</p>
                    <p>新北市中和區捷運路8-8號15樓 (近捷運南勢角)</p>
                    <p>yuanshun10766@gmail.com | 02-2322-3430</p>
                    <div>
                        <span>有裝修需求嗎？</span> &nbsp;
                        <span>
                            <b-button  @click="goToForm" target="_blank" pill variant="outline-secondary">
                                   <span>請填寫</span> </b-button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>

<style lang="scss" scoped>
.text-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    font-size: 16px;
}

div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>

<script>
import Title from '~/components/Title.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
    components: {
        Title,
        BreadCrumb
    },
    methods: {
        goToForm() {
            location.href = 'https://forms.gle/i1EhJhFimj4p26486';
        }
    }
}
</script>
