<template>
    <div class=" xl:px-24 lg:px-5 w-full">
        <div class="trade-month  p-2">
          <div class=" w-full p-2 h-16 rounded p-3 shadow mt-1 flex justify-start items-center" style="background-color:white;">
            <p class="flex gap-3 justify-center items-center text-xl"><i class="fa-solid fa-chevron-left"></i><span>Trades and charges</span></p>
          </div>
          <div class="date-r w-full h-auto rounded p-3 shadow mt-1 flex gap-2 " style="background-color:white;">
            <div class="month-btn w-full p-1  flex justify-start items-center gap-2 ">
              <button type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 text-black hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-blue-800/30 dark:hover:text-blue-400">
                <i class="fa-solid fa-calendar-days"></i>DATE RANGE
              </button>
              <button type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 text-black hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-blue-800/30 dark:hover:text-blue-400">
                <i class="fa-solid fa-calendar-days"></i>Last 7 Days
              </button>
              <button type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 text-black hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-blue-800/30 dark:hover:text-blue-400">
                <i class="fa-solid fa-calendar-days"></i>Last 15 Days
              </button>
              <button type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 text-black hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-blue-800/30 dark:hover:text-blue-400">
                <i class="fa-solid fa-calendar-days"></i>Last 30 Days
              </button>
              <button type="button" class="p-2  inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2  text-black hover:bg-blue-100  hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
                 <i class="fa-solid fa-calendar-days"></i>Last 180 Days
                </button>
                <div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:border-neutral-700 dark:shadow-neutral-700/70">
                      <div class="flex justify-end items-center py-3 px-4 border-b border-gray-200 ">
                        <button type="button" class="flex justify-center items-center  text-md font-semibold  border border-transparent text-blue-800  disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal">
                          CLEAR ALL
                        </button>
                      </div>
                      <div class="p-5 overflow-y-auto">
                        <p class="text-gray-500">
                          <i class="fa-solid fa-stopwatch"></i> <span class="pl-3">Frequently Used Time Period</span>
                        </p>
                        <div class="date-btn w-full flex flex-wrap border-red-500 gap-3 mt-3 px-10">
                          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-black-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700  dark:hover:text-blue-500 dark:hover:border-blue-600">
                            Last 45 Days
                          </button>
                          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-black-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700  dark:hover:text-blue-500 dark:hover:border-blue-600">
                            Last 60 Days
                          </button>
                          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-black-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700  dark:hover:text-blue-500 dark:hover:border-blue-600">
                            Last 90 Days
                          </button>

                          
                          <button @click="togglePanel"
                                type="button"
                                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-black-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:text-blue-500 dark:hover:border-blue-600">
                          Last 180 Days
                        </button>
                        <div v-if="panelOpen"
                            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                          <div class="bg-white w-92 p-6 rounded-lg shadow-md">
                            <div class="w-full p-3  flex justify-between justify-start border-b border-gray-200 items-center">
                              <p class="text-gray-500 font-semibold">Filter your Transaction by Stocks</p>
                              <button @click="closepanel" class="p-2 bg-gray-100 flex justify-center items-center rounded-full"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <div class="w-full p-3">
                              <div class="rounded-sm border-2 border-solid border-gray-100 flex">
                                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                                  <i class="fa-solid fa-magnifying-glass"></i>
                                </button>                      
                                  <input type="text" class="py-3 px-4 block w-full text-sm focus:border-blue-500 focus:none disabled:opacity-50 disabled:pointer-events-none" placeholder="Search, stocks options & features">
                                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                                  CLEAR
                                </button>                                
                              </div>
                            </div>
                            <div class="w-full p-2">
                              <div class="border-b-2 border-gray-100">
                                <nav class="-mb-0.5 flex justify-stat space-x-6">
                                  <a class="py-4 px-1 font-semibold inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500" href="#" aria-current="page">
                                    ALL
                                  </a>
                                  <a class="py-4 px-1 font-semibold inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500" href="#">
                                    Cash
                                  </a>
                                  <a class="py-4 px-1 font-semibold inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500" href="#">
                                    FnO
                                  </a>
                                  <a class="py-4 px-1 font-semibold inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500" href="#">
                                    Commodity
                                  </a>
                                  <a class="py-4 px-1 font-semibold inline-flex items-center gap-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500" href="#">
                                    Currency
                                  </a>
                                </nav>
                              </div>
                            </div>
                            <div class="w-full h-96 bg-no-repeat bg-center bg-contain bg-origin-padding bg-[url('~/assets/image/pie-chart.png')]">

                            </div>
                            <div class="w-full p-2 flex text-center justify-center items-center">
                              <p class="text-gray-500">Search Script F&Q, Currency Commodity eg. Nifty 50, CE-CallPE Put</p>
                            </div>
                          </div>
                        </div>
                     





                        </div>
                      </div>
                      <div class=" py-3 px-4 border-t border-gray-200">
                        <div class="w-full  p-2 flex justify-stat items-center justify-between">
                          <p class="text-gray-500 text-md font-semibold"><i class="fa-solid fa-pencil"></i><span class="pl-3">CUSTOM</span></p>
                          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent text-gray-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400">
                            APPLY
                          </button>
                        </div>

                        <div class="w-full  p-2 flex justify-stat items-center gap-2">
                          <div class="w-full p-2 ">
                            <p class="text-gray-500 text-md">From</p>
                            <input type="date" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                          </div>
                          <div class="w-full p-2 ">
                            <p class="text-gray-500 text-md">To</p>
                            <input type="date" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            <div class="filter-box w-full p-1  flex justify-end items-center  gap-3 ">
              <div class="max-w-sm">
                <!-- SearchBox -->
                <div class="relative" >
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                      <svg class="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input class="py-3 ps-10 pe-4 block w-full border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-black-500" type="text" placeholder="Type a name" value="" data-hs-combo-box-input="">
                  </div>
                </div>
                <!-- End SearchBox -->
              </div>
             
              <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg bg-gray-100 border border-transparent text-black hover:bg-black-700  disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal-filter">
                <i class="fa-solid fa-filter"></i> Filter <i class="fa-solid fa-chevron-down"></i>
                </button>

                <div id="hs-vertically-centered-modal-filter" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                      <div class="flex justify-between items-center py-3 px-4 border-b border-gray-200">
                        <h3 class="font-medium text-gray-400">
                          Sort & Filter
                        </h3>
                        <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal-filter">
                          <span class="sr-only">Close</span>
                          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="p-4 overflow-y-auto flex flex-col gap-3">
                        <div class="w-full p-2 ">
                          <p class="text-gray-600 text-xl"><i class="fa-solid fa-arrow-up-a-z"></i><span class="pl-3">Alphabetically</span></p>
                          <div class="mt-3 pl-10 flex justify-start items-center gap-3">
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              A-Z
                            </button>
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              Z-A
                            </button>
                          </div>
                        </div>
                        <div class="w-full p-2 ">
                          <p class="text-gray-600 text-xl"><i class="fa-solid fa-head-side-mask"></i><span class="pl-3">Filter by Segment</span></p>
                          <div class="mt-3 pl-10 flex justify-start items-center gap-3 flex-wrap">
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              Equality cash
                            </button>
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              FnO
                            </button>
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              Currency
                            </button>
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              Commodity
                            </button>
                          </div>
                        </div>
                        <div class="w-full p-2">
                          <p class="text-gray-600 text-xl"><i class="fa-solid fa-arrow-up-wide-short"></i><span class="pl-3">Filter by Product</span></p>
                          <div class="mt-3 pl-10 flex justify-start items-center gap-3 flex-wrap">
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              Intraday
                            </button>
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium  border border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                              Delivery
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>

    </div>

    <div class="w-full xl:px-24 lg:px-5  mt-5">
       <div class="w-full  p-3">
        <h3 class="text-black font-semibold text-xl">Charges Summary</h3>
        <div class="h-auto w-full mt-5 shadow-2xl flex summary" style="background-color:white;">
            <div class="w-full p-3 tr-box flex justify-start items-center gap-2">
              <div class="logo bg-blue-300 flex justify-center items-center text-blue-600 rounded-full p-2 w-16 h-16" >
                <i class="fa-solid fa-receipt text-xl"></i>
              </div>
              <div class="w-full  p-2">
                <p class="text-gray-600 font-normal text-sm">Total Charges<span class="text-green-600 bg-green-100 pl-2">1184 Traders</span></p>
                <h1 class="text-2xl text-black-500 font-semibold mt-2">RS. 31.483.29</h1>
              </div>
             
            </div>
            <div class="w-full p-3 tr-box flex justify-start items-center gap-2">
              <div class="logo bg-blue-300 flex justify-center items-center text-blue-600 rounded-full p-2 w-16 h-16" >
                <i class="fa-solid fa-file text-xl"></i>
              </div>
              <div class="  w-full p-2">
                <p class="text-gray-600 font-normal text-sm">Trade Charges</p>
                <h1 class="text-2xl text-black-500 font-semibold mt-2">RS. 30.503.29</h1>
              </div>
            </div>
            <div class="w-full p-3 tr-box flex justify-start items-center gap-2" style="border-right: none;">
              <div class="logo bg-blue-300 flex justify-center items-center text-blue-600 rounded-full p-2 w-16 h-16" >
                <i class="fa-solid fa-file-word text-xl"></i>
              </div>
              <div class="w-full  p-2">
                <p class="text-gray-600 font-normal text-sm">Non-Trade Charges</p>
                <h1 class="text-2xl text-black-500 font-semibold mt-2">RS. 483.29</h1>
              </div>
            </div>
        </div>
        <div class="w-full p-2 mt-5 flex justify-start justify-between items-center">
          <p class="text-black-600 font-medium">Showing Charges Summary for <span class="pl-1 text-gray-400 font-normal">11 NOV 2023-07 May 2024</span></p>
          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  text-blue-500 disabled:opacity-50 disabled:pointer-events-none">
            VIEW DETAILS <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
       </div>
    </div>
    <div class="w-full xl:px-24 lg:px-5">
      <div class="w-full p-2 flex flex-col gap-2">
        <div class="w-full h-16 p-2 bg-white rounded shadow  flex justify-start items-center justify-between">
          <h1 class="text-xl text-black-500 font-medium">Trades</h1>
          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            <i class="fa-solid fa-download"></i>  DOWNLOAD TRADE HISTORY
          </button>
        </div>
        <div class="w-full h-16 bg-white rounded shadow  flex justify-start justify-between items-center p-2">
          <p class="text-black-500 font-medium">25 Apr 2024 <span class="bg-gray-200 text-gray-400 p-1 rounded-full ml-2">22</span></p>
          <p class="text-gray-500 font-medium">Total Charges: <span class="text-black">Rs.611.63</span><i class="fa-solid fa-chevron-down ml-2"></i></p>
        </div>
        <div class="w-full h-16 bg-white rounded shadow  flex justify-start justify-between items-center p-2">
          <p class="text-black-500 font-medium">24 Apr 2024 <span class="bg-gray-200 text-gray-400 p-1 rounded-full ml-2">10</span></p>
          <p class="text-gray-500 font-medium">Total Charges: <span class="text-black">Rs.905.63</span><i class="fa-solid fa-chevron-down ml-2"></i></p>
        </div>    
        <div class="w-full h-16 bg-white rounded shadow  flex justify-start justify-between items-center p-2">
          <p class="text-black-500 font-medium">23 Apr 2024 <span class="bg-gray-200 text-gray-400 p-1 rounded-full ml-2">14</span></p>
          <p class="text-gray-500 font-medium">Total Charges: <span class="text-black">Rs.507.63</span><i class="fa-solid fa-chevron-down ml-2"></i></p>
        </div>       
         <div class="w-full h-16 bg-white rounded shadow  flex justify-start justify-between items-center p-2">
          <p class="text-black-500 font-medium">22 Apr 2024 <span class="bg-gray-200 text-gray-400 p-1 rounded-full ml-2">16</span></p>
          <p class="text-gray-500 font-medium">Total Charges: <span class="text-black">Rs.302.63</span><i class="fa-solid fa-chevron-down ml-2"></i></p>
        </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      panelOpen: false
    };
  },
  methods: {
    togglePanel() {
      this.panelOpen = true;
    },
    closepanel(){
      this.panelOpen=false;
    }
  }
};
</script>


<style>
.tr-box{
  border-right: 2px solid gray;
  position: relative;
}
.equal{
  position: absolute;
  right: -8%;
}
@media(max-width:992px){
  .date-r{
    flex-wrap: wrap;
  }
  .filter-box{
    justify-content: flex-start;
  }
  .summary{
    flex-wrap: wrap;
  }
  .tr-box{
    border-right: none;
  }
}
@media(max-width:711px){
  .month-btn{
    flex-wrap: wrap;
   
  }
}
</style>