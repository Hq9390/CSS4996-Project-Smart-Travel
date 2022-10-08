
<template >
  <div class="bg-white">
    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

      <form action="#" class="text-center ">
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
          <div class="sm:col-span-1">
          <label for="room" class="block text-sm font-medium text-gray-700">Room</label>
          <input v-model="room"
                 type="number"
                 name="room"
                 placeholder="Room"
                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
          />
          </div>
            <div class="sm:col-span-1">
          <label for="guest" class="block text-sm font-medium text-gray-700">Guest</label>
          <input v-model="guest"
                 type="number"
                 name="guest"
                 placeholder="Guest"
                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
          />
            </div>
          <div class="sm:col-span-6"></div>
        </div>

        <div class="mt-6">
        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">

            <label for="location" class="sr-only">Going to</label>

              <input  v-model="location"
                      type="text"
                      name="location" id="location"
                      class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Going to" />

          <datepicker
              v-model="CheckIn "
              class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
              autoApply :format="format"
              :min-date='new Date()'
              placeholder="Check-in"
          />
          <datepicker
              v-model="CheckOut"
              class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
             autoApply :format="format"
              :min-date='new Date()'
              placeholder="Check-out"
          />

          <button @click="" type="submit" value="submit" class=" block   py-2  p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
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
import  axios from "axios"

export default {
  setup() {
    const CheckIn = ref();
    const CheckOut =ref();
    const format = ref('dd MMMM yyyy');


    return {
      CheckIn,
      CheckOut,
      format,
    };
  },
  data(){
    return {

      hover: false,

      searchResults: [],
      searchQuery: '',

    };
  },

  methods: {
    getSearchResults() {
      const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: {query: this.searchQuery, locale: 'en_US', currency: 'USD'},
        headers: {
          'X-RapidAPI-Key': 'e91d5fe0bfmsh00deb867e11e06fp1f0a39jsn81d0c11a738e',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      }
      axios.request(options).then(function (response) {
        console.log(response.data);
        this.searchResults = response.data;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}

</script>