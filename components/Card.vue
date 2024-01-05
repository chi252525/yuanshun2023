<template>
    <div class="col-lg-6 col-md-12 p-3 text-center">
        <div class="pic">
            <a :href="info.link" target="_blank">
                    <!-- <img :src="'/_nuxt/assets/img/collection/'+info.imgLink" :alt="info.title"> -->
                    <img src="~/assets/img/collection/01.jpg" :alt="info.title">
                </a>
        </div>
        <div class="text-center mt-2">
            <p>{{ info.title }}
            </p>
            <p>{{ info.subTitle }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pic {
    overflow: hidden;
    cursor: pointer;
}

.pic img {
    transform: scale(1, 1);
    transition: all 1s ease-out; // width: 500px;
    height: 400px;
}

.pic img:hover {
    opacity: .8;
    transition-duration: 2s;
    transform: scale(1.2, 1.2);
}
</style>

<script>
export default {
    props: {
        info: {
            type: Object,
            required: true
        },
    }
}
</script>