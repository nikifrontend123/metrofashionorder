<template>
  <div style="padding-bottom: 75px;">
    <div class="text-center my-2 border-bottom">
      <h4>Fabricators</h4>
    </div>
    <FabLink active="FabComing" :fabricatorId="this.$route.params.fabricatorId"></FabLink>
    <div v-for="(order, index) in orders" :key="index">
      <!-- <div class="d-flex justify-content-between container" @click="showFab(fabready)"> -->
      <div class="d-flex justify-content-between container border-bottom py-2">
        <div class="d-flex">
          <div class="left">
            <img :src="`${publicPath}${order.img}`"
              style="object-fit: cover; object-position: top; border-radius: 50px; width: 50px; height: 50px;" alt="">
          </div>
          <div class=" ms-2">
            <p class="m-0">{{ order.id }} | <span class="text-info"> <span class="fw-bold">Bal.</span> {{ bal(order)
            }}</span></p>
            <div class="m-0 text-success fw-bold">Coming : {{ order.requested }}
              <!-- <input class="text-success fw-bold" type="number" :value="order.requested" @input="this.cnum"
                style="width: 50px; border: none;"> -->
            </div>
            <!-- <p>{{ result }}</p> -->
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="btn btn-success">Received</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FabLink from './FabLink.vue';

export default {
  components: { FabLink },
  data() {
    return {
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
  methods: {
    bal(order) {
      return order.total - order.requested
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



  
