<template>

  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
        <h2 class="text-2xl font-bold flex w-full justify-center  text-indigo-900">Register</h2>
        <form action="#"  @submit.prevent="submit"  class="space-y-8">
          <div>
            <label for="email" class=" block text-sm font-medium text-gray-700" >Email address</label>
            <div class="mt-1">
              <input v-model="email" id="email" name="username" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="username" class=" block text-sm font-medium text-gray-700">Username</label>
            <div class="mt-1">
              <input v-model="name" id="username" name="username" type="username" autocomplete="username" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
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

          <div class="flex items-center justify-between">


            <div class="text-sm flex w-full justify-center font-light " > Already have an account??

              <a  class=" font-medium text-indigo-900 hover:text-indigo-500 underline text-primary-600 hover:underline" ><router-link to="/login">Sign in here</router-link></a>
            </div>
          </div>


          <div>
            <button @click="register" type="submit" value="register" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {ref} from "vue";
import {useRouter} from "vue-router";
const auth = getAuth();
const email = ref("");
const name = ref("");
const password = ref("");
const router = useRouter()
const errMsg = ref()
const register = () =>  {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((user) => {
        console.log('Successfully Registered')
        console.log(user);
        router.push("/");

      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            errMsg.value = "email already in use";
            console.log('email already in-use')
            break;
          case "auth/invalid-email":
            errMsg.value = "invalid email";
            console.log('invalid email')
            break;
          case "auth/weak-password":
            errMsg.value = "weak password";
            console.log('weak password')
            break;

        }
      });


};


</script>

