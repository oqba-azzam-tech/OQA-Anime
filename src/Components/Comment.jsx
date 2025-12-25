import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const Comment = ({name , date , comment , img , wLike=true}) => {


    return <div className="my-[20px] w-fit flex max-[700px]:flex-col gap-[30px]  max-[700px]:px-[10px] ">

        <div className="w-[80px] h-[80px] rounded-[50%] overflow-hidden ">
            <img src={img} className="object-cover w-full h-full" alt="pirson pfp" />
        </div>

        
            <div className=" flex flex-col gap-[20px] max-[700px]:gap-[5px]">
              
                <h4 className="text-[25px] max-[900px]:text-[16px] max-[700px]:text-[10px]">{name}</h4>
                <p className="text-gray-3 text-[13px] leading-[20px] max-w-[600px] max-[900px]:text-[16px] max-[700px]:text-[10px]">{comment}</p>
                <div className=" w-full flex justify-between">
                     
                {wLike? <div className="flex gap-[20px] max-[900px]:gap-[5px] ">
                    <a href="" className="flex gap-[10px] items-center bg-white-2 rounded-[3px] px-[20px] hover:bg-primary text-[20px]  max-[900px]:text-[16px] max-[900px]:px-[10px] max-[700px]:text-[8px]">
                        Like <AiFillLike className=" max-[900px]:text-[13px] max-[700px]:text-[8px] max-[700px]:hidden" />
                    </a>

                    <a href="" className="flex gap-[10px] items-center bg-white-2 rounded-[3px] px-[20px] hover:bg-primary text-[20px]  max-[900px]:text-[16px] max-[900px]:px-[10px] max-[700px]:text-[8px]">
                         Replay <FaRegCommentDots className=" max-[900px]:text-[13px] max-[700px]:text-[8px] max-[700px]:hidden"/>
                    </a>
                </div> : ""}

                 <p className="text-gray-3 text-[13px] pl-[5px]">{date}</p>
                </div>

                

            </div>
            <div className=""></div>
        
    </div>
}

export default Comment
