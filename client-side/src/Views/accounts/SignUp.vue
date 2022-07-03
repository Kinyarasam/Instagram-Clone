<template>
  <div>
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
                placeholder="Mobile Number or email"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                placeholder="Full name"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                placeholder="Username"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
            <div class="mt-1.5">
              <input
                type="text"
                placeholder="Password"
                class="w-full rounded border py-2.5 px-2 text-xs bg-slate-50 border-slate-300"
              >
            </div>
          </div>
        </form>
        <div>
          <div>
            People who use our service may have uploaded your contact information to Instagram. Learn More
          </div>
          <div>
            By signing up, you agree to our <span>Terms</span> , <span>Data Policy</span> and Cookies Policy .
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center bg-white mt-2 border border-gray-300">
        <span class="text-[13px] my-5">
          Don't Have an account?
          <router-link to="/accounts/emailsignup" class="text-blue-500 font-medium">Sign up</router-link>
        </span>
      </div>
      <div class="flex justify-center items-center text-[13px] my-5">
        Get the app.
      </div>
      <div class="flex justify-center items-center">
        <div class="text-white p-1 rounded w-full ml-8 mr-1 flex">
          <img src="../../assets/app_Store.png" alt="App Store">
        </div>
        <div class="text-white p-1 rounded w-full ml-1 mr-8">
          <img src="../../assets/google_Play.png" alt="Google Play">
        </div>
      </div>
    <div class="border rounded w-[400px] px-5">Sign Up</div>
    THIS IS THE Sign Up TEMPLATE
    <router-link to="/accounts/login">Login</router-link>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>