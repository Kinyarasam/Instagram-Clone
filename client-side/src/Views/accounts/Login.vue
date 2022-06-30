<template>
  <div>
    <div class="bg-white border rounded w-[350px] px-10 mt-10 flex flex-col justify-center">
        <div class="flex justify-center my-8">
            <img 
                src="../../assets/Ig_name_logo.png"  
                alt=""
                class="h-[75px]"
            >
        </div>
        <form action="">
            <div>
                <input
                    type="text"
                    placeholder="Phone number, username or email"
                    class="text-sm bg-slate-50 py-2 px-1 w-full border rounded active:border-none"
                >
            </div>
            <div class="my-1">
                <input
                    type="text"
                    placeholder="Password"
                    class="text-sm bg-slate-50 py-2 px-1 w-full border rounded active:border-none"
                >
            </div>
            <div>
                <button
                    @click.prevent=""
                    type="submit"
                    class="bg-blue-300 w-full py-2 px-1 text-white font-medium rounded my-3"
                >
                    Log in
                </button>
            </div>
        </form>
        <div class="flex justify-center items-center w-full font-bold text-slate-400 text-sm">
            <div class="border-b border-slate-400 w-full"></div>
            <div class="px-3">OR</div>
            <div class="border-b border-slate-400 w-full"></div>
        </div>
        <div class="flex items-center justify-center text-indigo-900 mt-4 cursor-pointer">
            <span class="material-icons">facebook</span>
            <span class="text-[13px] font-medium mx-2"> Log in with Facebook</span>
        </div>
        <div class="font-[12px] my-4 text-indigo-900 cursor-pointer text-xs items-center justify-center w-full flex">
            Forgot password?
        </div>
    </div>
    <div class="flex justify-center items-center bg-white mt-5 border">
        <span class="text-[13px] my-5">
            Don't Have an account?
            <router-link to="/accounts/emailsignup" class="text-blue-500 font-medium">Sign up</router-link>
        </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>