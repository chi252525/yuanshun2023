<template>
    <div class="d-flex px-5 service-box">
        <div>
            <div class="d-flex ">
                <div class="step">
                    <h3>Step {{serviceFlow.id}}</h3>
                </div>
                <div class="word">
                    <h5>{{serviceFlow.name}}</h5>
                </div>
            </div>
            <div class="slash">
            </div>
        </div>
        <div class="description px-5">
            <div>
                <p>{{serviceFlow.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        serviceFlow: {
            type: Object,
            required: true
        },
    },

}
</script>

<style>
/* div{
    border: solid 1px;
} */



.description {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>