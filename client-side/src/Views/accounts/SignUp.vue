<template>
  <div class=" max-h-screen">
    <div class="w-[350px]">
      <div class="bg-white border border-gray-300 px-10 mt-10 flex flex-col justify-center">
        <div class="flex justify-center mt-8">
          <img 
            src="../../assets/Ig_name_logo.png"  
            alt=""
            class="h-[50px]"
          >
        </div>
        <div class="my-2 flex items-center text-center text-gray-500/80 text-[17px] font-medium">Sign Up to see photos and videos from your friends</div>
        <form action="" @submit.prevent="" class="my-2">
          <div class="w-full">
            <button class="w-full justify-center items-center flex text-[15px] text-white bg-blue-500 py-1 rounded">
              <span class="material-icons">facebook</span>
              <span>Log in with Facebook</span>
            </button>
            <div class=" my-4 flex justify-center items-center w-full font-bold text-slate-400 text-sm">
              <div class="border-b border-slate-400 w-full"></div>
              <div class="px-3">OR</div>
              <div class="border-b border-slate-400 w-full"></div>
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                v-model="form.user.phone_number"
                placeholder="Mobile Number or email"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                placeholder="Full name"
                v-model="form.user.name"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                placeholder="Username"
                v-model="form.user.username"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                placeholder="Password"
                v-model="form.user.password"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
          </div>
          <div class="text-xs text-center text-slate-400">
            <div class="my-2">
              People who use our service may have uploaded your contact information to Instagram. <span class="font-medium">Learn More</span> 
            </div>
            <div class="my-2">
              By signing up, you agree to our <span class="font-medium">Terms</span> , <span class="font-medium">Data Policy</span> and <span class="font-medium">Cookies Policy</span> .
            </div>
          </div>
          <div class="mb-8">
            <button
              class="w-full bg-blue-200 text-white py-1 rounded flex justify-center items-center"
              type="submit"
              @click="CreateUser"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div class="flex justify-center items-center bg-white mt-2 border border-gray-300">
        <span class="text-[13px] my-5">
          Have an account?
          <router-link to="/accounts/login" class="text-blue-500 font-medium">Login</router-link>
        </span>
      </div>
      <div class="flex justify-center items-center text-[13px] my-5">
        Get the app.
      </div>
      <div class="flex justify-center items-center">
        <div class="text-white p-1 rounded w-full ml-6 mr-1 flex">
          <img src="../../assets/app_Store.png" alt="App Store">
        </div>
        <div class="text-white p-1 rounded w-full ml-1 mr-6">
          <img src="../../assets/google_Play.png" alt="Google Play">
        </div>
      </div>
      <div class="py-20">
        footer goes Here
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Footer from '../../components/Footer.vue'

export default {
  name: 'SignUp',
  components:{
    Footer
  },
  data () {
    return {
      form: {
        user: {
          name: '',
          phone_number: '',
          username: '',
          password: '',
        }
      }
    }
  },
  computed: {},
  methods: {
    CreateUser() {
      let newUser = {
        phone_number: this.form.user.phone_number,
        password: this.form.user.password,
        username: this.form.user.username,
        name: this.form.user.name
      }

      console.log(newUser)
      axios.post('http://localhost:4000/users', newUser)
    }
  }
}
</script>

<style>

</style>