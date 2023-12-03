<template>
    <div class="col-lg-6 col-md-12 p-3 text-center">
        <div class="pic">
            <img src="" alt="">
        </div>
        <div class="text-center mt-2">
            <p>雅緻生活
            </p>
            <p>大坪數 / 現代風格 / 新成屋</p>
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
    // width: 500px;
    height:500px;
}

.pic img:hover {
    opacity: .8;
    transition-duration: 2s;
    transform: scale(1.2, 1.2);
}
</style>

<script>

</script>