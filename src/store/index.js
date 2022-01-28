import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiURL: " http://localhost:3000/posts",
    willUpdatedPost: "",
    postData: "",
  },
  mutations: {
    GET_POST_DATA(state, payload) {
      state.postData = payload;
    },
    GET_WILL_UPDATE_POST(state, payload) {
      state.willUpdatedPost = payload;
    },
  },
  actions: {
    //Postları çek
    getPosts({ state, commit }) {
      return axios.get(`${state.apiURL}`).then((res) => {
        commit("GET_POST_DATA", res.data);
      });
    },
    //Güncellenecek postu çek
    getWillUpdatePost({ state, commit }, payload) {
      return axios.get(`${state.apiURL}/${payload}`).then((res) => {
        commit("GET_WILL_UPDATE_POST", res.data);
      });
    },
    //Postu güncelle
    updatePostRequest({ state }, payload) {
      return axios
        .put(`${state.apiURL}/${payload.index}/`, { data: payload.data })
        .then((res) => {
          console.log(res.data);
        });
    },
    //Yeni post gönder
    sendNewPostRequest({ state }, payload) {
      return axios
        .post(`${state.apiURL}`, { data: payload })
        .then((res) => console.log(res.data));
    },
    //Postu sil
    deletePostRequest({ state }, payload) {
      return axios
        .delete(`${state.apiURL}/${payload}`)
        .then((res) => console.log(res.data));
    },
  },
  modules: {},
});
