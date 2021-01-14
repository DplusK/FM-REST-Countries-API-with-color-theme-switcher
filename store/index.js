export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('country/getAllCountryList')
    }
}