<template>
    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
            <div class="mt-10 space-y-8 ">
              <h2 class="text-2xl font-bold flex w-full justify-center  text-indigo-900">Edit Profile</h2>
                <form action="#" @submit.prevent="submit" class="space-y-10 ">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Enter new email address</label>
                        <div class="mt-1">
                            <input v-model="email" name="email" id="email" type="email" autocomplete="email" required="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        </div>

                        <p v-if="errMsg"> {{errMsg}} </p>

                        <div>
                           <button @click="changeEmail" type="submit" value="changeEmail" class="flex w-full justify-center py-2 w-full p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Change email</button>
                        </div>

                        <div class="space-y-1">
                                <label for="name" class="block text-sm font-medium text-gray-700">Enter new name</label>
                                <div class="mt-1">
                                <input v-model="name" name="name" id="name" type="name" autocomplete="name" required="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            </div>

                            <p v-if="errMsg"> {{errMsg}} </p>

                            <div>
                              <button @click="changeName" type="submit" value="changeName" class="flex w-full justify-center py-2 w-full p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Change Name</button>
                            </div>

                            <div class="space-y-1">
                              <label for="password" class="block text-sm font-medium text-gray-700"> Enter new password</label>
                              <div class="mt-1">
                                <input v-model="password" name="password" id="password" type="password" autocomplete="current-password" required=""  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />"
                              </div>
                            </div>

                       <div class="flex items-center justify-between">


                    <a  class=" font-medium text-indigo-900 hover:text-indigo-500 underline text-primary-600 hover:underline" ><router-link to="/edit-profile">Change profile</router-link></a>
                        </div>

                        <p v-if="errMsg"> {{errMsg}} </p>

                    <div>
                        <button @click="changePasswoed" type="submit" value="changePassword" class="flex w-full justify-center py-2 w-full p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Change Password</button>
                    </div>
                </form>
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

<script> 

import { getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { ref } from 'vue';
import router from "@/router";
  
const auth = getAuth();
const newEmail = ref("");
const newName = ref("");
const newPassword = ref("");
const errMsg = ref()
const editprofile = () => {

editUserWithEmailAndPassword(getAuth(), email.value, password.value)
.then((userCredential) => {

  const user = userCredential.user;
   if (user) {
     updateProfile(auth.currentUser, {
       displayName: name.value,
       photoURL: ''
     })
   }
    console.log('Successfully Registered')
    router.push("/");

  })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            errMsg.value = "email already in use";
            console.log('email already in-use')
            break;
          case "auth/invalid-email":
            errMsg.value = "invalid email";
            console.log('invalid email')
            break;
          case "auth/weak-password":
            errMsg.value = "weak password";
            console.log('weak password')
            break;
            case "auth/password-already-in-use":
            errMsg.value = "password already in use";
            console.log('password already in use')
            break;

        } 
      });
};

  
</script>