import { FaRegCalendar } from "react-icons/fa6";

const BlogPic = ({size="400" , basis , pic , name , date}) => {

    return <div className={` relative  flex justify-center items-center`} 
            style={{ 
            width: `${size}px`, 
            height: `${size}px` ,
            flexBasis: basis? `98%` : `49%` }}>
            {/* <img src={pic} alt="" className="object-cover w-full h-full" /> */}
            <img 
                    src={pic} 
                    alt={name} 
                    className="object-cover w-fit h-fit" 
                />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40"></div>

            <div className="absolute  h-full w-full flex flex-col justify-end items-center text-white-1 p-[10px] ">

                <h3 className="flex gap-[10px] text-center">
                   <FaRegCalendar className="text-primary" /> {date}
                </h3>
                <a href="#" className="text-center" >
                    {name}
                </a>

            </div>

    </div>
}

export default BlogPic