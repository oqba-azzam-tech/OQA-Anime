import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaFacebookF, FaGoogle, FaXTwitter } from 'react-icons/fa6';
import SignBtn from "../Components/SignBtn";
import Banner from "../Components/Banner";
import Inputs from "../Components/Inputs";


const Login = () => {

    const signMethodArr = [
        {
            method : "Facebook", 
            icon : <FaFacebookF className="absolute top-4 left-14 text-white-1"/> , 
            bgColor: "rgb(1, 101, 225)"
        },
        {
            method : "google", 
            icon : <FaGoogle className="absolute top-4 left-14 text-white-1"/> , 
            bgColor: "red"
        },
         {
            method : "X", 
            icon : <FaXTwitter className="absolute top-4 left-14 text-white-1"/> , 
            bgColor: "cornflowerblue"
        },
    ]

    const inputArr = [
        {
            placeHolder : "Email address" ,
            type : "text",
            icon :<IoMdMail className="text-[35px] p-[5px]"/>
        },
        {
            placeHolder : "Password" ,
            type : "Password",
            icon :<MdLock className="text-[35px] p-[5px]" /> 
        },
    ] 


    return <section className=" new-font" >

        <div className="new-font">
            <Banner action={"Login"} pic={"https://wallpapercave.com/wp/wp1991623.png"}/>
        </div>



        <div className=" container-Login center-cont max-[951px]:flex-col flex justify-center flex-wrap gap-[30px]">
            
            <div className="log-in basis-[40%] px-[20px]">

                <h3 className="text-[30px] font-bold mb-[30px] ">Login</h3>

                <form action="">

                    {inputArr.map( (e , i) => <Inputs icon={e.icon} placHolder={e.placeHolder} inputType={e.type} key={i}/> )}

                    <div className="flex justify-between items-center gap-[20p]" >
                        <button className="uppercase cursor-pointer font-bold tracking-[3px] text-[13px] bg-primary py-[12px] px-[30px] max-[1001px]:px-[13px] max-[1001px]:py-[9px]">
                            login now 
                        </button>
                        <a href="#" className="max-[1001px]:text-[13px] text-[20px]" >Forgot Your Password?</a>
                    </div>

                </form>

            </div>
            
            <div className="Register-Now basis-[40%] mb-[30px] text-center flex flex-col items-center justify-center " >
                <h3 className="text-[30px] font-bold mb-[30px] ">Dont’t Have An Account?</h3>
                <div className="flex justify-between items-center gap-[20p]" >
                        <button className="uppercase cursor-pointer font-bold tracking-[3px] text-[13px] bg-primary py-[12px] px-[30px]">
                            Register Now 
                        </button>
                    </div>
            </div>
            
            <div className="sign-in basis-[40%]">

                <h3 className="text-center mb-[30px]">OR</h3>

               <div className="flex flex-col gap-[20px] " >

                        {signMethodArr.map((e , i) => <SignBtn bgColor={e.bgColor} icon={e.icon} signMethod={e.method} key={i}/>)}

                    </div>
            </div>

        </div>

    </section>
}

export default Login 