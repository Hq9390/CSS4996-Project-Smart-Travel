<template>
  <!--Flights Page-->

  <div class="mx-auto max-w-5xl py-10 px-4 sm:py-20 sm:px-5 lg:px-8">
    <h2 class="text-2xl font-bold flex w-full justify-center text-indigo-900 block mb-12">Find a Flight</h2>

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

    <div class="mt-6 ">
    </div>
    <!--If the first tab is selected -->
    <div v-if="tabs[0].current === true">
      <form action="#" class="text-center ">
        <div class=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
          <div class="sm:col-span-1">
            <!--            Adults input-->
            <label for="travelers" class="block text-sm font-medium text-gray-700">Adults</label>
            <input v-model="adult"
                   type="number"
                   name="Adults"
                   placeholder="Travelers"
                   class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
            />

          </div>
          <div class="sm:col-span-6"></div>
        </div>

        <div class="mt-4 sm:mt-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            <div class="flex flex-1 flex-col col-span-2">
              <!--              Airport Code Autocomplete-->
              <vue3-simple-typeahead
                  id="typeahead_id"

                  :items="[{name: 'New York(JFK)', 'code': 'JFK'},{name: 'Florida(MCO)', 'code': 'MCO'},
   {name: 'Detroit(DTW)', 'code': 'DTW'},{name: 'Las Vegas(LAS)', 'code':'LAS'},
{name: 'Los Angeles(LAX)', 'code': 'LAX'},{name: 'Istanbul(IST)', 'code': 'IST'},{name: 'Phoenix Arizona(PHX)', 'code': 'PHX'},
{name: 'Atlanta', 'code': 'ATL'},{name: 'Florida', 'code': 'FLL'},
{name:'Cambridge Bay(YCB)', 'code': 'YCB'}, {name:'Windsor(YQG)', 'code': 'YQG'},
{name:'Barcelona(BCN)', 'code': 'BCN'}
,{name:'ROME(FCO)', 'code': 'FCO'}, {name:'Alexander City(ALX)', 'code': 'ALX'}, {name:'Anniston, Al (ANB)', 'code': 'ANB'},

{name:'Edmonton (YEG)', 'code': 'YEG'},  {name:'Dubai (YEG)', 'code': 'YEG'}, {name:'Aberdeen(ABR)', 'code': 'ABR'}
, {name:'Hana, HI(HNM)', 'code': 'HNM'}, {name:'Doha (DIA)', 'code': 'DIA'}, {name:'Akron(CAK)', 'code': 'CAK'},
{name:'Athens,TN(MMI)', 'code': 'MMI'}, {name:'Seattle (SEA)', 'code': 'SEA'},{name:'Doha (DIA)', 'code': 'DIA'},
{name:'Bakersfield(BFL)', 'code': 'BFL'} ,{name:'Baker,MT(BHK)', 'code': 'BHK'}, {name:'Houston(IAH)', 'code': 'IAH'},
{name:'San Diego(IAH)', 'code': 'IAH'} ,{name:' Hyderabad (NTR)', 'code': 'NTR'}, {name:' Athens,GR(ATH)', 'code': 'ATH'} ,
{name:' Minsk (MSQ)', 'code': 'MSQ'}, {name:'Bangkok(BKK)', 'code': 'BKK'}, {name:' Mink (NTR)', 'code': 'NTR'} ,{name:'Dehli(DEL)', 'code':'DEL'},
,{name:'Bamburi(BMQ)', 'code':'BMQ'},{name:'Amsterdam(AMS)', 'code': 'AMS'},{name:'Dallas (DFW)', 'code': 'DFW'},
{name:'Stockholm(ARN)', 'code': 'ARN'}, {name:'Oslo(OSL)', 'code': 'OSL'},
  {name:'Brisbane(BNE)','code':'BNE'}, {name:'Hanga Roa(IPC)', 'code':'IPC'}, {name:'Auckland(AKL)', 'code':'AKL'}, {name:'Boston(BOS)', 'code':'Bos'}, {name:'Buffalo(BUF', 'code':'BUF'}, {name:'Burbank(BUR)', 'code':'BUR'}, {name:'Charleston(CHS)','code':'CHS'},
   {name:'Charlotte(CLT)', 'code':'CLT'}, {name:'Cleveland(CLE)','code':'CLE'}, {name:'Clarksburg(CKB)','code':'CKB'},
   {name:'Cheyenne(CYS)','code':'CYS'}, {name:'Billings(BIL)','code':'BIL'},
   {name:'Biloxi/Gulfport(GPT)', 'code':'GPT'}, {name:'Birmingham(BHM)', 'code':'BHM'},
   {name:'Boise(BOI)', 'code':'BOI'}, {name:'Boulder(WBU)', 'code':'WBU'}, {name:'Casper(CPR)', 'code':'CPR'},
   {name:'Chicago(MDW)', 'code':'MDW'}, {name:'Chicago(ORD)', 'code':'ORD'}, {name:'Denver(DEN)', 'code':'DEN'},
   {name:'Dayton(DAY)', 'code':'DAY'}, {name:'Durham(RDU)', 'code':'RDU'}, {name:'Eugene(EUG)', 'code':'EUG'},
   {name:'Eureka(EUE)', 'code':'EUE'}, {name:'Fargo(FAR)', 'code':'FAR'}, {name:'Austin(AUS)', 'code':'AUS'}, {name:'Gary(GYY)', 'code':'GYY'}, {name:'Honolulu(HNL)', 'code':'HNL'}, {name:'Huntsville(HSV)', 'code':'HSV'}, {name:'Indianapolis(IND)', 'code':'IND'}, {name:'Jacksonville(JAX)', 'code':'JAX'}, {name:'Kalamazoo(AZO)', 'code':'AZO'}, {name:'Lafayette(LFT)', 'code':'LFT'}, {name:'Lansing(LAN)', 'code':'LAN'}, {name:'Lexington(LEX)', 'code':'LEX'}, {name:'Madison(MSN)', 'code':'MSN'}, {name:'Marquette(MQT)', 'code':'MQT'}, {name:'Maui(OGG)', 'code':'OGG'}, {name:'Minneapolis(MSP)', 'code':'MSP'}, {name:'Newark(EWR)', 'code':'EWR'}, {name:'Oakland(OAK)', 'code':'OAK'}, {name:'Orlando(MCO)', 'code':'MCO'}, {name:'Palm Springs(PSP)', 'code':'PSP'}, {name:'Philadelphia(PHL)', 'code':'PHL'}, {name:'Phoenox(PHX)', 'code':'PHX'}, {name:'Pittsburgh(PIT)', 'code':'PIT'}, {name:'Portland(PDX)', 'code':'PDX'}, {name:'Reno(RNO)', 'code':'RNO'}, {name:'Sacramento(SMF)', 'code':'SMF'}, {name:'San Antonio(SAT)', 'code':'SAT'}, {name:'San Diego(SAN)', 'code':'SAN'}, {name:'San Francisco(SFO)', 'code':'SFO'}, {name:'San Jose(SJC)', 'code':'SJC'}, {name:'San Juan(SJU)', 'code':'SJU'}, {name:'Savannah(SAV)', 'code':'SAV'}, {name:'Tulsa(TUL)', 'code':'TUL'}, {name:'Seoul(ICN)', 'code':'ICN'}, {name:'Tokyo(HND)', 'code':'HND'}, {name:'Milan(MXP)', 'code':'MXP'},
    {name:'Glasgow(GLA)', 'code':'GLA'}, {name:'Taiwan(TPE)', 'code':'TPE'},
  ]"

                  :minInputLength="1"
                  :itemProjection="projection"
                  class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
                  @selectItem="airportSelected"
                  placeholder="Leaving from"
              >
              </vue3-simple-typeahead>
            </div>
            <div class="flex flex-1 flex-col col-span-2">
              <vue3-simple-typeahead
                  id="typeahead_id"

                  :items="[{name: 'New York(JFK)', 'code': 'JFK'},{name: 'Florida(MCO)', 'code': 'MCO'},
   {name: 'Detroit(DTW)', 'code': 'DTW'},{name: 'Las Vegas(LAS)', 'code':'LAS'},
{name: 'Los Angeles(LAX)', 'code': 'LAX'},{name: 'Istanbul(IST)', 'code': 'IST'},{name: 'Phoenix Arizona(PHX)', 'code': 'PHX'},
{name: 'Atlanta', 'code': 'ATL'},{name: 'Florida', 'code': 'FLL'},
{name:'Cambridge Bay(YCB)', 'code': 'YCB'}, {name:'Windsor(YQG)', 'code': 'YQG'},
{name:'Barcelona(BCN)', 'code': 'BCN'}
,{name:'ROME(FCO)', 'code': 'FCO'}, {name:'Alexander City(ALX)', 'code': 'ALX'}, {name:'Anniston, Al (ANB)', 'code': 'ANB'},

{name:'Edmonton (YEG)', 'code': 'YEG'},  {name:'Dubai (YEG)', 'code': 'YEG'}, {name:'Aberdeen(ABR)', 'code': 'ABR'}
, {name:'Hana, HI(HNM)', 'code': 'HNM'}, {name:'Doha (DIA)', 'code': 'DIA'}, {name:'Akron(CAK)', 'code': 'CAK'},
{name:'Athens,TN(MMI)', 'code': 'MMI'}, {name:'Seattle (SEA)', 'code': 'SEA'},{name:'Doha (DIA)', 'code': 'DIA'},
{name:'Bakersfield(BFL)', 'code': 'BFL'} ,{name:'Baker,MT(BHK)', 'code': 'BHK'}, {name:'Houston(IAH)', 'code': 'IAH'},
{name:'San Diego(IAH)', 'code': 'IAH'} ,{name:' Hyderabad (NTR)', 'code': 'NTR'}, {name:' Athens,GR(ATH)', 'code': 'ATH'} ,
{name:' Minsk (MSQ)', 'code': 'MSQ'}, {name:'Bangkok(BKK)', 'code': 'BKK'}, {name:' Mink (NTR)', 'code': 'NTR'} ,{name:'Dehli(DEL)', 'code':'DEL'},
,{name:'Bamburi(BMQ)', 'code':'BMQ'},{name:'Amsterdam(AMS)', 'code': 'AMS'},{name:'Dallas (DFW)', 'code': 'DFW'},
{name:'Stockholm(ARN)', 'code': 'ARN'}, {name:'Oslo(OSL)', 'code': 'OSL'},
  {name:'Brisbane(BNE)','code':'BNE'}, {name:'Hanga Roa(IPC)', 'code':'IPC'}, {name:'Auckland(AKL)', 'code':'AKL'}, {name:'Boston(BOS)', 'code':'Bos'}, {name:'Buffalo(BUF', 'code':'BUF'}, {name:'Burbank(BUR)', 'code':'BUR'}, {name:'Charleston(CHS)','code':'CHS'},
   {name:'Charlotte(CLT)', 'code':'CLT'}, {name:'Cleveland(CLE)','code':'CLE'}, {name:'Clarksburg(CKB)','code':'CKB'},
   {name:'Cheyenne(CYS)','code':'CYS'}, {name:'Billings(BIL)','code':'BIL'},
   {name:'Biloxi/Gulfport(GPT)', 'code':'GPT'}, {name:'Birmingham(BHM)', 'code':'BHM'},
   {name:'Boise(BOI)', 'code':'BOI'}, {name:'Boulder(WBU)', 'code':'WBU'}, {name:'Casper(CPR)', 'code':'CPR'},
   {name:'Chicago(MDW)', 'code':'MDW'}, {name:'Chicago(ORD)', 'code':'ORD'}, {name:'Denver(DEN)', 'code':'DEN'},
   {name:'Dayton(DAY)', 'code':'DAY'}, {name:'Durham(RDU)', 'code':'RDU'}, {name:'Eugene(EUG)', 'code':'EUG'},
   {name:'Eureka(EUE)', 'code':'EUE'}, {name:'Fargo(FAR)', 'code':'FAR'}, {name:'Austin(AUS)', 'code':'AUS'}, {name:'Gary(GYY)', 'code':'GYY'}, {name:'Honolulu(HNL)', 'code':'HNL'}, {name:'Huntsville(HSV)', 'code':'HSV'}, {name:'Indianapolis(IND)', 'code':'IND'}, {name:'Jacksonville(JAX)', 'code':'JAX'}, {name:'Kalamazoo(AZO)', 'code':'AZO'}, {name:'Lafayette(LFT)', 'code':'LFT'}, {name:'Lansing(LAN)', 'code':'LAN'}, {name:'Lexington(LEX)', 'code':'LEX'}, {name:'Madison(MSN)', 'code':'MSN'}, {name:'Marquette(MQT)', 'code':'MQT'}, {name:'Maui(OGG)', 'code':'OGG'}, {name:'Minneapolis(MSP)', 'code':'MSP'}, {name:'Newark(EWR)', 'code':'EWR'}, {name:'Oakland(OAK)', 'code':'OAK'}, {name:'Orlando(MCO)', 'code':'MCO'}, {name:'Palm Springs(PSP)', 'code':'PSP'}, {name:'Philadelphia(PHL)', 'code':'PHL'}, {name:'Phoenox(PHX)', 'code':'PHX'}, {name:'Pittsburgh(PIT)', 'code':'PIT'}, {name:'Portland(PDX)', 'code':'PDX'}, {name:'Reno(RNO)', 'code':'RNO'}, {name:'Sacramento(SMF)', 'code':'SMF'}, {name:'San Antonio(SAT)', 'code':'SAT'}, {name:'San Diego(SAN)', 'code':'SAN'}, {name:'San Francisco(SFO)', 'code':'SFO'}, {name:'San Jose(SJC)', 'code':'SJC'}, {name:'San Juan(SJU)', 'code':'SJU'}, {name:'Savannah(SAV)', 'code':'SAV'}, {name:'Tulsa(TUL)', 'code':'TUL'}, {name:'Seoul(ICN)', 'code':'ICN'}, {name:'Tokyo(HND)', 'code':'HND'}, {name:'Milan(MXP)', 'code':'MXP'},
    {name:'Glasgow(GLA)', 'code':'GLA'}, {name:'Taiwan(TPE)', 'code':'TPE'},
  ]"

                  :minInputLength="1"
                  :itemProjection="projection1"
                  class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
                  @selectItem="airportSelected1"
                  placeholder="Going to"
              >
              </vue3-simple-typeahead>
            </div>
            <div class="flex flex-1 flex-col">
              <datepicker
                  v-model="Departure"
                  class="col-span-1 block text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                  autoApply :format="format"
                  :min-date='new Date()'
                  placeholder="Departure"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <button type="button"
                      class=" col-span-1 w-1/2 block py-2 p-4 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 "
                      @click.prevent="getSearchResults()"> Search
              </button>
            </div>

          </div>
        </div>


      </form>

    </div>
    <!--    Show when the second tab is selected-->
    <div v-if="tabs[1].current === true">
      <form action="#" class="text-center ">
        <div class=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">

          <div class="sm:col-span-1">
            <label for="travelers" class="block text-sm font-medium text-gray-700">Adults</label>
            <input v-model="adult"
                   type="number"
                   name="Adults"
                   placeholder="Travelers"
                   class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
            />

          </div>
          <div class="sm:col-span-6"></div>
        </div>

        <div class="mt-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            <div class="flex flex-1 flex-col">
              <!--              Autocomplete-->
              <vue3-simple-typeahead
                  id="typeahead_id"

                  :items="[{name: 'New York(JFK)', 'code': 'JFK'},{name: 'Florida(MCO)', 'code': 'MCO'},
   {name: 'Detroit(DTW)', 'code': 'DTW'},{name: 'Las Vegas(LAS)', 'code':'LAS'},
{name: 'Los Angeles(LAX)', 'code': 'LAX'},{name: 'Istanbul(IST)', 'code': 'IST'},{name: 'Phoenix Arizona(PHX)', 'code': 'PHX'},
{name: 'Atlanta', 'code': 'ATL'},{name: 'Florida', 'code': 'FLL'},
{name:'Cambridge Bay(YCB)', 'code': 'YCB'}, {name:'Windsor(YQG)', 'code': 'YQG'},
{name:'Barcelona(BCN)', 'code': 'BCN'}
,{name:'ROME(FCO)', 'code': 'FCO'}, {name:'Alexander City(ALX)', 'code': 'ALX'}, {name:'Anniston, Al (ANB)', 'code': 'ANB'},

{name:'Edmonton (YEG)', 'code': 'YEG'},  {name:'Dubai (YEG)', 'code': 'YEG'}, {name:'Aberdeen(ABR)', 'code': 'ABR'}
, {name:'Hana, HI(HNM)', 'code': 'HNM'}, {name:'Doha (DIA)', 'code': 'DIA'}, {name:'Akron(CAK)', 'code': 'CAK'},
{name:'Athens,TN(MMI)', 'code': 'MMI'}, {name:'Seattle (SEA)', 'code': 'SEA'},{name:'Doha (DIA)', 'code': 'DIA'},
{name:'Bakersfield(BFL)', 'code': 'BFL'} ,{name:'Baker,MT(BHK)', 'code': 'BHK'}, {name:'Houston(IAH)', 'code': 'IAH'},
{name:'San Diego(IAH)', 'code': 'IAH'} ,{name:' Hyderabad (NTR)', 'code': 'NTR'}, {name:' Athens,GR(ATH)', 'code': 'ATH'} ,
{name:' Minsk (MSQ)', 'code': 'MSQ'}, {name:'Bangkok(BKK)', 'code': 'BKK'}, {name:' Mink (NTR)', 'code': 'NTR'} ,{name:'Dehli(DEL)', 'code':'DEL'},
,{name:'Bamburi(BMQ)', 'code':'BMQ'},{name:'Amsterdam(AMS)', 'code': 'AMS'},{name:'Dallas (DFW)', 'code': 'DFW'},
{name:'Stockholm(ARN)', 'code': 'ARN'}, {name:'Oslo(OSL)', 'code': 'OSL'},
  {name:'Brisbane(BNE)','code':'BNE'}, {name:'Hanga Roa(IPC)', 'code':'IPC'}, {name:'Auckland(AKL)', 'code':'AKL'}, {name:'Boston(BOS)', 'code':'Bos'}, {name:'Buffalo(BUF', 'code':'BUF'}, {name:'Burbank(BUR)', 'code':'BUR'}, {name:'Charleston(CHS)','code':'CHS'},
   {name:'Charlotte(CLT)', 'code':'CLT'}, {name:'Cleveland(CLE)','code':'CLE'}, {name:'Clarksburg(CKB)','code':'CKB'},
   {name:'Cheyenne(CYS)','code':'CYS'}, {name:'Billings(BIL)','code':'BIL'},
   {name:'Biloxi/Gulfport(GPT)', 'code':'GPT'}, {name:'Birmingham(BHM)', 'code':'BHM'},
   {name:'Boise(BOI)', 'code':'BOI'}, {name:'Boulder(WBU)', 'code':'WBU'}, {name:'Casper(CPR)', 'code':'CPR'},
   {name:'Chicago(MDW)', 'code':'MDW'}, {name:'Chicago(ORD)', 'code':'ORD'}, {name:'Denver(DEN)', 'code':'DEN'},
   {name:'Dayton(DAY)', 'code':'DAY'}, {name:'Durham(RDU)', 'code':'RDU'}, {name:'Eugene(EUG)', 'code':'EUG'},
   {name:'Eureka(EUE)', 'code':'EUE'}, {name:'Fargo(FAR)', 'code':'FAR'}, {name:'Austin(AUS)', 'code':'AUS'}, {name:'Gary(GYY)', 'code':'GYY'}, {name:'Honolulu(HNL)', 'code':'HNL'}, {name:'Huntsville(HSV)', 'code':'HSV'}, {name:'Indianapolis(IND)', 'code':'IND'}, {name:'Jacksonville(JAX)', 'code':'JAX'}, {name:'Kalamazoo(AZO)', 'code':'AZO'}, {name:'Lafayette(LFT)', 'code':'LFT'}, {name:'Lansing(LAN)', 'code':'LAN'}, {name:'Lexington(LEX)', 'code':'LEX'}, {name:'Madison(MSN)', 'code':'MSN'}, {name:'Marquette(MQT)', 'code':'MQT'}, {name:'Maui(OGG)', 'code':'OGG'}, {name:'Minneapolis(MSP)', 'code':'MSP'}, {name:'Newark(EWR)', 'code':'EWR'}, {name:'Oakland(OAK)', 'code':'OAK'}, {name:'Orlando(MCO)', 'code':'MCO'}, {name:'Palm Springs(PSP)', 'code':'PSP'}, {name:'Philadelphia(PHL)', 'code':'PHL'}, {name:'Phoenox(PHX)', 'code':'PHX'}, {name:'Pittsburgh(PIT)', 'code':'PIT'}, {name:'Portland(PDX)', 'code':'PDX'}, {name:'Reno(RNO)', 'code':'RNO'}, {name:'Sacramento(SMF)', 'code':'SMF'}, {name:'San Antonio(SAT)', 'code':'SAT'}, {name:'San Diego(SAN)', 'code':'SAN'}, {name:'San Francisco(SFO)', 'code':'SFO'}, {name:'San Jose(SJC)', 'code':'SJC'}, {name:'San Juan(SJU)', 'code':'SJU'}, {name:'Savannah(SAV)', 'code':'SAV'}, {name:'Tulsa(TUL)', 'code':'TUL'}, {name:'Seoul(ICN)', 'code':'ICN'}, {name:'Tokyo(HND)', 'code':'HND'}, {name:'Milan(MXP)', 'code':'MXP'},
    {name:'Glasgow(GLA)', 'code':'GLA'}, {name:'Taiwan(TPE)', 'code':'TPE'},
  ]"

                  :minInputLength="1"
                  :itemProjection="projection"
                  class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
                  @selectItem="airportSelected"
                  placeholder="Leaving from"
              >
              </vue3-simple-typeahead>
            </div>
            <div class="flex flex-1 flex-col">
              <!--              Autocomplete-->

              <vue3-simple-typeahead
                  id="typeahead_id"
                  :items="[{name: 'New York(JFK)', 'code': 'JFK'},{name: 'Florida(MCO)', 'code': 'MCO'},
   {name: 'Detroit(DTW)', 'code': 'DTW'},{name: 'Las Vegas(LAS)', 'code':'LAS'},
{name: 'Los Angeles(LAX)', 'code': 'LAX'},{name: 'Istanbul(IST)', 'code': 'IST'},{name: 'Phoenix Arizona(PHX)', 'code': 'PHX'},
{name: 'Atlanta', 'code': 'ATL'},{name: 'Florida', 'code': 'FLL'},
{name:'Cambridge Bay(YCB)', 'code': 'YCB'}, {name:'Windsor(YQG)', 'code': 'YQG'},
{name:'Barcelona(BCN)', 'code': 'BCN'}
,{name:'ROME(FCO)', 'code': 'FCO'}, {name:'Alexander City(ALX)', 'code': 'ALX'}, {name:'Anniston, Al (ANB)', 'code': 'ANB'},

{name:'Edmonton (YEG)', 'code': 'YEG'},  {name:'Dubai (YEG)', 'code': 'YEG'}, {name:'Aberdeen(ABR)', 'code': 'ABR'}
, {name:'Hana, HI(HNM)', 'code': 'HNM'}, {name:'Doha (DIA)', 'code': 'DIA'}, {name:'Akron(CAK)', 'code': 'CAK'},
{name:'Athens,TN(MMI)', 'code': 'MMI'}, {name:'Seattle (SEA)', 'code': 'SEA'},{name:'Doha (DIA)', 'code': 'DIA'},
{name:'Bakersfield(BFL)', 'code': 'BFL'} ,{name:'Baker,MT(BHK)', 'code': 'BHK'}, {name:'Houston(IAH)', 'code': 'IAH'},
{name:'San Diego(IAH)', 'code': 'IAH'} ,{name:' Hyderabad (NTR)', 'code': 'NTR'}, {name:' Athens,GR(ATH)', 'code': 'ATH'} ,
{name:' Minsk (MSQ)', 'code': 'MSQ'}, {name:'Bangkok(BKK)', 'code': 'BKK'}, {name:' Mink (NTR)', 'code': 'NTR'} ,{name:'Dehli(DEL)', 'code':'DEL'},
,{name:'Bamburi(BMQ)', 'code':'BMQ'},{name:'Amsterdam(AMS)', 'code': 'AMS'},{name:'Dallas (DFW)', 'code': 'DFW'},
{name:'Stockholm(ARN)', 'code': 'ARN'}, {name:'Oslo(OSL)', 'code': 'OSL'},
  {name:'Brisbane(BNE)','code':'BNE'}, {name:'Hanga Roa(IPC)', 'code':'IPC'}, {name:'Auckland(AKL)', 'code':'AKL'}, {name:'Boston(BOS)', 'code':'Bos'}, {name:'Buffalo(BUF', 'code':'BUF'}, {name:'Burbank(BUR)', 'code':'BUR'}, {name:'Charleston(CHS)','code':'CHS'},
   {name:'Charlotte(CLT)', 'code':'CLT'}, {name:'Cleveland(CLE)','code':'CLE'}, {name:'Clarksburg(CKB)','code':'CKB'},
   {name:'Cheyenne(CYS)','code':'CYS'}, {name:'Billings(BIL)','code':'BIL'},
   {name:'Biloxi/Gulfport(GPT)', 'code':'GPT'}, {name:'Birmingham(BHM)', 'code':'BHM'},
   {name:'Boise(BOI)', 'code':'BOI'}, {name:'Boulder(WBU)', 'code':'WBU'}, {name:'Casper(CPR)', 'code':'CPR'},
   {name:'Chicago(MDW)', 'code':'MDW'}, {name:'Chicago(ORD)', 'code':'ORD'}, {name:'Denver(DEN)', 'code':'DEN'},
   {name:'Dayton(DAY)', 'code':'DAY'}, {name:'Durham(RDU)', 'code':'RDU'}, {name:'Eugene(EUG)', 'code':'EUG'},
   {name:'Eureka(EUE)', 'code':'EUE'}, {name:'Fargo(FAR)', 'code':'FAR'}, {name:'Austin(AUS)', 'code':'AUS'}, {name:'Gary(GYY)', 'code':'GYY'}, {name:'Honolulu(HNL)', 'code':'HNL'}, {name:'Huntsville(HSV)', 'code':'HSV'}, {name:'Indianapolis(IND)', 'code':'IND'}, {name:'Jacksonville(JAX)', 'code':'JAX'}, {name:'Kalamazoo(AZO)', 'code':'AZO'}, {name:'Lafayette(LFT)', 'code':'LFT'}, {name:'Lansing(LAN)', 'code':'LAN'}, {name:'Lexington(LEX)', 'code':'LEX'}, {name:'Madison(MSN)', 'code':'MSN'}, {name:'Marquette(MQT)', 'code':'MQT'}, {name:'Maui(OGG)', 'code':'OGG'}, {name:'Minneapolis(MSP)', 'code':'MSP'}, {name:'Newark(EWR)', 'code':'EWR'}, {name:'Oakland(OAK)', 'code':'OAK'}, {name:'Orlando(MCO)', 'code':'MCO'}, {name:'Palm Springs(PSP)', 'code':'PSP'}, {name:'Philadelphia(PHL)', 'code':'PHL'}, {name:'Phoenox(PHX)', 'code':'PHX'}, {name:'Pittsburgh(PIT)', 'code':'PIT'}, {name:'Portland(PDX)', 'code':'PDX'}, {name:'Reno(RNO)', 'code':'RNO'}, {name:'Sacramento(SMF)', 'code':'SMF'}, {name:'San Antonio(SAT)', 'code':'SAT'}, {name:'San Diego(SAN)', 'code':'SAN'}, {name:'San Francisco(SFO)', 'code':'SFO'}, {name:'San Jose(SJC)', 'code':'SJC'}, {name:'San Juan(SJU)', 'code':'SJU'}, {name:'Savannah(SAV)', 'code':'SAV'}, {name:'Tulsa(TUL)', 'code':'TUL'}, {name:'Seoul(ICN)', 'code':'ICN'}, {name:'Tokyo(HND)', 'code':'HND'}, {name:'Milan(MXP)', 'code':'MXP'},
    {name:'Glasgow(GLA)', 'code':'GLA'}, {name:'Taiwan(TPE)', 'code':'TPE'},
  ]"

                  :minInputLength="1"
                  :itemProjection="projection1"
                  class="block w-full mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400 "
                  @selectItem="airportSelected1"
                  placeholder="Going to"
              >
              </vue3-simple-typeahead>
            </div>
            <!--            Flight departure date field-->
            <div class="flex flex-1 flex-col">
              <datepicker
                  v-model="Departure"
                  class=" block mb-2 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                  autoApply :format="format"
                  :min-date='new Date()'
                  placeholder="Departure"
              />
            </div>
            <!--            Flight return date field-->
            <div class="flex flex-1 flex-col">
              <datepicker
                  v-model="returnDate"
                  class=" block col-span-1 text-sm rounded-lg font-medium text-gray-900 dark:text-gray-400"
                  autoApply :format="format"
                  :min-date='new Date()'
                  placeholder="Return"
              />
            </div>
            <div class="flex flex-1 flex-col">
              <!--              Search button-->
              <button type="button"
                      class="block col-span-1 w-1/2 rounded-md border border-transparent bg-indigo-900 py-2 px-4 text-sm  font-medium text-white shadow-sm hover:bg-indigo-700 "
                      @click.prevent="getSearchResults()"> Search
              </button>
            </div>

          </div>
        </div>

      </form>

    </div>
  </div>
  <div class="bg-gray-200">
    <div class="mt-8">
      <div class="container  lg:w-auto sm:w-auto md:w-auto mx-auto flex flex-col  max-w-6xl md-px-10 sm:px-8 lg:px-16">
        <!--Show the flight search results-->
        <div v-if="selectedFlight == null">
          <div v-show="flights.length" class="mt-12">
          </div>
          <ul v-show="flights.length" role="list" class="divide-y divide-gray-200">
            <Disclosure as="section" aria-labelledby="filter-heading"
                        class="grid items-center border-t border-b border-gray-200">
              <h2 id="filter-heading" class="sr-only">Filters</h2>
              <div class="col-start-1 row-start-1 py-4">
                <div class="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                  <Menu as="div" class="relative inline-block">
                    <div enter-active-class="transition ease-out duration-100"
                         enter-from-class="transform opacity-0 scale-95"
                         enter-to-class="transform opacity-100 scale-100"
                         leave-active-class="transition ease-in duration-75"
                         leave-from-class="transform opacity-100 scale-100"
                         leave-to-class="transform opacity-0 scale-95">
                      <label for="orderBy"
                             class="block  px-14 w-full text-sm font-medium border-0 border-b-2 text-gray-700">Sort
                        By</label>
                      <select id="orderBy" name="orderBy" v-model="orderBy" @input="orderBySelected"
                              class=" text-sm font-medium text-gray-700  block py-2 px-7 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 ">
                        <option class="text-sm font-medium text-gray-700" value="pricea">Price Ascending</option>
                        <option class="text-sm font-medium text-gray-700" value="priced">price Descending</option>
                      </select>
                    </div>
                  </Menu>
                </div>
              </div>
            </Disclosure>

            <li v-for="flight in flights">
              <div class="flex flex-col overflow-hidden
          bg-white rounded-md  mt-3 w-100 mx-auto px-4 sm:px-6 lg:px-8">
                <button type="button" @click="openDetails(flight)">
                  <div class=" mx-3 flow-root">
<!--                    <p class="float-right text-xl leading-tight text-gray-600 font-bold">${{ flight.price.amount }}</p>-->
                    <p class="font-bold float-left">{{ getFormattedDate(flight.legs[0].departure) }} -
                      {{ getFormattedDate(flight.legs[0].arrival) }}</p>

                  </div>
                  <div class="mx-2 inline-flex justify-center items-center w-full">
                    {{ flight.legs[0].origin.name }}
                    <hr class="mx-2 my-5 w-60 h-0.5 bg-gray-500 rounded border-0 dark:bg-gray-500">
                    <svg style="color: rgb(158, 158, 158);" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                         viewBox="0 0 512 512"><title>ionicons-v5-a</title>
                      <path
                          d="M407.72,208c-2.72,0-14.44.08-18.67.31l-57.77,1.52L198.06,48H135.25l74.59,164.61-97.31,1.44L68.25,160H16.14l20.61,94.18c.15.54.33,1.07.53,1.59a.26.26,0,0,1,0,.15,15.42,15.42,0,0,0-.53,1.58L15.86,352H67.64l45.45-55,96.77,2.17L135.24,464h63l133-161.75,57.77,1.54c4.29.23,16,.31,18.66.31,24.35,0,44.27-3.34,59.21-9.94C492.22,283,496,265.46,496,256,496,225.94,463,208,407.72,208Zm-71.29,87.9v0Z"
                          fill="#9e9e9e"></path>
                    </svg>
                    <p class="mx-2">{{ flight.legs[0].destination.name }}</p>
                  </div>
                  <div class="text-left mx-3">
                    {{ flight.legs[0].carriers[0].name }}
                  </div>
                </button>
              </div>

            </li>

          </ul>
          <div v-show="flights.length" class="mt-12">
          </div>
        </div>
      </div>
    </div>
    <div class="container  lg:w-auto sm:w-auto md:w-auto mx-auto flex flex-col  max-w-6xl md-px-10 sm:px-8 lg:px-16">
      <div v-if="selectedFlight !== null">
        <div v-if="FlightsDetails !== null">
          <div v-show="flights.length" class="mt-12">
          </div>
          <ul role="list">
            <li v-for="price in pricingOptions">
              <div class=" flex flex-col overflow-hidden
          bg-white rounded-md  mt-3 w-100 mx-2">
                <div class="mt-2 mx-3">

                  <div> {{ price.agents[0].name }}</div>
                  <div class="flex items-center">
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                              :class="[price.agents[0].rating.value > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                              aria-hidden="true"/>
                  </div>
                </div>
                <div class="flow-root mt-2 mx-3">
                  <div class="float-right">
                    <!--                    Display the flight booking link-->
                    <a :href="price.agents[0].url">
                      <button
                          class="relative inline-flex items-center rounded-md border border-gray-300 bg-indigo-900 px-2 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:z-10 focus:border-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        Book Now
                        <ChevronDoubleRightIcon class=" h-5 w-5" aria-hidden="true"/>
                      </button>
                    </a>
                  </div>
                  <!--                  Display the total price of the flight-->
                  <div class="mx-2 float-right float-right text-l leading-tight text-gray-700 font-bold">Price is
                    ${{ price.totalPrice }}
                  </div>
                </div>
                <div class="mt-2">

                </div>
              </div>
            </li>

          </ul>
          <!--          Close the flight details button-->
          <div>
            <button type="button"
                    class="block mt-4 mx-3 py-2 p-4 rounded-md border border-transparent bg-indigo-900  text-sm  font-medium text-white shadow-sm hover:bg-indigo-700"
                    @click="closeDetails(flight)">Close Details
            </button>
          </div>
          <div class="mt-12">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--The footer of the Flights Page-->
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
//Imports
import {ChevronDoubleRightIcon} from "@heroicons/vue/20/solid"
import {StarIcon} from '@heroicons/vue/20/solid'
import {ref} from "vue";
// Format the date
const format = ref('MMM dd yyyy');
const Departure = ref();

const reviews = [
  {
    rating: 5,
  },
]
</script>

<script>

import {ref} from 'vue';
import axios from "axios";
import moment from 'moment';

export default {
  data() {
    return {
      leaving: '',
      going: '',
      searchResults: [],
      MultipleStops: [],
      FlightsDetails: [],
      searchQuery: '',
      date: '',
      adult: 1,
      flights: [],
      detailOpen: false,
      selectedFlight: null,
      pricingOptions: [],
      tabs: [
        {name: 'One-way', href: '#', current: true},
        {name: 'Rountrip', href: '#', current: false},
      ],
      returnDate: '',
    };
  },
  methods: {
    //Autocomplete
    projection(value) {

      return value.name
    },
    airportSelected(value) {
      this.leaving = value.code;
    },
    projection1(value) {

      return value.name
    },
    airportSelected1(value) {
      this.going = value.code;
    },
    orderBySelected(event) {
      this.orderBy = event.target.value;
      if (event.target.value === 'pricea') {
        console.log('sorting by price ascending')
        this.flights.sort((a, b) => (this.Number(a.price.amount) > this.Number(b.price.amount)) ? 1 : -1)
      }
      if (event.target.value === 'priced') {
        console.log('sorting by price descending')
        this.flights.sort((a, b) => (this.Number(a.price.amount) < this.Number(b.price.amount)) ? 1 : -1)
      }
    },
    Number(value) {
      if (value) {
        value = value.toString().replace("$", "");
        value = value.toString().replace(",", "");
        return parseInt(value);
      }
      console.log('something went wrong');
      return 0;
    },
    //Formating the date
    getFormattedDate(date) {
      return moment(date).format("HH:mm")
    },
    //Getting the current tab
    setCurrentTab(tab) {

      for (var i = 0, iLen = this.tabs.length; i < iLen; i++) {

        if (this.tabs[i].name == tab.name) {
          this.tabs[i].current = true;
        } else {
          this.tabs[i].current = false;
        }
      }

    },
    //Closing the flight details
    closeDetails() {
      this.selectedFlight = null;
      this.MultipleStops = null;
      this.FlightsDetails = null;
      let datetest = moment(this.date).format('YYYY-MM-DD');
      console.log(datetest);
    },
    //Selecting a specific flight and showing its details
    openDetails(flight) {
      console.log('selected');
      this.selectedFlight = flight;
      this.getFlightsDetails(flight)
      this.getMultipleStops();
    },
    //Fetch the search flight data from the API
    getSearchResults() {
      let self = this;
      console.log(this.date);
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
        params: {
          origin: this.leaving,
          destination: this.going,
          date: moment(this.Departure).format('YYYY-MM-DD'),
          adults: 1,
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      }
      //Only when tab[1] is selected
      if (this.tabs[0].current !== true) {
        options.params.returnDate = moment(this.returnDate).format('YYYY-MM-DD');
      }
      axios.request(options).then(function (response) {
        self.flights = response.data.data;
        // console.log(itineraryId);
        // self.getFlightsDetails(itineraryId);
      }).catch(function (error) {
        console.error(error);
      });
    },
    //Fetch the data of multiple stops flights from the API
    getMultipleStops() {
      let legsData = [{
        "origin": this.leaving,
        "destination": this.going,
        "date": moment(this.Departure).format('YYYY-MM-DD')
      }];
      if (this.tabs[0].current !== true) {
        legsData.push(
            {"origin": this.going, "destination": this.leaving, "date": moment(this.returnDate).format('YYYY-MM-DD')}
        );
      }
      let self = this;
      console.log('called');
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlightsMultiStops',
        params: {
          legs: [legsData],
          waitTime: '5000',
          adults: this.adult,
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        self.MultipleStops = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    },
    //Get all the flight details data from the API
    getFlightsDetails(flight) {
      let itineraryId = flight.id;

      let legsData = [{
        "origin": this.leaving,
        "destination": this.going,
        "date": moment(this.Departure).format('YYYY-MM-DD')
      }];
      if (this.tabs[0].current !== true) {
        legsData.push(
            {"origin": this.going, "destination": this.leaving, "date": moment(this.returnDate).format('YYYY-MM-DD')}
        );
      }
      let self = this;
      console.log('called');
      const options = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails',
        params: {
          itineraryId: itineraryId,
          legs: [legsData],
          adults: this.adult,
          currency: 'USD',
          countryCode: 'US',
          market: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': '2756954a36mshd7f9836f6a3787bp186d1djsn79f785078e5b',
          'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log('assigning');
        self.FlightsDetails = response.data.data;
        self.pricingOptions = response.data.data.pricingOptions;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
</script>
<style scoped>
.button.option {
  border: none;
  border-radius: 2px;
}


</style>