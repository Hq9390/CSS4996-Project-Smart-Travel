<template>

  <div class="  mx-auto max-w-6xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900 block mb-12">Find a Hotel</h2>
    <!--    Hotel form-->
    <form action="#" class="text-center ">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
        <div class="sm:col-span-1">
          <!--          For inputting the number of rooms-->
          <label for="room" class="block text-sm font-medium text-gray-700">Room</label>
          <input v-model="room"
                 type="number"
                 name="room"
                 placeholder="Room"
                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
          />
        </div>
        <div class="sm:col-span-1">
          <!--          For inputting the number of guests-->
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
      <!--Adding margin to the top-->
      <div class="mt-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div class="flex flex-1 flex-col col-span-2">
            <!--            City autocomplete for the location-->
            <vue3-simple-typeahead
                id="typeahead_id"

                :items="[{name: 'New York, United States','code': 'New York'},{name: 'Nevada, United States','code': 'Nevada'},
                {name: 'Detroit, United States','code': 'Detroit'},{name: 'Las Vegas,Nevada, United States','code': 'Las Vegas'},
              {name: 'Los Angeles, California, United States','code': 'Los Angeles'},{name: 'Istanbul, Turkey','code': 'Istanbul'},
              {name: 'Arizona,United States','code': 'Arizona'},
              {name: 'Atlanta,Georgia,United States','code': 'Atlanta'},{name: 'Florida,United States','code': 'Florida'},
              {name:'Cambridge Bay, Canada','code': 'Cambridge Bay'},
              {name:'Windsor, Canada','code': 'Windsor'},{name:'Texas, United States ','code': 'Texas'},{name:'Ohio, United States','code': 'Ohio'},
              {name:'Cancun, Mexico','code': 'Cancun'},{name:'Hawaii, United States','code': 'Hawaii'},{name:'Miami, Florida, United States','code': 'Miami'},
              {name:'London','code': 'London'},{name:'Amsterdam','code': 'Amsterdam'},{name:'Kuwait, Kuwait','code': 'Kuwait'},
              {name:'Boston, Massachusetts, United States','code': 'Boston'},{name:'Orlando, Florida, United States','code': 'Orlando'},
              {name:'San Francisco, California, United States','code': 'San Francisco'},
              {name:'Washington, D.C., United States','code': 'Washington, D.C.'},{name:'Sydney, Australia','code': 'Sydney'},
              {name:'Houston, Texas, United States','code': 'Houston'},
              {name:'Jaipur, India','code': 'Jaipur'},{name:'New Orleans,Louisiana, United States','code': 'New Orleans'}
              ,{name:'Paris, France','code': 'Paris'},{name:'Savannah, Georgia, United States','Savannah': 'Savannah'},
              {name:'Florence, Italy','code': 'Florence'},
              {name:'Hong Kong, China','code': 'Hong Kong'},{name:'Rio de Janeiro, Brazil','code': 'Rio de Janeiro'},
              {name:'Charleston, South Carolina, United States','code': 'Charleston'},{name:'Lisbon, Portugal','code': 'Lisbon'},
              {name:'Cairo, Egypt','code': 'Cairo'},{name:'Berlin, Germany','code': 'Berlin'}
              ]"
                :minInputLength="1"
                :itemProjection="projection"
                class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
                @selectItem="locationSelected"
                placeholder="Going to"
            >
            </vue3-simple-typeahead>
          </div>
          <div class="flex flex-1 flex-col">
            <!--            Inputting the checkin date for the hotel-->
            <datepicker
                v-model="CheckIn"
                class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Check-in"
            />
          </div>
          <!--            Inputting the checkout date for the hotel-->
          <div class="flex flex-1 flex-col">
            <datepicker
                v-model="CheckOut"
                class=" col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Check-out"
            />
          </div>
          <!--          Submit the form-->
          <div class="flex flex-1 flex-col">
            <button @click.prevent="getSearchResults()" value="submit"
                    class=" col-span-1 w-1/2 block py-2 p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="bg-gray-200">
    <div class="mt-8">
      <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
        <div v-if="selectedHotel == null">
          <!--            Show this section only when displaying the hotel search results-->
          <ul v-show="hotels.length" role="list">
            <Disclosure as="section" aria-labelledby="filter-heading"
                        class="grid items-center border-t border-b border-gray-200">
              <h2 id="filter-heading" class="sr-only">Filters</h2>
              <div class="col-start-1 row-start-1 py-4">
                <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                  <Menu as="div" class="relative inline-block">

                    <div enter-active-class="transition ease-out duration-100"
                         enter-from-class="transform opacity-0 scale-95"
                         enter-to-class="transform opacity-100 scale-100"
                         leave-active-class="transition ease-in duration-75"
                         leave-from-class="transform opacity-100 scale-100"
                         leave-to-class="transform opacity-0 scale-95">
                      <!--                      Order the hotel results by these options-->
                      <label for="orderBy"
                             class="block  px-14 w-full text-sm font-medium border-0 border-b-2 text-gray-700">Sort
                        By</label>
                      <select id="orderBy" name="orderBy" v-model="orderBy" @input="orderBySelected"
                              class=" text-sm font-medium text-gray-700  block py-2 px-7 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 ">
                        <option class="text-sm font-medium text-gray-700" value="pricea">Price Ascending</option>
                        <option class="text-sm font-medium text-gray-700" value="priced">price Descending</option>
                        <option class="text-sm font-medium text-gray-700" value="starsa">Stars Ascending</option>
                        <option class="text-sm font-medium text-gray-700" value="starsd">Stars Descending</option>
                      </select>
                    </div>
                  </Menu>
                </div>
              </div>
            </Disclosure>
            <div class="">
            </div>
            <div class="divide-y divide-gray-200">
              <!--              Display a list of all the hotels with their details -->
              <li v-for="hotel in hotels" :key="hotel.hotelId" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-md  mt-4 w-90 ">
                <div class="p-3 rounded-md shadow-lg md:w-3/4 sm:w-1/2 ">
                  <img :src="hotel.heroImage" alt="hotel.name" height='30'
                       class=" inset-0 w-90 h-80 w-full object-center"/>
                </div>
                <div class="w-full py-4 px-5 mt-3 text-gray-800 flex flex-col ">
                  <span class="sr-only">View details for {{ hotel.name }}</span>
                  <div class="  flow-root">
                    <div class="float-left text-lg font-semibold text-gray-600">{{ hotel.name }}</div>
                    <div class="float-right flex items-center">
                      <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                :class="[hotel.stars > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                aria-hidden="true"/>
                    </div>
                  </div>
                  <div class="  flow-root">
                    <div class="mt-3 float-left flex items-center">
                      <!--Star icon-->
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                           class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                      <p class="text-s text-gray-600">{{ hotel.distance }} and {{ hotel.relevantPoiDistance }}</p>
                    </div>

                    <div class="float-right text-xl leading-tight text-gray-600 font-semibold">{{ hotel.price }}</div>
                  </div>
                  <div class="mt-3 flex items-center text-s text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                    {{this.guest}} Adults
                  </div>
                  <div class="mt-3 text-l leading-tight text-indigo-600 font-semibold">

                    {{hotel.taxPolicy}}
                  </div>
                  <div class=" mt-3 text-l leading-tight text-gray-600 font-semibold">
                    {{hotel.exclusiveDealLabel}}

                  </div>

                  <div class="mt-2 text-right">
                    <!--                    Select the button to view the details of a specific hotel-->
                    <button type="button"
                            class="inline-flex items-center rounded-md border border-transparent bg-indigo-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click.prevent="openDetails(hotel)">Details
                    </button>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <!--Displaying details of the selected hotel-->
      <div v-if="selectedHotel !== null">
        <div v-if="hotelDetails !== null">
          <div v-if="HotelPrice !== null">
            <!--Adding a container-->
            <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div class="flex lg:flex lg:items-center lg:justify-between">
                <div class="min-w-0 flex-1">
                  <div class=" mt-6 space-y-2">
                    <div class="text-lg font-semi-bold text-gray-600">{{ selectedHotel.name }}</div>
                    <div class="flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                           class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                      <!--                      Hotel location-->
                      <p class="text-s text-gray-600">{{ hotelDetails.location.address }}</p></div>
                    <div class="flex items-center">
                      <!--                      Hotel stars icon-->
                      <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                :class="[selectedHotel.stars > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                aria-hidden="true"/>
                    </div>
                    <div
                        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                      <!--The images of the selected hotel-->
                      <span v-for="image in selectedHotel.images" class="group relative">
              <div class="h-full w-full object-cover object-center lg:h-full lg:w-full">
              <img :src="image" alt=""
                   class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              </div>
            </span>
                    </div>
                    <!--                    The description of the selected hotel-->
                    <div class="mt-4 text-gray-700 text-base">
                      {{ hotelDetails.goodToKnow.description.content }}
                    </div>
                    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
                      <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div class="ml-4 mt-2">
                        </div>
                        <!--                        Booking link-->
                        <div class="ml-4 mt-2 flex-shrink-0">
                          <a :href="'http://' + HotelPrice.rates[0].deeplink" target="_blank">
                            <button
                                class="relative inline-flex items-center rounded-md border border-gray-300 bg-indigo-900 px-2 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:z-10 focus:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                              Book Now
                              <!--                              Arrow icon-->
                              <ChevronDoubleRightIcon class=" h-5 w-5" aria-hidden="true"/>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!--                    Adding some margin to the top-->
                    <div class="mt-10">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Footer section-->
  <footer class="mx-auto w-full  bg-white mt-auto" aria-labelledby="footer-heading">
    <div class="mx-auto  py-15 px-4 sm:px-6 lg:py-20 lg:px-8">

      <div class="mt-12 border-t border-gray-200 pt-8">
        <div class="flex w-full justify-center">
          <img
              src="../images/logo.png"
              class="  w-55 h-40"
          />
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights
          reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import {StarIcon} from '@heroicons/vue/20/solid'
import {ChevronRightIcon} from '@heroicons/vue/20/solid'
import {ChevronDoubleRightIcon} from "@heroicons/vue/20/solid"
import {ref} from 'vue';

const CheckIn = ref();
const CheckOut = ref();
//Date formatting
const format = ref('MMM dd yyyy');
const reviews = [
  {

    rating: 5,

  },
  // More reviews...
]
</script>
<script>
import {ref} from 'vue';
import axios from "axios";
import moment from 'moment';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';

export default {
  // setup() {
  //   const CheckIn = ref();
  //   const CheckOut = ref();
  //   const format = ref('yyyy-MM-dd');
  //
  //
  //   return {
  //     CheckIn,
  //     CheckOut,
  //     format,
  //   };
  // },
  data() {
    return {
      hover: false,
      location: '',
      searchResults: [],
      HotelFilters: [],
      HotelPrice: [],
      searchQuery: '',
      room: '',
      guest: 1,
      hotels: [],
      detailOpen: false,
      selectedHotel: null,
      hotelDetails: {},
      maxHotelPrice: null,
      minHotelPrice: null,
      orderBy: '',
    };
  },

  methods: {
    projection(value) {

      return value.name
    },
    locationSelected(value){
      this.location = value.code;
    },

    orderBySelected(event){
      this.orderBy = event.target.value;

      if(event.target.value === 'pricea') {
        console.log('sorting by price ascending')

        this.hotels.sort((a, b) => (this.cleanNumber(a.price) > this.cleanNumber(b.price)) ? 1 : -1)
      }

      if(event.target.value === 'priced') {
        console.log('sorting by price descending')
        this.hotels.sort((a, b) => (this.cleanNumber(a.price) < this.cleanNumber(b.price)) ? 1 : -1)
      }

      if(event.target.value === 'starsa') {
        console.log('sorting by stars ascending')
        this.hotels.sort((a, b) => (a.stars > b.stars) ? 1 : -1)

      }

      if(event.target.value === 'starsd') {
        console.log('sorting by stars descending')
        this.hotels.sort((a, b) => (a.stars < b.stars) ? 1 : -1)
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
      this.selectedHotel = null;
      this.hotelDetails = null;
      this.HotelFilters = null;
      this.HotelPrice = null;
    },
    openDetails(hotel) {
      console.log('selected ');
      this.selectedHotel = hotel;
      this.getHotelsDetails(hotel.hotelId);
      this.getHotelFilters(hotel.hotelId);
      this.getHotelPrice(hotel.hotelId, hotel);
    },
    getSearchResults() {
      let self = this;
      // const axios = require("axios");
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchPlace',
        params: {query: this.location},
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        let entityId = response.data.data[0].entityId;
        console.log(entityId);
        self.getHotels(entityId);

      }).catch(function (error) {
        console.error(error);
      });
    },
    getHotelFilters(entityId) {
      let self = this;

      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/getHotelFilters',
        params: {
          entityId: entityId,
          checkin: moment(this.CheckIn).format('YYYY-MM-DD'),
          checkout: moment(this.CheckOut).format('YYYY-MM-DD'),
          adults: this.guest,
          waitTime: '2000'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        self.hotels = response.data.data.hotels;
        self.hotels = self.hotels.filter(function( obj ) {
          return obj.price !== null;
        });

      }).catch(function (error) {
        console.error(error);
      });
    },
    getHotels(entityId) {
      let self = this;
      console.log('called');
      console.log(this.CheckIn);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchHotel',
        params: {
          entityId: entityId,
          adults: this.guest,
          checkin: moment(this.CheckIn).format('YYYY-MM-DD'),
          checkout: moment(this.CheckOut).format('YYYY-MM-DD'),
          waitTime: '2000',
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }

      }

      if (this.maxHotelPrice !== null) {
        options.params.maxPrice = this.maxHotelPrice;
      }
      if (this.minHotelPrice !== null) {
        options.params.minPrice = this.minHotelPrice;
      }

      axios.request(options).then(function (response) {
        self.hotels = response.data.data.hotels;
        self.hotels = self.hotels.filter(function( obj ) {
          return obj.price !== null;
        });

      }).catch(function (error) {
        console.error(error);
      });

    },
    getHotelsDetails(hotelId) {
      let self = this;
      console.log('called');
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/getHotelDetails',
        params: {hotelId: hotelId, currency: 'USD', countryCode: 'US', market: 'en-US'},
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        self.hotelDetails = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    },
    getHotelPrice(hotelId, entityId) {
      let self = this;
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/getHotelPrice',
        params: {
          hotelId: hotelId,
          entityId: entityId,
          checkin: moment(this.CheckIn).format('YYYY-MM-DD'),
          checkout: moment(this.CheckOut).format('YYYY-MM-DD'),
          adults: this.guest,
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
        self.HotelPrice = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    }

  }
}

</script>
