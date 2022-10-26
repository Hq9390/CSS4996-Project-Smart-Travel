<template>

<div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
<div class="mx-auto w-full max-w-sm lg:w-96">
  <div class="mt-6 space-y-8 ">
    <h2 class="text-2xl font-bold flex w-full justify-center  text-indigo-900">Profile</h2>

          <div >Name: {{user.displayName}} </div>
    <div >Email: {{user.email}} </div>
          </div>

        </div>
      </div>

<!--  <div id="app">-->
<!--    <input v-model="searchQuery">-->
<!--    <div v-for="r of resultQuery" :key="r.id">{{r.title}}</div>-->
<!--  </div>-->

</template>

<script setup>
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {

    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

</script>
