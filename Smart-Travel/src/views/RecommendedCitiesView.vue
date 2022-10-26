<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-10 space-y-10 ">
        <form action="#" method="POST" class="space-y-10 ">
          <div class="sm:col-span-2">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Enter the city you are traveling from</label>
            <div class="mt-1">
              <input type="text" name="city" id="city" autocomplete="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="sm:col-span-2">
              <div class="mt-6">
              <label for="cities" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
              <select id="cities" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose what kind of city you want to visit</option>
                <option value="D">Downtown</option>
                <option value="H">Historical</option>
                <option value="B">Beach</option>
              </select>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="mt-6">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Enter your budget</label>
              <div class="flex flex-row">
                <span class="flex items-center bg-gray-50  rounded rounded-r-none px-3 font-bold text-grey-darker">$</span>
                <input type="number" name="price" class="bg-grey-50 text-grey-darker py-2 w-full p-2.5 font-normal rounded text-grey-900 border dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded-l-none font-bold">
              </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="mt-6">
              <label for="date" class="block text-sm font-medium text-gray-700">Enter your departure date</label>


                <datepicker
                    v-model="departuredate "
                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    type="date"  autoApply :format="format"
                    :min-date='new Date()'
                    placeholder="Select Departure Date"
                />
              </div>
              <div class="mt-6">
              <label for="date" class="block text-sm font-medium text-gray-700">Enter your returning date</label>


                <datepicker
                    v-model="returndate"
                    class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    type="date"  autoApply :format="format"
                    :min-date='new Date()'
                    placeholder="Select Returning Date"
                />
              </div>

            </div>
          </div>
          <div>
            <button @click="" type="submit" value="submit" class="flex w-full justify-center py-2 w-full p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
          </div>
        </form>
      </div>

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
import { ref } from 'vue';

export default {
  setup() {
    const departuredate = ref();
    const returndate =ref();
    const format = ref('dd MMMM yyyy');


    return {
      departuredate,
      returndate,
      format,
    }
  }
}
</script>