import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AnimeCard from "../Components/AnimeCard";
import SectionHead from "../Components/section.header";

const AnimeSection = ( {animeArray=[] , SecTitle , viewIt = true}) => {

   

    return <div className="my-[70px] " >
        <div className="text-white-1 flex  items-center justify-between">
           <SectionHead title={SecTitle} size={30}/> 
           {viewIt? <span className="flex items-center gap-[20px] cursor-pointer">
           view all <FaArrowAltCircleRight/>
           </span> : <></> }
           
        </div>

        <div className="grid grid-cols-1 min-[575px]:grid-cols-2 min-[991px]:grid-cols-3 my-[20px] gap-[10px] ">

            {animeArray.map((e , i) => <AnimeCard comments={e.comments} episode={e.episodeNum} name={e.animeName} pic={e.animePic}
            views={e.viewsNum} key={i} sort={e.sort} /> )}

        </div>
    </div>

    }

export default AnimeSection