import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
axios.defaults.baseURL = document.location.href;

export default new Vuex.Store({
  state: {
    clients: [],
    clientCurrentId: 0,
  },
  mutations: {
    SETclients: (state, clients) => {
      state.clients = clients.map((item, i) => {
        let {...obj} = item;
        obj.id = i;
        return obj
      });
    },
    SETclientCurrentId (state, newIndex) {
      state.clientCurrentId = newIndex;
    }
  },
  actions: {
    SETclients: ({commit}) => {
      axios.get('clients.json')
        .then(function (response) {
          commit('SETclients', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    SETclientCurrentId: ({commit}, newIndex) => {
      commit('SETclientCurrentId', newIndex);
    }
  },
  getters: {
    GETclients: state => searchQuery => {
      if (searchQuery === '') {
        return state.clients;
      }

      searchQuery = searchQuery.toLowerCase();

      return state.clients.filter((item) => {
        for(let i in item) {
          if (i === 'id') {
            continue;
          }

          for(let j in item[i]) {
            if (j === 'avatar') {
              continue;
            }
            if (~item[i][j].toLowerCase().indexOf(searchQuery)) {
              return true;
            }
          }
        }

        return false;
      });
    },
    GETclientCurrentId: state => {
      return state.clientCurrentId;
    },
    GETclientCurrentContent: state => {
      return state.clients[state.clientCurrentId];
    }
  }
})
