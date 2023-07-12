const MenuList = () =>{
    const MenuList = ["COVID Essentials", '|', "Diabetes", '|', "Eyewear", '|', "Ayush", "|", "Ayurvedic", "|", "Homeopathy", "|", "Fitness", '|', "Mom & Baby", "|", "Devices", "|", "Surgicals", "|", "Sexual Wellness", "|", "Treatments"]
    return <div className="w-full flex flex-wrap items-center gap-x-2 justify-center lg:justify-between  px-8 lg:px-24 py-2">
        {MenuList.map((val, idx) =>{
            return <div className="text-[12px] font-bold" key={idx}>{val}</div>
        })}
    </div>
}

export default MenuList