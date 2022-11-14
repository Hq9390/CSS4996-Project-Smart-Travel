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
                    <h1 class="truncate text-2xl font-bold text-gray-900">{{ user.displayName }}</h1>
                  </div>

                </div>
              </div>
              <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 class="truncate text-2xl font-bold text-gray-900">{{ user.displayName }}</h1>
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
                     :aria-current="tab.current ? 'page' : undefined" @click.prevent="setCurrentTab(tab)">{{
                      tab.name
                    }}</a>
                </nav>
              </div>
            </div>
          </div>

          <!-- Description list -->
          <div class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8" v-if="tabs[0].current === true">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Email</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ user.email }}</dd>
              </div>
<!--              <div class="sm:col-span-2">-->
<!--                <dt class="text-sm font-medium text-gray-500">About</dt>-->
<!--              </div>-->
            </dl>
          </div>
          <div v-if="tabs[1].current === true">
            <div class=" mt-6 container w-90 lg:w-4/5 mx-auto flex flex-col">
              <ul role="list" class=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <li v-for="favorite in favorites"  class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="  flex flex-1 flex-col p-8 ">
              <img :src="favorite.images[0]" alt="" class="mx-auto h-190 w-200 flex-shrink-0 ">
              <p class="mt-6 text-xl  text-gray-900 font-bold">{{ favorite.city_name }}</p>
<!--                {{favorite.descriptionLink}}-->

                <a  :href=" favorite.descriptionLink" target="_blank">

                  <button
                     class="  font-medium text-indigo-900 hover:text-indigo-500 underline underline-offset-1"
                  >
                    <p class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true"/> Click here for more city info.
                  </button></a>
              </div>
<!--              {{favorite.description}}-->
            </li>
              </ul>
          </div>
          </div>
        </article>
      </main>
    </div>
  </div>

</template>

<script setup>


import {ref, onMounted} from 'vue';
import {database} from "@/main";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {
  PencilIcon,
} from '@heroicons/vue/20/solid'
import {onAuthStateChanged} from "firebase/auth";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const open = ref(true)
const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}


// const auth = getAuth();
// const user = auth.currentUser;
//
// if (user !== null) {
//   user.providerData.forEach((profile) => {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const displayName = user.displayName;
//     const email = user.email;
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const profile = {


  coverImageUrl:
      'https://img.delicious.com.au/Cv626hxY/del/2020/05/we-could-be-bidding-guests-adieu-much-sooner-than-expected-according-to-the-proposed-new-timetable-to-restart-tourism-133254-2.jpg',
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,

}
onMounted(async () =>{
  const cityRef = doc(database, 'favorites', 'user.email');

  await updateDoc(cityRef, {
    favorite: deleteField()
  });

})


</script>
<script>
import {getAuth} from "firebase/auth";
import {database} from "@/main";

export default {

  data() {
    return {
      isOpen: false,
      description:'',
      tabs: [
        {name: 'Profile', href: '#', current: true},
        {name: 'Saved Cities', href: '#', current: false},
      ],
      favorites: [],
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },

  },

  methods: {

    setCurrentTab(tab) {
      this.getFavorites();
      for (var i = 0, iLen = this.tabs.length; i < iLen; i++) {

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
            // console.log(`${key}: ${value}`);
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
    // async onclickSave(){
    //   console.log('clicked');
    //   const auth = getAuth();
    //   const user = auth.currentUser;
    //
    //   console.log(user.email);
    //   database.collection("currentUser").doc(user.email).set({
    //    Description: 'description',
    //   })
    //       .then(() => {
    //         console.log("Document successfully written!");
    //       })
    //   //alert box popup
    //   // alert("Added to Profile")
    // },
  },


}

</script>