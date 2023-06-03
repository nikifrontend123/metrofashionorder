<template>
  <div style="padding-bottom: 75px;">
    <div class="text-center my-2 border-bottom">
      <h4>Fabricators</h4>
    </div>
    <FabLink active="FabComplete" :fabricatorId="this.$route.params.fabricatorId"></FabLink>
    <div v-for="(order, index) in orders" :key="index">
      <!-- <div class="d-flex justify-content-between container" @click="showFab(fabready)"> -->
      <div class="d-flex justify-content-between container py-2 border-bottom">
        <div class="">
          <div class="d-flex">
            <div class="left">
              <img :src="`${publicPath}${order.img}`" style="object-fit: cover; object-position: top; border-radius: 50px; width: 50px; height: 50px;" alt="">
            </div>
            <div class=" ms-2">
              <p class="m-0">{{ order.id }}</p>
              <div class="m-0 text-success fw-bold">Received : {{ order.requested }}
                <!-- <input class="text-success fw-bold" type="number" :value="order.requsted" @input="this.cnum"
                  style="width: 50px; border: none;"> -->
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <p class="m-0 text-info text-center"><i class="bi bi-pencil-fill me-1"></i>{{order.total}}</p>
          <p class="m-0 text-danger text-center"><i class="bi bi-info-circle-fill me-1"></i>{{  bal(order) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FabLink from './FabLink.vue';

export default {
  components: { FabLink },
  data(){
    return{
      publicPath: process.env.BASE_URL
    }
  },
  computed: {
    orders() {
      return this.$store.getters['getOrders']({
        fabricatorId: this.$route.params.fabricatorId,
      })
    }
  },
  methods:{
    bal(order) {
      return order.total - order.requested
    },
  }
}
</script>

<style lang="scss" scoped></style>