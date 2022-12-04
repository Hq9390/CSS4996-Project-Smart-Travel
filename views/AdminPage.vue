<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
        <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900">Enter new city information</h2>
        <form action="#"  @submit.prevent="addSurvey"  class="space-y-8">
          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >Enter the Airport code (ex. DTW)</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.airport_code">
                {{survey.airport_code}}
              </li>
              <input v-model="newAirport" id="airport_code" name="airport_code" type="text" autocomplete="airport_code" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >Enter the city name</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.city_name">
                {{survey.city_name}}
              </li>
              <input v-model="newCityName" id="city_name" name="city_name" type="text" autocomplete="city_name" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="stars" class=" block text-sm font-medium text-gray-700" >Enter a description</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.description">
                {{survey.description}}
              </li>
              <input v-model="newDescription" id="description" name="description" type="text" autocomplete="description" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the description link</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.descriptionLink">
                {{survey.descriptionLink}}
              </li>
              <input  v-model="newDescriptionLink" id="descriptionLink" name="descriptionLink" type="descriptionLink" autocomplete="descriptionLink" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the image link</label>
            <div class="mt-1">
<!--              <li v-for = "survey in surveys" :key="survey.images">-->
<!--                {{survey.images}}-->
<!--              </li>-->
              <input  v-model="photo1" id="images" name="images" type="text" autocomplete="images" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the second image link</label>
            <div class="mt-1">
<!--              <li v-for = "survey in surveys" :key="survey.images">-->
<!--                {{survey.images}}-->
<!--              </li>-->
              <input  v-model="photo2" id="images" name="images" type="text" autocomplete="images" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the third image link</label>
            <div class="mt-1">
<!--              <li v-for = "survey in surveys" :key="survey.images">-->
<!--                {{survey.images}}-->
<!--              </li>-->
              <input  v-model="photo3" id="images" name="images" type="text" autocomplete="images" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

<!--          <div class="space-y-1">-->
<!--            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the description link</label>-->
<!--            <div class="mt-1">-->
<!--              <li v-for = "survey in surveys" :key="survey.save">-->
<!--                {{survey.save}}-->
<!--              </li>-->
<!--              <input  v-model="newSave" id="save" name="save" type="text" autocomplete="save" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />-->
<!--            </div>-->
<!--          </div>-->

          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the location type (ex. B, H, D)</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.type">
                {{survey.type}}
              </li>
              <input  v-model="type1" id="save" name="save" type="text" autocomplete="save" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter the location type (ex. B, H, D)</label>
            <div class="mt-1">
              <li v-for = "survey in surveys" :key="survey.type">
                {{survey.type}}
              </li>
              <input  v-model="type2" id="save" name="save" type="text" autocomplete="save" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <button @click="submit" type="submit" value="submit" class=" flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Submit New City</button>
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

import {ref} from "vue";
import { database } from "@/main";
import { collection, addDoc } from "firebase/firestore"

const surveys =ref([]);
const newDescriptionLink = ref('')
const newAirport = ref('');
const newCityName = ref('');
const newDescription = ref('');
// const newSave = ref ('');
// const newImage = ref ([this.photo1]);
const photo1 = ref ('');
const photo2 = ref('');
const photo3 = ref('');
const type1 = ref('');
const type2 = ref('');
// const newType = ref([]);
const errMsg = ref();

const addSurvey = () => {

  addDoc(collection( database,"recommendation"),
      { airport_code: newAirport.value,
        city_name: newCityName.value,
        description: newDescription.value,
        descriptionLink: newDescriptionLink.value,
        images: [photo1.value, photo2.value, photo3.value],
        // save: newSave.value,
        type: [type1.value, type2.value],
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
  newDescriptionLink.value = ''
  newAirport.value = ''
  newDescription.value = ''
  newCityName.value = ''
  photo1.value = ''
  photo2.value=''
  photo3.value = ''
}

</script>