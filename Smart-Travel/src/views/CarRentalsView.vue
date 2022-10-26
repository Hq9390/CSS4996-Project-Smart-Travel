<template>

  <div class=" mt-6 mx-auto max-w-6xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8 ">

    <form action="#" class="align-items-center bg-light mb-3 ">
      <div class="mt-6">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6">

      <div class="flex flex-1 flex-col ">
          <input v-model = "location"
                 @input="getLocationResult"
                 class = "col-span-1 block rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                 type ="text"
                 placeholder="Pickup Location"
                 name="location"
                 id="location"
          />
      </div>


          <div class="flex flex-1 flex-col ">
          <Datepicker  v-model="pickupDate"
                       placeholder="Pickup Date"
                       autoApply :format="format"
                       :min-date='new Date()'
                       class=" col-span-1 block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400">

          </Datepicker>
          </div>

          <div class="flex flex-1 flex-col ">
          <input v-model = "pickupTime"
                 @input="getpickupTime"
                 class = " col-span-1 block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                 type = 'time'
                 placeholder="Pickup Time"
                 name="pickupTime"
                 id="pickupTime"
          />
            <label for="pickupTime" class=" text-center lock text-sm font-medium text-gray-700">Pickup Time</label>
        </div>

          <div class="flex flex-1 flex-col ">
            <Datepicker  v-model= "returnDate"
                         placeholder="Return Date"
                         class = " col-span-1 block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                         autoApply :format ="format"
                         :min-date='new Date()'>
            </Datepicker>
          </div>

            <div class="flex flex-1 flex-col ">
              <input
                  v-model = "returnTime"
                  @input="getreturnTime"
                  class = "col-span-1 block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                  type = 'time'
                  placeholder="Return Time"
                  name="returnTime"
                  id="returnTime"
              />
              <label for="returnTime" class=" text-center lock text-sm font-medium text-gray-700">Return Time</label>
            </div>

          <div class="col-span-1">
        <button @click.prevent="getSearch()" value="submit"

                class= "block items-center py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 text-center"> Search
        </button>
      </div>
        </div>
      </div>
    </form>
    </div>


  <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">

  <div v-if="carSelection == null">

    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="(car, k, index ) in cars" class="flex flex-col md:flex-row overflow-hidden
          bg-white rounded-lg shadow-xl h-50 mt-4 w-100 mx-2">

<div class="p-3 rounded-md shadow-lg md:w-3/4">
<img src="car.img"  height='30'
     class=" inset-0 w-90 h-80 w-full object-cover object-center"/>
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
            <div class="text-left text-md text-gray-600 font-semibold"> {{ location}}</div></div>

          <div class="text-left text-md text-gray-600 font-semibold"> {{ car.entity_name }}</div>
          <div class="text-left text-lg le.ading-tight text-gray-600 font-semibold"> Bags: {{ car.bags }}</div>
          <div class="text-left text-lg text-gray-600 font-semibold"> Rental Agency: {{ car.vndr }}</div>



          <div class="text-right text-xl leading-tight text-gray-600 font-semibold"> Price of Vehicle: ${{ car.price }}</div>


        <button type="button"
                class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="openDetails(car)"> View Car Details  </button>
        </div>
      </li>
    </ul>
  </div>
  </div>

  <div v-if="carSelection !== null">>

    <button type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="closeDetails"> close details
    </button>

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
    getCars(pickUpEntityId){
      let self = this;
      console.log('called');
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
          price:'num'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.data);
        self.cars = response.data.data.groups;
        self.cars = response.data.data.quotes;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>