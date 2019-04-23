import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'http://google.com',
      'http://facebook.com',
      'http://youtube.com',
    ],
  },
  mutations: {

  },
  actions: {

  },
});
