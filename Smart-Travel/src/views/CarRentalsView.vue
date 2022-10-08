<template>
  <div class="bg-white">
    <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
         <span class="me-2">{{ adultNum }} Adults</span
         ><span class="me-2">-</span
      ><span class="me-2">{{ childrenNum }} Children</span
      ><span class="me-2">-</span>
        <span>{{ roomNum }} Room</span>
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="d-flex align-items-center w-100 mb-3">
          <span class="w-50">Adult</span>
          <div class="d-flex align-items-center w-50">
            <button
                @click="adultNum === 1 ? null : adultNum--"
                class="guest-btn"
            >
              -</button
            ><span class="count-span ms-3 me-3">{{ adultNum }}</span
          ><button
              @click="adultNum === 10 ? null : adultNum++"
              class="guest-btn"
          >
            +
          </button>
          </div>
        </div>
        <div class="d-flex align-items-center w-100 mb-3">
          <span class="w-50">Children</span>
          <div class="d-flex align-items-center w-50">
            <button
                @click="childrenNum === 0 ? null : childrenNum--"
                class="guest-btn"
            >
              -</button
            ><span class="count-span ms-3 me-3">{{ childrenNum }}</span
          ><button
              @click="childrenNum === 10 ? null : childrenNum++"
              class="guest-btn"
          >
            +
          </button>
          </div>
        </div>
        <div class="d-flex align-items-center w-100">
          <span class="w-50">Room</span>
          <div class="d-flex align-items-center w-50">
            <button
                @click="roomNum === 1 ? null : roomNum--"
                class="guest-btn"
            >
              -</button
            ><span class="count-span ms-3 me-3">{{ roomNum }}</span
          ><button
              @click="roomNum === 10 ? null : roomNum++"
              class="guest-btn"
          >
            +
          </button>
          </div>


        </div>
      </MenuItems>
    </transition>
  </Menu>
    </div>
  </div>

</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
export default {
  data() {
    return {
      
      adultNum: 1,
      childrenNum: 0,
      roomNum: 1,
    };
  },
}
</script>