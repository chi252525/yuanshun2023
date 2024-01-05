<template>
    <div>
        <div class="container">
            <Carousel></Carousel>
        </div>
       
        <Introduction></Introduction>
    </div>
</template>

<style lang="scss">
@import '~/assets/scss/demo.scss';
</style>

<script>
import Carousel from '~/components/Carousel.vue'
import Introduction from '~/components/Introduction.vue'
export default {
    name: 'IndexPage',
    methods: {
        created() {
            console.log(process.env.NODE_ENV, "index.html")
        }
    }
}
</script>
