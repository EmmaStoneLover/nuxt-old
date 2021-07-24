<template>
  <div class="position-fixed bottom-0 end-0 m-3 mb-4">
    <div v-show="Object.keys($store.state.alert.alert).length > 1" class="mb">
      <span
        class="alert alert-dismissible"
        @click="$store.commit(`alert/deleteAll`)"
      >
        <button type="button" class="btn-close"></button>
      </span>
    </div>
    <div v-for="al in $store.state.alert.alert" :key="al.id" class="mb">
      <span
        class="alert alert-dismissible"
        :class="al.how"
        @click="$store.commit(`alert/deleteAlert`, al.id)"
      >
        <strong>{{ al.strong }}</strong>
        <span>{{ al.msg }}</span>
        <button class="btn-close"></button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('alert/newAlert', [
      'Привет,',
      'ты на сайте Миши',
      'success',
    ])
  },
}
</script>

<style scoped>
.mb {
  margin-top: 40px;
  text-align: right;
  z-index: 5;
  cursor: pointer;
}
button:focus {
  outline: none;
  box-shadow: none;
}
</style>
