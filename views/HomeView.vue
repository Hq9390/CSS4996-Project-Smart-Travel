<template>

  <div class="  mx-auto max-w-6xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">

    <form action="#" class="text-center ">
      <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
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

      <div class="mt-4">
        <!--        <vue3-simple-typeahead-->
        <!--            id="typeahead_id"-->

        <!--            :items="[{name: 'New York'},{name: 'Florida'},{name: 'Detroit'},{name: 'Las Vegas'},-->
        <!--              {name: 'Los Angeles'},{name: 'Istanbul'},{name: 'Phoenix Arizona'},-->
        <!--              {name: 'Atlanta'},{name: 'Florida'},-->
        <!--              {name:'Cambridge Bay'}, {name:'Windsor'},{name:'New York'}-->
        <!--              ]"-->
        <!--            :minInputLength="1"-->
        <!--            :itemProjection="projection"-->
        <!--            class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "-->
        <!--            @selectItem="citySelected"-->
        <!--            @onInput="updateCurrentOptions"-->
        <!--            placeholder="Going to"-->

        <!--        >-->
        <!--        </vue3-simple-typeahead>-->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div class="flex flex-1 flex-col col-span-2">
            <input v-model="location"
                   @input="getLocationResult"
                   type="text"
                   name="location" id="location"
                   class="block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                   placeholder="Going to"
            />
          </div>
          <div class="flex flex-1 flex-col">
            <datepicker
                v-model="CheckIn "
                class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Check-in"
            />
          </div>
          <div class="flex flex-1 flex-col">
            <datepicker
                v-model="CheckOut"
                class=" col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Check-out"
            />
          </div>
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


          <ul v-show="hotels.length" role="list">
            <Disclosure as="section" aria-labelledby="filter-heading" class="grid items-center border-t border-b border-gray-200">
              <h2 id="filter-heading" class="sr-only">Filters</h2>


              <div class="col-start-1 row-start-1 py-4">
                <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                  <Menu as="div" class="relative inline-block">

                    <div enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <label for="orderBy" class="block  px-14 w-full text-sm font-medium border-0 border-b-2 text-gray-700">Sort By</label>
                      <select id="orderBy" name="orderBy" v-model="orderBy"  @input="orderBySelected"
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
            <div class="min-w-0 flex-1 text-sm">
            </div>
            <div  class="divide-y divide-gray-200">
              <li v-for="hotel in hotels" :key="hotel.hotelId" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl h-50 mt-4 w-100 mx-2">
                <div class="p-3 rounded-md shadow-lg md:w-3/4">
                  <img :src="hotel.heroImage" alt="hotel.name" height='30'
                       class=" inset-0 w-90 h-80 w-full object-cover object-center"/>
                </div>
                <div class="w-full py-4 px-5 text-gray-800 flex flex-col justify-between">
                  <span class="sr-only">View details for {{ hotel.name }}</span>
                  <div class="text-lg font-semibold text-gray-600">{{ hotel.name }}</div>
                  <div class="flex items-center">

                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                         class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                      <path fill="currentColor"
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                    <p class="text-xs text-gray-600">{{ hotel.distance }} and {{ hotel.relevantPoiDistance }}</p></div>

                  <!--            <p class="text-xs text-gray-600">{{ hotel.translations.beach }} </p>-->
                  <div class="text-right text-xl leading-tight text-gray-600 font-semibold">{{ hotel.price }}</div>
                  <div class="flex items-center">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                              :class="[hotel.stars > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                              aria-hidden="true"/>
                  </div>
                  <div>
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


      <div v-if="selectedHotel !== null">
        <div v-if="hotelDetails !== null">
          <div v-if="HotelPrice !== null">

            <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div class="flex lg:flex lg:items-center lg:justify-between">
                <div class="min-w-0 flex-1">

                  <div class=" mt-6 space-y-2">
                    <div class="text-lg font-semibold text-gray-600">{{ selectedHotel.name }}</div>
                    <div class="flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                           class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                      <p class="text-s text-gray-600">{{ hotelDetails.location.address }}</p></div>
                    <div class="flex items-center">
                      <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                :class="[selectedHotel.stars > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                aria-hidden="true"/>
                    </div>
                    <!--                    <p class="ml-3 text-sm text-gray-700">{{ selectedHotel.stars }}<span class="sr-only"> out of 5 stars</span></p>-->


                    <!--                    <p class="text-xs text-gray-700">{{ selectedHotel.stars }}-star property </p>-->

                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">

            <span v-for="image in selectedHotel.images" class="group relative">
              <div class="h-full w-full object-cover object-center lg:h-full lg:w-full">
              <img :src="image" alt=""
                   class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
              </div>
            </span>

                    </div>
                    <!--              {{ hotelDetails.reviewRatingSummary.cleanlinessMessage }}-->
                    <div class="mt-4 text-gray-700 text-base">
                      {{hotelDetails.goodToKnow.description.content}}
                    </div>
                    <!--              <div>{{ hotelDetails.amenities.title }}: <br>-->

                    <!--                {{ hotelDetails.amenities.content[0].description }}-->
                    <!--              </div>-->

                    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
                      <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                        <div class="ml-4 mt-2">
                        </div>
                        <div class="ml-4 mt-2 flex-shrink-0">
                          <a :href="'http://' + HotelPrice.rates[0].deeplink" target="_blank">
                            <button
                                class="relative inline-flex items-center rounded-md border border-gray-300 bg-indigo-900 px-2 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:z-10 focus:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                              Book Now
                              <ChevronDoubleRightIcon class=" h-5 w-5" aria-hidden="true"/>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="mt-10">
                      <!--                    <button type="button"-->
                      <!--                            class="mt-6 inline-flex items-center rounded-md border border-transparent bg-indigo-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"-->
                      <!--                            @click="closeDetails">close details-->
                      <!--                    </button>-->
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
import { ChevronDoubleRightIcon } from "@heroicons/vue/20/solid"
const CheckIn = ref();
const CheckOut = ref();
const format = ref('yyyy-MM-dd');
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