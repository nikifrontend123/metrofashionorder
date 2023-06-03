<template>
    <div style="padding-bottom: 75px;">
        <div class="text-center my-2 border-bottom">
            <h4>Fabricators</h4>
        </div>
        <FabLink active="FabAll" :fabricatorId="this.$route.params.fabricatorId"></FabLink>
        <div v-for="(order, index) in orders" :key="index">
            <!-- <div class="card card-body border-0 border-bottom border-dark rounded-0" @click="showOrder(ready)"> -->
            <div class="card card-body border-0 border-bottom border-dark rounded-0" @click="showOrder(order)">
                <div class="d-flex">
                    <img class="rounded-circle" :src="`${publicPath}${order.img}`"
                        style="object-fit: cover; object-position: top; width: 70px; height: 70px;" alt="">
                    <div class="flex-fill d-flex flex-column justify-content-center align-items-start ms-2">
                        <small class="fw-bold">{{ order.id }}</small>
                        <div class=" d-flex">
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="bi bi-slash-circle-fill text-info d-flex align-items-center"></i>
                                <span class="me-2 ms-1">{{ order.total }} | </span>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="bi bi-check-circle-fill text-success d-flex align-items-center"></i>
                                <span class="me-2 ms-1">{{ order.requested }} | </span>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <i class="bi bi-exclamation-circle-fill text-danger d-flex align-items-center"></i>
                                <span class="me-2 ms-1">{{ bal(order) }}</span>
                            </div>
                        </div>
                        <StageStepper stage="1"></StageStepper>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="Object.keys(activeOrder).length !== 0">
            <div class="offcanvas offcanvas-end show" style="overflow-y: scroll; padding-bottom: 20px;"
                data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <div class="ms-2">
                        <p class="m-0">{{ activeOrder.id }}</p>
                        <p class="text-success m-0 fw-bold">Total Order Quantity: {{activeOrder.total}}</p>
                    </div>
                    <button type="button" class="btn" @click="hideOrder()"><i class="bi bi-x fs-4"></i></button>
                </div>
                <img :src="`${publicPath}${activeOrder.img}`" style="width: 100%;" alt="">
                <div class="w-100 d-flex align-items-center border container py-1">
                    
                </div>
                <div class="container">
                    <div class="a1 mt-2">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed bg-success text-white" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne">
                                        Catalog Details
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="box mt-2">
                                            <table class="table table-striped table-hover">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Name</th>
                                                        <td>{{ activeOrder.name }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Sale Price</th>
                                                        <td>{{ activeOrder.sp }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Panna</th>
                                                        <td>{{ activeOrder.panna }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Fc / Piece</th>
                                                        <td>{{ activeOrder.piece }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Search Tags</th>
                                                        <td>{{ activeOrder.serachtag }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Fabric</th>
                                                        <td>{{ activeOrder.fabric }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Colour</th>
                                                        <td>{{ activeOrder.color }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Size</th>
                                                        <td>{{ activeOrder.size }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Assignee</th>
                                                        <td>{{ activeOrder.Assignee }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Order Created On</th>
                                                        <td>{{ activeOrder.created }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Order Expected on</th>
                                                        <td>{{ activeOrder.expected }}</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="a2 mt-2">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed bg-danger text-white" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                                        aria-controls="collapseTwo">
                                        Progress Details
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="container">
                                        <p class="m-0 py-2">Stage - 1 : Catalog Alotted</p>
                                        <p class="m-0 py-2">Stage - 2 : Order Placed</p>
                                        <p class="m-0 py-2">Stage - 3 : Order Accepted by Manager</p>
                                        <p class="m-0 py-2">Stage - 4 : Order Accepted by Fabricator</p>
                                        <p class="m-0 py-2">Stage - 5 : Material is Available at Godown</p>
                                        <p class="m-0 py-2">Stage - 6 : Material is Arranged for Delivery</p>
                                        <p class="m-0 py-2">Stage - 7 : Material Delivered to Fabricator</p>
                                        <p class="m-0 py-2">Stage - 8 : Production Started</p>
                                        <p class="m-0 py-2">Stage - 9 : Order is Running</p>
                                        <p class="m-0 py-2">Stage - 10 : Order Completed</p>
                                    </div>
                                    <!-- <div class="bg-warning d-flex justify-content-between align-items-center py-2">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-clock-history mx-2"></i>
                                            <div class="">
                                                <p class="m-0">Update Ready Quantity</p>
                                                <small class="m-0">pending At test Assignee 369</small>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="btn btn-primary mx-1"><i
                                                    class="bi bi-telephone-forward  d-flex justify-content-between align-items-center py-1"></i>
                                            </div>
                                            <div class="btn btn-success mx-1"><i
                                                    class="bi bi-whatsapp  d-flex justify-content-between align-items-center py-1"></i>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="a3 mt-2">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed bg-success text-white" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Order Chat
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="w-100 m-2">
                                            <textarea placeholder="Enter Message" class="form-control"
                                                id="exampleFormControlTextarea1" rows="1"></textarea>
                                        </div>
                                        <div class="">
                                            <div class=" btn btn-primary text-white">send</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="a4 mt-2">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed bg-danger text-white" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                                        aria-controls="collapseFour">
                                        Order Request
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="pb-2 " style=" overflow-x: hidden;">
                                        <div class="container" style=" overflow-x: scroll;">
                                            <table class="table w-100 table-sm container">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Qty.</th>
                                                        <th scope="col">Req.</th>
                                                        <th scope="col">Exp.</th>
                                                        <th scope="col">Disp.</th>
                                                        <th scope="col">Rec.</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">100</td>
                                                        <td>13-may</td>
                                                        <td>14-may</td>
                                                        <td>15-may</td>
                                                        <td>16-may</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">100</td>
                                                        <td>16-may</td>
                                                        <td>17-may</td>
                                                        <td>Pending</td>
                                                        <td>Waiting</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">100</td>
                                                        <td>16-may</td>
                                                        <td>17-may</td>
                                                        <td>Pending</td>
                                                        <td>Waiting</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">100</td>
                                                        <td>16-may</td>
                                                        <td>17-may</td>
                                                        <td>Pending</td>
                                                        <td>Waiting</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">100</td>
                                                        <td>16-may</td>
                                                        <td>17-may</td>
                                                        <td>Pending</td>
                                                        <td>Waiting</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- <p style="font-size: 12px;" class="m-0 ps-2 py-1 bg-secondary">Requested by:Dheeraj
                                            Sardar on 2023-05-16 12:40:45</p>
                                        <div class="d-flex mt-2">
                                            <div class="form-floating m-2">
                                                <input type="number" class="form-control" id="floatingInput">
                                                <label for="floatingInput">Quantity</label>
                                            </div>
                                            <div class="form-floating m-2">
                                                <input type="date" class="form-control" id="floatingInput">
                                                <label for="floatingInput">Expected Delivery Date</label>
                                            </div>
                                        </div>
                                        <div class="d-flex w-100 justify-content-between">
                                            <button class="btn btn-secondary w-100">Reset</button>
                                            <button class="btn btn-success w-100"> Create</button>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="a5 mt-2">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed bg-success text-white" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true"
                                        aria-controls="collapseFive">
                                        Order Status
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="pb-2 " style=" overflow-x: hidden;">
                                        <div class="box mt-2" style=" overflow-x: scroll;">
                                            <table class="table table-striped table-hover mt-2">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Order</th>
                                                        <td>{{ activeOrder.total }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Received</th>
                                                        <td>{{ activeBal(activeOrder) }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Adj.</th>
                                                        <td>{{ activeReadyButNotRequested(activeOrder) }}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Balance</th>
                                                        <td>{{ activeOrder.requested }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import StageStepper from '../StageStepper.vue'
import FabLink from './FabLink.vue';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        StageStepper,
        FabLink
    },
    computed: {
        orders() {
            return this.$store.getters['getOrders']({
                fabricatorId: this.$route.params.fabricatorId,
            })
        },
        activeOrder() {
            return this.$store.getters.getOrder;
        },

    },
    methods: {
        bal(order) {
            return order.total - order.requested
        },
        activeBal(activeOrder) {
            return activeOrder.total - activeOrder.requested
        },
        activeReadyButNotRequested(activeOrder) {
            return activeOrder.ready - activeOrder.requested
        },
        showOrder(order) {
            return this.$store.dispatch('selectOrder', order);
        },
        hideOrder() {
            return this.$store.dispatch('hideOrder');
        }
    }
}
</script>
  
<style lang="scss" scoped></style>