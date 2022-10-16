
<template >
  <div class="bg-white">
    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

      <form action="#" class="text-center ">
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
          <div class="sm:col-span-1">
            <label for="Origin" class="block text-sm font-medium text-gray-700">Origin</label>
            <input v-model="origin"
                   type="text"
                   name="origin"
                   placeholder="origin"
                   class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
            />
          </div>
          <div class="sm:col-span-1">
            <label for="Destination" class="block text-sm font-medium text-gray-700">Destination</label>
            <input v-model="destination"
                   type="text"
                   name="destination"
                   placeholder="destination"
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
                v-model="date"
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
import  axios from "axios";
import moment from 'moment';
export default {
  setup() {
    const format = ref('yyyy-MM-dd');
    return {
      date,
      format,
    };
  },
  data() {
    return {
      hover: false,
      origin: '',
      destination: '',
      searchResults: [],
      searchQuery: '',
      date: '',
      adults: 1,
      flights: [],
      detailOpen: false,
      selectedFlight: null,
    };
  },
  methods: {
    closeDetails() {
      this.selectedFlight = null;
      let datetest = moment(this.date).format('YYYY-MM-DD');
      console.log(datetest);
    },
    openDetails(hotel) {
      console.log('selected ');
      this.selectedFlight = hotel;
    },
    getSearchResults() {
      let self = this;
      // const axios = require("axios");
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {query: this.location},
        headers: {
          'X-RapidAPI-Key': '41ceb7b31cmsh5651d830cf91333p1c49b5jsn43c158f93845',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        let entityId = response.data.data[0].entityId;
        console.log(entityId);
        self.getFlights(entityId);
      }).catch(function (error) {
        console.error(error);
      });
    },
    getFlights(entityId) {
      let self = this;
      console.log('called');
      console.log(this.date);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
          origin: 'LOND',
          destination: 'NYCA',
          date: moment(this.date).format('YYYY-MM-DD'),
          adults: '1',
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '41ceb7b31cmsh5651d830cf91333p1c49b5jsn43c158f93845',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.data.flights);
        self.hotels = response.data.data.flights;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}

</script>