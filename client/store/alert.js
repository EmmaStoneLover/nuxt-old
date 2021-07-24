export const state = () => ({
  alert: [],
})

export const mutations = {
  newAlert(
    state,
    [strong = 'Hi', msg = 'Its a test alert', how = 'success', id = Date.now()]
  ) {
    state.alert = [
      ...state.alert,
      {
        strong,
        msg,
        how: `alert-${how}`,
        id,
      },
    ]
    if (Object.keys(state.alert).length > 10) {
      state.alert.shift()
    }
  },
  deleteAlert(state, id) {
    state.alert = state.alert.filter((i) => i.id !== id)
  },
  deleteAll(state) {
    state.alert = []
  },
}
