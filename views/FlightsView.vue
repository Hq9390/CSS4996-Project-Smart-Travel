<template>

  <div class="bg-white">
    <div class="mx-auto max-w-6xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
      <h2 class="text-2xl font-bold flex w-full justify-center  text-indigo-900">Find a Flight</h2>
      <form action="#" @submit.prevent = "addNewSearch" class="text-center ">
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

      <div class="bg-gray-200">
        <div class="mt-8">
          <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
            <div v-if="selectedFlight == null">


              <ul v-show="flights.length" role="list">
                <Disclosure as="section" aria-labelledby="filter-heading" class="grid items-center border-t border-b border-gray-200">
                  <h2 id="filter-heading" class="sr-only">Filters</h2>


                  <div class="col-start-1 row-start-1 py-4">
                    <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                      <Menu as="div" class="relative inline-block">

                        <div enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                          <label for="orderBy" class="block  px-14 w-full text-sm font-medium border-0 border-b-2 text-gray-700">Sort By</label>
                          <select id="orderBy" name="orderBy" v-model="orderBy"  @input="orderBySelected"
                                  class=" text-sm font-medium text-gray-700  block py-2 px-7 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 ">

                            <option class="text-sm font-medium text-gray-700" value="PH">Price Ascending</option>
                            <option class="text-sm font-medium text-gray-700" value="PL">price Descending</option>

                          </select>


                        </div>
                      </Menu>
                    </div>
                  </div>
                </Disclosure>
              </ul>
            </div>
            </div>
        </div>
      </div>
                <div class="min-w-0 flex-1 text-sm">
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
<!--          <div>-->
<!--            <label class="inline-block lock w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"> Airlines </label>-->
<!--            <div class="form-check">-->
<!--              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected">Delta-->
<!--              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">-->

<!--              </label>-->
<!--            </div>-->

<!--            <div class="form-check">-->
<!--              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected"> SouthWest-->
<!--              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">-->

<!--              </label>-->
<!--            </div>-->

<!--            <div class="form-check">-->
<!--              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected"> Spirit-->
<!--              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">-->

<!--              </label>-->
<!--            </div>-->

<!--            <div class="form-check">-->
<!--              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected" >United Airlines-->
<!--              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">-->

<!--              </label>-->
<!--            </div>-->
<!--            <div class="form-check">-->
<!--              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-left bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckIndeterminate" v-model="selected"> American Airlines-->
<!--              <label class="form-check-label inline-block text-gray-800" for="flexCheckIndeterminate">-->

<!--              </label>-->
            </div>
          </div>
        </div>
      </div>
<!--    </div>-->
<!--  </div>-->
  <div class="text-sm flex w-full justify-center font-light " > Already been there?
    <a  class=" font-medium text-indigo-900 hover:text-indigo-500 underline text-primary-600 hover:underline" ><router-link to="/flightRating">Leave a review</router-link></a>
  </div>


  <div v-if="selectedFlight == null" >
    <ul role="list"  class="divide-y divide-gray-200">

      <li v-for="flight in flights" >


        <div class="flex  flex-col  overflow-hidden
          bg-white rounded-lg shadow-2xl  mt-4 w-100 mx-2">
          class="text-sm flex w-full justify-center font-light " > Already been there?
          <a  class=" font-medium text-indigo-900 hover:text-indigo-500 underline text-primary-600 hover:underline" ><router-link to="/flightRating">Leave a review</router-link></a>
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
// import {addDoc, collection} from "firebase/firestore";
// import { database } from "@/main";
export default {
  setup() {
    const Departure = ref();
    const format = ref('yyyy-MM-dd');

    // const addNewSearch = () => {
    //
    //   addDoc(collection(database, "mostRated"),
    //       {
    //         outgoingCity: going.value
    //       })
    // }
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
      flightFilters:[],
      flightPrice:[],
      searchQuery: '',
      date: '',
      adult: 1,
      flights: [],
      detailOpen: false,
      selectedFlight: null,
      maxFlightPrice: null,
      minFlightPrice: null,
      orderBy: '',
    };
  },
  filters:{
    fix(input){
      return moment(input).format('YYYY-MM-DD')
    }
  },
  // computed: {
  //   filterNames: function (){
  //     return this.filterFlightByNameDelta(this.filterFlightByNameSouthWest(this.filterFlightByNameSpirit(this.filterFlightByNameUnitedAirlines(this.filterFlightByNameAmericanAirlines()))))
  //   }
  // },
  methods: {
    orderBySelected(event){
      this.orderBy = event.target.value;
      if(event.target.value === 'PL') {
        console.log('sorting by price ascending')
        this.flights.sort((a, b) => (this.cleanNumber(a.price) > this.cleanNumber(b.price)) ? 1 : -1)
      }
      if(event.target.value === 'PH') {
        console.log('sorting by price descending')
        this.flights.sort((a, b) => (this.cleanNumber(a.price) < this.cleanNumber(b.price)) ? 1 : -1)
      }
    },
    cleanNumber(value) {
      if(value) {
        value = value.replace("$", "");
        value = value.replace(",", "");
        return parseInt(value);
      }
      console.log('something went seriously wrong here');
      return 0;
    } ,
    closeDetails() {
      this.selectedFlight = null;
      this.flightFilters = null;
      this.flightPrice = null;
      let datetest = moment(this.date).format('YYYY-MM-DD');
      console.log(datetest);
    },
    openDetails(flight) {
      console.log('selected');
      this.selectedFlight = flight;
      this.getHotelFilters(flight.flights);
    },

    // filterFlightByNameDelta: function (flights) {
    //   return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.Delta.toLowerCase()))
    // },
    // filterFlightByNameSouthWest: function(flights){
    //   return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.SouthWest.toLowerCase()))
    // },
    // filterFlightByNameSpirit: function(flights){
    //   return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.Spirit.toLowerCase()))
    // },
    // filterFlightByNameUnitedAirlines: function(flights){
    //   return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.UnitedAirlines.toLowerCase()))
    // },
    // filterFlightByNameAmericanAirlines: function(flights){
    //   return.flights.filter(flight => !flight.Delta.toLowerCase().indexOf(this.AmericanAirlines.toLowerCase()))
    // },
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