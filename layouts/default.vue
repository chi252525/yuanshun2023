<template>
    <div>
        <Header></Header>
        <ScrollTopBtn></ScrollTopBtn>
        <nuxt />
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ScrollTopBtn from '~/components/ScrollTopBtn.vue'
export default {
    components: {
        Header,
        Footer,
        ScrollTopBtn
    }
}
</script>

<style lang="scss">
.nuxt-link-exact-active {
    font-weight: 200;
}

.nuxt-link-active {
    font-weight: 200;
}
</style>
  