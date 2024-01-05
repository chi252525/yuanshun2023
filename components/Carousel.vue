<template>
    <div class="carousel">
        <client-only>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
                <b-carousel-slide img-src="~assets/img/carousel/S-01.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-02.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-03.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-04.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-05.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-06.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-07.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-08.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="~assets/img/carousel/S-09.jpg"></b-carousel-slide>
            </b-carousel>
        </client-only>
    </div>
</template>

<style lang="scss">
.carousel {
    height: 80%
}
</style>