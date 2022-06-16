<template>
  <div class="bg-gray-100 overflow-hidden h-screen">
    <TopBar/>
    <div class="flex justify-center bg-gray-100 scrollbar">
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