export const state = () => ({
  text: [],
  howMuch: 0,
})

export const mutations = {
  getTextStor(state, content) {
    state.text = content
  },
  addWillChangedText(state, text) {
    state.text = [...state.text, text]
  },
  addTextStor(state, newText) {
    state.text = newText
  },
  deleteTextStor(state, _id) {
    state.text = state.text.filter((i) => i._id !== _id)
  },
  howMuchText(state) {
    state.howMuch = Object.keys(state.text).length
  },
}
