<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand text-success">
        <img
          src="/favicon.ico"
          width="30"
          height="30"
          class="d-inline-block align-text-top"
        />
        SimpleDimple
      </NuxtLink>
      <div class="nav">
        <NuxtLink to="/" class="nav-link text-success"> Home </NuxtLink>

        <NuxtLink to="/second" class="nav-link text-success">
          SecondPage
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
