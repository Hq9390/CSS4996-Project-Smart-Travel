<template>
<form>

    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="mt-6 space-y-8 ">
          <h2 class="text-2xl font-bold flex w-full justify-center   text-indigo-900">Forgot Password</h2>
            <div>

              <label for="email" class=" block text-sm font-medium text-gray-700">Email address</label>

              <div class="mt-1">
                <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
        </div>
        <div>
          <button @click="forgotpassword" value="Reset Password Email" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700  " > Reset Password </button>
        </div>
      </div>
    </div>
</form>
</template>

<script setup>

import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import {ref} from "vue";
const email = ref("");
const errMsg = ref()

const forgotpassword = () => {

  sendPasswordResetEmail(getAuth(), email.value )
      .then((user) => {
        console.log('Please Check Your Email')
        console.log(user)
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
          default:errMsg.value = "Email was not found";
          break;
        }
      });
}
</script>


