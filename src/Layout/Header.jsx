import Logo from "../Components/Logo";
import { VscSearch } from "react-icons/vsc";
import { HiUser } from "react-icons/hi2";
import EnhancedHeaderNavigation from "../Components/HeaderNavigation .jsx";
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";


const Header = () => {

     const [isSearchOpen, setIsSearchOpen] = useState(false); 
        const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return <>
        <div id="Header" className={`${isSearchOpen? "block" : "hidden"} duration-300  fixed z-[4000] bg-black w-full h-screen flex justify-center items-center `} >
                <div className="absolute top-[100px] cursor-pointer" onClick={() => toggleSearch()} >
                    <IoIosCloseCircleOutline className="text-[50px] text-primary/50 hover:text-primary duration-300" />
                </div>
                <input type="text" className=" duration-300 border-b hover:border-primary  border-primary/50 text-gray-3 text-6xl p-[20px] outline-none  hover:placeholder:text-primary placeholder:text-primary/50" placeholder="Search Here . . ." />
        </div>

        <header className="header-links sticky top-0 z-[1000] bg-back-layout  w-full mb-[30px]  max-[1101px]:py-[5px] " id="Header">
            <div className=" center-cont flex max-[1101px]:flex-col max-[1101px]:justify-center max-[1101px]:gap-[20px] justify-between items-center ">

                <div className="font-bold">
                    <Logo/>
                </div>
                
                <div className=" max-[777px]:hidden">

                    <EnhancedHeaderNavigation />

                </div>

                <div className="flex gap-[10px] text-[20px]">

                    <div onClick={() => toggleSearch()} className="cursor-pointer" >
                        <VscSearch />
                    </div>

                    <div >
                        <Link to="/login" >
                        <HiUser  />
                        </Link>
                    </div>

                </div>

                <div>
                    <div className="min-[777px]:hidden">
                        <EnhancedHeaderNavigation />
                    </div>
                    
                </div>
            </div>
        </header>
    </>
}

export default Header
