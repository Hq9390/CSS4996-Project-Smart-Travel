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
            <div>
              <input  v-model="leaving"
                      type="text"
                      name="leaving" id="leaving"
                      class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Leaving from" />
            </div>
            <div>
              <input  v-model="going"
                      type="text"
                      name="going" id="going"
                      class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Going to" />
            </div>

            <datepicker
                v-model="Departure"
                class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Departure"
            />

            <div>
              <button type="button" class="items-left rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="getSearchResults()"> Search </button>
            </div>

          </div>
        </div>

      </form>


      <div class="sm:col-span-4">
        <div class="mt-1">
          <label for="filter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter</label>
          <select id="filter" class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400">
            <option selected>-None-</option>
            <option value="PL">Price Low to High</option>
            <option value="PH">Price High to Low</option>
          </select>
        </div>
      </div>

      <div class="sm:col-span-1">
        <div class="mt-1">
          <label for="Search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Search</label>
          <input type="text"
                 name="Search"
                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
          />
          <div class="space-y-10 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
            <div class="mt-1">
            </div>
          </div>
        </div>
      </div>

      <div class="w-40 h-40 shadow-md bg-white px-1 absolute block mb-1 text-sm rounded-sm font-medium text-gray-900 dark:text-gray-400">

        <div class="flex justify-left">
          <div>
            <label class="inline-block lock w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"> Airlines </label>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected">Delta
              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">

              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected"> SouthWest
              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">

              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected"> Spirit
              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">

              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected" >United Airlines
              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">

              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected"> American Airlines
              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">

              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



    <div v-if="selectedFlight == null" >
    <ul role="list"  class="divide-y divide-gray-200">

      <li v-for="flight in flights" >


        <div class="flex  flex-col  overflow-hidden
          bg-white rounded-lg shadow-2xl  mt-4 w-100 mx-2">
          <button type="button" @click="openDetails(flight)">

            <div class=" mx-3 flow-root">
              <p class="float-right text-xl leading-tight text-gray-600 font-semibold">${{flight.price.amount}}</p>
              <p class="float-left">{{flight.legs[0].departure}} - {{flight.legs[0].arrival}}</p>

            </div>
            <div class="text-left mx-3">

              {{flight.legs[0].origin.name}} - {{flight.legs[0].destination.name }} <br>
            </div>
            <div class="text-left mx-3">
              {{flight.legs[0].carriers[0].name}}
            </div>
          </button>
        </div>
      </li>
    </ul>
  </div>

  <div v-if="selectedFlight !== null" >
    {{selectedFlight.legs[0].carriers[0].name}}
    <div>
      <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="closeDetails(flight)">Close Details</button>
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
    const Departure = ref();
    const format = ref('yyyy-MM-dd');
    return {
      Departure,
      format,
    };
  },
  data() {
    return {
      leaving: '',
      going: '',
      searchResults: [],
      searchQuery: '',
      date: '',
      adult: 1,
      flights: [],
      detailOpen: false,
      selectedFlight: null,
    };
  },
  filters:{
    fix(input){
      return moment(input).format('YYYY-MM-DD')
    }
  },

  computed: {
    filterNames: function (){
      return this.filterFlightByNameDelta(this.filterFlightByNameSouthWest(this.filterFlightByNameSpirit(this.filterFlightByNameUnitedAirlines(this.filterFlightByNameAmericanAirlines()))))
    }
  },
  methods: {
    closeDetails() {
      this.selectedFlight = null;
      let datetest = moment(this.date).format('YYYY-MM-DD');
      console.log(datetest);
    },
    openDetails(flight) {
      console.log('selected');
      this.selectedFlight = flight;
    },

    filterFlightByNameDelta: function (flights) {
      return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.Delta.toLowerCase()))
    },
    filterFlightByNameSouthWest: function(flights){
      return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.SouthWest.toLowerCase()))
    },
    filterFlightByNameSpirit: function(flights){
      return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.Spirit.toLowerCase()))
    },
    filterFlightByNameUnitedAirlines: function(flights){
      return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.UnitedAirlines.toLowerCase()))
    },
    filterFlightByNameAmericanAirlines: function(flights){
      return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.AmericanAirlines.toLowerCase()))
    },

    getSearchResults() {
      let self = this;
      console.log('called');
      console.log(this.date);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
          origin: this.leaving,
          destination: this.going,
          date: moment(this.Departure).format('YYYY-MM-DD'),
          adults: 1,
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      }
      axios.request(options).then(function (response) {
        self.flights = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>
