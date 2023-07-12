import Logo from '../../assets/MEDDTODAY/MEDDTODAY@2x.png';
import SearchIcon from '@mui/icons-material/Search';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';


const TitleBar = () =>{
    return <div className="w-full bg-white flex flex-col lg:flex-row justify-between items-center gap-6 px-3 lg:px-14 overflow-x-hidden opacity-100 shadow-md">
        <div className="flex grow h-[80px] lg:h-[120px] items-center justify-between gap-6">
            <div className='h-[80%]'><img className="h-full" src={Logo} alt="Logo"/></div>
        
            <div className='flex grow h-[48px] py-4 px-4 gap-4 border-[#ee3124] border-[2px] rounded-full items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className="h-[24px] aspect-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="#F6AB01" width="24" height="24">
                            <path d="M12 2C8.14 2 5 5.14 5 9c0 4.25 7 13 7 13s7-8.75 7-13c0-3.86-3.14-7-7-7zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <div  className='flex items-center justify-center text-[14px]'>Chennai</div>
                    <div className='flex items-center justify-center h-[12px] aspect-square'>
                        <svg xmlns="http://www.w3.org/2000/svg"  className="w-full h-full" width="16.243" height="9.621" viewBox="0 0 16.243 9.621">
                            <path id="chevron-down" d="M6,9l6,6,6-6" transform="translate(-3.879 -6.879)" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        </svg>
                    </div>
                </div>

                <div className='hidden lg:flex items-center justify-center text-[12px] text-neutral-600'>Search for Medicines and Health Products</div>
                <div  className='flex items-center justify-center h-[24px] aspect-square'><SearchIcon/></div>
            </div>
        </div>
        <div className='flex lg:flex-col gap-2 bg-[#00000029] px-4 py-2 rounded-md'>
            <div className='font-semibold text-[14px]'>ORDER WITH PRESCRIPTION</div>
            <div className="flex justify-start items-center gap-2">
                <TextSnippetIcon/>
                <div className="h-[90%] lg:h-[30px] px-6 bg-[#ee3124] rounded-full flex justify-center items-center text-center text-[12px] text-white font-semibold">UPLOAD NOW</div>
            </div>
        </div>

    </div>
}

export default TitleBar