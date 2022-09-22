<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
const showMobileNavbar = ref(true);
</script>

<template>
  <nav>
    <div class="bg-indigo-900">
      <div class="mx-auto max-w-8xl px-4 sm:px-5 lg:px-7">
        <div class="flex h-16 justify-between">
          <div class="flex">

      <!--   Menu-->
            <div class=" hidden md:ml-4 md:flex md:space-x-8">
                <a class=" inline-flex items-center py-5 px-2 text-white hover:text-indigo-400">  <router-link to="/">Stays</router-link></a>
                <a class=" inline-flex items-center py-5 px-2 text-white hover:text-indigo-400">  <router-link to="/flights">Flights</router-link></a>
                <a class=" inline-flex items-center py-5 px-2 text-white hover:text-indigo-400">  <router-link to="/recommendations">Recommended Cities</router-link></a>
                <a class=" inline-flex items-center py-5 px-2 text-white hover:text-indigo-400">  <router-link to="/car-rentals">Car Rentals</router-link></a>

            </div>
          </div>
<!--          register and login menu-->
          <div class="hidden md:ml-4 md:flex md:space-x-8 items-center">
            <a class="relative flex items-center rounded-md border border-transparent bg-indigo-700 px-4 py-2 text-sm font-medium text-white  hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <router-link to="/login">Sign in</router-link></a>
            <a class="relative flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> <router-link to="/register">Sign up</router-link></a>

        </div>
<!--          Mobile navbar-->
          <div class="md:hidden flex items-center">
            <button @click="showMobileNavbar = !showMobileNavbar" class="py-5 px-2" >
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   class="  w-8 h-8 text-indigo-400 ">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </button>

          </div>

        </div>
      </div>
    </div>
<!--    Mobile navbar-->
    <div class="md:hidden bg-indigo-900" :class="{hidden: showMobileNavbar}">
        <a class="block py-2 px-4 text-white">  <router-link to="/">Stays</router-link></a>
        <a class="block py-2 px-4 text-white">  <router-link to="/flights">Flights</router-link></a>
        <a class="block py-2 px-4 text-white">  <router-link to="/recommendations">Recommended Cities</router-link></a>
        <a class="block py-2 px-4 text-white">  <router-link to="/car-rentals">Car Rentals</router-link></a>
        <a class="block py-2 px-4 text-white"> <router-link to="/login">Sign in</router-link></a>
        <a class="block py-2 px-4 text-white"> <router-link to="/register">Sign up</router-link></a>

      </div>



  </nav>
    <!--    |-->
    <!--    <router-link to="/register">Register</router-link>-->

  <RouterView />
</template>


<style>
</style>