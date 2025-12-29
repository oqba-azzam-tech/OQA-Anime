import { FaEye } from 'react-icons/fa';

const TopCard = ({name , episode , views,pic}) => {

    return <div className="relative rounded-[5px] h-[150px] w-[300px] max-[600px]:max-w-[200px]">
            <div 
            className="absolute inset-0 bg-cover "
            style={{ backgroundImage: `url(${pic})` }}>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-4">
               
                <div className="flex justify-between w-full">
                <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                    {episode}
                </span>
                 <span className=" flex gap-[4px] px-2 py-1 bg-black/70 text-white text-xs rounded">
                        <FaEye/> {views}
                    </span>

                </div>
            
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="flex justify-between w-full items-end z-10 ">
                    <span className="px-2 py-1 font-semibold text-white text-[20px] rounded">
                        {name}
                    </span>
                   
                </div>
             </div>

    </div>
}

export default TopCard