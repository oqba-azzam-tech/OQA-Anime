

const Inputs = ({placHolder , inputType="text" , icon}) =>  {

    return <div className="input-cont bg-white-1 text-gray-3 flex items-center gap-[20px] p-[10px] mb-[20px]"> 
                            
                {icon}
                <div className="w-[2px] h-[30px] bg-gray-3"></div>                     
                <input type={inputType} className='text-black outline-0' placeholder={placHolder} />
            </div>
}

export default Inputs