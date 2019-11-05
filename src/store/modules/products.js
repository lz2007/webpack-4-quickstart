// initial state
const state = {
    num: 0
}

// getters
const getters = {
    getNum: (state, getters, rootState) => {
        return state.num + rootState.count;
    }
}

// actions
const actions = {
    addNums({
        state,
        commit
    }, num) {
        commit('addNum', state.num + num);
    }
}

// mutations
const mutations = {
    addNum(state, num) {
        state.num = state.num + num;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}