<template>
    <div class="d-flex justify-content-start w-100" :style="'margin-left: -' + lineWidth + 'px'">
        <div class="flex-fill justify-content-start" v-for="(count, index) in counts" :key="index">
            <div v-if="index <= stage" class="d-flex align-items-center justify-content-end">
                <div :id="'line'+index" v-if="count != 1" class="w-100 bg-success" style="height: 2px; margin-top: 0.25rem"></div>
                <i class="bi bi-check-circle-fill text-success"></i>
            </div>
            <div v-else class="d-flex align-items-center ">
                <div :id="'line'+index" class="flex-fill bg-secondary" style="height: 2px; margin-top: 0.25rem"></div>
                <i class="bi bi-check-circle"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stage: String
    },
    data() {
        return {
            counts: 7,
            width: 20,
        }
    },
    computed:{
        lineWidth(){
            window.onload = function() {
                // this width is not conneting to data width
                let width = document.getElementById('line1').clientWidth;
                console.log(width);
            };
            return this.width;
        }
    }

}
</script>

<style lang="scss" scoped>


</style>