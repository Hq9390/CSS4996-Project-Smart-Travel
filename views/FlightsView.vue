<template>
<div class="bg-white">
<div class="mx-auto max-w-6xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

  <form action="#" class="text-center ">
    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">

      <div class="sm:col-span-1">
        <label for="travelers" class="block text-sm font-medium text-gray-700">Adults</label>
        <input v-model="adult"
               type="number"
               name="Adults"
               placeholder="Travelers"
               class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
        />

      </div>
      <div class="sm:col-span-6"></div>
    </div>

    <div class="mt-6">
      <div class="space-y-12 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 lg:grid-cols-5">

        <input  v-model="origin"
                @input="getOriginResult"
                type="text"
                name="leaving" id="leaving"
                class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                placeholder="Leaving from" />

        <input  v-model="destination"
                @input="getDestinationResult"
                type="text"
                name="destination" id="destination"
                class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                placeholder="Going to" />
        <datepicker
            v-model="date"
            class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
            autoApply :format="format"
            :min-date='new Date()'
            placeholder="Departure"
        />
        <datepicker
            v-model="returnDate"
            class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
            autoApply :format="format"
            :min-date='new Date()'
            placeholder="Return"
        />
        <div>
          <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="openDetails(flights)"> Search </button>
        </div>
      </div>
    </div>

  </form>
</div>
</div>
  <div v-if="selectedFlight == null">
    <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <li v-for="flight in flights" :key="flight.flightId" class="relative">
        <div class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img :src="flight.heroImage" alt="" class=" object-cover group-hover:opacity-75" height="100"/>
          <span class="sr-only">View details for {{ flight.name }}</span>
          <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="openDetails(hotel)">Details</button>
        </div>
      </li>
    </ul>

    <div v-if="selectedFlight !== null">


<button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="closeDetails">close details</button>
    <div><b>Currency</b>{{selectedFlight.price}}</div>
    <div><b>Adults: </b>{{selectedFlight.adult}}</div>
    <div><b>Origin: </b>{{origin}}</div>
    <div><b>Destination: </b>{{destination}}</div>
      <div><b>Date: </b>{{date}}</div>
      <div><b>ReturnDate: </b>{{selectedFlight.returnDate}}</div>
<div><img :src="selectedFlight.heroImage" alt="" class="pointer-events-none object-cover group-hover:opacity-75" width="200"/></div>
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
import axios from "axios";
import moment from 'moment';
export default {
  setup() {
    const origin = ref();
    const destination = ref();
    const date = ref('yyyy-MM-dd');

    return {
      origin ,
      destination ,
      date,
    };
  },
  data() {
    return {
      hover: false,
      //origin: '',
     // destination: '',
      searchResults: [],
      searchQuery: '',
   //   date: '',
      returnDate: '',
      adult: 1,
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
    openDetails(flights) {
      console.log('selected ');
      this.selectedFlight = flights;
    },
    getSearchResults() {
      let self = this;
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {query: this.location},
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        let date1 = response.data.data[0].date;
        console.log(date1);
        self.getFlights(date1);
      }).catch(function (error) {
        console.error(error);
      });
    },
    getFlights() {
      let self = this;
      console.log('called');
      console.log(this.date);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
          origin: '',
          destination: '',
          date: moment(this.date).format('YYYY-MM-DD'),
          returnDate: moment(this.returnDate).format('YYYY-MM-DD'),
          adults: this.adult,
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.data.flights);
        self.flights = response.data.data.flights;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>
