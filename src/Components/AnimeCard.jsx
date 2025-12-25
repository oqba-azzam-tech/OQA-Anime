import {FaComment, FaEye } from 'react-icons/fa';


const AnimeCard = ({name , episode , views , comments , sort=[] , pic}) => {

    return <div className="my-[40px] w-full max-w-[250px] min-h-[350px] mx-auto">

        <div className="relative duration-300 w-full h-full overflow-hidden rounded-[5px]">
            {/* الصورة كخلفية */}
            <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pic})` }}/>
  
  
            {/* المحتوى */}
            <div className="relative z-10 h-full flex flex-col justify-between p-4">
                {/* الجزء العلوي */}
                <div className="flex justify-between w-full">
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-semibold rounded-full">
                {episode}
                </span>
                </div>
            
                {/* الجزء السفلي */}
                <div className="flex justify-between w-full">
                
                    <span className="flex gap-[4px] px-2 py-1 bg-black/70 text-white text-xs rounded">
                        <FaComment/>{comments}
                    </span>
                    <span className="flex gap-[4px] px-2 py-1 bg-black/70 text-white text-xs rounded">
                        <FaEye/>{views}
                    </span>
                    
                </div>
            </div>
        </div>

        <div className="my-[10px] h-[50px]">
            <div className="h-[40px]">
                <ul className="flex flex-wrap gap-[5px] text-[10px] text-white-1">
                    {sort.map((e , i ) => <li key={i} className="px-[10px] py-[1px] bg-gray-2 rounded-[50px]">{e}</li>)}
                </ul>
            </div>
            <p className="text-white-1 text-[20px]">{name}</p>
        </div>

    </div>
}

export default AnimeCard