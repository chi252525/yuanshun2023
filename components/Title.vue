<template>
    <div class="text-center m-3">
        <h4>{{ titleEng }} &nbsp;  
            
            <span class="subTitle"> <i>{{ subTitle }}</i></span></h4>
       
        <p ><i>{{ titleCh }}</i> </p>
    </div>
</template>

<style lang="scss" scoped>
.subTitle {
    background: rgb(236, 240, 241);
    font-size: 30px;
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