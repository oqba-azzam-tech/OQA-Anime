import TopViews from "../Sectiones/TopViews"
import AnimeSection from "../Sectiones/AnimeSection"
import Swiper from "../Components/Swiper"
import SectionHead from "../Components/section.header";
import Recomnded from "../Components/Recomnded";


const Home = () => {

  const SwiperAnime = [
    {
        animeName: "Attack on Titan",
        img: "https://wallpapercave.com/wp/wp8326458.jpg",
        date: "2013 - 2023",
        sort: "Action, Drama, Fantasy"
    },
    {
        animeName: "Demon Slayer",
        img: "https://cdn.antaranews.com/cache/1200x800/2025/03/12/DSIC_DateAnnouncementAsset_KV_2x3_EN_Generic_Working-File.jpg",
        date: "2019 - Present",
        sort: "Action, Fantasy, Supernatural"
    },
    {
        animeName: "Jujutsu Kaisen",
        img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/jujutsu-kaisen-season-2-shibuya-incident-poster-cropped.jpg",
        date: "2020 - Present",
        sort: "Action, Supernatural, Horror"
    },
    {
        animeName: "My Hero Academia",
        img: "https://th.bing.com/th/id/R.e0cd3828f75f1c639da136442a700c01?rik=lo800AAcUeFOjA&pid=ImgRaw&r=0",
        date: "2016 - Present",
        sort: "Action, Superhero, School"
    },
    {
        animeName: "One Piece",
        img: "https://wallpaperaccess.com/full/17367.jpg",
        date: "1999 - Present",
        sort: "Adventure, Fantasy, Action"
    }
];

    const TrindAnime = [
        {animeName: "Attack on Titan", episodeNum: "75/75", viewsNum: 25000, comments: 184, sort: ["Action", "Drama", "Fantasy"], animePic: "https://tse4.mm.bing.net/th/id/OIP.bP6a2JMH-8yCOto99kjfYQHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {animeName: "Demon Slayer", episodeNum: "55/55", viewsNum: 1800, comments: 15, sort: ["Action", "Supernatural", "Adventure"], animePic: "https://tse1.mm.bing.net/th/id/OIP.RMQhocm_Zx0g7crHtZ2CjgHaJR?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {animeName: "My Hero Academia", episodeNum: "113/113", viewsNum: 22000, comments: 198, sort: ["Action", "Superhero"], animePic:"https://tse1.mm.bing.net/th/id/OIP.51HCXO5Xzk0nx6_l20En1QAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {animeName: "Jujutsu Kaisen", episodeNum: 47, viewsNum: 1500, comments: 14, sort: ["Action", "Supernatural", "School Life"], animePic: "https://tse2.mm.bing.net/th/id/OIP.tlsbFyGI_6tO2u43eVGDdQHaKz?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {animeName: "Your Lie in April", episodeNum: 22, viewsNum: 8500, comments: 92, sort: ["Drama", "Romance", "Music"], animePic: "https://tse2.mm.bing.net/th/id/OIP.sect_MOO94DLvhABdm0ApQHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
        {animeName: "Haikyuu!!", episodeNum: 85, viewsNum: 12500000, comments: 132, sort: ["Sports", "School Life", "Comedy"], animePic: "https://tse4.mm.bing.net/th/id/OIP.kzKu2KwHEn_insNwyhAtVAHaLG?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"},
       
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

    const RecentlyAddedAnime = [
    {
        animeName: "Attack on Titan: The Final Season",
        episodeNum: "28/28",
        viewsNum: 42500,
        comments: 385,
        sort: ["Action", "Drama", "Fantasy"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.A4NQaOVMWh_ZVQJhQtjiVwHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        addedDate: "2023-11-15",
        isNew: true
    },
    {
        animeName: "Kiznaiver",
        episodeNum: "12/12",
        viewsNum: 12500,
        comments: 95,
        sort: ["Sci-Fi", "Drama", "Psychological"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.bCQ-bCcTZr_UWogLagYWsgHaK_?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3https://tse4.mm.bing.net/th/id/OIP.bCQ-bCcTZr_UWogLagYWsgHaK_?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        addedDate: "2024-01-10",
        isNew: true
    },
    {
        animeName: "Hell's Paradise",
        episodeNum: "13/13",
        viewsNum: 28500,
        comments: 225,
        sort: ["Action", "Fantasy", "Supernatural"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.sTXg5JPLdQi5GR4IatKruwHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        addedDate: "2024-02-05",
        isNew: true
    },
    {
        animeName: "Oshi no Ko",
        episodeNum: "11/11",
        viewsNum: 38500,
        comments: 315,
        sort: ["Drama", "Mystery", "Slice of Life"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.mS67bII9XgqsBTTf85R_AQHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        addedDate: "2024-01-25",
        isNew: true
    },
    {
        animeName: "Zom 100: Bucket List of the Dead",
        episodeNum: "12/12",
        viewsNum: 24500,
        comments: 195,
        sort: ["Comedy", "Horror", "Adventure"],
        animePic: "https://tse3.mm.bing.net/th/id/OIP.zaeTpPO6FqD7-kdgOpMANQHaLG?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        addedDate: "2024-02-15",
        isNew: true
    },
    {
        animeName: "Undead Unluck",
        episodeNum: "15/24",
        viewsNum: 18500,
        comments: 165,
        sort: ["Action", "Comedy", "Supernatural"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.SaIJq7h3gLkNGPPSbBAd-gHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        addedDate: "2024-02-20",
        isNew: true
    }
];

    const LiveActionAnime = [
    {
        animeName: "Tokyo Ghoul",
        episodeNum: "Live Action Movie",
        viewsNum: 18500,
        comments: 145,
        sort: ["Action", "Fantasy", "Adventure"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.S5QLv5rFOpIGsgBzJq10sAHaKf?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        liveActionYear: 2017,
        rating: 6.2
    },
    {
        animeName: "Death Note",
        episodeNum: "Live Action Movie",
        viewsNum: 32500,
        comments: 285,
        sort: ["Thriller", "Supernatural", "Psychological"],
        animePic: "https://tse2.mm.bing.net/th/id/OIP.aBC0RA3B6vdAk7PtRCYAMwHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        liveActionYear: 2017,
        rating: 4.5
    },
    {
        animeName: "Attack on Titan",
        episodeNum: "Live Action Movies",
        viewsNum: 27500,
        comments: 225,
        sort: ["Action", "Horror", "Fantasy"],
        animePic: "https://th.bing.com/th/id/R.ae6e5571e60f2cba89234d2471fbdebc?rik=SDn5Fe%2fR1Hh%2bhQ&riu=http%3a%2f%2fi966.photobucket.com%2falbums%2fae145%2fockoala%2fManga%2fynumi.jpg&ehk=dFZVCkDIsMVWqq%2bhH3lGcWhV50oUHT%2b4W8LdaMm7zhc%3d&risl=&pid=ImgRaw&r=0",
        liveActionYear: 2015,
        rating: 5.0
    },
    {
        animeName: "Bleach",
        episodeNum: "Live Action Movie",
        viewsNum: 19500,
        comments: 168,
        sort: ["Action", "Supernatural", "Fantasy"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.5wXKLEaUtcENZrRjD9wlEAHaKe?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        liveActionYear: 2018,
        rating: 6.3
    },
    {
        animeName: "Rurouni Kenshin",
        episodeNum: "5 Live Action Movies",
        viewsNum: 42500,
        comments: 345,
        sort: ["Action", "Historical", "Drama"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.oQWICzvfvIebstWhKUMU_AHaKj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        liveActionYear: 2012,
        rating: 7.9
    },
    {
        animeName: "Alice in Borderland",
        episodeNum: "2 Seasons",
        viewsNum: 68500,
        comments: 425,
        sort: ["Thriller", "Survival", "Sci-Fi"],
        animePic: "https://tse3.mm.bing.net/th/id/OIP.0f-JWHifs-YLcr2rnLSCoAHaK9?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        liveActionYear: 2020,
        rating: 7.6
    }
];



    return <section className="HOME-PAGE ">
            
            <div className="center-cont  ">

                <div className="Slider-anime my-[30px]" >
                    <Swiper AnimeArray={SwiperAnime}/>
                </div>

               
                <div className="flex flex-col min-[991px]:flex-row gap-[50px] mt-[40px]" >
                    <div >
                        <AnimeSection SecTitle={"Trending Now"} animeArray={TrindAnime}/>
                        <AnimeSection SecTitle={"Popular Shows"} animeArray={PopularAnime}/>
                        <AnimeSection SecTitle={"Recently Added Shows"} animeArray={RecentlyAddedAnime}/>
                        <AnimeSection SecTitle={"Live Action"} animeArray={LiveActionAnime}/>
                    </div>
                    <div className="flex flex-col max-[991px]:flex-row max-[991px]:justify-between max-[741px]:flex-col" >
                        <TopViews/>

                        <div className="flex flex-col  gap-[20px] my-[40px] ">
                            
                            <SectionHead title={"New Comment"} size={15}/>

                            {PopularAnime.map( ( e ,  i ) => <Recomnded animeName={e.animeName} animePic={e.animePic} viewsNum={e.viewsNum} key={i} sort={e.sort}/>)}
                        </div>
                    </div>
                </div>
                    
            </div>
    </section>
}

export default Home