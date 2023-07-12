import React from 'react';
import Menu from './Menu';
import NeedHelp from './NeedHelp';
import DownloadApp from './DownloadApp';

const Navbar = () =>{
    return <div className="w-full h-[40px] bg-[#f6ab01] px-14 flex justify-between items-center overflow-x-hidden">
        <div className='flex justify-center items-center gap-10'>
            <Menu/>
            <NeedHelp/>
        </div>
        <DownloadApp />
        
    </div>
}

export default Navbar