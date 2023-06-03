<template>
    <div style="padding-top: 50px;">
        <NavLink active="Coming"></NavLink>
        <SearchBar></SearchBar>
        <div v-for="(corder, index) in corders" :key="index">
            <div class="d-flex justify-content-between container">
                <div class="d-flex"  @click="showOrder(corder)">
                    <div class="left"><img src="../../assets/g1.png" style="border-radius: 50px; width: 50px; height: 50px;"
                            alt="">
                    </div>
                    <div class="right ms-2">
                        <div class="top ">
                            <p class="m-0 fw-bold">{{ corder.tag }}</p>
                            <p class="m-0 fw-bold">{{ corder.dname }}</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <span class=" bg-secondary rounded px-2 text-white">{{ corder.num }}</span>
                </div>
            </div>
            <hr style="margin: 1px 0; opacity: 1;" class="my-2">
        </div>
        <div v-if="Object.keys(activeOrder).length !== 0">
      <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
        aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">{{ activeOrder.tag }}</h5>
          <div class="d-flex justify-content-end w-100">
            <button type="button" class="btn eabtn fs-5 text-secondary p-0 me-3 "><i
                class="bi bi-chevron-down"></i></button>
            <button type="button" class="btn eabtn fs-5 text-secondary p-0  "><i class="bi bi-pencil"></i></button>
          </div>
          <button type="button" class="btn" @click="hideOrder()"><i class="bi bi-x fs-4"></i></button>
        </div>
        <div class="offcanvas-body">
          <div class="img w-100 border border-rounded">
            <img src="../../assets/23.jpg" style="width: 100%;" alt="">
            <!-- <img style="width: 100%; " :src="`${publicPath}${activeCatelog.img}`" alt=""> -->
          </div>

          <div class="a1 mt-2">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed bg-success text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Produc Details
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
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
                            <td>{{ activeOrder.fc }}</td>

                          </tr>
                          <tr>
                            <th scope="row">Search Tags</th>
                            <td>{{ activeOrder.stag }}</td>

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
                  <button class="accordion-button bg-danger text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Pending Order
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">OrderId</th>
                          <th scope="col">Manf.</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Rec</th>
                          <th scope="col">Bal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">06/04</td>
                          <td>01-20-23269</td>
                          <td>Sardar Ent</td>
                          <td>400</td>
                          <td>0</td>
                          <td>400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="a3 mt-2">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed bg-success text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Create New Order
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="first d-flex justify-content-between w-100">
                      <TextInputs class="w-100 " name="Quantity" type="text" design="floating" />
                      <TextInputs class="w-100 " name="Color" type="text" design="floating" />
                    </div>
                    <div class="sec d-flex justify-content-between w-100">
                      <input type="radio" class="btn-check" name="options-outlined" id="success-outlined"
                        autocomplete="off">
                      <label class="btn btn-outline-success" for="success-outlined">S</label>

                      <input type="radio" class="btn-check" name="options-outlined" id="success-outlined1"
                        autocomplete="off">
                      <label class="btn btn-outline-success" for="success-outlined1">M</label>

                      <input type="radio" class="btn-check" name="options-outlined" id="success-outlined2"
                        autocomplete="off">
                      <label class="btn btn-outline-success" for="success-outlined2">L</label>
                      <input type="radio" class="btn-check" name="options-outlined" id="success-outlined3"
                        autocomplete="off">
                      <label class="btn btn-outline-success" for="success-outlined3">XL</label>
                    </div>
                    <div class="mt-2">
                      <TextInputs class="w-100 " name="Expected Delivery Date" type="date" design="floating" />
                      <div class="form-floating w-100 mt-2 ">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected>Sardar Enterprise</option>
                          <option value="1">Kedar Enterprise</option>
                          <option value="2">Admin Enterprise</option>
                          <option value="3">Creator Enterprise</option>
                          <option value="4">Manager Enterprise</option>
                          <option value="5">Assignee Enterprise</option>
                        </select>
                        <label for="floatingSelect">Assigne Order To</label>
                      </div>
                      <div class="form-floating w-100 mt-2 ">
                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected>Narender</option>
                          <option value="1">Travis</option>
                          <option value="2">Jyoti</option>
                          <option value="3">Kedar</option>
                          <option value="4">Manager </option>
                          <option value="5">Assignee</option>
                        </select>
                        <label for="floatingSelect">Assigne Order To</label>
                      </div>
                      <div class="third d-flex">
                        <div class="form-floating mt-2 w-75">
                          <textarea class="form-control" placeholder="Leave a comment here"
                            id="floatingTextarea"></textarea>
                          <label for="floatingTextarea">Private Note</label>
                        </div>
                        <div class="mic w-25 fs-3 d-flex justify-content-center align-items-center">
                          <button
                            class="border border-2 bg-white  border-primary rounded-circle d-flex justify-content-center align-items-center"
                            style="width: 50px; height: 50px;">
                            <i class="bi bi-mic text-primary "></i>
                          </button>
                        </div>
                      </div>
                      <div class="fourth w-100 mt-2">
                        <button class="btn btn-success w-100">Place Order</button>
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
    </div>
</template>

<script>
import NavLink from '../Navbar/NavLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';


export default {
    components: { NavLink, SearchBar },
    computed: {
        corders() {
            return this.$store.getters.getCorders;
        },
        activeOrder() {
      return this.$store.getters.getOrder;
    },
  },
  methods: {
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