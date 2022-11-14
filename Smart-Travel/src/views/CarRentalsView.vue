<template>

  <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">

    <form action="#" class="text-center">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

        <div class="flex flex-1 flex-col">
          <label for="city" class="text-sm font-medium text-gray-700">Enter your location</label>
          <input v-model = "location"
                 @input="getLocationResult"
                 class = "col-span-1 block rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                 type ="text"
                 placeholder="Pickup Location"
                 name="location"
                 id="location"
          />
        </div>

        <div class="flex flex-1 flex-col">
          <label for="pickupDate" class="text-sm font-medium text-gray-700">Enter your pickup date</label>
          <Datepicker  v-model="pickupDate"
                       placeholder="Pickup Date"
                       autoApply :format="format"
                       :min-date='new Date()'
                       class=" col-span-1 block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                       id="pickupDate"

          >

          </Datepicker>
        </div>



        <div class="flex flex-1 flex-col">

          <label for="pickupTime" class="text-sm font-medium text-gray-700">Enter your pickup time</label>

          <input
              v-model = "pickupTime"
              @input="getpickupTime"
              class = " col-span-1 block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
              type = 'time'
              name="pickupTime"
              id="pickupTime"
          />
        </div>

        <div class="flex flex-1 flex-col">
          <label for="date" class="text-sm font-medium text-gray-700">Enter your returning date</label>
          <Datepicker  v-model= "returnDate"
                       placeholder="Return Date"
                       class = " col-span-1 block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                       autoApply :format ="format"
                       :min-date='new Date()'
                       id = "returnDate">

          </Datepicker>
        </div>

        <div class="flex flex-1 flex-col">

          <label for="returnTime" class="text-sm font-medium text-gray-700">Enter your return time</label>

          <input
              v-model = "pickupTime"
              @input="getpickupTime"
              class = " col-span-1 block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
              type = 'time'
              name="returnTime"
              id="returnTime"
          />
        </div>

      </div>



      <div class="mt-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div class="flex flex-1 flex-col items-center">


            <button @click.prevent="getSearch()"
                    class=" block w-1/5 py-2 p-4 rounded-md border border-transparent bg-indigo-900  text-sm  font-medium text-white shadow-sm hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </div>

    </form>
  </div>

  <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">

    <div v-if="carSelection == null">

      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="( car,k,index ) in cars" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl h-50 mt-4 w-100 mx-2">

          <div class="p-3 rounded-md shadow-lg md:w-3/4">
            <img src="imageLink"  height='30'
                 class=" inset-0 w-90 h-80 w-full object-cover object-center"/>
          </div>
          <div class="w-full py-4 px-5 text-gray-800 flex flex-col justify-between">

            <div class=" capitalize text-lg font-semibold text-gray-600">{{localizedName}} or Similar </div>

            <div class="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image2vector.svg"
                   class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <div class="text-left text-md text-gray-600 font-semibold"> {{  }}</div></div>
            <div class="text-left text-lg le.ading-tight text-gray-600 font-semibold"> Bags: {{  }}</div>
            <div class="text-left text-lg text-gray-600 font-semibold"> Rental Agency: {{  }}</div>



            <div class="text-right text-xl leading-tight text-gray-600 font-semibold"> Price of Vehicle: ${{ }}</div>


            <button type="button"
                    class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="openDetails(car)"> Purchase Rental  </button>
          </div>
        </li>
      </ul>
    </div>

  </div>

  <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">

    <div v-if="carSelection !== null">

      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="( car,k,index ) in cars" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl h-50 mt-4 w-100 mx-2">

          <div class="p-3 rounded-md shadow-lg md:w-3/4">
            <img src="imageLink"  height='30'
                 class=" inset-0 w-90 h-80 w-full object-cover object-center"/>
          </div>
          <div class="w-full py-4 px-5 text-gray-800 flex flex-col justify-between">

            <div class=" capitalize text-lg font-semibold text-gray-600">{{ car.lowestTotalPrice}} or Similar </div>

            <div class="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image2vector.svg"
                   class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <div class="text-left text-md text-gray-600 font-semibold"> {{}}</div></div>


            <div class="text-right text-xl leading-tight text-gray-600 font-semibold"> Price of Vehicle: ${{  }}</div>


            <button type="button"
                    class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    @click="closeDetails"> close details
            </button>

          </div>
        </li>
      </ul>
    </div>

  </div>

  <footer class="mx-auto w-full  bg-white mt-auto" aria-labelledby="footer-heading">
    <div class="mx-auto  py-15 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="mt-12 border-t border-gray-200 pt-8">
        <div class="flex w-full justify-center">
          <img
              src="../images/logo.png"
              class="  w-55 h-40"
              alt=""/>
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>

</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import { ref } from 'vue';
import  axios from "axios";
import moment from 'moment';
export default {
  components: {Datepicker},
  name: 'CarRentals',
  setup(){
    const pickupDate = ref();
    const returnDate = ref();
    const pickupTime = ref();
    const returnTime = ref();
    const format = ref ('yyyy-MM-dd');
    return {
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      format,
    };
  },
  data() {
    return{

      returnTime: '',
      pickupTime:'',
      location:'',
      cars:[],
      carSelection:null,
      Search:[],
      searchQuery: '',
      detailOpen:false,
    }
  },
  methods:{
    closeDetails(){
      this.carSelection =  null;
      let datatest = moment(this.pickupDate).format('YYYY-MM-DD');
      console.log(datatest);
      let dataset2 = moment(this.pickupTime).format('HH:mm');
      console.log(dataset2);
    },
    openDetails(car){
      console.log('selected');
      this.carSelection = car;
    },
    getSearch() {
      let self =this;
      const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/rentals/searchLocation',
        params: {query: this.location},
        headers: {
          'X-RapidAPI-Key': 'cc68175e3amsh222151b1246494ap126e49jsnb4e35549a93b',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log('damn');
        console.log(response.data.data);
        let pickUpPlaceId = response.data.data.placeId;
        let pickUpPlaceLocationType = response.data.data.placeId;
        console.log(response.data);
        self.getCars(pickUpPlaceId);
        self.getCars(pickUpPlaceLocationType);
      }).catch(function (error) {
        console.error(error);
      });
    },
    getCars(pickUpPlaceId,pickUpLocationType){
      let self = this;
      console.log('damn2');
      console.log(this.pickupDate);
      const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/cars/searchCarsSameDropOff',
        params: {
          pickUpPlaceId: '',
          pickUpLocationType: '',
          pickUpDate: moment(this.pickupDate).format('YYYY-MM-DD'),
          pickUpTime: moment(this.pickupTime).format('HH:mm'),
          dropOffDate: moment(this.returnDate).format('YYYY-MM-DD'),
          dropOffTime: moment(this.returnTime).format('HH:mm'),
          order: 'RECOMMENDED',
        },
        headers: {
          'X-RapidAPI-Key': 'cc68175e3amsh222151b1246494ap126e49jsnb4e35549a93b',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        self.cars = response.data;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>