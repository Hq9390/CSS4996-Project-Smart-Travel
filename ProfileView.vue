<template>

<div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
<div class="mx-auto w-full max-w-sm lg:w-96">
  <div class="mt-6 space-y-8 ">
   <div class="about-card">
    <div class="card-title">
      <img height="50px" src=" ./images/avatar.jpg" 
       class=" w-55 h-40">
    </div>
   </div>
    <h2 class="text-3xl font-bold flex w-full justify-center  text-indigo-900">About Me</h2>      
    <div >Name: {{user.displayName}} </div>
    <div >Email: {{user.email}} </div>
    <div> Describe Yourself: {{user.comment}}</div> 
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
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights reserved.</p>
      </div>
    </div>

  </footer>

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
    console.log("  Describe-Yourself: " + profile.comment);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

</script>
