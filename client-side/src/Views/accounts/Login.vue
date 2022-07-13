<template>
    <div class="w-[350px]">
        <div class="bg-white border border-gray-300 px-10 mt-10 flex flex-col justify-center">
            <div class="flex justify-center my-8">
                <img 
                    src="../../assets/Ig_name_logo.png"  
                    alt=""
                    class="h-[50px]"
                >
            </div>
            <form action="" @submit.prevent="">
                <div>
                    <input
                        type="text"
                        placeholder="Phone number, username or email"
                        v-model="form.user.email"
                        class="text-sm bg-slate-50 py-2 px-1 w-full border rounded active:border-none"
                    >
                </div>
                <div class="my-1">
                    <input
                        type="password"
                        placeholder="Password"
                        autocomplete="off"
                        v-model="form.user.password"
                        class="text-sm bg-slate-50 py-2 px-1 w-full border rounded active:border-none"
                    >
                </div>
                <div>
                    <button
                        @click="LoginUser"
                        type="submit"
                        class="bg-blue-300 w-full py-1 flex justify-center items-center px-1 text-white font-medium rounded my-3"
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
  </div>
</template>

<script>
// import Users from '../../../../Backend/models/Users'
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                user: {
                    email: '',
                    password: ''
                }
            }

        }
    },
    methods: {
        async LoginUser() {
            console.log(`email: ${this.form.user.email}\npassword: ${this.form}`)
            
            if (this.form.user.email == '' || this.form.user.password == '') {
                alert("invalid user details")
                
                // CLEAR THE CONTENTS OF THE FORM
                this.form.user.email = ''
                this.form.user.password = ''
            }else {
                // GET THE CONTENTS PASSED TO THE FORM.

                // VALIDATE THE FORM
                // VALDATE THE DATA
                // RESPONSE
                const db = await axios.get('http://localhost:4000/users')
                let users = db.data.users[0].email
                console.log(users)
                if (this.form.user.email == db.data.users.email && this.form.user.password == 'test')
                {
                    // const userPassword = this.form.user.password
                    // const userEmail = this.form.user.email
        
                    // console.log(
                    //     `${user}\n{"email": "${userPassword}"\n
                    //     "password": "${userEmail}"}`
                    // )
                    this.$router.push('/')
                    alert(`Welcome ${this.form.user.email}` )
                }else{
                    // this.$router.push('/accounts/emailsignup')
                    alert(`Unauthorized Access. Kindly create an account`)
                }
            }
        },
        getUser() {
            let users = axios.get('http://localhost:4000/user')

            cons
        }
    },
    mounted() {
        // const auth = await axios.get('http://localhost:4000/users')
        // console.log(auth.data.users)

    }
}
</script>

<style>

</style>