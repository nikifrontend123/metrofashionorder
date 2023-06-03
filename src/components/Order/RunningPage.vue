<template>
    <div style="padding-top: 50px;">
        <NavLink active="Running"></NavLink>
        <SearchBar></SearchBar>
        <div v-for="(arrange, index) in arranges" :key="index">
            <div class="d-flex justify-content-between container">
                <div class="d-flex">
                    <div class="left"><img src="../../assets/g1.png" style="border-radius: 50px; width: 50px; height: 50px;"
                            alt="">
                    </div>
                    <div class="right ms-2">
                        <div class="top ">
                            <p class="m-0 fw-bold">{{ arrange.tag }}</p>
                            <div class="" style="width: 150px;">
                                <StageStepper stage="1"></StageStepper>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <span class="badge bg-secondary">{{ arrange.num }}</span>
                </div>
                
            </div>
            <hr style="margin: 1px 0; opacity: 1;" class="my-2">
        </div>
    </div>
</template>

<script>
import NavLink from '../Navbar/NavLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';
import StageStepper from '../StageStepper.vue';

export default {
    components: { NavLink, SearchBar, StageStepper },
    computed: {
        arranges() {
            return this.$store.getters.getArranges;
        },
    }
}
</script>

<style lang="scss" scoped></style>