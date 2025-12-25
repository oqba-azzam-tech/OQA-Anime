

const SignBtn = ({signMethod , icon , bgColor}) => {

    return <div 
    className={`cursor-pointer relative flex gap-[20px] items-center justify-center font-bold text-[16px]  py-[12px] px-[30px] `} style={{ backgroundColor:bgColor }}>
            <button className="max-[1000px]:text-[16px]">
                <span className="mr-[20px] ">
                {icon}
                </span>
                
                <a className="uppercase ml-[20px] tracking-[3px] ">
                sign up with {signMethod}
                </a>
            </button>
         </div>
}

export default SignBtn

