<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
        <!--heading and button action-->
        <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900">Leave a rating for the city</h2>
        <form action="#"  @submit.prevent="addSurvey"  class="space-y-8">
          <!--        input fields-->
          <!--          Allows the user to add some identity-->
          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >Enter a name or nickname</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.userName">
                {{survey.userName}}
              </li>
              <input v-model="newUserName" id="userName" name="userName" type="text" autocomplete="userName" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--allows for the user to input country, refreshes on submission-->
          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >What country are you from?</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.country">
                {{survey.country}}
              </li>
              <input v-model="newCountry" id="country" name="country" type="text" autocomplete="country" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--allows for the user to input city name, refreshes on submission-->
          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >What city did you visit?</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.city">
                {{survey.city}}
              </li>
              <input v-model="newCity" id="cities" name="cities" type="text" autocomplete="cities" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--allows for the user to enter the stars, refreshes on submission-->
          <div>
            <label for="stars" class=" block text-sm font-medium text-gray-700" >Enter the Number of Stars 1-5 you would rate your trip</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.stars">
                {{survey.stars}}
              </li>
              <input v-model="newStarAmount" id="stars" name="stars" type="text" autocomplete="stars" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--allows for the user to input a comment, refreshes on submission-->
          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter a Comment about the trip</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.comments">
                {{survey.comments}}
              </li>
              <input  v-model="newComment" id="comments" name="comments" type="comments" autocomplete="comments" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div    >
            <button @click="open = true" id="submit" type="submit" value="submit" class=" flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Submit Rating</button>
          </div>
          <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10" >
              <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </TransitionChild>
              <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                      <div>
                        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                          <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        <div class="mt-3 text-center sm:mt-5">
                          <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Thank you for your review</DialogTitle>
                        </div>
                      </div>
                      <div class="mt-5 sm:mt-6">
                        <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm" @click="open = false">close</button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
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
// All imports
import {ref} from "vue";
import { database } from "@/main";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import {collection, addDoc} from "firebase/firestore"
// a list of all const, primarily strings with an array
const surveys =ref([]);
const newUserName = ref('');
const newCountry = ref('');
const newCity = ref('');
const newStarAmount = ref('');
const newComment = ref('');
const errMsg = ref();

// refreshes on page submit

const open = ref(false)
const addSurvey = () => {
  addDoc(collection( database,"Ratings"),
      { city: newCity.value,
        stars: newStarAmount.value,
        comments: newComment.value,
        country: newCountry.value,
        userName: newUserName.value,

      })
      //error handling
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "firestore/No entry in field":
            errMsg.value = "Please enter something into the field";
            console.log('No entry in field')
            break;
          case "firestore/Not a number":
            errMsg.value = "Please enter a number";
            console.log('Not a number')
            break;
        }
      });

  // refreshes the page
  newCountry.value = ''
  newCity.value = ''
  newStarAmount.value = ''
  newComment.value = ''
  newUserName.value=''
}
</script>
<!--script for popup-->
