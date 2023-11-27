<template>
    <div class="col-lg-6 col-md-12 p-3 text-center">
        <div class="pic">
            <img src="https://picsum.photos/500/500/?image=10" alt="">
        </div>
        <div class="text-center mt-2">
            <p>華固名鑄
            </p>
            <p>大坪數 / 現代風格 / 藝術收藏</p>
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
    transition: all 1s ease-out;
}

.pic img:hover {
    opacity: .8;
    transition-duration: 2s;
    transform: scale(1.2, 1.2);
}
</style>

<script>

</script>