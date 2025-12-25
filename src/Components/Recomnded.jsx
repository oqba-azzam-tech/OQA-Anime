import { FaEye } from "react-icons/fa"


const Recomnded = ({ animePic , viewsNum , sort , animeName }) => {

    return <div className="flex gap-[10px] ">
                <div className="w-[100px] h-[150px] rounded-[5px] overflow-hidden">
                    <img src={animePic} alt="Anime Picture" className="w-full h-full" />
                </div>
                <div className=" flex flex-col gap-[15px]">

                    <ul className="flex gap-[5px] text-[8px] text-white-1">
                        {sort.map((elem , i ) => <li key={i} className="px-[10px] py-[1px] bg-gray-2 rounded-[50px]">{elem}</li>)}
                    </ul>

                    <h3>{animeName}</h3>

                     <span className="flex items-center gap-[4px] px-2 py-1 text-white text-[10px]">
                    <FaEye className="text-[10px]"/>{viewsNum} Viewes
                    </span>
                </div>
            </div>
}


export default Recomnded