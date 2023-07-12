import CoverImage from "../../assets/Untitled-1/Untitled-1@2x.png";
const CoverImageCtn = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[500px] overflow-x-hidden">
      <img
        className="w-full h-full object-center object-cover"
        src={CoverImage}
        alt="Cover Image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex px-8">
        <div className="h-full w-[36px] hidden lg:flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full aspect-square p-3 rounded bg-white bg-opacity-50 rotate-180 transform"
            viewBox="0 0 9.621 16.243"
          >
            <path
              id="chevron-left"
              d="M9,18l6-6L9,6"
              transform="translate(-6.879 -3.879)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="h-full grow flex flex-col px-10 py-20  justify-center items-center ">
       
          <div className="flex flex-wrap justify-start pr-[200px] text-white font-bold  text-[40px] ">
            <span className="inline-block w-full">FLAT 25% OFF</span>
            <span className="inline-block w-full">on MEDICINE order</span>
          </div>
          
         
          
          <div className='flex flex-wrap  pr-[650px] justify-start  items-center text-white'>
            <ol>
              <li>1.Upload valid Prescription </li>
              <li>2.Receive a confirmation call</li>
              <li>3.Delivery at your door step</li>
            </ol>
          </div> 
          </div> 


          
        <div className="h-full w-[36px] hidden lg:flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full aspect-square p-3 rounded bg-white bg-opacity-50"
            viewBox="0 0 9.621 16.243"
          >
            <path
              id="chevron-left"
              d="M9,18l6-6L9,6"
              transform="translate(-6.879 -3.879)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CoverImageCtn;
