import React from 'react'

const Menu = () =>{
    const itemList = ['MEDICINES', '|', 'COVID-19', '|', 'AYURVEDA', '|', 'CARE PLAN']
    return <div className='flex gap-2'>{itemList.map((val, idx) =>{
        return <div className='text-[12px] font-bold' key={idx}>{val}</div>
    })}</div>
}

export default Menu