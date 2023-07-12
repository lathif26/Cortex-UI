import React from "react";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const DownloadApp = () =>{
    return <div className="flex justify-center items-center gap-3">
        <div className="h-[30px] px-6 bg-white rounded-full flex justify-center items-center text-[9px]">
            <div className="h-full flex justify-center items-center aspect-square mr-2"><PhoneIphoneIcon /></div>
            Download App
        </div>
        <div className="hidden lg:flex h-[30px] aspect-square rounded-full bg-white justify-center items-center">
            <FavoriteBorderOutlinedIcon />
        </div>
        <div className="hidden lg:flex h-[30px] aspect-square rounded-full bg-white justify-center items-center">< ShoppingCartOutlinedIcon/></div>
        <div className="hidden lg:flex h-[30px] aspect-square rounded-full bg-white justify-center items-center"><PermIdentityOutlinedIcon/></div>
    </div>
}

    export default DownloadApp