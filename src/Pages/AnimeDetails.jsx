import Breadcrumb from "../Components/BreadCrumb";
import TextRating from "../Components/TextRating";
import { FaDownload } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import TopViews from "../Sectiones/TopViews";
import Comment from "../Components/Comment";
import SectionHead from "../Components/section.header";
import { FaPaperPlane } from "react-icons/fa";

const AnimeDetails = () => {

    const animeDetails = [
    {
        id: 3,
        img : "https://tse4.mm.bing.net/th/id/OIP.YA8rE9L-DAseiih4qTtVfAHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        title: "Death Parade",
        english_title: "Death Parade",
        japanese_title: "デス・パレード",
        story: "Death Parade is a psychological thriller anime series that follows Decim, the bartender of the Quindecim bar, who oversees the Death Games between souls. The series explores themes of reincarnation and the afterlife, with each game revealing more about the deceased's true nature. The show is known for its intense storytelling, character development, and emotional depth, making it a standout title in the genre.",
        scores: "8.03",
        rating: "8.5 / 420 ratings",
        duration: "23 min per episode",
        quality: "HD 1080p",
        views: "1,235,678",
        type: "TV Series",
        studios: ["Madhouse"],
        date_start: "Jan 10, 2015",
        status: "Completed",
        genre: ["Drama", "Game", "Mystery"],
    }
];

    const peopleReviews = [
    {
        name: "Alex Johnson",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        time: "2 hours ago",
        comment: "Absolutely brilliant anime! The character development and plot twists kept me on the edge of my seat throughout. Highly recommend to any fantasy anime lover!"
    },
    {
        name: "Sarah Miller",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        time: "1 day ago",
        comment: "The animation quality is stunning and the soundtrack is perfect. I've watched it three times already and still find new details each time!"
    },
    {
        name: "David Chen",
        img: "https://randomuser.me/api/portraits/men/67.jpg",
        time: "3 days ago",
        comment: "This anime completely changed my perspective on the genre. The storytelling is masterful and the emotional depth is incredible. Can't wait for the next season!"
    },
    {
        name: "Emily Rodriguez",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        time: "1 week ago",
        comment: "The world-building is phenomenal! Every episode reveals more about this fascinating universe. The characters feel so real and relatable."
    },
    {
        name: "Marcus Wilson",
        img: "https://randomuser.me/api/portraits/men/75.jpg",
        time: "2 weeks ago",
        comment: "One of the best anime I've seen in years. The balance between action, drama, and character development is perfect. Already planning a rewatch!"
    }
];

    return <section>
        <div className="center-cont">
            <div>
                <Breadcrumb  items={[ { name: "Anime", path: "/" },
                            { name: "Categories", path: "/categories" },
                            { name: "Anime Details", path: "/animedetails" },
                            { name: "Death Parade", path: "/" },
                            ]}/>
            </div>
                    {/* anime detail ....*/}
            <div className=" flex flex-row max-[991px]:flex-col  gap-[30px]">

                <div className=" basis-[30%] ">
                    <img src={animeDetails[0].img} alt="anime pictur" />
                </div>

                <div className="basis-[70%] flex flex-col gap-[35px]">

                    <div className="flex justify-between  w-[90%]">
                        <div className="name-det">
                            <h3>{animeDetails[0].title}</h3>
                            <h4>{animeDetails[0].english_title} / {animeDetails[0].japanese_title}</h4>
                        </div>
                        <div className="rating1 ">
                            <TextRating value={4.5} />        
                        <span>{animeDetails[0]?.views} Votes</span>
                        </div>
                    </div>

                    <p className="anime-story max-w-[700px] text-[20px]">
                        {animeDetails[0].story}
                    </p>

                    <div className="anime-details grid grid-cols-1 min-[768px]:grid-cols-2">
                        <div className="">
                            <ul className="flex flex-col gap-[10px] text-[13px]">
                                <li className="uppercase">
                                    type :
                                    <span className=" ml-[30px]"> {animeDetails[0].type}</span>
                                    </li>
                                <li className="uppercase">
                                    studios : 
                                    <span className=" ml-[30px]"> {animeDetails[0].studios}</span>
                                    </li>
                                <li className="uppercase">
                                    Date Aired
                                    <span className=" ml-[30px]"> {animeDetails[0].date_start}</span>
                                    </li>
                                <li className="uppercase">
                                    status :
                                    <span className=" ml-[30px]"> {animeDetails[0].status}</span>
                                    </li>
                                <li className="uppercase flex items-center">
                                    genre :
                                    <span className=" ml-[30px] flex items-center gap-[3px] flex-wrap"> 
                                            {animeDetails[0].genre.map( (e , i) =>
                                                <span key={i} className=" text-[13px] ">{e},</span>)}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="flex flex-col gap-[10px] text-[13px]">
                                <li className="uppercase">
                                    scores :
                                    <span className=" ml-[30px]"> {animeDetails[0].scores}</span>
                                    </li>
                                <li className="uppercase">
                                    rating : 
                                    <span className=" ml-[30px]"> {animeDetails[0].rating}</span>
                                    </li>
                                <li className="uppercase">
                                   duration :
                                    <span className=" ml-[30px]"> {animeDetails[0].duration}</span>
                                    </li>
                                <li className="uppercase">
                                    quality :
                                    <span className=" ml-[30px]"> {animeDetails[0].quality}</span>
                                    </li>
                                <li className="uppercase">
                                    views :
                                    <span className=" ml-[30px] "> 
                                            {animeDetails[0].views}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="watch-down text-[25px] flex gap-[15px] items-center  max-[768px]:text-[16px]">
                        <a href="#" className="uppercase flex gap-[10px] items-center 
                        py-[10px] px-[20px] rounded-[4px] max-[768px]:p-[10px] bg-white/30 duration-300 hover:bg-primary">
                            <FaDownload />
                            down load
                        </a>
                        <a href="#" className="uppercase flex gap-[10px] items-center 
                        py-[10px] px-[20px] rounded-[4px] bg-white/30 duration-300 hover:bg-primary">
                            <MdPlayCircleOutline />
                            watch now
                        </a>
                    </div>
                </div>
                
                </div>
                    {/* Reviews & you might like... */}
                <div className=" flex max-[900px]:flex-col gap-[10px] my-[30px]">
                
                <div className="">
                    <div className="text-white-1 mb-[20px]">
                        <SectionHead title={"Reviews "} size={30}/>
                    </div>

                    {peopleReviews.map( (e , i) =>  <div className="bg-white-2  py-[10px] mb-[10px] rounded-[5px]">
                        <Comment key={i} img={e.img} name={e.name} comment={e.comment} wLike={false} date={e.time}/>
                    </div>)}

                    <div className="text-white-1 mt-[40px] mb-[30px]">
                        <SectionHead title={"Your Comment "} size={30}/>
                    </div>

                    <form action="">
                        <textarea name="message" placeholder="Your Message" rows="6" className="w-full bg-white outline-none px-4 py-3.5 text-black text-[15px] border-none rounded-[4px] placeholder:text-gray-500 min-h-[150px]">
                        </textarea>
                    </form>

                            <div className="mt-[20px]">
                                <button  className=" bg-primary uppercase flex items-center gap-[10px] py-[10px] px-[30px] rounded-[4px] " >
                                    <FaPaperPlane /> Send 
                                </button>
                            </div>

                        
                </div>
                
                <div className="">
                    <TopViews/>
                </div>
            </div>

        </div>
    </section>
}

export default AnimeDetails