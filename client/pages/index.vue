<template>
  <div class="container text-center mt-4">
    <h1>Главная страница</h1>
    <NuxtLink to="/second" class="nav-link">
      <h3 class="text-success">Some shit page</h3>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      apiURL: '/api/',
      content: null,
      form: {
        input: '',
        changed: false,
      },
    }
  },
}
</script>
