<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-6 space-y-8 ">
        <h2 class="text-2xl font-bold flex w-full justify-center  text-indigo-900">Leave a Rating</h2>
        <form action="#"  @submit.prevent="submit"  class="space-y-8">
          <div>
            <label for="city" class=" block text-sm font-medium text-gray-700" >What city did you visit?</label>
            <div class="mt-1">
              <li v-for = "city of cities" :key="city.cities">
                {{city.ratings}}
              </li>
              <input v-model="stars" id="stars" name="stars" type="text" autocomplete="stars" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="stars" class=" block text-sm font-medium text-gray-700" >Enter the Number of Stars 1-5 you would rate your trip</label>
            <div class="mt-1">
              <li v-for = "star of stars" :key="star.stars">
                {{star.ratings}}
              </li>
              <input v-model="stars" id="stars" name="stars" type="text" autocomplete="stars" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="comment" class=" block text-sm font-medium text-gray-700">Enter a Comment about the trip</label>
            <div class="mt-1">
              <li v-for = "comment of comments" :key="comment.comments">
                {{comment.ratings}}
              </li>
              <input  v-model="comments" id="comments" name="comments" type="comments" autocomplete="comments" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div>
            <button @click="addRating()" type="submit" value="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Submit Rating</button>
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

<script>
import axios from "axios";
export default {
  data() {
    return {
      ratings: [],
    }
  },
async created(){
    try{
      const res = await axios.get('http://localhost:3000/ratings');
      this.rating = res.info;
    } catch(error) {
      console.log(error);
    }
},

  // head:{
  //   title: function(){
  //     return{
  //       inner: this.title
  //     }
  //   }
  // },

   methods:{
  async addStars() {
    const res = await axios.post('http://localhost:3000/ratings', {
      name: this.ratingStars,
    });
    this.ratings = [...this.rating, res.info];
    this.ratingStars = "";

   // async addComments()
   //  {
   //    const res = await axios.post('http://localhost:3000/ratings', {
   //      name: this.ratingComments,
   //    });
   //    this.ratings = [...this.rating, res.info];
   //    this.ratingComments = "";

//     talk() {
//       var user = this.rating;
//       document.getElementById('consoleLog').innerHTML += user + "<br>";
//       if (user != ''){
//         if(user in this.file){
//           document.getElementById('consoleLog').innerHTML += this.file[0][user] + "<br>" + "<br>";
//         }
//         else{
//           document.getElementById('consoleLog').innerHTML += 'unable to collect ratings <br>' + '<br>';
//         }
//       }
//       console.log(this.rating);
//       this.rating = '';
//       const consoleLogDiv = this.$ref.scroll;
//
//       consoleLogDiv.scrollTop = consoleLogDiv.scrollHeight

    },
   },
 };


</script>
