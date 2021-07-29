import { ActionContext } from "vuex";

interface Istate{
    show:boolean
}

const state: Istate = {
    show : false
  };
  const mutations =  {
    showmodal(state:Istate) {
      state.show = true;
    },
    hideModal(state:Istate) {
      state.show = false;
    }
  }

  const getters = {
    modalStatus(state: Istate, getters: any, rootState: any){
      return state.show;
    }
  }
  const actions = {
    showModal: (context: ActionContext<Istate, any>) => {
        context.commit("showmodal");
      },
      hideModal: (context: ActionContext<Istate, any>) => {
        context.commit("hideModal");
      },
  }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
