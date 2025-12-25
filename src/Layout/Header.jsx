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
                    <IoIosCloseCircleOutline className="text-[50px] max-[900px]:text-4xl max-[500px]:text-3xl max-[350px]:text-[16px] text-primary/50 hover:text-primary duration-300" />
                </div>
                <input type="text" className=" duration-300 border-b hover:border-primary  border-primary/50 text-gray-3 max-[900px]:text-4xl max-[500px]:text-3xl max-[350px]:text-[16px] text-6xl p-[20px] outline-none  hover:placeholder:text-primary placeholder:text-primary/50" placeholder="Search Here . . ." />
        </div>

        <header className="header-links sticky top-0 z-[1000] bg-back-layout  w-full mb-[30px]  max-[1101px]:py-[5px] " id="Header">
            <div className="center-cont flex  max-[990px]:flex-row max-[750px]:justify-between  max-[900px]:gap-[10px] justify-between items-center ">

                <div className="font-bold">
                    <Logo/>
                </div>
                
                <div className="">

                    <EnhancedHeaderNavigation />

                </div>

                <div className="flex gap-[10px] text-[20px] max-[750px]:text-[15px] max-[500px]:text-[10px] ">

                    <div onClick={() => toggleSearch()} className="cursor-pointer" >
                        <VscSearch  />
                    </div>

                    <div >
                        <Link to="/login" >
                        <HiUser  />
                        </Link>
                    </div>

                </div>

                
            </div>
        </header>
    </>
}

export default Header
