
<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div class="mt-10 space-y-10 ">
        <form action="#" method="POST" class="space-y-10 ">
          <div class="sm:col-span-2">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Leaving from</label>
            <div class="mt-1">
              <input type="text" name="city" id="city" autocomplete="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            </div>


          <div class="sm:col-span-2">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Going to</label>
            <div class="mt-1">
              <input type="text" name="city" id="city" autocomplete="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            </div>


           <div class="sm:col-span-">
		         <label for = "dates" class = "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> Dates </label>
		         <div class="mt-1">
		        <input type = "date" id = "dates" name= "dates" autocomplete="dates" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"  />
	          </div>
	        </div>
	   


          <div class="sm:col-span-2">
            <label for="person" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Travelers </label>
             <select id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option> -- </option>
                <option>1 adult 0 children</option>
                <option>1 adults 1 children</option>
				<option>1 adults 2 children</option>
				<option>1 adults 3 children</option>
				<option>2 adults 0 children</option>
				<option>2 adults 1 children</option>
				<option>2 adults 2 children</option>
				<option>2 adults 3 children</option>
				</select>
            </div>



          <div class="sm:col-span-2">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Cabin class</label>
            <div class="mt-1">
              <label for="seat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Cabin class</label>
               <select> id="seat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option> -- </option>
                <option>First class</option>
                <option>Business class</option>
                <option>Coach</option>
               </select>
              </div>
            </div>

      
        <div>
            <button @click="" type="submit" value="submit" class="flex w-full justify-center py-2 w-full p-2.5 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 ">Search</button>
          </div>
        </form>
        <br>

        <h3> TOP CITIES TO VISIT </h3>
      </div>

    </div>
  </div>
  <br>
  <footer class="mx-auto w-full  bg-white mt-auto" aria-labelledby="footer-heading">
    <div class="mx-auto  py-15 px-4 sm:px-6 lg:py-20 lg:px-8">

      <div class="mt-12 border-t border-gray-200 pt-8">
        <div class="flex w-full justify-center">
          <img
              src="../images/logo.png"
              class="  w-55 h-40" >
          
        </div>
        <p class="text-base text-gray-400 flex w-full justify-center">&copy; 2022 Smart Travel, Inc. All rights reserved.</p>
      </div>
    </div>

  </footer>
</template>








