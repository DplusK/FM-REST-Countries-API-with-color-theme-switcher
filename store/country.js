export const state = () => ({
    allCountryList: [],
    regionCountryList: []
})

export const mutations = {
    setAllCountryList(state, data) {
        state.allCountryList = data
    },
    setRegionCountryList(state, data) {
        state.regionCountryList = data
    }
}

export const actions = {
    async getAllCountryList({ commit }) {
        const allCountryList = await this.$axios.get('https://restcountries.eu/rest/v2/all')
        commit('setAllCountryList', allCountryList.data)
    },
    async getRegion({ commit }, region) {
        const regionCountryList = await this.$axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        commit('setRegionCountryList', regionCountryList.data)
    }
}

export const getters = {
    allCountryList(state) {
        return state.allCountryList
    },
    regionCountryList(state) {
        return state.regionCountryList
    }
}