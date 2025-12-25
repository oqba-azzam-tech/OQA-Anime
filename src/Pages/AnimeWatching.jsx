import { FaPaperPlane } from "react-icons/fa";
import Comment from "../Components/Comment"
import SectionHead from "../Components/section.header"
import Breadcrumb from "../Components/BreadCrumb";
import Recomnded from "../Components/Recomnded";


const AnimeWatching = () => {

         const PopularAnime = [
    {
        animeName: "One Punch Man",
        episodeNum: "24/24",
        viewsNum: 28500,
        comments: 235,
        sort: ["Action", "Comedy", "Superhero"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.KQL3V31YV-FxRp6OwKxo9wHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Code Geass",
        episodeNum: "50/50",
        viewsNum: 27500,
        comments: 248,
        sort: ["Action", "Mecha", "Psychological"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.I4FC-nhixeTeZkhsgbtaGAHaJ4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Steins;Gate",
        episodeNum: "24/24",
        viewsNum: 24500,
        comments: 198,
        sort: ["Sci-Fi", "Thriller", "Drama"],
        animePic: "https://th.bing.com/th/id/OIP.2zeceKrpzWgGLZXCCsz-lgHaLH?w=204&h=306&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
    },
    {
        animeName: "Re:Zero",
        episodeNum: "50/50",
        viewsNum: 31500,
        comments: 278,
        sort: ["Fantasy", "Drama", "Psychological"],
        animePic: "https://th.bing.com/th/id/OIP.k6OR54kWCdM-9k6kZqL5wgHaLH?w=129&h=194&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
    },
    {
        animeName: "Tokyo Ghoul",
        episodeNum: "48/48",
        viewsNum: 29500,
        comments: 265,
        sort: ["Action", "Horror", "Supernatural"],
        animePic: "https://th.bing.com/th/id/OIP.6RRzwCoKNJeM6ZXNZVonVQHaKh?w=208&h=296&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
    },
    {
        animeName: "Dr. Stone",
        episodeNum: "47/47",
        viewsNum: 22800,
        comments: 192,
        sort: ["Adventure", "Sci-Fi", "Comedy"],
        animePic: "https://tse3.mm.bing.net/th/id/OIP.vrX_dyWgaBH_5-1vcvnx8QHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
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
                            { name: "Anime Watching", path: "/animewatching" },
                            { name: "Death Parade", path: "/animedetails" },
                            { name: "E 4", path: "/" },
                            ]}/>
                            
            </div>

            <div className="Anime-Ep my-[40px]">
                  <video controls poster="https://imgs.search.brave.com/d07NjvFzT6q-yz57SICUXZXGM4jPKaFGfiMHufDfdFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE5MDEx/ODYuanBn" width="100%" height="auto" className="rounded-[5px]">

                    <source src="https://youtu.be/Ca5Tf5BDSYI?si=MWa5TL_JIyDcdn0Q" type="video/mp4" />
                     DOES NOT SUPPORTED !
                </video> 

            </div>

            <div>

                <div className="text-white-1 mb-[30px]">
                    <SectionHead title={"Episodes "} size={20}/>
                </div>

                <div className="flex flex-wrap gap-[20px]">
                {[...Array(12)].map((_, i) => (
                    <span className="flex cursor-pointer hover:bg-white hover:text-black duration-400  mx-[10px] bg-white/20 rounded-[4px] py-[15px] px-[25px] ">
                        Ep {i+1}
                    </span>))}
                </div>
            </div>
            
            <div className=" flex  max-[768px]:flex-col gap-[30px] my-[30px]">
                
                <div className="basis-[60%]">
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
                        <button  className=" bg-primary cursor-pointer uppercase flex items-center gap-[10px] py-[10px] px-[30px] rounded-[4px] " >
                            <FaPaperPlane /> Send 
                        </button>
                    </div>

                        
                </div>
                

                <div className="">
                    <SectionHead title={"recomended"} size={30}/>

                    <div className="flex flex-col max-[767px]:grid max-[767px]:grid-cols-2 max-[710px]:grid-cols-1 gap-[20px] my-[40px] ">
        
                        {PopularAnime.map( ( e ,  i ) => <Recomnded animeName={e.animeName} animePic={e.animePic} viewsNum={e.viewsNum} sort={e.sort} key={i}/>)}
                    </div>
                </div>
                
            </div>
        </div>

    </section>
}

export default AnimeWatching