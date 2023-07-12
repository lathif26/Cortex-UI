import React, {useState} from 'react';
import Menu from './Menu';
import NeedHelp from './NeedHelp';
import DownloadApp from './DownloadApp';

const Navbar = () =>{
    const [toggle, setToggle] = useState(false);
    const itemList = ['MEDICINES',  'COVID-19',  'AYURVEDA',  'CARE PLAN'];
    return <>
   {toggle ? <div className='lg:hidden flex flex-col gap-8 absolute top-0 left-0 w-screen h-screen bg-[#FFF3D6] justify-center items-center z-50'>
        <div className="absolute top-[50px] right-[50px] text-xl" onClick={()=>{
            setToggle(false)
        }}>X</div>
        {itemList.map((val, idx) =>{
            return <div className='text-[14px] font-bold' key={idx}>{val}</div>
        })}
        </div>: null}
    
    <div className="w-full h-[40px] bg-[#f6ab01] px-8 lg:px-14 flex justify-between items-center overflow-x-hidden">
        <div className='flex justify-center items-center gap-10'>
            <Menu toggle={toggle} setToggle={setToggle} />
            <NeedHelp/>
        </div>
        <DownloadApp />
        
    </div></>
}

export default Navbar