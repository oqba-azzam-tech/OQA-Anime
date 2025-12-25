import TopViews from "../Sectiones/TopViews"
import Breadcrumb from "../Components/BreadCrumb"
import AnimeSection from "../Sectiones/AnimeSection"
import PageNumber from "../Components/PageNumber"
import FilterDropdown from "../Components/FilterDropdown "
import SectionHead from "../Components/section.header";
import Recomnded from "../Components/Recomnded";


const Categories = () => {

       const RomanceAnime = [
    {
        animeName: "Your Lie in April",
        episodeNum: "22/22",
        viewsNum: 18500,
        comments: 132,
        sort: ["Romance", "Drama", "Music"],
        animePic: "https://tse3.mm.bing.net/th/id/OIP.HqmOKBR-GMBGq1gPcRUeQgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Toradora!",
        episodeNum: "25/25",
        viewsNum: 22000,
        comments: 156,
        sort: ["Romance", "Comedy", "Slice of Life"],
        animePic: "https://th.bing.com/th/id/R.c8e94d030d5b7a3ae21f7e3f4f21498a?rik=gRxDVtI2NLnuHw&pid=ImgRaw&r=0"
    },
    {
        animeName: "Kaguya-sama: Love is War",
        episodeNum: "37/37",
        viewsNum: 32000,
        comments: 245,
        sort: ["Romance", "Comedy", "Psychological"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.ThVGABDTK2vfNGg2Vx0ceQHaKb?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Clannad",
        episodeNum: "47/47",
        viewsNum: 19500,
        comments: 128,
        sort: ["Romance", "Drama", "Slice of Life"],
        animePic: "https://tse2.mm.bing.net/th/id/OIP.ogd9HeNPtP4K02AOod22wAHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Fruits Basket",
        episodeNum: "63/63",
        viewsNum: 28000,
        comments: 198,
        sort: ["Romance", "Fantasy", "Drama"],
        animePic: "https://th.bing.com/th/id/OIP.GJ5tPYi9xzjuAux1ev45-wHaLQ?w=202&h=308&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
    },
    {
        animeName: "Horimiya",
        episodeNum: "13/13",
        viewsNum: 27500,
        comments: 187,
        sort: ["Romance", "Comedy", "Slice of Life"],
        animePic: "https://th.bing.com/th/id/R.b76a69776c6eecdaac913806d97a6bd0?rik=f%2bCU%2b%2bvljnxjww&pid=ImgRaw&r=0"
    },
    {
        animeName: "Rascal Does Not Dream of Bunny Girl Senpai",
        episodeNum: "13/13",
        viewsNum: 26500,
        comments: 174,
        sort: ["Romance", "Supernatural", "Drama"],
       animePic: "https://th.bing.com/th/id/OIP.GJ5tPYi9xzjuAux1ev45-wHaLQ?w=202&h=308&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
    },
    {
        animeName: "Nana",
        episodeNum: "47/47",
        viewsNum: 16800,
        comments: 121,
        sort: ["Romance", "Drama", "Music"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.UYDqMqMxoLx1Fb5Kh6RxowAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Sword Art Online",
        episodeNum: "96/96",
        viewsNum: 45000,
        comments: 312,
        sort: ["Romance", "Action", "Adventure", "Fantasy"],
        animePic: "https://th.bing.com/th/id/OIP.HxjXexMXSCyeBDY3dgn1YAHaLH?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "My Dress-Up Darling",
        episodeNum: "12/12",
        viewsNum: 29500,
        comments: 210,
        sort: ["Romance", "Comedy", "Slice of Life"],
       animePic: "https://tse1.mm.bing.net/th/id/OIP.ThVGABDTK2vfNGg2Vx0ceQHaKb?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];

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

     return <section>
        <div className="center-cont   ">

            <div>
                <Breadcrumb  items={[ { name: "Anime", path: "/" },
                            { name: "Categories", path: "/categories" },
                            ]}/>
            </div>

            <div>
                <FilterDropdown/>
            </div>
          
           <div className="flex flex-col min-[991px]:flex-row gap-[50px] mt-[40px]" >
                    <div >
                        <AnimeSection SecTitle={"Romance"} animeArray={RomanceAnime} viewIt={false}/>
                    </div>
                    <div className="flex flex-col max-[991px]:flex-row max-[991px]:justify-between " >
                        <TopViews/>

                        <div className="flex flex-col  gap-[20px] my-[40px] ">
                            
                            <SectionHead title={"New Comment"} size={15}/>

                            {PopularAnime.map( ( e ,  i ) => <Recomnded animeName={e.animeName} animePic={e.animePic} viewsNum={e.viewsNum} key={i} sort={e.sort}/>)}
                        </div>
                    </div>
                </div>
            
            <div className="flex gap-[20px] text-[16px]">
                <PageNumber/>
            </div>
            
        </div>
        
    </section>
}

export default Categories

/*
<div className="flex gap-[20px] text-[16px] ">
                <PageNumber/>
*/