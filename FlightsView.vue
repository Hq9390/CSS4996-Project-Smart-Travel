
<template>
   <div class="bg-white">
    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
    
    <form action="#" class="text-center ">       
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
          <div class="sm:col-span-1">
          <label for="roundtrip" class="block text-sm font-medium text-gray-700">Roundtrip</label>
          <input v-model="roundtrip"
                 type="text"
                 name="roundtrip"
                 placeholder="Roundtrip"
                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
          />
          </div>
          <div class="sm:col-span-6"></div>
        </div>

      <div class="mt-6">
        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">

            <label for="location" class="sr-only">Leaving from</label>

              <input  v-model="location"
                      type="text"
                      name="location" id="location"
                      class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Leaving from" />

      <div class="mt-6">
        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">

            <label for="location" class="sr-only">Going to</label>

              <input  v-model="location"
                      type="text"
                      name="location" id="location"
                      class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Going to" />

          <datepicker
              v-model="Departure "
              class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
              autoApply :format="format"
              :min-date='new Date()'
              placeholder="Departure"
          />
          <datepicker
              v-model="Return"
              class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
             autoApply :format="format"
              :min-date='new Date()'
              placeholder="Return"
          />
           <div class="sm:col-span-1">
          <label for="travelers" class="block text-sm font-medium text-gray-700">Travelers</label>
          <input v-model="travelers"
                 type="number"
                 name="travelers"
                 placeholder="Travelers"
                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
          />

          <div class="sm:col-span-1">
          <label for="cabinClass" class="block text-sm font-medium text-gray-700">Cabin class</label>
          <input v-model="cabinClass"
               <select> type"text" class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                 name="cabinClass"
                 placeholder="Cabin class"
                <option>First class</option>
                <option>Business class</option>
                <option>Coach</option>
               </select>
             />
              
         <button @click="" type="submit" value="submit" class=" block   py-2  p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button/div>
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
          />
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights reserved.</p>
      </div>
    </div>

  </footer>

</template>


<script>
import roundtrip from "@vuepic/vue-roundtrip";
import datepicker from "@vuepic/vue-datepicker";
import travelers from "@vuepic/vue-travelers";
import cabinClass from "@vuepic/vue-cabinClass";

export default {
  components: {roundtrip},
  components: {location},
  components: {travelersId},
  components: {cabinClassId},
  name: 'Flights',
  data() {
    return{
      apiKey: '<cd04dad5a6msh2db6a1136390412p14589fjsnbbd4433369cc>',
      location: '',,
      departure:'date' ,
      return'date',
      travelersId: '',
      cabinClassId: '',
    }
  },
  methods:{
  }
}
</script>
