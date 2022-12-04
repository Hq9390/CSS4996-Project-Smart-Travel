<template>

  <div class="flex w-full justify-center">
    <img class= "h-48 w-full object-cover"
         src="../images/flights1.png" alt= ""
    />
  </div>

  <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
    <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900 block mb-12">Find a Flight</h2>
    <div class="mt-6 sm:mt-2 2xl:mt-5">
      <div class="border-b border-gray-200">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav class="-mb-px cursor-pointer flex space-x-8" aria-label="Tabs">
            <a v-for="tab in tabs" :key="tab.name"
               :class="[tab.current ? 'border-indigo-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
               :aria-current="tab.current ? 'page' : undefined" @click.prevent="setCurrentTab(tab)">{{
                tab.name
              }}</a>
          </nav>
        </div>
      </div>
    </div>

    <div class="mt-6 ">
    </div>

    <div v-if="tabs[0].current === true" >
      <form action="#" class="text-center ">
        <div class=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
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

        <div class="mt-4 sm:mt-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            <div class="flex flex-1 flex-col col-span-2" >
              <input  v-model="leaving"
                      type="text"
                      name="leaving" id="leaving"
                      class=" block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Leaving from" />
            </div>
            <div class="flex flex-1 flex-col col-span-2">
              <input  v-model="going"
                      type="text"
                      name="going" id="going"
                      class="block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Going to" />
            </div>
            <div class="flex flex-1 flex-col">
              <datepicker
                  v-model="Departure"
                  class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                  autoApply :format="format"
                  :min-date='new Date()'
                  placeholder="Departure"
              />
            </div>
            <div  class="flex flex-1 flex-col">
              <button type="button" class=" col-span-1 w-1/2 block py-2 p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 " @click.prevent="getSearchResults()"> Search </button>
            </div>

          </div>
        </div>


      </form>

    </div>
    <div v-if="tabs[1].current === true">
      <form action="#" class="text-center ">
        <div class=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">

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

        <div class="mt-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            <div class="flex flex-1 flex-col" >
              <input  v-model="leaving"
                      type="text"
                      name="leaving" id="leaving"
                      class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Leaving from" />
            </div>
            <div class="flex flex-1 flex-col" >
              <input  v-model="going"
                      type="text"
                      name="going" id="going"
                      class=" block col-span-1 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                      placeholder="Going to" />
            </div>
            <div class="flex flex-1 flex-col" >
              <datepicker
                  v-model="Departure"
                  class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                  autoApply :format="format"
                  :min-date='new Date()'
                  placeholder="Departure"
              />
            </div>
            <div class="flex flex-1 flex-col" >
              <datepicker
                  v-model="returnDate"
                  class=" block col-span-1 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                  autoApply :format="format"
                  :min-date='new Date()'
                  placeholder="Return"
              />
            </div>

            <div class="flex flex-1 flex-col" >
              <button type="button"
                      class="block col-span-1 w-1/2 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 "
                      @click.prevent="getSearchResults()"> Search </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
<!--  <div v-if="selectedFlight == null">-->
<!--    <ul v-show="flights.length" role="list">-->
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
                </select>
              </div>
            </Menu>
          </div>
        </div>
      </Disclosure>
<!--    </ul>-->
<!--  </div>-->

  <div class="bg-gray-200">
    <div class="mt-8">
      <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
        <div v-if="selectedFlight == null" >
          <ul role="list"  class="divide-y divide-gray-200">
            <li v-for="flight in flights" >
              <div class="flex flex-col overflow-hidden
          bg-white rounded-lg  mt-4 w-100 mx-2">
                <button type="button" @click="openDetails(flight)">
                  <div class=" mx-3 flow-root">
                    <p class="float-right text-xl leading-tight text-gray-600 font-bold">${{flight.price.amount}}</p>
                    <p class="font-bold float-left">{{getFormattedDate(flight.legs[0].departure)}} - {{getFormattedDate(flight.legs[0].arrival)}}</p>
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
      </div>
    </div>
    <div v-if="selectedFlight !== null" >
      {{selectedFlight.legs[0].carriers[0].name}}
      <div>
        <button type="button" class="mt-6 w-1/2 items-center py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 text-center" @click="closeDetails(flight)">Close Details</button>
      </div>
    </div>
  </div>
  <div class="text-sm flex w-full justify-center font-light " > Used this Airline?
    <a  class=" font-medium text-indigo-900 hover:text-indigo-500 underline text-primary-600 hover:underline" ><router-link to="/flightRating">Leave a review</router-link></a>
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
      MultipleStops: [],
      searchQuery: '',
      date: '',
      adult: 1,
      flights: [],
      lowestFlightPrice: 0,
      highestFlightPrice: 0,
      detailOpen: false,
      selectedFlight: null,
      tabs: [
        {name: 'One-way', href: '#', current: true},
        {name: 'Rountrip', href: '#', current: false},
      ],
      returnDate: '',
      coverImageUrl:
          'https://img.delicious.com.au/Cv626hxY/del/2020/05/we-could-be-bidding-guests-adieu-much-sooner-than-expected-according-to-the-proposed-new-timetable-to-restart-tourism-133254-2.jpg',
      orderBy: '',
    };
  },
  filters:{
    // converttime: function(dateit) {
    //   return moment(dateit).format('HH:mm')
    // }
  },
  methods: {
    getFormattedDate(date) {
      return moment(date).format("HH:mm")
    },
    setCurrentTab(tab) {
      for (var i = 0, iLen = this.tabs.length; i < iLen; i++) {
        if (this.tabs[i].name == tab.name) {
          this.tabs[i].current = true;}
        else {
          this.tabs[i].current = false;
        }
      }
    },
    closeDetails() {
      this.selectedFlight = null;
      this.MultipleStops = null;
      let datetest = moment(this.date).format('YYYY-MM-DD');
      console.log(datetest);
    },
    openDetails(flight) {
      console.log('selected');
      this.selectedFlight = flight;
      this.getMultipleStops();
    },
    getSearchResults() {
      let self = this;
      console.log('called');
      // console.log(this.date);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
          origin: this.leaving,
          destination: this.going,
          date: moment(this.Departure).format('YYYY-MM-DD'),
          filter: 'price',
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
      if(this.tabs[0].current !== true) {
        options.params.returnDate =  moment(this.returnDate).format('YYYY-MM-DD');
      }
      axios.request(options).then(function (response) {
        self.flights = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    },

    orderBySelected(event){
      this.orderBy = event.target.value;
      if(event.target.value === 'pricea') {
        console.log('sorting by price ascending')
        this.flights.sort((a, b) => (this.newNumber(a.price) > this.newNumber(b.price)) ? 1 : -1)
      }
      if(event.target.value === 'priced') {
        console.log('sorting by price descending')
        this.flights.sort((a, b) => (this.newNumber(a.price) < this.newNumber(b.price)) ? 1 : -1)
      }
    },

    newNumber(value) {
      if(value) {
        value = value.replace("$", "");
        return toString(value);
      }
      console.log('something went seriously wrong here');
      return 0;
    } ,

    getMultipleStops() {
      let legsData =[ {"origin":this.leaving,"destination":this.going,"date": moment(this.Departure).format('YYYY-MM-DD')}];
      // if (this.tabs[0].current !== true){
      //   legsData.push(
      //       {"origin":this.going,"destination":this.leaving,"date": moment(this.returnDate).format('YYYY-MM-DD')}
      //   );
      // }
      let self = this;
      console.log('called');
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlightsMultiStops',
        params: {
          legs: legsData,
          waitTime: '5000',
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
        self.MultipleStops = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>
<style scoped>
.button.option {
  border: none;
  border-radius: 2px;
}
</style>