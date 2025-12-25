import { IoIosArrowDropright, IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaPinterest } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import Comment from "../Components/Comment";
import Breadcrumb from "../Components/BreadCrumb";



const BlogsDetail = () => {

     const signMethodArr = [
            {
                method : "Facebook", 
                icon : <FaFacebookF className=" text-white-1"/> , 
                bgColor: "rgb(1, 101, 225)"
            },
            {
                method : "Linkedin", 
                icon : <FaLinkedin className=" text-white-1"/> , 
                bgColor: "cornflowerblue"
            },
             {
                method : "X", 
                icon : <FaXTwitter className=" text-white-1"/> , 
                bgColor: "cornflowerblue"
            },
            {
                method : "Pintrest", 
                icon : <FaPinterest className=" text-white-1"/> , 
                bgColor: "crimson"
            },
        ]

        const animeArray =[
            {
                name : "Tobio-Nishinoya showdown" ,
                img : "https://themewagon.github.io/anime/img/blog/details/bd-item-1.jpg",
                desc : "In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment."
            },
            {
                name : "Nanatsu no Taizai: Kamigami No Gekirin" ,
                img : "https://themewagon.github.io/anime/img/blog/details/bd-item-2.jpg",
                desc : "In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment."
            },
            {
                name : "ID:Ianvaded:" ,
                img : "https://themewagon.github.io/anime/img/blog/details/bd-item-3.jpg",
                desc : "In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment."
            },
        ]

        const links = ["Healthfood" , "Sport" , "Game" , "Action"]

      const commentsArray = [
    {
        name: "NarutoFan99",
        date: "March 15, 2024",
        theComment: "Just finished watching Demon Slayer: Kimetsu no Yaiba and wow! The animation by Ufotable is absolutely breathtaking. The water breathing techniques visualization is on another level!",
        img: "https://themewagon.github.io/anime/img/blog/details/bd-item-1.jpg"
    },
    {
        name: "AnimeOtaku22",
        date: "March 12, 2024",
        theComment: "Attack on Titan's final season was a masterpiece! The way Isayama wrapped up the story, the philosophical questions about freedom and war... I'm still processing it all. What an emotional journey!",
        img: "https://themewagon.github.io/anime/img/blog/details/comment-1.png"
    },
    {
        name: "SakuraChan",
        date: "March 10, 2024",
        theComment: "Jujutsu Kaisen Season 2's Shibuya Incident arc had me on the edge of my seat! The character development, especially for Megumi and Nobara, was incredible. MAPPA really outdid themselves with the animation quality!",
        img: "https://themewagon.github.io/anime/img/blog/details/comment-2.png"
    },

  
]

    return<section>
        <div className="center-cont">
            <div className="text-center flex flex-col justify-center items-center gap-[40px] mb-[30px] " >
                <h3>
                    ACTION, MAGIC - 
                    <span className="text-gray-3">
                        March 08, 2020
                    </span>
                </h3>
                <h2 className="text-4xl max-w-[600px]">Anime for Beginners: 20 Pieces of Essential Viewing</h2>
                <div >
                    <ul className=" flex flex-wrap max-[700px]:grid max-[700px]:grid-cols-2 gap-[20px] ">
                        {signMethodArr.map( (e , i ) => <li key={i}
                         className="py-[10px] px-[20px]cursor-pointer">
                        
                        <a className="py-[10px] px-[50px] block text-[20px] max-[700px]:px-[80px]" style={{ backgroundColor:`${e.bgColor}` }}>
                            {e.icon} 
                        </a>
                        
                        </li> )}
                    </ul>
                </div>
            </div>

            <div >
                    <div className="mb-[30px]">
                    <img src="https://themewagon.github.io/anime/img/blog/details/blog-details-pic.jpg" alt="" />
                    </div>

                    <div className="max-w-[70%] mx-auto text-[17px] leading-[30px]">
                        <div className="mb-[30px]">
                            <p>As a result the last couple of eps haven’t been super exciting for me, because they’ve been more like settling into a familiar and comfortable routine.  We’re seeing character growth here but it’s subtle (apart from Shouyou, arguably).  I mean, Tobio being an asshole is nothing new – it’s kind of the foundation of his entire character arc.  Confronting whether his being an asshole is a problem for the Crows this directly is a bit of an evolution, and probably an overdue one at that, but the overall dynamic with Kageyama is basically unchanged.</p>
                        </div>

                        {animeArray.map( (e , i ) =><div key={i} className="max-[900px]:text-[16px] max-[550px]:text-[15px] mb-[30px] flex flex-col gap-[20px] ">
                            <h2 className="text-[30px] max-[900px]:text-[20px] max-[550px]:text-[15px]">{e.name}:</h2>
                            <div className="w-full h-full">
                            <img src={e.img}  alt="" />
                            </div>
                            <p>{e.desc}</p>
                        </div> )}

                        <div> 
                            <ul className="flex flex-wrap gap-[20px] mb-[40px]">
                                {links.map( (e , i ) => <a href="#" className="text-[14px] rounded-[3px] text-gray-3 bg-white-2 py-[5px] p-[10px]" key={i}> {e} </a> )}
                            </ul>
                        </div>

                        <div className="flex  items-center border-t border-b border-white-2 mb-[30px]">
                            <div className="basis-[50%] my-[40px]">
                                <a href="#" className="flex items-center  max-[720px]:text-[12px] gap-[10px]" >
                                    <span><IoIosArrowDropleft /></span>
                                     Building a Better LiA...
                                </a>
                            </div>

                            <div className="basis-[50%] my-[40px]">
                                <a href="#" className="flex items-center max-[720px]:text-[12px] gap-[10px]" >
                                     Mugen no Juunin: Immortal – 21 
                                    <span><IoIosArrowDropright /></span>
                                </a>
                            </div>
                        </div>

                        <div className="mb-[30px] border-b border-white-2 p-[30px]">

                            <div className="mb-[30px] ">
                                <h3 className="text-4xl"> Comments </h3>
                            </div>

                            {commentsArray.map( (e ,i ) => <Comment key={i} comment={e.theComment} date={e.date} img={e.img} name={e.name}/>)}
                        </div>

                        <div>
                            <div className="mb-[30px] ">
                                <h3 className="text-4xl max-[720px]:text-2xl"> Leave A Commnet </h3>
                            </div>

                            <div>
                                <form className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
                                    
                                    <div className="flex flex-col md:flex-row gap-4 w-full">
                                        <div className="flex-1">
                                            <input  type="text" placeholder="Your Name" className="w-full bg-white outline-none focus:outline-none px-4 py-3.5 text-black text-base border border-gray-300 rounded-[4px]  placeholder:text-gray-500"
                                            />
                                        </div>
                                        
                                        <div className="flex-1">
                                            <input type="email" placeholder="Your Email" className="w-full bg-white outline-none focus:outline-none px-4 py-3.5 text-black text-base border border-gray-300 rounded-[4px]  placeholder:text-gray-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <textarea 
                                            name="message" placeholder="Your Message" rows="6" className="w-full bg-white outline-none focus:outline-none px-4 py-3.5 text-black text-base border-gray-300 rounded-[4px] placeholder:text-gray-500 min-h-[150px]">
                                        </textarea>
                                    </div>

                                    <div>
                                        <input type="button" value="Send Message" className=" bg-primary uppercase py-[10px] px-[30px] rounded-[4px] " />
                                    </div>

                                </form>
                            </div>
                        </div>
                        
                    </div>

            </div>
        </div>
        
    </section>
}

export default BlogsDetail