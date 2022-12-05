<template>

  <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
    <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900 block mb-12">Find a Car Rental</h2>
    <form action="#" class="text-center">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

        <div class="flex flex-1 flex-col">
          <label for="city" class="text-sm font-medium text-gray-700">Enter your location</label>

          <vue3-simple-typeahead
            id="typeahead_id"

            :items="[{name: 'New York, United States','code': 'New York'},{name: 'Nevada, United States','code': 'Nevada'},
                {name: 'Detroit, United States','code': 'Detroit'},{name: 'Las Vegas,Nevada, United States','code': 'Las Vegas'},
              {name: 'Los Angeles, California, United States','code': 'Los Angeles'},{name: 'Istanbul, Turkey','code': 'Istanbul'},
              {name: 'Arizona,United States','code': 'Arizona'},{name: 'Akron,Ohio,United States','code': 'Akron'},
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
            placeholder="Pickup Location"

          >
          </vue3-simple-typeahead>

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
                       :min-date='pickupDate'
                       id = "returnDate">

          </Datepicker>
        </div>

        <div class="flex flex-1 flex-col">

          <label for="returnTime" class="text-sm font-medium text-gray-700">Enter your return time</label>

          <input
            v-model = "returnTime"
            @input="getreturnTime"
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
        <li v-for=" (car,images) in cars " class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl h-50 mt-4 w-100 mx-2">

          <div class="p-3 rounded-md shadow-lg md:w-3/4"> <img v-bind:src="images.carimg">

            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car.svg"
                 height='30'
                 class=" inset-0 w-90 h-80 w-full object-cover object-center" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
              <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"/></svg>

          </div>

          <div class="w-full py-4 px-5 text-gray-800 flex flex-col justify-between">

            <div class=" capitalize text-lg font-semibold text-gray-600">{{car.car_name }} or Similar {{car.cls}} </div>

            <div class="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image2vector.svg"
                   class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <div class="text-left text-md text-gray-600 font-semibold"> {{location}}</div></div>

            <div class="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="luggage.svg"
                   class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"/></svg>
              <div class="text-left text-lg le.ading-tight text-gray-600 font-semibold"> Bags: {{ car.max_bags }} </div> </div>
            <div class="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car.svg"
                   class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 384 512">
                <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365cardf.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"/></svg>
              <div class="text-left text-lg text-gray-600 font-semibold"> Seats: {{ car.max_seats }}</div></div>


            <div class="text-right text-xl leading-tight text-gray-600 font-semibold"> Total Price of Rental: ${{ (car.min_price)}}</div>
            <a  :href="car.dplnk" target="_blank">
              <button type="button"
                      class="block w-1/5 py-2 p-4 rounded-md border border-transparent bg-indigo-900  text-sm  font-medium text-white shadow-sm hover:bg-indigo-700" @click.prevent=" purchaseRental(car)"> Details  </button></a>
          </div>
        </li>
      </ul>
    </div>
  </div>


  <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">

    <div v-if="carSelection !== null">

      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(car, k, index ) in dataSelection" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl h-50 mt-4 w-100 mx-2">

          <div class="p-3 rounded-md shadow-lg md:w-3/4">
           <div v-if="car.cls === Compact" >
            <img src= "https://s1.pclncdn.com/rc-static/vehicles/domestic_134x72_p/SCAR.png" height='30'
                 class=" inset-0 w-90 h-80 w-full object-cover object-center"/>
          </div>
          </div>
          <div class="w-full py-4 px-5 text-gray-800 flex flex-col justify-between">

            <div class=" capitalize text-lg font-semibold text-gray-600">{{car.car_name }} or Similar </div>

            <div class="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image2vector.svg"
                   class="h-3 w-3 text-blue-500 fill-current mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              <div class="text-left text-md text-gray-600 font-semibold"> {{car.pu}}</div></div>

            <div class="text-left text-md text-gray-600 font-semibold"> {{car.entity_name }}</div>
            <div class="capitalize text-left text-md text-gray-600 font-semibold"> Car Transmission: {{carSelection.trans}}</div>
            <div class="text-left text-lg le.ading-tight text-gray-600 font-semibold"> Bags: {{ car.bags }}</div>
            <div class="capitalize text-left text-md text-gray-600 font-semibold"> Pickup Method: {{car.pickup_type}}</div>
            <div class="text-left text-lg text-gray-600 font-semibold"> Rental Agency: {{ car.vndr }}</div>



            <div class="text-right text-xl leading-tight text-gray-600 font-semibold"> Total cost of Vehicle: ${{ (car.price).toFixed(2) }}</div>

            <div class="ml-4 mt-2 flex-shrink-0">
              <a :href="'http://www.skyscanner.net' + car.dplnk" target="_blank">
                <button
                  class="relative inline-flex items-center rounded-md border border-gray-300 bg-indigo-900 px-2 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:z-10 focus:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Book Now
                  <ChevronDoubleRightIcon class=" h-5 w-5" aria-hidden="true"/>
                </button>
              </a>
            </div>


          </div>
        </li>
      </ul>
    </div>

  </div>




  <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">

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
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
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
      pickUpEntityId: '',
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
    projection(value) {
      return value.name
    },

    locationSelected(value){
      this.location = value.code;
    },

    purchaseRental(car){
      console.log('selected');
      this.carSelection = car;
    },

    closeDetails(){
      this.carSelection =  null;
      let datatest = moment(this.pickupDate).format('YYYY-MM-DD');
      console.log(datatest);
      let dataset2 = moment(this.pickupTime).format('HH:mm');
      console.log(dataset2);
    },
    getSearch() {
      let self =this;
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchLocation',
        params: {query: this.location},
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log('damn');
        console.log(response.data.data[0]);
        let pickUpEntityId = response.data.data[0].entity_id;
        console.log(response.data);
        self.getCars(pickUpEntityId);


      }).catch(function (error) {
        console.error(error);
      });
    },
    getCars(pickUpEntityId) {
      let self = this;
      console.log('damn2');
      console.log(this.pickupDate);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchCars',
        params: {
          pickUpEntityId: pickUpEntityId,
          pickUpDate: moment(this.pickupDate).format('YYYY-MM-DD'),
          pickUpTime: moment(this.pickupTime).format('HH:mm'),
          dropOffDate: moment(this.returnDate).format('YYYY-MM-DD'),
          dropOffTime: moment(this.returnTime).format('HH:mm'),
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.data);
        self.cars = response.data.data.groups;
        self.dataSelection = response.data.data.quotes;


      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>