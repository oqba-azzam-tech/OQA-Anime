import Logo from "../Components/Logo.jsx"
import PagesLinks from "../Components/PagesLink.jsx"
import { IoIosArrowDropup } from "react-icons/io";


const Footer = () => {

    const Year = new Date().getFullYear()

    return <footer className="bg-back-layout relative py-[50px] mt-[100px]" >

        <div className="absolute left-[50%] top-[-10%] w-[50px] h-[50px] rounded-[50%] bg-primary border-2 border-back-layout flex justify-center items-center ">
            <a href="#Header" className="text-4xl"><IoIosArrowDropup /></a>
        </div>

        <div className="center-cont flex justify-between max-[1101px]:flex-col max-[1101px]:justify-center items-center gap-[20px]">

            <div className="">
                <Logo/>
            </div>

            <div className="flex max-[570px]:grid max-[570px]:grid-cols-2 ">
                <PagesLinks tail={true}/>
            </div>

            <div className=" flex flex-col items-end  ">
                <p className="text-gray-1 max-w-[250px] text-center">Copyright ©  {Year} All rights reserved | OQBA   by <br />
                <a href="https://oqa-portfolio-pyd3.onrender.com/" className="text-primary">OQA</a>
                </p>
            </div>

        </div>

    </footer>
}

export default Footer


