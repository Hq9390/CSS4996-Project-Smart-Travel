
<template>

<div class=" mt-6 mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

  <form action="#" class="text-center flex">
    <div>
      <div class=" md:grid py-15 md:grid-cols-3 md:gap-3 md:space-y-0">
        <input class = "block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                    type="text" v-model="searchLocation" placeholder="Pickup Location"/>
        <Datepicker input placeholder="Pickup Date" class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"> </Datepicker>
        <Datepicker input placeholder="Return Date" class = " block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"> </Datepicker>
        <div v-for="pickup in locationpickup" :key="pickup.id"> {{ pickup.label }}</div>
      </div>
      <button @click="search" value="Search for Vehicle" class= "mt-6 w-1/2 items-center py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 text-center"> Search </button>
    </div>
  </form>
  <h3 class="text-xl font-medium text-gray-900 mt-6 " > Top Cities to Visit</h3>
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
</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
export default {
  components: {Datepicker}
}
</script>

