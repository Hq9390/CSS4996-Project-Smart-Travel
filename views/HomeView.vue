<template>
  <div class="bg-white">
    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

      <form action="#" class="text-center ">
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
          <div class="sm:col-span-1">
            <label for="room" class="block text-sm font-medium text-gray-700">Room</label>
            <input v-model="room"
                   type="number"
                   name="room"
                   placeholder="Rooms"
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

            <input v-model="location"
                   @input="getLocationResult"
                   type="text"
                   name="location" id="location"
                   class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                   placeholder="Going to"
            />

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

            <div>
              <button @click.prevent="getSearchResults()" value="submit"
                      class=" block   py-2  p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 ">
                Search
              </button>
            </div>

            <div class="sm:col-span-1">
              <div class="mt-1">
                <label for="filter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter</label>
                <select id="filter" class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-300 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400">
                  <option selected>-None-</option>
                  <option value="SL">Stars Low to High</option>
                  <option value="SH">Stars High to Low</option>
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
                <div class="space-y-8 md:grid md:grid-cols-2 md:gap-5 md:space-y-0 lg:grid-cols-4">
                  <div class="mt-1">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>
  <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
    <div v-if="selectedHotel == null">

      <ul role="list" class="divide-y divide-gray-200">
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
            <p class="text-xs text-green-700">
              {{ hotel.stars }}/5 stars</p>
            <div>
              <button type="button"
                      class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      @click.prevent="openDetails(hotel)">Details
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>



  <div v-if="selectedHotel !== null">
    <div v-if="hotelDetails !== null">

      <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
        <div class="flex lg:flex lg:items-center lg:justify-between">
          <div class="min-w-0 flex-1">

            <div class=" space-y-2">
              <div class="text-lg font-semibold text-gray-600">{{ selectedHotel.name }}</div>
              <div class="flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                     class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                  <path fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
                <p class="text-s text-gray-600">{{ hotelDetails.location.address}}</p></div>
              <p class="text-xs text-gray-700">{{ selectedHotel.stars }}-star property </p>

              <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-9">

                <div class="mt-2 flex items-center text-sm text-gray-300">

            <span v-for="image in selectedHotel.images">
              <div class="w-full p-1 md:p-2">
              <img :src="image" alt="" class="inset-0 w-50 h-60 w-full object-cover object-center block object-cover object-center rounded-lg" height="200" width="300"/>
              </div>
            </span>
                </div>
              </div>
              <!--              {{ hotelDetails.reviewRatingSummary.cleanlinessMessage }}-->
              <p class="text-gray-700 text-base">
                {{ hotelDetails.goodToKnow.description.content}}
              </p>
              <div>{{ hotelDetails.amenities.title}}: <br>

                {{ hotelDetails.amenities.content[0].description }}
              </div>

              <div><b>Hotel Price: </b>{{ selectedHotel.price }}</div>

              <div><b>Guests: </b>{{ guest }}</div>


              <button type="button"
                      class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      @click="closeDetails">close details
              </button>
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
<script>
import {ref} from 'vue';
import axios from "axios";
import moment from 'moment';
export default {
  setup() {
    const CheckIn = ref();
    const CheckOut = ref();
    const format = ref('yyyy-MM-dd');
    return {
      CheckIn,
      CheckOut,
      format,
    };
  },
  data() {
    return {
      hover: false,
      location: '',
      searchResults: [],
      searchQuery: '',
      room: '',
      guest: 1,
      hotels: [],
      detailOpen: false,
      selectedHotel: null,
      hotelDetails: {}
    };
  },
  methods: {
    closeDetails() {
      this.selectedHotel = null;
      this.hotelDetails = null;
      console.log(datetest);
    },
    openDetails(hotel) {
      console.log('selected ');
      this.selectedHotel = hotel;
      this.getHotelsDetails(hotel.hotelId);
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
    }
  }
}
</script>