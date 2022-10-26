<template>


    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

        <div class="sm:ml-6 sm:block">
      <div class="flex space-x-14">
          <button class="inline-flex hover:text-indigo-700"
                  @click="option = 'ONEWAY'">One way</button>
          <button class=" inline-flex hover:text-indigo-700"
                  @click="option = 'ROUNDTRIP'">Roundtrip</button>

        </div>
    </div>
      <div class="mt-6 border-t border-gray-200 pt-8">
      </div>

      <div v-if="option === 'ONEWAY'" >
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
      <div v-else-if="option === 'ROUNDTRIP'">
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


  <div class="bg-gray-200">
    <div class="mt-8">
      <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
  <div v-if="selectedFlight == null" >
    <ul role="list"  class="divide-y divide-gray-200">

      <li v-for="flight in flights" >


        <div class="flex flex-col overflow-hidden
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
  </div>
    </div>
  <div v-if="selectedFlight !== null" >
    {{selectedFlight.legs[0].carriers[0].name}}
    <div>
      <button type="button" class="mt-6 w-1/2 items-center py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 text-center" @click="closeDetails(flight)">Close Details</button>
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
      option:'ONEWAY',
      returnDate: '',
    };
  },
  filters:{
    // converttime: function(dateit) {
    //   return moment(dateit).format('HH:mm')
    // }
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
      if(this.option !== 'ONEWAY') {
        options.params.returnDate =  moment(this.returnDate).format('YYYY-MM-DD');
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
<style scoped>
.button.option {
  border: none;
  border-radius: 2px;
}



</style>
