<template>

  <div class=" mt-6 mx-auto max-w-6xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">

    <form action="#" class="text-center">

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6">
          <div class="flex flex-1 flex-col ">
            <input v-model="location"
                   class="col-span-1 block rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                   type="text"
                   placeholder="Pickup Location"
                   name="location"
                   id="location"
            />
          </div>
          <div class="flex flex-1 flex-col ">
            <Datepicker v-model="pickupDate"
                        placeholder="Pickup Date"
                        autoApply :format="format"
                        :min-date='new Date()'
                        class=" col-span-1 block  text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400">
            </Datepicker>
          </div>
          <div class="flex flex-1 flex-col">
            <Datepicker v-model="returnDate"
                        placeholder="Return Date"
                        class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                        autoApply :format="format"
                        :min-date='new Date()'>
            </Datepicker>
          </div>

          <div class="flex flex-1 flex-col">
            <input v-model="pickupTime"
                   @input="getpickupTime"
                   class="col-span-1  block  rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                   type='time'
                   placeholder="Pickup Time"
                   name="pickupTime"
                   id="pickupTime"
            />
          </div>

          <div class="flex flex-1 flex-col">
            <input v-model="returnTime"
                   @input="getreturnTime"
                   class="col-span-1 block rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                   type='time'
                   placeholder="Return Time"
                   name="returnTime"
                   id="returnTime"
            />
          </div>
          <div class="col-span-1">
            <button @click.prevent="getSearch()" value="submit"
                    class="block  items-center py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 text-center">
              Search
            </button>
          </div>
        </div>

    </form>
  </div>
  <div class="bg-gray-200">
    <div class="mt-8">
      <div class="container w-90 lg:w-4/5 mx-auto flex flex-col">
  <div v-if="carSelection == null">
    <div class="flex">
    <ul role="list" class="divide-y divide-gray-200" >
      <li v-for="(car, k, index) in cars" >
        <div class="w-full w-96 py-4 px-5 text-gray-800 flex flex-col justify-between bg-white mt-8 ">
          
       <div class=" text-bold font-medium text-gray-900" > Car Name: {{ car.car_name }}</div>
          <div class=" text-bold font-medium text-gray-900" > Car class: {{ car.cls }}</div>
          <div class=" text-bold font-medium text-gray-900" > Seats: {{ car.max_seats}}</div>



        <div>
        <button type="button"
                class="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click.prevent="openDetails(car)">Car Details
        </button>
        </div>
        </div>
      </li>

    </ul>
  </div>
  </div>
      </div>
  <div v-if="carSelection !== null">
    <div class="mx-3">Car Name: {{ carSelection.car_name }}
    </div>
<div class="mx-3">
    <button type="button"
            class=" mt-4 w-30 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="closeDetails">close details
    </button>

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
              alt=""/>
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights
          reserved.</p>
      </div>
    </div>
  </footer>

</template>
<script>
import Datepicker from "@vuepic/vue-datepicker";
import {ref} from 'vue';
import axios from "axios";
import moment from 'moment';

export default {
  components: {Datepicker},
  name: 'CarRentals',
  setup() {
    const pickupDate = ref();
    const returnDate = ref();
    const pickupTime = ref();
    const returnTime = ref();
    const format = ref('yyyy-MM-dd');
    return {
      pickupDate,
      returnDate,
      pickupTime,
      returnTime,
      format,
    };
  },
  data() {
    return {
      pickUpEntityId: '',
      returnTime: '',
      pickupTime: '',
      location: '',
      cars: [],
      carSelection: null,
      Search: [],
      searchQuery: '',
      detailOpen: false,
    }
  },
  methods: {
    closeDetails() {
      this.carSelection = null;
      let datatest = moment(this.pickupDate).format('YYYY-MM-DD');
      console.log(datatest);
      let dataset2 = moment(this.pickupTime).format('HH:mm');
      console.log(dataset2);
    },
    openDetails(car) {
      console.log('selected');
      this.carSelection = car;
    },
    getSearch() {
      let self = this;
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
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data.data);
        self.cars = response.data.data.groups;

      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>