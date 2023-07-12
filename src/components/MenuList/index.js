const MenuList = () =>{
    const MenuList = ["COVID Essentials", '|', "Diabetes", '|', "Eyewear", '|', "Ayush", "|", "Ayurvedic", "|", "Homeopathy", "|", "Fitness", '|', "Mom & Baby", "|", "Devices", "|", "Surgicals", "|", "Sexual Welless", "|", "Treatments"]
    return <div className="w-full flex items-center justify-between h-[36px] px-24 overflow-x-hidden">
        {MenuList.map((val, idx) =>{
            return <div className="text-[12px] font-bold" key={idx}>{val}</div>
        })}
    </div>
}

export default MenuList