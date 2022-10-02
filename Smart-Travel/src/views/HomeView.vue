
<template >
  <div class="bg-white">
    <div class="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

      <form action="#" class="text-center ">
        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:grid-cols-2">
          <label for="room" class="sr-only">Room</label>
          <input v-model="room"
                 type="number"
                 name="room"
                 placeholder="Room"
                 class="block w-full rounded-md border-gray-500 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <label for="guest" class="sr-only">Guest</label>
          <input v-model="guest"
                 type="number"
                 name="guest"
                 placeholder="Guest"
                 class="block w-full rounded-md border-gray-500 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />


        </div>

        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
        <div class="col-span-2">
          <label for="location" class="sr-only">Going to</label>
          <div class="mt-1 input-container">
            <input  v-model="location"
                    type="text"
                    name="location" id="location"
                    class="location-input
                    block w-full rounded-md border-gray-500 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Going to" />

          </div>

        </div>
        <div>
          <label for="check-in" class="sr-only">Check in</label>
          <div class="mt-1">
            <input
                v-model="checkinDate"
                type="date" name="check-in" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-500 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Check-in" />
          </div>
        </div>
        <div>
          <label for="check-out" class="sr-only">Check out</label>
          <div class="mt-1">
            <input
                v-model="checkoutDate"
                type="date" name="full-name" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-500 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Check-out" />          </div>
        </div>
        </div>

        <div class="mt-6 ">
          <button @click="" type="submit" value="submit" class="inline-flex w-1/3 items-center   py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Submit</button>
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
import { ref } from "vue";
import  axios from "axios"

export default {


  data() {

    return {
      searchResults: [],
      searchQuery: '',


    }
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