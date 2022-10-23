<template>
  <div class="bg-white">
    <div class="mx-auto max-w-6xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

      <form action="#" class="text-center ">
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">

          <div class="sm:col-span-1">
            <label for="travelers" class="block text-sm font-medium text-gray-700">Travelers</label>
            <input v-model="travelers"
                   type="number"
                   name="travelers"
                   placeholder="Travelers"
                   class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
            />

          </div>
            <div class="sm:col-span-6"></div>
        </div>

        <div class="mt-6">
          <div class="space-y-12 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 lg:grid-cols-5">

            <input  v-model="leaving"
                    type="text"
                    name="leaving" id="leaving"
                    class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                    placeholder="Leaving from" />

                <input  v-model="going"
                        type="text"
                        name="going" id="going"
                        class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                        placeholder="Going to" />
                <datepicker
                    v-model="Departure"
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
                  <label for="cabinClass" class="block text-sm font-medium text-gray-700">Cabin Class</label>
                <select v-model="selected">
                <option value="option 1">Coach</option>
                <option value="option 2">Business</option>
                <option value="option 3">First Class</option>
              </select>
              </div>
              
            <div>
                    <button @click="" type="submit" value="submit" class=" block   py-2  p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
            </div>
                </div>
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
import { ref } from 'vue';
import moment from 'moment';
export default {

  setup() {
    const Departure = ref();
    const Return =ref();
    const format = ref('yyyy-MM-dd');


    return {
      Departure,
      Return,
      format,
    };
  },
  data() {
    return {
      leaving: '',
      going: '',


    };
  },

}

</script>
