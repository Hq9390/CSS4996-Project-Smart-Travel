<template>

  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
         
        <form action="#"  method = "POST" class="space-y-8">
          
           <div class="sm:col-span-2">
            <label for="goingToId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Going to</label>
            <div class="mt-1">
              <input type="goingToId" name="goingToId" id="goingToId" autocomplete="goingToId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div>
          
          
          <div class="sm:col-span-">
		  <label for = "checkinId" class = "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Check-in </label>
		  <div class="mt-1">
		  <input type = "date" id = "checkinId" name= "checkinId" autocomplete="checkinId" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  />
	   </div>
	   </div>
	   
	   <div class="sm:col-span-">
		  <label for = "checkoutId" class = "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Check-out </label>
		  <div class="mt-1">
		  <input type = "date" id = "checkoutId" name= "checkoutId" autocomplete="checkoutId" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  />
	   </div>
	   </div>
   

          <div>
            <button @click="search" type="submit" value="search" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
          
        </form>
         <br>


        <h3> <class="text-xl font-medium text-gray-900 mt-6 " > TOP CITIES TO VISIT</h3>
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

import checkinId from "@vuepic/vue-checkinId";
import checkoutId from "@vuepic/vue-checkoutId";

export default {
  components: {checkinId},
  components: {checkoutId},
  name: 'Stays',
  data() {
    return{
      apiKey: '<cc68175e3amsh222151b1246494ap126e49jsnb4e35549a93b>',
      goingToId: '',
      checkinId:'date' ,
      checkoutId'date',
    }
  },
  methods:{
  }
}
</script>
