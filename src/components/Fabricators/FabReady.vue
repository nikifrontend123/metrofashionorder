<template>
  <div style="padding-bottom: 75px;">
    <div class="text-center my-2 border-bottom" >
      <h4>Fabricators</h4>
    </div>
    <FabLink active="FabDetail" :fabricatorId="this.$route.params.fabricatorId"></FabLink>
    <div v-for="(order, index) in orders" :key="index">
      <!-- <div class="d-flex justify-content-between container" @click="showFab(fabready)"> -->
      <div class="d-flex justify-content-between container border-bottom py-2">
        <div class="d-flex">
          <div class="">
          <img :src="`${publicPath}${order.img}`" style="object-fit: cover; object-position: top; border-radius: 50px; width: 50px; height: 50px;" alt="">
        </div>
        <div class="ms-2">
          <div class="d-flex">
            <div class="d-flex">
              <p class="m-0">{{ order.id }} | </p>
              <div class="ms-1">
                <span class="fw-bold text-info"> Bal. <span class="fw-normal">{{ bal(order) }}</span></span>
              </div>
            </div>
          </div>
          <div class="m-0 text-success"><span class="text-success fw-bold">Ready Qty:</span>
            {{ readyButNotRequested(order) }}
          </div>
        </div>
        </div>
        <div class="">
          <div class=" d-flex justify-content-center align-items-center pb-1 ">
            <input @input="validateInput(order)" v-model="order.requested" type="number" class=" text-danger form-control-sm text-center py-0"
              style=" width: 50px; border: none; border-bottom: 1px solid black;">
          </div>
          <div class=" d-flex justify-content-center align-items-center ">
            <button class="btn btn-warning py-0" @click="subtract">Send</button>
          </div>
        </div>

      </div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import FabLink from './FabLink.vue';
// import { mapActions } from 'vuex';
// import StageStepper from '../StageStepper.vue'
export default {
  components: {
    FabLink
  },
  data() {
    return {
      requested: 0,
      errorMessage: '',
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
    orders() {
      return this.$store.getters['getOrders']({
        fabricatorId: this.$route.params.fabricatorId,
      })
    }
  },
  methods: {
    bal(order) {
      return order.total - order.requested
    },
    readyButNotRequested(order) {
      return order.ready - order.requested
    },
    validateInput(order) {
      this.errorMessage = '';
      if (order.requested > order.ready) {
        this.errorMessage = 'cannot request more than ready';
      }
      if (order.requested < 1) {
        this.errorMessage = 'Must be valid number';
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.form-control-sm {
  border-radius: 0;
  ;
}
</style>