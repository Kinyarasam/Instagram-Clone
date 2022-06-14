<template>
  <div>
    <TopBar/>
  <div class="flex justify-center bg-gray-100">
    <Home />
  </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Home from './Views/Home.vue'

export default{
    name: 'App',
    components: {
      TopBar, Home
    }
}
</script>

<style>

</style>