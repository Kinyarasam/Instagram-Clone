<template>
  <div class="bg-gray-100 overflow-hidden h-screen">
    <div v-if="$route.path !== '/accounts/login' && $route.path !== '/accounts/emailsignup'">
      <TopBar/>
    </div>
    <div class="flex justify-center bg-gray-100 scrollbar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default{
    name: 'App',
    components: {
      TopBar
    }
}
</script>

<style>

</style>