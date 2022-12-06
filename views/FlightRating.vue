<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
        <!--heading and button action-->
        <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900">Leave a rating for your flight experience </h2>
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
          <!--allows for the user to input airline, refreshes on submission-->
          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >What airline did you use?</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.airline">
                {{survey.airline}}
              </li>
              <input v-model="newAirline" id="airline" name="airline" type="text" autocomplete="airline" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--allows for the user to input stars, refreshes on submission-->
          <div>
            <label for="stars" class=" block text-sm font-medium text-gray-700" >Enter the Number of Stars 1-5 you would rate your flight</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.stars">
                {{survey.stars}}
              </li>
              <input v-model="newStarAmount" id="stars" name="stars" type="text" autocomplete="stars" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--allows for the user to input a comment, refreshes on submission-->
          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter a Comment about the flight</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.comments">
                {{survey.comments}}
              </li>
              <input  v-model="newComment" id="comments" name="comments" type="comments" autocomplete="comments" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <!--Popup for user to say thanks for submission-->
          <div>
            <button @click="say('Thanks for the submission')" type="submit" value="submit" class=" flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Submit Rating</button>
          </div>
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
import { collection, addDoc } from "firebase/firestore"
// a list of all const, primarily strings with an array
const surveys =ref([]);
const newCountry = ref('')
const newAirline = ref('');
const newUserName = ref('');
const newStarAmount = ref('');
const newComment = ref('');
const errMsg = ref();
//Accesses collection recommendation, adds a new document to collection with fields below
const addSurvey = () => {
  addDoc(collection( database,"flightRatings"),
      { airline: newAirline.value,
        stars: newStarAmount.value,
        comments: newComment.value,
        country: newCountry.value,
        userName: newUserName.value,
      })
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
  // refreshes on page submit
  newCountry.value = ''
  newAirline.value = ''
  newStarAmount.value = ''
  newComment.value = ''
  newUserName.value=''
}
</script>
<!--script for popup-->
<script>
export default {
  methods: {
    say(message) {
      alert(message)
    }
  }
}
</script>