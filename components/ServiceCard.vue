<template>
    <div class="d-flex">
        <div>
            <div class="d-flex">
                <div class="step">
                    <h2>Step {{serviceFlow.id}}</h2> 
                </div>
                <div class="word">
                    <h4>{{serviceFlow.name}}</h4>
                </div>
            </div>
            <div class="slash">
            </div>
        </div>
        <div class="description">
            <p>{{serviceFlow.description}}</p>
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
.step {
    /* border:solid 1px; */
    width: 100px;
    height: 50px;
}

.slash {
    position: relative;
    top: 5px;
    left: 50px;
    bottom: 80px;
    /* right: 300px; */
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    border-left-style: dotted;
    /* border-left:  thick rgb(26, 186, 26); */
}

.word {
    position: relative;
    top: 80px;
}

.description {
    position: relative;
    padding-left: 50px;
    top: 80px;
}
</style>