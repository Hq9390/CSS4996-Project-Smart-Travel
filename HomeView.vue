<template>

<div class="flex w-full justify-center">
          <img class= " h-48 w-full object-cover lg: h-48" 
              src="../images/recommended1.png" alt= ""
              />
        </div>

  <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

    <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900 block mb-12">What are your preferences</h2>
    <form action="#" class="text-center">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-1 flex-col">
          <label for="city" class="text-sm font-medium text-gray-700">Enter your city</label>
          <vue3-simple-typeahead
              id="typeahead_id"

              :items="[{name: 'New York(JFK)', 'code': 'JFK'},{name: 'Florida(MCO)', 'code': 'MCO'},{name: 'Detroit(DTW)', 'code': 'DTW'},{name: 'Las Vegas(LAS)', 'code': 'LAS'},
              {name: 'Los Angeles(LAX)', 'code': 'LAX'},{name: 'Istanbul(IST)', 'code': 'IST'},{name: 'Phoenix Arizon(PHX)', 'code': 'PHX'},
              {name: 'Atlanta', 'code': 'ATL'},{name: 'Florida', 'code': 'FLL'},
              {name:'Cambridge Bay(YCB)', 'code': 'YCB'}, {name:'Windsor(YQG)', 'code': 'YQG'},{name:'New York(JFK)', 'code': 'JFK'},{name:'Barcelona(BCN)', 'code': 'BCN'}
              ,{name:'ROME(FCO)', 'code': 'FCO'}

              ]"
              :minInputLength="1"
              :itemProjection="projection"
              class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
              @selectItem="airportSelected"


          >
          </vue3-simple-typeahead>
<!--          <input type="text" v-model="travelingFrom" name="airport" id="city" autocomplete="city"-->
<!--                 class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"/>-->
        </div>
        <div class="flex flex-1 flex-col">
          <label for="cities" class="text-sm font-medium text-gray-700">Choose the city type</label>
          <select id="cities" v-model="cityType"
                  class="block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400">

            <option value="D">Mega-city</option>
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
  </div>
  <div class="mt-6 bg-gray-200">
    <div class="mt-10">
      <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
<div v-show="cities.length" class="mt-12" >
        <div v-if="selectedCity === null">
          <ul role="list" class=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <li v-for="city in cities" v-bind:key="city.id"
                class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 flex-col p-8 cursor-pointer" @click="selectCity(city)">
                <img :src="city.images[0]" alt="" class="mx-auto h-190 w-200 flex-shrink-0 ">
                <p class="mt-6 text-xl  text-gray-900 font-bold">{{ city.city_name }}</p>
              </div>
              <div v-if=" isLoggedIn">

              <button v-if=" city.is_saved === undefined" type="button" class="savebtn" @click="onclickSave(city)" >Save</button>
              <button v-if="city.is_saved === true" class="savebtn"  >Saved</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div v-show="cities.length"  class="mt-12">
        </div>
          <div v-if="selectedCity != null">
        <h1 class=" text-xl  text-gray-900 font-bold mx-3">{{ selectedCity.city_name }}</h1>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <span v-for="image in selectedCity.images" class="group relative">
          <div class=" mx-3 h-full w-full object-cover object-center lg:h-full lg:w-full">
          <img :src="image" alt=""
               class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
        </span>
          </div>
        <h2 class=" mt-6 mx-3 text-base text-gray-900">{{ selectedCity.description }}</h2>
        <div class="mt-4 mx-3">
        <a  :href=" selectedCity.descriptionLink" target="_blank"> <button class=" font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1">Click here for more info about the city </button></a>
        </div>
        <div class="mt-8">
          <div class="bg-gray-400  px-4 py-5 sm:px-6">
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

        <div class="mt-8">
          <button @click="closeDetails"
                  class="block py-2 p-4 rounded-md border border-transparent bg-indigo-900  text-sm  font-medium text-white shadow-sm hover:bg-indigo-700">
            Close Details
          </button>
        </div>
          <div class="mt-8">

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

import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged} from "firebase/auth";


const format = ref('dd MMMM yyyy');
const departuredate = ref();
const returndate = ref();
const isLoggedIn = ref(false)
let auth
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });

});
</script>
<script>
import {ref} from 'vue';
import {database} from "@/main";
import firebase from "firebase/compat/app";
import moment from "moment";
import axios from "axios";
import { collection, query, doc, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
export default {


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
      options:[],
      currentAirportOptions:[],


    }
  },
  mounted() {
    // fetch("../assets/cities.json")
    //     .then(response => response.json())
    //     .then(data => (this.options = data));

  },
  methods: {
    projection(value) {

      return value.name
    },
    airportSelected(value){
      this.travelingFrom = value.code;
    },


    unsave(city) {

    },
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
      console.log('prices');
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
    },
    async onclickSave(city){
      city.is_saved = true;
      console.log('clicked');
      // const favorites = await getDocs(collection(database, "favorites"));


      const auth = getAuth();
      const user = auth.currentUser;

      console.log(user.email);
      database.collection("favorites").doc(user.email).set({
        [city.city_name]: city,
      }, {merge: true})
          .then(() => {
            console.log("Document successfully written!");
          })
      //alert box popup
      alert("Added to Profile")
    },
  }


}
</script>