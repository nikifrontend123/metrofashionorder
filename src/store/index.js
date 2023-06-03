import { createStore } from "vuex";

export default createStore({
  state: {
    readys: [
      {
        id: 1,
        tag: "02-26-23636",
        name: "Aman Solanki",
        sp: 300,
        panna: 200,
        fc: 300,
        stag: 'ddd',
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 2,
        tag: "02-26-23636",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 3,
        tag: "02-26-23636",
        num: "300",
        num1: "1000",
        num2: "300",
      },
    ],
    corders: [
      {
        id: 1,
        name: 'Aman Solanki',
        tag: "# 23636",
        dname: "Green Floral Sleeveless Dress",
        num: 300

      },
      {
        id: 2,
        name: 'Aman',
        tag: "02-26-23636",
        dname: "Green Floral Sleeveless Dress",
        num: 300
      },
      {
        id: 3,
        name: 'Solanki',
        tag: "02-26-23636",
        dname: "Green Floral Sleeveless Dress",
        num: 300

      },
    ],
    arranges: [
      {
        id: 1,
        tag: "02-26-2363",
        dname: "Green Floral Sleeveless Dress",
        num: 300

      },
      {
        id: 2,
        tag: "02-26-23636",
        dname: "Green Floral Sleeveless Dress",
        num: 300
      },
      {
        id: 3,
        tag: "02-26-23636",
        dname: "Green Floral Sleeveless Dress",
        num: 300

      },
    ],
    fabs: [
      {
        id: 1,
        name: "Aman Solanki",
        order: "04",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 2,
        name: "Aman Solanki",
        order: "04",
        num: "300",
        num1: "1000",
        num2: "300",
      },
      {
        id: 3,
        name: "Aman Solanki",
        order: "04",
        num: "300",
        num1: "1000",
        num2: "300",
      },
    ],
    // orders: [
    //   {
    //     id: 1,
    //     name: "Aman Solanki",
    //     pending: '1 Days',
    //     num: 7
    //   },
    //   {
    //     id: 2,
    //     name: "Aman Solanki",
    //     pending: '3 Days',
    //     num: 12

    //   },
    //   {
    //     id: 3,
    //     name: "Aman Solanki",
    //     pending: '4 Days',
    //     num: 40

    //   },
    // ],
    activeOrder: {},
    fabricators: [
      {
        id: 1,
        name: "Aman Solanki",
        img: '',
        stats: {
          count: '04',
          bal: '1000',
          ready: '400',
        },
        orders: [
          {
            id: "01-20-23188",
            img: "img/icons/dress1.webp",
            status: "New Order Posted",
            stage: 'ddd',
            total: '1000', //
            ready: "300", // 100+100+100+100+100+100+100+100     +100
            readyButNotRequested: '200', // ready - requested
            requested: '0', //200+200+200                      +100
            dispatched: ' 400', //200+200
            received: '200',//200
            name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23189",
            img: "img/icons/dress2.webp",
            status: "New Order Posted",
            stage: 'ddd',
            total: '1000', //
            // bal: '400', // total - requested
            ready: "200",    // ******
            // readyButNotRequested: '200', // ready - requested
            requested: '0',
            dispatched: ' 0', // ******
            received: '0',
            name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
        ]
      },
      {
        id: 2,
        name: "Naman ",
        img: '',
        stats: {
          count: '04',
          bal: '1000',
          ready: '400',
        },
        orders: [
          {
            id: "01-20-23188",
            img: "img/icons/dress4.webp",
            status: "New Order Posted",
            total: '1000', //
            bal: '1000', // total - requested
            ready: "0", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '0', // ready - requested
            requested: '0', //200+200+200
            dispatched: ' 0', //200+200
            received: '0',//200
            name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23189",
            img: "img/icons/dress1.webp",
            status: "New Order Posted",
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '800', // ready - requested
            requested: '0', //200+200+200
            dispatched: ' 0', //200+200
            received: '0',//200
            name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23190",
            img: "img/icons/dress3.webp",
            status: "New Order Posted",
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '200', // ready - requested
            requested: '600', //200+200+200
            dispatched: ' 400', //200+200
            received: '200',//200
            name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23191",
            img: "img/icons/dress2.webp",
            status: "New Order Posted",
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '200', // ready - requested
            requested: '600', //200+200+200
            dispatched: ' 400', //200+200
            received: '200',//200
            name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
        ]
      },
      {
        id: 3,
        name: "solanki ",
        img: '',
        stats: {
          count: '04',
          bal: '1000',
          ready: '400',
        },
        orders: [
          {
            id: "01-20-23188",
            img: "img/icons/dress3.webp",
            status: "New Order Posted",
            stage: 'ddd',
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '200', // ready - requested
            requested: '600', //200+200+200
            dispatched: ' 400', //200+200
            received: '200',//200
             name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23189",
            img: "img/icons/dress2.webp",
            status: "New Order Posted",
            stage: 'ddd',
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '200', // ready - requested
            requested: '600', //200+200+200
            dispatched: ' 400', //200+200
            received: '200',//200
             name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23190",
            img: "img/icons/dress1.webp",
            status: "New Order Posted",
            stage: 'ddd',
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '200', // ready - requested
            requested: '600', //200+200+200
            dispatched: ' 400', //200+200
            received: '200',//200
             name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
          {
            id: "01-20-23191",
            img: "img/icons/dress4.webp",
            status: "New Order Posted",
            stage: 'ddd',
            total: '1000', //
            bal: '400', // total - requested
            ready: "800", // 100+100+100+100+100+100+100+100
            readyButNotRequested: '200', // ready - requested
            requested: '600', //200+200+200
            dispatched: ' 400', //200+200
            received: '200',//200
             name: 'Kurta',
            sp: '369',
            panna:'18 Inch | 0.4572 mt',
            piece: '369 Grm',
            serachtag:'369369',
            fabric:'test Fabric @ 369 kg',
            color:'Blue, Red',
            size:'Free Size',
            Assignee:'Test Assignee',
            created:'Tue 16 May,2023',
            expected:'Tue 16 May,2023',
          },
        ]
      }
    ],
    activeFab: {},

  },
  getters: {
    getReadys(state) {
      return state.readys;
    },
    getCorders(state) {
      return state.corders;
    },
    getArranges(state) {
      return state.arranges;
    },
    getFabricators(state) {
      return state.fabricators;
    },
    getFabs(state) {
      return state.fabs;
    },
    getOrders: (state) => (data) => {
      let fabricator = state.fabricators.find(fabricator => fabricator.id == data.fabricatorId);
      if (!fabricator) return null;
      return fabricator.orders;
    },
    getOrder(state) {
      return state.activeOrder;
    },
    getFab(state) {
      return state.activeFab;
    },

  },
  mutations: {
    selectOrder(state, order) {
      state.activeOrder = order;
    },
    hideOrder(state) {
      state.activeOrder = {};
    },
    selectFab(state, fabready) {
      state.activeFab = fabready;
    },
    hideFab(state) {
      state.activeFab = {};
    },
    // sendData(state) {
    //   state.send = {};
    // },
    setNumbers(state, { total, requested }) {
      state.fabricators.orders.total = total;
      state.fabricators.orders.requested = requested;
    },
    setResult(state, total) {
      state.fabricators.orders.total = total;
    },

  },
  actions: {
    subtractNumbers({ commit }, { total, requested }) {
      commit('setNumbers', { total, requested });
      let result = 0;
      if (total > requested) {
        result = total - requested;
      } else {
        result = requested - total;
      }
      commit('setResult', result);
    },

    selectOrder({ commit }, order) {
      commit("selectOrder", order);
    },
    hideOrder({ commit }) {
      commit("hideOrder");
    },
    selectFab({ commit }, selectFab) {
      commit("selectFab", selectFab);
    },
    hideFab({ commit }) {
      commit("hideFab");
    },
  },
  modules: {

  },
});

