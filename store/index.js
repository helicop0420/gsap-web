export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de',
  isOpenContact: false
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  SetOpenContact(state, value) {
    state.isOpenContact = value
    console.log('changestore',value)
  }
}

export const actions = {
  toggleContactModal({ state, commit }, value){
    commit('SetOpenContact', value)
  }
}