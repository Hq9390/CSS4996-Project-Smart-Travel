<template>

  <div class=" mt-6 mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

    <form action="#" class="text-center flex">
      <div>
        <div class=" md:grid py-15 md:grid-cols-3 md:gap-3 md:space-y-0">
          <input v-model = "location"
                 @input="getLocationResult"
                 class = "block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                 type ="text"
                 placeholder="Pickup Location"
                 name="location"
                 id="location"
          />


          <Datepicker  v-model="pickupDate"
                       placeholder="Pickup Date"
                       autoApply :format="format"
                       :min-date='new Date()'
                       class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400">
          </Datepicker>

          <Datepicker  v-model= "returnDate"
                       placeholder="Return Date"
                       class = " block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                       autoApply :format ="format"
                       :min-date='new Date()'>
          </Datepicker>

          <input v-model = "pickupTime"
                 @input="getpickupTime"
                 class = "block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                 type = 'time'
                 placeholder="Pickup Time"
                 name="pickupTime"
                 id="pickupTime"
          />

          <input v-model = "returnTime"
                 @input="getreturnTime"
                 class = "block mb-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-400"
                 type = 'time'
                 placeholder="Return Time"
                 name="returnTime"
                 id="returnTime"
          />
        </div>
        <button @click.prevent="getSearch()" value="submit" class= "mt-6 w-1/2 items-center py-2  p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 text-center"> Search </button>
      </div>
    </form>
  </div>

  <div v-if="carSelection == null">
    <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <li v-for="car in cars" :key="car.carId" class="relative">
        <div class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img :src="car.heroImage" alt="" class=" object-cover group-hover:opacity-75" height="100"/>
          <span class="sr-only">View details for {{ car.name }}</span>
        </div>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ car.name }}</p>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ car.location }}</p>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ car.pickupTime }}</p>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ car.returnTime }}</p>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ car.price }}</p>
        <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click.prevent="openDetails(car)">Car Details </button>
      </li>
    </ul>
  </div>

  <div v-if="carSelection !== null">

    <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="closeDetails">close details</button>

    <div><b>Car Name: </b>{{carSelection.name}}</div>
    <div><b>Car Price: </b>{{carSelection.price}}</div>
    <div><b>Car Location:</b>{{carSelection.location}}</div>
    <div><b>Pickup Date: </b>{{pickupDate}}</div>
    <div><b>Return Date: </b>{{returnDate}}</div>
    <div><b>Pickup Time: </b>{{pickupTime}}</div>
    <div><b>Return Time: </b>{{returnTime}}</div>
    <div><img :src="carSelection.heroImage" alt="" class="pointer-events-none object-cover group-hover:opacity-75" width="200"/></div>
    <div><b>other images</b></div>
    <span v-for="image in carSelection.images"><img :src="image" alt="" class="pointer-events-none object-cover group-hover:opacity-75" width="300"/></span>


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
      hover:false,
      pickUpEntityId: '',
      // eslint-disable-next-line vue/no-dupe-keys
      returnTime: '',
      // eslint-disable-next-line vue/no-dupe-keys
      pickupTime:'',
      location:'',
      cars:[],
      carSelection:null,
      Search:[],
      searchQuery: '',
      detailOpen:false,
    };
  },
  methods:{
    closeDetails(){
      this.carSelection =  null;
      let datatest = moment(this.pickupDate).format('YYYY-MM-DD');
      console.log(datatest);
      let data1 = moment(this.pickupTime).format('HH:mm');
      console.log(data1);
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
      axios.request(options).then((response) => {
        let pickUpEntityId = response.data.data[0].pickUpEntityId;
        console.log(pickUpEntityId);
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
          dropOffEntityID: moment(this.returnDate).format('YYYY-MM-DD'),
          dropOffTime: moment(this.returnTime).format('YYYY-MM-DD'),
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };
      axios.request(options).then((response) =>  {
        console.log(response.data);
        self.data = response.data;

      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>

<!--<script>-->
<!--import { getAuth } from "firebase/auth";-->

<!--const auth = getAuth();-->
<!--const user = auth.currentUser;-->
<!--if (user !== null) {-->
<!--  // The user object has basic properties such as display name, email, etc.-->
<!--  const displayName = user.displayName;-->
<!--  const email = user.email;-->
<!--  const photoURL = user.photoURL;-->
<!--  const emailVerified = user.emailVerified;-->

<!--  // The user's ID, unique to the Firebase project. Do NOT use-->
<!--  // this value to authenticate with your backend server, if-->
<!--  // you have one. Use User.getToken() instead.-->
<!--  const uid = user.uid;-->
<!--}-->
<!--</script>-->
