<template>

  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
         
        <form action="#"  class="space-y-8">
          <div>
            <label for="place" class=" block text-sm font-medium text-gray-700" >Going to</label>
            <div class="mt-1">
              <input v-model="destination" id="destination" name="destination" type="destination" autocomplete="destination" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <br>

          <div class="space-y-1">
            <label for="arrival-date" class=" block text-sm font-medium text-gray-700">Check-in</label>
            <div class="mt-1">
              <input v-model="arrival" id="arrival" name="arrival" type="arrival" autocomplete="arrival-date" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
            <br>

          <div class="space-y-1">
            <label for="departure-date" class="block text-sm font-medium text-gray-700">Check-out</label>
            <div class="mt-1">
              <input v-model="departure" id="departure" name="departure" type="departure" autocomplete="departure-date" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
           <br>  

          <div>
            <button @click="search" type="submit" value="search" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
          
        </form>
         <br>


        <h3>TOP CITIES TO VISIT</h3>
      </div>
  </div>


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