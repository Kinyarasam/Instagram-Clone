<template>
  <div>
    <div class="bg-white border rounded w-[400px] px-5 mt-10 flex flex-col justify-center">
        <div class="flex justify-center my-8">
            <img 
                src="../../assets/Ig_name_logo.png"  
                alt=""
                class="h-10"
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
        <div class="flex justify-center items-center w-full">
            <div class="border-b border-black w-full"></div>
            <div class="px-3">OR</div>
            <div class="border-b border-black w-full"></div>
        </div>
        <div class="flex items-center justify-center text-indigo-900 mt-3">
            <span class="material-icons">facebook</span>
            <span> Log in with Facebook</span>
        </div>
        Login
    </div>
    THIS IS THE LOGIN TEMPLATE
    <router-link to="/accounts/emailsignup">Sign up</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>