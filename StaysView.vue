<template>

  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
         
        <form action="#"  method = "POST" class="space-y-8">
          
           <div class="sm:col-span-2">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Going to</label>
            <div class="mt-1">
              <input type="text" name="city" id="city" autocomplete="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
          
          
          <div class="sm:col-span-2">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Check-in</label>
            <div class="mt-1">
              <input type="text" name="date" id="date" autocomplete="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
            

          <div class="sm:col-span-2">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Check-out</label>
            <div class="mt-1">
              <input type="text" name="date" id="date" autocomplete="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
            

          <div>
            <button @click="search" type="submit" value="search" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
          
        </form>
         <br>


        <h3>TOP CITIES TO VISIT</h3>
      </div>
  </div>
</div>
  <br>
  <footer class="mx-auto w-full  bg-white mt-auto" aria-labelledby="footer-heading">
    <div class="mx-auto  py-15 px-4 sm:px-6 lg:py-20 lg:px-8">

      <div class="mt-12 border-t border-gray-200 pt-8">
        <div class="flex w-full justify-center">
          <img
              src="../images/logo.png"
              class="  w-55 h-40" >
          
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights reserved.</p>
      </div>
    </div>

  </footer>

</template>



<script setup>


import {getAuth, findStay} from 'firebase/auth'

import {ref} from "vue";
import router from "@/router";

const destination = ref("");
const arrival = ref("");
const departure = ref()
const stay = () =>  {
  findStay(getAuth(), destination.value, arrival.value, departure.value)
      .then(() => {
        console.log('Found stays succeddfully')
        console.log();
        router.push("/");

      })

};
</script>