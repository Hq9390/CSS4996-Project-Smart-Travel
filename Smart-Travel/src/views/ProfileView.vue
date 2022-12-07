<template>
  <div class="flex  flex-1 flex-col overflow-hidden">

    <div class="relative z-0 flex flex-1 overflow-hidden">
      <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none ">
        <article>
          <div>
            <div>
              <img class="h-32 w-full object-cover lg:h-48" :src="profile.coverImageUrl" alt=""/>
            </div>
            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <span class="inline-block h-28 w-28 overflow-hidden rounded-full bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </span>
                <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                    <ul role="list">
                      <li>
                        <h1 class="truncate text-2xl font-bold text-gray-900">{{ users.displayName }}</h1>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 class="truncate text-2xl font-bold text-gray-900">{{ users.displayName }}</h1>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="mt-6 sm:mt-2 2xl:mt-5">
            <div class="border-b border-gray-200">
              <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <nav class="-mb-px cursor-pointer flex space-x-8" aria-label="Tabs">
                  <a v-for="tab in tabs" :key="tab.name"
                     :class="[tab.current ? 'border-indigo-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                     :aria-current="tab.current ? 'page' : undefined"
                     @click.prevent="setCurrentTab(tab)">{{ tab.name }}</a>
                </nav>
              </div>
            </div>


            <!-- Description list -->


            <div class="mx-auto mt-6  max-w-5xl px-4 sm:px-6 lg:px-8 " v-if="tabs[0].current === true">
              <div class="flex w-full justify-end  ">

                <button
                    @click="isOpen = true"

                    class=" px-6 py-2 text-white bg-indigo-900 rounded shadow"
                    type="button"
                >
                  <div class="flow-root">

                    <PencilIcon class=" float-right h-6 w-4" aria-hidden="true"/>
                    <p class="px-1 float-right">Edit Profile</p>
                  </div>
                </button>
              </div>
              <div
                  v-show="isOpen"
                  class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
              >

                <div class="flex items-center justify-between">

                  <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
                      <div>
                        <h3 class="text-lg font-medium leading-6 text-indigo-900">Edit Profile</h3>
                      </div>
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6 lg:col-span-6">
                          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                          <input v-model="users.location" type="text" name="location" id="location"
                                 autocomplete="address-level2"
                                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                        </div>
                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                          <input v-model="users.phone" type="tel" id="phone" name="phone" autocomplete="phone"
                                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                        </div>
                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                          <label for="birthday" class="block text-sm font-medium text-gray-700">Birthday</label>
                          <input v-model="users.birthday" type="date" id="birthday" name="birthday" autocomplete="date"
                                 class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                        </div>
                      </div>
                    </div>
                    <div @click="isOpen = false" class="bg-gray-50 px-4 py-3 flow-root sm:px-6">

                      <button @click="saveUser()"
                              class=" float-right inline-flex justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Save
                      </button>
                      <button
                          class=" float-left inline-flex justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Cancel
                      </button>

                    </div>

                  </div>
                </div>
              </div>

              <div class="mt-4">
              </div>
<!--              Displaying the user information-->
              <div class=" rounded  shadow p-8">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Phone</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ users.phone }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Email</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ users.email }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Location</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ users.location }}</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Birthday</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ users.birthday }}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div class="mt-8">
            </div>
          </div>
          <div v-if="tabs[1].current === true">
            <div class=" mt-6 container w-90 lg:w-4/5 mx-auto flex flex-col">
              <ul role="list" class=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <li v-for="favorite in favorites"
                    class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                  <div class="  flex flex-1 flex-col p-8 ">
                    <img :src="favorite.images[0]" alt="" class="mx-auto h-190 w-200 flex-shrink-0 ">
                    <p class="mt-6 text-xl  text-gray-900 font-bold">{{ favorite.city_name }}</p>
                    <!--                {{favorite.descriptionLink}}-->

                    <a :href=" favorite.descriptionLink" target="_blank">

                      <button
                          class="  font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1"
                      >
                        <p class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true"/> Click here for the city travel
                        guide
                      </button>
                    </a>


                  </div>
                  <div>
                    <button @click="unsave(favorite.city_name)">Delete</button>
                  </div>
                  <!--              {{favorite.description}}-->
                </li>
              </ul>

              <div class="mt-8"></div>
            </div>

          </div>
        </article>
      </main>
    </div>
  </div>

</template>

<script setup>

//Imports
import {ref, onMounted, watch} from 'vue';
import {database} from "@/main";

import {getAuth} from "firebase/auth";
import {PencilIcon} from '@heroicons/vue/24/outline'
const open = ref(true)
const auth = getAuth();

const profile = {
  coverImageUrl:
      'https://img.delicious.com.au/Cv626hxY/del/2020/05/we-could-be-bidding-guests-adieu-much-sooner-than-expected-according-to-the-proposed-new-timetable-to-restart-tourism-133254-2.jpg',
}
</script>
<script>
import {getAuth} from "firebase/auth";
import {database} from "@/main";
import {mapState} from "pinia";
import firebase from "firebase/compat";


export default {

  data() {
    return {
      isOpen: false,
      description: '',
      tabs: [
        {name: 'Profile', href: '#', current: true},
        {name: 'Saved Cities', href: '#', current: false},
      ],
      favorites: [],
      users: {},

    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },

  },

  methods: {
    //Unsaving a city from the user document in the favorites collecion
    async unsave(city) {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.email);
      database.collection("favorites").doc(user.email).update({
        [city]: firebase.firestore.FieldValue.delete(),
      })
          .then(() => {
            console.log("Document successfully removed city!");
          });

      this.getFavorites();

    },
    //For current tab
    setCurrentTab(tab) {
      this.getUsers();
      this.getFavorites();
      for (let i = 0, iLen = this.tabs.length; i < iLen; i++) {

        if (this.tabs[i].name == tab.name) {
          this.tabs[i].current = true;
        } else {
          this.tabs[i].current = false;
        }
      }

    },
    onToggle() {
      //add logic to get description from firebase
      this.isOpen = !this.isOpen;
    },
    //fetch the data of the cities the user saved from the favorites collection
    getFavorites() {
      this.favorites = [];
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user.email)
      let favorites = database.collection('favorites').doc(user.email);
      favorites.get().then((doc) => {
        if (doc.exists) {
          for (const [key, value] of Object.entries(doc.data())) {
            this.favorites.push(value);
          }
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    },
    //Fetch users data from users collection
    async getUsers() {
      this.users = {};
      const auth = getAuth();
      const user = auth.currentUser;
      let users = database.collection('users').doc(user.email);
      users.get().then((doc) => {
        if (doc.exists) {
          this.users = doc.data();
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    },
    //Save the edited users' information to the users collection
    async saveUser() {
      console.log(this.users);
      database.collection("users").doc(this.users.email).set({
        location: this.users.location,
        phone: this.users.phone,
        birthday: this.users.birthday
      }, {merge: true})
          .then(() => {
            console.log("Document successfully written!");
          })
    }
  }
}

</script>
