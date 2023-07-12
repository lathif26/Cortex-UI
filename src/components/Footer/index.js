import Heart from '../../assets/Heart/954528 (1).png';
import Lung from '../../assets/Lungs/1881195.png';
import Stomach from '../../assets/Stomach/655315.png';
import Eye from '../../assets/Eye/829117.png';
import Nose from '../../assets/Nose/4011806.png';
import Ear from '../../assets/Ear/3933415.png';
import Tooth from '../../assets/Tooth/2035058.png';
import Muscle from '../../assets/Arms/3904608.png';
import Liver from '../../assets/Liver/508849.png';
import Brain from '../../assets/Brain/1713596.png';

const Footer = () =>{
    const itemList = [{name: "Heart Care", src: Heart}, 
    {name: "Lung Care", src: Lung},
    {name: "Stomach Care", src: Stomach},
    {name: "Eye Care", src: Eye},
    {name: "Nose Care", src: Nose},
    {name: "Ear Care", src: Ear},
    {name: "Dental Care", src: Tooth},
    {name: "Muscle Care", src: Muscle},
    {name: "Liver Care", src: Liver},
    {name: "Brain Care", src: Brain},
                    ]

    return <div className='w-full py-8 px-24 flex justify-between items-center overflow-x-hidden'>
        {itemList.map((val, idx) =>{
            return <div className='flex flex-col w-[70px] gap-2'>
                <div className='w-full rounded-full border-[1px] p-4 border-[#f6ab01] bg-[#FFF3D6]'><img className="w-full" src={val.src} alt={val.name}/></div>
                <div className='text-[10px] font-semibold flex justify-center'>{val.name}</div>
            </div>
        })}
    </div>
}

export default Footer;