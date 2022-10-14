<template>

  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">


                <form action="#"  @submit.prevent="submit" class="space-y-8">
          <div>
            <label for="email" class=" block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div class="text-gray-900 text-sm">
          <p v-if="errMsg"> {{errMsg}} </p>
          </div>
          <div  class="flex items-center justify-between">


            <div class="text-sm flex w-full justify-center" > Not Registered?

              <a  class="  font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1 " > <router-link to="/register"> Register Here </router-link></a>
            </div>
          </div>

              <div class="text-sm flex w -full justify-center" >
                <a  class="  font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1 " > <router-link to="/forgot-password"> Forgot Password </router-link></a>
              </div>
          <div>

            <button @click="login" type="submit" value="Login" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700  " >Sign in</button>
          </div>
        </form>

      </div>
    </div>
  </div>


</template>

<script setup>


import {getAuth, signInWithEmailAndPassword, } from 'firebase/auth'

import {ref} from "vue";
import router from "@/router";

const email = ref("");
const password = ref("");
const errMsg = ref()
const login = () =>  {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((user) => {
        console.log('Successfully Logged in')
        console.log(user);
        router.push("/");

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
              case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                console.log('Incorrect password')

                break;
              default:
                errMsg.value = "Email or password was incorrect";
                break;
            }
          });

};
</script>