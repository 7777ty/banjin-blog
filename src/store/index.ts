import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/api/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:null,
    isLogin:false,
  },
  mutations: {
    setUser(state,payload){
      state.user=payload.user;
    },
    setLogin(state,payload){
      state.isLogin=payload.isLogin;
    }
  },
  actions: {
    login({commit},{username,password }){
      return auth.login({username,password}).then(
          res=>{
            commit('setUser',{user:res.data});
            commit('setLogin',{isLogin:true})
          }
      )
    },
    signUp({commit},{username,password}){
      return auth.signUp({username,password}).then(
          res=>{
            commit('setUser',{user:res.data});
            commit('setLogin',{isLogin:true})
          }
      )
    },
    async logout({commit}){
      await auth.logout();
      commit('setUser', { user: null });
      commit('setLogin', { isLogin: false });
    },
    async checkLogin({ commit, state}) {
      if(state.isLogin) return true;
      const res = await auth.getInfo();
      commit('setLogin', { isLogin: res.isLogin });
      if(!res.isLogin) return false;
      commit('setUser', { user: res.data });
      return true
    }
  },
  modules: {

  }
})
