import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Menu = ({setToggle}) =>{
    const itemList = ['MEDICINES', '|', 'COVID-19', '|', 'AYURVEDA', '|', 'CARE PLAN'];
    return <>
   <div className="flex lg:hidden" onClick={() =>{
    setToggle(true);
   }}>    
        <MenuIcon />
   </div>

    <div className='hidden lg:flex gap-2'>
        {itemList.map((val, idx) =>{
            return <div className='text-[12px] font-bold' key={idx}>{val}</div>
        })}
        </div>
    </>
}

export default Menu