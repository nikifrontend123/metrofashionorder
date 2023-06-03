<template>
    <div class="container" style="padding-top: 50px;">
        <div class="d-flex justify-content-end py-2">
            <RouterLink to="/ReadyPage" class="d-flex justify-content-center text-dark">
                <i class="bi bi-x-circle fs-1"></i>
            </RouterLink>
        </div>
        <div class="row">
            <div class="col-lg-5 d-flex prod-img">
                <div class="d-flex flex-column prod-thumb">
                    <img class="" :src="image" style="width: 60px" v-for="(image, index) in images" :key="index"
                        v-on:click="selectImage(image)" />
                </div>
                <div class="ms-2 main-img">
                    <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
                    <!-- <img src="../../assets/carousel1.png"  style="width: 100%;" alt=""> -->
                </div>
            </div>
            <div class="container col-lg-7">
                <h2 class=" text-start mb-2 fs-5 py-1">
                    {{ product.info }}
                </h2>
                <h2 class=" text-start mb-2 fs-5 py-1">
                    {{ product.name }}
                </h2>

                <div class="">
                    <div class=" w-100 d-flex  me-0">
                        <div class="col-12 text-start d-flex align-items-center justify-content-between">
                            <span class="me-2 text-dark fw-bold fs-2">₹ {{ product.price }}</span>
                            <!-- <del class="text-secondary fs-5">₹ 1899</del> -->
                            <!-- <span class="badge bg-danger ms-2">61%</span> -->
                            <!-- <kbd>56%</kbd> -->
                            <p class="fw-bold m-0">Wholesale Price @ {{ product.moq }}pcs MOQ</p>
                        </div>
                    </div>
                    <p class="fw-light mb-0">(inclusive of all taxes)</p>

                    <div class="mb-3 mt-3">
                        <h5 class="mb-4">Available Sizes</h5>
                        <button v-for="(size, index) in product.sizes" :key="index"
                            class="btn btn-outline-dark btn-sm rounded me-4">
                            {{ size.name }}</button>
                    </div>

                    <div class="mb-3">
                        <h5 class="mb-4">Available Colors</h5>
                        <button v-for="(color, index) in product.colors" :key="index" class="btn rounded-circle me-4"
                            :style="'height: 25px; width: 25px; background-color:' + color.name"></button>
                    </div>

                    <div class="d-flex flex-column text-start mb-3">
                        <p class="text-center d-flex fw-bold">
                            Select Qty
                        </p>
                        <div class="quantity-toggle d-flex align-items-center justify-content-start">
                            <button @click="decrement" class="btn btn-light btn-sm border border-1">
                                <i class="bi bi-dash"></i>
                            </button>
                            <!-- <div class="fw-bold px-2">{{ quantity }}</div> -->
                            <input type="number" class="fw-bold form-control-sm px-2" v-model="quantity"
                                style="width: 20%;" />
                            <button @click="increment" class="btn btn-light btn-sm border border-1">
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                        <p class="fw-bold mt-3"> Total Amount :- ₹ {{ quantity * product.price }}</p>
                    </div>
                    <div class="mb-3">
                        <h5 class="mb-4">MOQ - {{ product.moq }} pcs</h5>
                        <p class="m-0 fw-light">(You will get all trending Colors & Sizes)</p>
                    </div>

                    <p class="mb-3"><a href="#" class="text-start text-dark fs-4">Services & Policies</a></p>
                    <div class="">
                        <button class="btn text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Payment Mode:-
                            Cash Payment
                            Only</button>
                        <button class="btn text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Delivery Mode:-
                            Pickup
                            Services Only</button>
                        <button class="btn text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Exchange Policy:-
                            Unavailable Services</button>
                        <button class="btn text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Return Policy:-
                            Unavailable
                            Services</button>
                    </div>

                    <div class="border border-1 mt-4" style="border-style:dashed !important;border: 1px solid;">
                        <p class="text-center ms-2 fs-6">Couldn't find your size?</p>
                        <a href="" class="text-end fw-bold" style="color: black">
                            <p class="text-center fs-6 ms-2">Request your size here</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="w-100 d-flex justify-content-center align-items-center bg-secondary position-fixed opacity-75 py-2" style="bottom: 0;">
        <RouterLink to="/ReadyPage" class="d-flex justify-content-center text-white">
            <i class="bi bi-x-circle fs-1"></i>
        </RouterLink>

    </div> -->
</template>
  
<script>
//   import router from '../router';
export default {
    name: "ProductPage",
    // props: ['piece'],
    data() {
        return {
            images: [
                "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-193186.jpg",
                "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-313252.jpg",
                "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-159363.jpg",
                "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-910477.jpg",
                "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-606879.jpg",
                "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-padded-non-wired-full-cup-longline-bralette-in-black-250267.jpg",
            ],
            selectedImage: {},
            quantity: 0,
        }
    },
    mounted() {
        this.selectedImage = this.images[0];
    },
    computed: {
        product() {
            let product = this.$store.getters.getActiveProduct;
            if (!Object.keys(product).length) {
                //   router.push('/CardCatelog')
            }
            return product;
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        },
        increment() {
            this.quantity = parseInt(this.quantity) + parseInt(this.product.moq);
        },
        decrement() {
            if (this.quantity > this.product.moq) {
                this.quantity = this.quantity - this.product.moq;
            }
        },
        addToCart() {
            this.$store.dispatch('addToCart', {
                product: this.product,
                quantity: this.quantity
            });
        },
        // decrement() {
        //   this.piece.quantity--;
        // }
    }
};
</script>
  
  
<style scoped>
@media (max-width:999px) {
    .prod-img {
        display: flex;
        flex-direction: column-reverse;
    }

    .prod-thumb {
        flex-direction: row !important;
        gap: 1rem;
        margin: 1rem 2rem 1rem 2rem;
        overflow: scroll;
    }

    .main-img {
        width: 100%;
        padding-right: 12px !important;
        margin-right: 0.5rem !important;
    }
}
</style>