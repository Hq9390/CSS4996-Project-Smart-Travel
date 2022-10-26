<template>
  <div class="bg-white">
    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

      <form action="#" class="text-center">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-1 flex-col">
            <label for="city" class="text-sm font-medium text-gray-700">Enter your departure airport</label>
            <input type="text" v-model="travelingFrom" name="airport" id="city" autocomplete="city"
                   class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"/>
          </div>
          <div class="flex flex-1 flex-col">
            <label for="cities" class="text-sm font-medium text-gray-700">Choose the city type</label>
            <select id="cities" v-model="cityType"
                    class="block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400">

              <option value="D">Downtown</option>
              <option value="H">Historical</option>
              <option value="B">Beach</option>
            </select>

          </div>
          <div class="flex flex-1 flex-col">

            <label for="date" class="text-sm font-medium text-gray-700">Enter your departure date</label>

            <datepicker
                v-model="departuredate "
                class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Departure Date"
            />
          </div>
          <div class="flex flex-1 flex-col">
            <label for="date" class="text-sm font-medium text-gray-700">Enter your returning date</label>
            <datepicker
                v-model="returndate"
                class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                autoApply :format="format"
                :min-date='new Date()'
                placeholder="Returning Date"
            />
          </div>
        </div>
        <div class="mt-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div class="flex flex-1 flex-col items-center">


            <button @click.prevent="queryDb"
                    class=" block w-1/5 py-2 p-4 rounded-md border border-transparent bg-indigo-900  text-sm  font-medium text-white shadow-sm hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
        </div>

      </form>

      <div class="mt-8">
      <div v-if="selectedCity === null">
        <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <li v-for="city in cities" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <div class="flex flex-1 flex-col p-8 cursor-pointer" @click="selectCity(city)">
            <img :src="city.images[0]" alt="" class="mx-auto h-180 w-200 flex-shrink-0 ">

          <p class="mt-6 text-xl  text-gray-900 font-bold">{{ city.city_name }}</p>
          </div>
        </li>
        </ul>
      </div>
      <div v-if="selectedCity != null">
        <h1 class="mt-6 text-xl  text-gray-900 font-bold">{{ selectedCity.city_name }}</h1>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-10">
          <div class="mt-2 flex items-center text-sm text-gray-300">
        <span v-for="image in selectedCity.images" >
          <div class="w-full p-1 md:p-2">
          <img :src="image" alt="" class="inset-0  object-cover object-center block object-cover object-center rounded-lg" height="350" width="250">
          </div>
        </span>
          </div>
        </div>
        <h2  class="text-sm text-gray-900">{{ selectedCity.description }}</h2>
        <div class="mt-8">
        <div class="bg-gray-200  px-4 py-5 sm:px-6">
          <div class="flex space-x-3">
            <div class="text-xl text-gray-900 font-bold"> Pricing:
          <h4 class="text-lg font-medium text-gray-900 ">Hotel Prices</h4>
          <p class="text-sm text-gray-900">Lowest Hotel Price: {{ lowestHotelPrice }}</p>
          <p class="text-sm text-gray-900">Highest Hotel Price: {{ highestHotelPrice }}</p>

          <h4 class="text-lg font-medium text-gray-900">Flight Prices</h4>
          <p class="text-sm text-gray-900">Lowest Flight Price: ${{ lowestFlightPrice }}</p>
          <p class="text-sm text-gray-900">Highest Flight Price: ${{ highestFlightPrice }}</p>
            </div>
          </div>
        </div>
        </div>
        <div class="mt-8">
        <button @click="closeDetails" class="block py-2 p-4 rounded-md border border-transparent bg-indigo-900  text-sm  font-medium text-white shadow-sm hover:bg-indigo-700"> Close Details</button>
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
import {database} from "@/main";
import firebase from "firebase/compat/app";
import moment from "moment";
import axios from "axios";

export default {
  setup() {
    const departuredate = ref();
    const returndate = ref();
    const format = ref('dd MMMM yyyy');
    return {
      departuredate,
      returndate,
      format,
    }
  },
  data() {
    return {
      cities: [],
      cityType: '',
      selectedCity: null,
      travelingFrom: '',
      flights: [],
      hotels: [],
      hotelOptions: {},
      lowestHotelPrice: 0,
      highestHotelPrice: 0,
      lowestFlightPrice: 0,
      highestFlightPrice: 0,

    }
  },
  methods: {
    closeDetails() {
      this.selectedCity = null;
      this.hotels = [];
      this.flights = [];
      this.hotelOptions = {};
      this.lowestHotelPrice = 0;
      this.highestHotelPrice = 0;
      this.lowestFlightPrice = 0;
      this.highestFlightPrice = 0;


    },
    selectCity(city) {
      this.selectedCity = city;
      this.getHotels();
      this.getFlights();
      this.calculatePrices();
    },
    calculatePrices() {
      console.log('here i am');
      console.log(this.hotels);
      //

    },
    getFlights() {
      let self = this;
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
          origin: this.travelingFrom,
          destination: this.selectedCity.airport_code,
          date: moment(this.departuredate).format('YYYY-MM-DD'),
          returnDate: moment(this.returndate).format('YYYY-MM-DD'),
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
        self.lowestFlightPrice = response.data.data[0].price.amount
        self.highestFlightPrice = response.data.data[response.data.data.length - 1].price.amount
      }).catch(function (error) {
        console.error(error);
      });


    },

    getHotels() {
      let self = this;
      // const axios = require("axios");
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchPlace',
        params: {query: this.selectedCity.city_name},
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        let entityId = response.data.data[0].entityId;

        let hotelOptions = {
          method: 'GET',
          url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchHotel',
          params: {
            entityId: entityId,
            adults: 1,
            sorting: 'price',
            checkin: moment(self.departuredate).format('YYYY-MM-DD'),
            checkout: moment(self.returndate).format('YYYY-MM-DD'),
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
        axios.request(hotelOptions).then(function (response) {
          self.hotels = response.data.data.hotels;
          self.lowestHotelPrice = response.data.data.hotels[0].price
          self.highestHotelPrice = response.data.data.hotels[response.data.data.hotels.length - 1].price
        }).catch(function (error) {
          console.error(error);
        });

      }).catch(function (error) {
        console.error(error);
      });

      // this.lowestHotelPrice = this.hotels[0].price;
      // this.highestHotelPrice = this.hotels[this.hotels.length -1].price;
      //

    },
    queryDb() {
      console.log('called');
      let recommendations = database.collection('recommendation');
      // recommendations.where('type', 'array-contains',
      //     ['b']);
      let query = recommendations.where('type', 'array-contains', this.cityType);
      query.get().then((data) => {
        const documents = data.docs.map(doc => doc.data())
        this.cities = documents;
      })
      // let recommendations = (await database.collection('recommendation').get()).docs;

      // console.log(recommendations.get());
    }
  }
}
</script>