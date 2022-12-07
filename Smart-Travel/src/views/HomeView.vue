<template>
  <!--Recommended Cities page-->
  <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
    <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900 block mb-12">Recommended Cities Based on
      Preference </h2>
    <form action="#" class="text-center">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-1 flex-col">
          <!--          Inputting the city that they're traveling from-->
          <label for="city" class="text-sm font-medium text-gray-700">Enter your city</label>
          <!--          Airport code autocomplete-->
          <vue3-simple-typeahead
              id="typeahead_id"
              :items="[{name: 'New York(JFK)', 'code': 'JFK'},{name: 'Florida(MCO)', 'code': 'MCO'},
   {name: 'Detroit(DTW)', 'code': 'DTW'},{name: 'Las Vegas(LAS)', 'code':'LAS'},
{name: 'Los Angeles(LAX)', 'code': 'LAX'},{name: 'Istanbul(IST)', 'code': 'IST'},{name: 'Phoenix Arizona(PHX)', 'code': 'PHX'},
{name: 'Atlanta', 'code': 'ATL'},{name: 'Florida', 'code': 'FLL'},
{name:'Cambridge Bay(YCB)', 'code': 'YCB'}, {name:'Windsor(YQG)', 'code': 'YQG'},
{name:'Barcelona(BCN)', 'code': 'BCN'}
,{name:'ROME(FCO)', 'code': 'FCO'}, {name:'Alexander City(ALX)', 'code': 'ALX'}, {name:'Anniston, Al (ANB)', 'code': 'ANB'},

{name:'Edmonton (YEG)', 'code': 'YEG'},  {name:'Dubai (YEG)', 'code': 'YEG'}, {name:'Aberdeen(ABR)', 'code': 'ABR'}
, {name:'Hana, HI(HNM)', 'code': 'HNM'}, {name:'Doha (DIA)', 'code': 'DIA'}, {name:'Akron(CAK)', 'code': 'CAK'},
{name:'Athens,TN(MMI)', 'code': 'MMI'}, {name:'Seattle (SEA)', 'code': 'SEA'},{name:'Doha (DIA)', 'code': 'DIA'},
{name:'Bakersfield(BFL)', 'code': 'BFL'} ,{name:'Baker,MT(BHK)', 'code': 'BHK'}, {name:'Houston(IAH)', 'code': 'IAH'},
{name:'San Diego(IAH)', 'code': 'IAH'} ,{name:' Hyderabad (NTR)', 'code': 'NTR'}, {name:' Athens,GR(ATH)', 'code': 'ATH'} ,
{name:' Minsk (MSQ)', 'code': 'MSQ'}, {name:'Bangkok(BKK)', 'code': 'BKK'}, {name:' Mink (NTR)', 'code': 'NTR'} ,{name:'Dehli(DEL)', 'code':'DEL'},
,{name:'Bamburi(BMQ)', 'code':'BMQ'},{name:'Amsterdam(AMS)', 'code': 'AMS'},{name:'Dallas (DFW)', 'code': 'DFW'},
{name:'Stockholm(ARN)', 'code': 'ARN'}, {name:'Oslo(OSL)', 'code': 'OSL'},
  {name:'Brisbane(BNE)','code':'BNE'}, {name:'Hanga Roa(IPC)', 'code':'IPC'}, {name:'Auckland(AKL)', 'code':'AKL'}, {name:'Boston(BOS)', 'code':'Bos'}, {name:'Buffalo(BUF', 'code':'BUF'}, {name:'Burbank(BUR)', 'code':'BUR'}, {name:'Charleston(CHS)','code':'CHS'},
   {name:'Charlotte(CLT)', 'code':'CLT'}, {name:'Cleveland(CLE)','code':'CLE'}, {name:'Clarksburg(CKB)','code':'CKB'},
   {name:'Cheyenne(CYS)','code':'CYS'}, {name:'Billings(BIL)','code':'BIL'},
   {name:'Biloxi/Gulfport(GPT)', 'code':'GPT'}, {name:'Birmingham(BHM)', 'code':'BHM'},
   {name:'Boise(BOI)', 'code':'BOI'}, {name:'Boulder(WBU)', 'code':'WBU'}, {name:'Casper(CPR)', 'code':'CPR'},
   {name:'Chicago(MDW)', 'code':'MDW'}, {name:'Chicago(ORD)', 'code':'ORD'}, {name:'Denver(DEN)', 'code':'DEN'},
   {name:'Dayton(DAY)', 'code':'DAY'}, {name:'Durham(RDU)', 'code':'RDU'}, {name:'Eugene(EUG)', 'code':'EUG'},
   {name:'Eureka(EUE)', 'code':'EUE'}, {name:'Fargo(FAR)', 'code':'FAR'}, {name:'Austin(AUS)', 'code':'AUS'}, {name:'Gary(GYY)', 'code':'GYY'}, {name:'Honolulu(HNL)', 'code':'HNL'}, {name:'Huntsville(HSV)', 'code':'HSV'}, {name:'Indianapolis(IND)', 'code':'IND'}, {name:'Jacksonville(JAX)', 'code':'JAX'}, {name:'Kalamazoo(AZO)', 'code':'AZO'}, {name:'Lafayette(LFT)', 'code':'LFT'}, {name:'Lansing(LAN)', 'code':'LAN'}, {name:'Lexington(LEX)', 'code':'LEX'}, {name:'Madison(MSN)', 'code':'MSN'}, {name:'Marquette(MQT)', 'code':'MQT'}, {name:'Maui(OGG)', 'code':'OGG'}, {name:'Minneapolis(MSP)', 'code':'MSP'}, {name:'Newark(EWR)', 'code':'EWR'}, {name:'Oakland(OAK)', 'code':'OAK'}, {name:'Orlando(MCO)', 'code':'MCO'}, {name:'Palm Springs(PSP)', 'code':'PSP'}, {name:'Philadelphia(PHL)', 'code':'PHL'}, {name:'Phoenox(PHX)', 'code':'PHX'}, {name:'Pittsburgh(PIT)', 'code':'PIT'}, {name:'Portland(PDX)', 'code':'PDX'}, {name:'Reno(RNO)', 'code':'RNO'}, {name:'Sacramento(SMF)', 'code':'SMF'}, {name:'San Antonio(SAT)', 'code':'SAT'}, {name:'San Diego(SAN)', 'code':'SAN'}, {name:'San Francisco(SFO)', 'code':'SFO'}, {name:'San Jose(SJC)', 'code':'SJC'}, {name:'San Juan(SJU)', 'code':'SJU'}, {name:'Savannah(SAV)', 'code':'SAV'}, {name:'Tulsa(TUL)', 'code':'TUL'}, {name:'Seoul(ICN)', 'code':'ICN'}, {name:'Tokyo(HND)', 'code':'HND'}, {name:'Milan(MXP)', 'code':'MXP'},
    {name:'Glasgow(GLA)', 'code':'GLA'}, {name:'Taiwan(TPE)', 'code':'TPE'},
  ]"
              :minInputLength="1"
              :itemProjection="projection"
              class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
              @selectItem="airportSelected"
          >
          </vue3-simple-typeahead>
        </div>
        <!--        Choosing one of the city type options-->
        <div class="flex flex-1 flex-col">
          <label for="cities" class="text-sm font-medium text-gray-700">Choose the city type</label>
          <select id="cities" v-model="cityType"
                  class="block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400">

            <option value="D">Mega-city</option>
            <option value="H">Historical</option>
            <option value="B">Beach</option>
            <option value="T">Tropical</option>
          </select>

        </div>
        <!--        Inputting the departure date-->
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
        <!--        Inputting the return date-->
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
          <!--          Submit button-->
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
        <div v-show="cities.length" class="mt-12">
          <div v-if="selectedCity === null">
            <!--            Adding cards to the page to display the cities-->
            <ul role="list" class=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <!--              Viewing a list of cities-->
              <li v-for="city in cities" v-bind:key="city.id"
                  class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                <div class="flex flex-1 flex-col p-8 cursor-pointer" @click="selectCity(city)">
                  <!--                       Styling the images-->
                  <img :src="city.images[0]" alt=""
                       class=" mx-auto h-full w-full sm:h-20 md:h-35 lg:h-40 xl:h-56 xl:w-450">
                  <p class="mt-6 text-xl  text-gray-900 font-bold">{{ city.city_name }}</p>
                  <div>
                    <!--                    A link to redirect you to the ratings page-->
                    <a class=" font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1">
                      <router-link to="/rating">Leave a review if you already visited this city</router-link>
                    </a>
                  </div>
                </div>
                <!--                Show this only if logged in-->
                <div v-if=" isLoggedIn">
                  <!--Save button to save a city to the profile page-->
                  <button v-if=" city.is_saved === undefined" type="button" class="savebtn" @click="onclickSave(city)">
                    Save
                  </button>
                  <!--Unsave button to unsave a city from the profile page-->
                  <button v-if="city.is_saved === true" class="savebtn" @click="unsave(city)">Unsave</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--        Show this only if showing the flights search results-->
        <div v-show="cities.length" class="mt-12">
        </div>
        <!--        Show the details of the selected flight-->
        <div v-if="selectedCity != null" class="rounded-lg">
          <div class="mt-10   divide-y divide-gray-200">
            <div class="flex flex-col overflow-hidden
          bg-white  rounded-xl w-100 ">
              <h1 class=" mt-4 text-xl  text-gray-900 font-bold mx-3">{{ selectedCity.city_name }}</h1>

              <div
                  class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                <!--                Display the images of the flights-->
                <span v-for="image in selectedCity.images" class="group relative">
          <div class=" mx-3 h-full w-full object-cover object-center lg:h-full lg:w-full">
          <img :src="image" alt=""
               class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
        </span>
              </div>
              <h2 class=" mt-6 mx-3 text-base text-gray-900">{{ selectedCity.description }}</h2>
              <!--          Flight booking link-->
              <div class="mt-4 mx-3">
                <a :href=" selectedCity.descriptionLink" target="_blank">
                  <button class=" font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1">Click
                    here for more info about the city
                  </button>
                </a>
              </div>
              <div class="mt-8">
                <div class="bg-gray-400  px-4 py-5 sm:px-6">
                  <div class="flex space-x-3">
                    <!--                Showing the lowest and the highest hotel and flight prices-->
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
            </div>
            <div class="bg-white rounded-xl mt-6">
              <div class="mx-auto max-w-2xl py-16 px-3 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-6">
                <h2 class="text-lg font-medium text-gray-900">Recent reviews</h2>

                <div class="-my-12 mt-3">
                  <div v-for="review in reviews" :key="review.id" class="flex space-x-3 text-sm text-gray-500">

                    <div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
                      <h3 class="font-medium text-gray-900">{{ review.userName }}</h3>
                      <p>
                        <time :datetime="review.datetime">from {{ review.country }}</time>
                      </p>

                      <div class="mt-4 flex items-center">
                        <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                  :class="[review.stars  > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                                  aria-hidden="true"/>
                      </div>
                      <p class="sr-only">{{ review.rating }} out of 5 stars</p>

                      <div class="prose prose-sm mt-4 max-w-none text-gray-500" v-html="review.comments"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Closing the details of the selected flight to go back to flights results -->
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

  <!-- The footer of the recommended cities page-->
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
import {onMounted} from "vue";
import {onAuthStateChanged} from "firebase/auth";
import {onSnapshot, collection} from "firebase/firestore"
import {StarIcon} from '@heroicons/vue/20/solid'
const review = [
  {

    rating: 5,

  },

]
const reviews = ref([]);
// fetching the data from the ratings collection
onMounted(async () => {
  onSnapshot(collection(database, "Ratings"), (querySnapshot) => {
    let collectRatings = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data(), "=>")
      const review = {
        userName: doc.data().userName,
        country: doc.data().country,
        city: doc.data().city,
        stars: doc.data().stars,
        comments: doc.data().comments
      }
      collectRatings.push(review)
    })
    reviews.value = collectRatings
  })
});


const format = ref('dd MMMM yyyy');
const departuredate = ref();
const returndate = ref();
//To show a specific thing only when logged in
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
import {getAuth} from "firebase/auth";
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
      options: [],
      currentAirportOptions: [],
      favorites: [],
    }
  },
  mounted() {

  },
  methods: {
    //For autocomplete
    projection(value) {

      return value.name
    },
    airportSelected(value) {
      this.travelingFrom = value.code;
    },
  
    //Unsaving a city
    async unsave(city) {
      city.is_saved = undefined;
      const auth = getAuth();
      const user = auth.currentUser;
      //Delete the city from the favorites collection
      console.log(user.email);
      database.collection("favorites").doc(user.email).update({
        [city.city_name]: firebase.firestore.FieldValue.delete(),
      })
          .then(() => {
            console.log("Document successfully removed city!");
          })

    },
    //For closing city details
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
    //Details of the selected city
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
    //Fetching the flight details from the flight API
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
    //Fetching the hotel details from the flight API
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

    },
    //Fetch the cities that are in recommendation collection from the firebase API
    queryDb() {
      console.log('called');
      let recommendations = database.collection('recommendation');

      let query = recommendations.where('type', 'array-contains', this.cityType);
      query.get().then((data) => {
        const documents = data.docs.map(doc => doc.data())
        this.cities = documents;
      })
    },
    //Save the clicked city to the favorites collection
    async onclickSave(city) {
      city.is_saved = true;
      console.log('clicked');
      const auth = getAuth();
      const user = auth.currentUser;

      console.log(user.email);
      //Saving the cities clicked in the users document
      database.collection("favorites").doc(user.email).set({
        [city.city_name]: city,
      }, {merge: true})
          .then(() => {
            console.log("Document successfully written!");
          })
    },
  }


}
</script>
