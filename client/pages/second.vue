<template>
  <div class="container">
    <br />
    <h1>Главная страница</h1>
    <h3 class="text-cuccess" @click="HowMuchText">
      Тут можно получить some staff
    </h3>
    <br />

    <form class="form mr-3" @submit.prevent="addText">
      <input
        v-model="form.input"
        class="form-control mr-2 mb-3"
        placeholder="Вставить текст"
      />
      <button type="submit" class="btn btn-dark active m-2">Добавить</button>
      <div class="btn-group">
        <input
          id="btnradio2"
          type="radio"
          checked
          class="btn-check"
          name="btnradio"
          autocomplete="off"
          @click="form.changed = false"
        />
        <label class="btn btn-outline-dark" for="btnradio2"> Белый </label>
        <input
          id="btnradio3"
          type="radio"
          class="btn-check"
          name="btnradio"
          autocomplete="off"
          @click="form.changed = true"
        />
        <label class="btn btn-outline-dark" for="btnradio3"> Красный </label>
      </div>
    </form>

    <br />

    <div v-show="getText" v-cloak>
      <form
        v-for="item in reversedContent"
        :key="item._id"
        :class="{ 'bg-danger': item.changed }"
        class="card border-2 m-2"
        @submit.prevent="deleteText(item._id)"
      >
        <div class="alert alert-dismissible mb-0">
          <h5 class="card-title mt-1">
            {{ item.text }}
          </h5>
          <button id="cls" type="submit" class="btn-close"></button>
        </div>
      </form>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      apiURL: 'http://localhost:8000/api',
      getText: true,
      form: {
        input: '',
        changed: false,
      },
    }
  },
  computed: {
    reversedContent() {
      try {
        return this.$store.state.text.text.slice().reverse()
      } catch (e) {}
    },
  },
  async mounted() {
    try {
      await this.$axios.get(this.apiURL).then((res) => {
        this.$store.commit('text/getTextStor', res.data.DB)
      })
    } catch (err) {
      this.getText = false
      this.$store.commit('alert/newAlert', [
        'Error:',
        'Нет подключения к БД',
        'danger',
      ])
      console.log('Ошибка с get: ', err)
    }
  },
  methods: {
    async addText() {
      if (this.getText === true) {
        if (this.form.input.trim() !== '') {
          const newText = {
            text: this.form.input.trim(),
            changed: this.form.changed,
          }
          this.$store.commit('text/addWillChangedText', newText)
          try {
            await this.$axios.post(this.apiURL, newText).then((res) => {
              this.$store.commit('text/addTextStor', res.data.DB)
              this.$store.commit('alert/newAlert', [
                res.data.alert.strong,
                res.data.alert.msg,
                res.data.alert.how,
              ])
              this.form.input = ''
            })
          } catch (err) {
            this.getText = false
            this.$store.commit('alert/newAlert', [
              'Error:',
              'Нет подключения к БД',
              'danger',
            ])
            console.log('Нет подключения к БД', err)
          }
        } else {
          this.$store.commit('alert/newAlert', [
            'Нет',
            'Сначала текст вставь',
            'warning',
          ])
        }
      } else {
        this.getText = false
        this.$store.commit('alert/newAlert', [
          'Error:',
          'Нет подключения к БД',
          'danger',
        ])
      }
    },
    async deleteText(_id) {
      this.$store.commit('text/deleteTextStor', _id)
      try {
        await this.$axios.delete(`${this.apiURL}/delete/${_id}`).then((res) => {
          this.$store.commit('alert/newAlert', [
            res.data.alert.strong,
            res.data.alert.msg,
            res.data.alert.how,
          ])
        })
      } catch (err) {
        this.getText = false
        this.$store.commit('alert/newAlert', [
          'Error:',
          'Нет подключения к БД',
          'danger',
        ])
        console.log('Нет подключения к БД', err)
      }
    },
    HowMuchText() {
      this.$store.commit('text/howMuchText')
      this.$store.commit('alert/newAlert', [
        'Записей: ',
        this.$store.state.text.howMuch,
        'info',
      ])
    },
  },
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
* {
  z-index: 0;
}
#cls {
  padding-top: 33px;
}
button:focus {
  outline: none;
  box-shadow: none;
}
</style>
