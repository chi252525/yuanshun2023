<template>
    <div class="m-3">
        <div class="text-center">
            <span class="title" v-if="titleEng">{{ titleEng }}&nbsp;</span>
            <span class="subTitle">{{ subTitle }}</span>
        </div>
        <div class="text-center">
            <p>{{ titleCh }} </p>
        </div>
        <hr>
    </div>
</template>

<style lang="scss" scoped>
.subTitle {
    font-size: 30px;
    font-weight: 400;
}

.title {
    font-size: 20px;
}
</style>

<script>
export default {
    components: {

    },
    props: {
        titleEng: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false
        },
        titleCh: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },

}
</script>