const state = {
    initLink: ''
}
const mutations = {
    setInitLink (state, initLink) {
        state.initLink = initLink
    }
}

export default {
    namespaced: true,
    state,
    mutations
}