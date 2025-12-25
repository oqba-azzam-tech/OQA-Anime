import { IoIosArrowBack, IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowDropup } from "react-icons/io";

const PageNumber = () => {


    return <div>
        <ul className="flex gap-[10px] items-center">

        

            <li className="flex items-center justify-center border-white-1  hover:border-primary border w-[40px] h-[40px] rounded-[50%]">
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">1</a>
            </li>

            <li>
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">2</a>
            </li>

            <li>
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">3</a>
            </li>

            <li>
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">4</a>
            </li>

            <li>
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">5</a>
            </li>

            <li>
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">. . . .</a>
            </li>

            <li>
                <a href="" className="text-gray-3 text-[20px] hover:text-primary ">
                    <IoIosArrowDropright />
                </a>
            </li>

            

        </ul>
    </div>
}

export default PageNumber