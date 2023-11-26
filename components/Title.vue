<template>
    <div class="text-center m-3">
        <h4>{{ titleEng }}</h4>
        <p> {{ titleCh }}</p>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        titleEng: {
            type: String,
            required: true
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