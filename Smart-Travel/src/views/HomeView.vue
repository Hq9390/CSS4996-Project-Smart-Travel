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

            <input  v-model="location"
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

            <button @click.prevent="getSearchResults()" value="submit" class=" block   py-2  p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
          </div>
        </div>

      </form>

    </div>
  </div>
  <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
  <div v-if="selectedHotel == null">
    <ul role="list"  class="divide-y divide-gray-200">
      <li v-for="hotel in hotels" :key="hotel.hotelId" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        <div class="h-64 w-auto md:w-1/2">
          <img :src="hotel.heroImage" alt="" class=" inset-0 h-full w-full object-cover object-center" />
        </div>
         <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">

          <span class="sr-only">View details for {{ hotel.name }}</span>

        <p class="text-gray-900 font-bold text-xl mb-2">{{ hotel.name }}</p>
        <p class="text-gray-900 font-bold text-xl mb-20">{{ hotel.price }}</p>
        <p class="text-gray-900 font-bold text-xl mb-2">{{ guest }}</p>
        <p class="text-gray-900 font-bold text-xl mb-2">{{ hotel.stars }}</p>

        <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="openDetails(hotel)">Details</button>
          </div>

        <!--      <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ file.size }}</p>-->
      </li>
    </ul>
  </div>
  </div>

  <div v-if="selectedHotel !== null">

    <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="closeDetails">close details</button>

    <div><b>Hotel Name</b>{{selectedHotel.name}}</div>
    <div><b>Hotel Price</b>{{selectedHotel.price}}</div>
    <div><b>Guests: </b>{{guest}}</div>
    <div><b>Check-in: </b>{{CheckIn}}</div>
    <div><b>Check-out: </b>{{CheckOut}}</div>
    <div><b>Hotel stars</b>{{selectedHotel.stars}}</div>
    <div><b>Hotel Distance</b>{{selectedHotel.distance}}</div>
    <div><img :src="selectedHotel.heroImage" alt="" class="pointer-events-none object-cover group-hover:opacity-75" width="200"/></div>
    <div><b>other images</b></div>
    <span v-for="image in selectedHotel.images"><img :src="image" alt="" class="pointer-events-none object-cover group-hover:opacity-75" width="300"/></span>

  </div>



  <!--  <div v-if="hotels.length">-->
  <!--    <span v-for="hotel in hotels">-->
  <!--      {{hotel.name}}-->
  <!--      <img :src="hotel.heroImage" alt="" width="200">-->
  <!--    </span>-->
  <!--  </div>-->
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
    const CheckIn = ref();
    const CheckOut =ref();
    const format = ref('yyyy-MM-dd');


    return {
      CheckIn,
      CheckOut,
      format,
    };
  },
  data(){
    return {
      hover: false,
      location:'',
      searchResults: [],
      searchQuery: '',
      room:'',
      guest:1,
      hotels:[],
      detailOpen:false,
      selectedHotel:null,

    };
  },

  methods: {
    closeDetails(){
      this.selectedHotel = null;
      let datetest = moment(this.CheckIn).format('YYYY-MM-DD');
      console.log(datetest);
    },
    openDetails(hotel) {
      console.log('selected ');
      this.selectedHotel = hotel;
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
    getHotels(entityId){
      let self = this;
      console.log('called');
      console.log(this.CheckIn);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchHotel',
        params: {
          entityId: entityId,
          adults:this.guest,
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
      };

      axios.request(options).then(function (response) {
        console.log(response.data.data.hotels);
        self.hotels = response.data.data.hotels;

      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}

</script>