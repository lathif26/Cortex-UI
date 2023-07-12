import Logo from '../../assets/MEDDTODAY/MEDDTODAY@2x.png'

const TitleBar = () =>{
    return <div className="w-full bg-white h-[120px] flex justify-between items-center px-14 overflow-x-hidden opacity-100">
        <div className='h-[80%]'><img className="h-full" src={Logo} alt="Logo"/></div>
        
        <form>
    <div class="flex border-rose-600">
        <button id="dropdown-button-2" data-dropdown-toggle="dropdown-search-city" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
          
          
            Chennai 
          <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              
            </button>
        <div class="relative w-full">
            <input type="search" id="location-search&quot;" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for Medicines and Health Products" required=""/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg  ">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
        </div>
    </div>
</form>

        <div className='flex flex-col gap-2 bg-[#00000029] px-8 py-4 rounded-md'>
        <div className='font-semibold'>ORDER WITH PRESCRIPTION</div>
        <div className="h-[30px] px-6 bg-[#ee3124] rounded-full flex justify-center items-center text-[12px] text-white font-semibold">UPLOAD NOW</div>
        </div>

    </div>
}

export default TitleBar