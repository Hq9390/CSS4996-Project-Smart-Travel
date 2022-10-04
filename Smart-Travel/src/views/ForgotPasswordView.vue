<template>
<form>

    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <form action="#"  @submit.prevent="submit" class="space-y-8">
        <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900">Forgot Password</h2>

          <div>
            <label for="email" class=" block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div class ="space-y-1">
          <button @click="forgotpassword" value="Reset Password Email" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700  " > Reset password </button>
        </div>
          <div  class="flex items-center justify-between">
            <p v-if="errMsg"> {{errMsg}} </p>
          </div>
        </form>
      </div>
    </div>
  <footer class="mx-auto w-full  bg-white mt-auto" aria-labelledby="footer-heading">
    <div class="mx-auto  py-15 px-4 sm:px-6 lg:py-20 lg:px-8">

      <div class="mt-12 border-t border-gray-200 pt-8">
        <div class="flex w-full justify-center">
          <img
              src="../images/logo.png"
              class="  w-55 h-40"
              alt=""/>
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights reserved.</p>
      </div>
    </div>

  </footer>
          <p v-if="errMsg"> {{errMsg}} </p>
          <div class ="space-y-1">
          <button @click="forgotpassword" value="Reset Password Email" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700  " > Reset Password </button>
        </div>

        </form>
</template>

<script setup>

import {getAuth, sendPasswordResetEmail } from 'firebase/auth'
import {ref} from "vue";

import {useRouter} from "vue-router";
const email = ref("");
const errMsg = ref()
const router = useRouter()
const email = ref("");
const errMsg = ref()

const forgotpassword = () => {

  sendPasswordResetEmail(getAuth(), email.value )
      .then((user) => {
        console.log('Please Check Your Email')
        console.log(user)
        router.push('/login')

      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            console.log('invalid email')
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found";
            console.log('No account with that email was found')
            break;
          default:
            errMsg.value = "Email was not found";
          break;
        }
      });
};

</script>


