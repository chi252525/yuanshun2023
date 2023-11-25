<template>
 <div><Header></Header>
  <Carousel></Carousel>
  <Introduction></Introduction>
  <Footer></Footer>
 </div>
</template>
<style lang="scss">
@import '~/assets/scss/demo.scss';

</style>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Carousel from '~/components/Carousel.vue'
import Introduction from '~/components/Introduction.vue'
export default {
  name: 'IndexPage',
  components: {Header}
}
</script>
