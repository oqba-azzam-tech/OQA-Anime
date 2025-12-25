import TopCard from "../Components/TopCard";
import SectionHead from "../Components/section.header";


const TopViews = () => {

    const TopAnime = [
    {
        animeName: "Naruto Shippuden",
        episodeNum: "500/500",
        viewsNum: 35000,
        comments: 245,
        sort: ["Action", "Adventure", "Fantasy"],
        animePic: "https://tse2.mm.bing.net/th/id/OIP.v80XS9LrL3h2uO9aO6-4tgHaJ4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Fullmetal Alchemist: Brotherhood",
        episodeNum: "64/64",
        viewsNum: 28000,
        comments: 210,
        sort: ["Action", "Adventure", "Drama"],
        animePic: "https://tse2.mm.bing.net/th/id/OIP.jFxxkQry3SAwb626-QhVvAHaKk?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Tokyo Revengers",
        episodeNum: "37/37",
        viewsNum: 15000,
        comments: 165,
        sort: ["Action", "Drama", "Supernatural"],
        animePic: "https://tse3.mm.bing.net/th/id/OIP.LTc70l4fajbncbqMLmzGNAHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Chainsaw Man",
        episodeNum: "12/12",
        viewsNum: 22000,
        comments: 195,
        sort: ["Action", "Supernatural", "Horror"],
        animePic: "https://tse1.mm.bing.net/th/id/OIP.KFyyZilRpVenZJSJ5D-k8AHaKv?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        animeName: "Solo Leveling",
        episodeNum: "12/12",
        viewsNum: 32000,
        comments: 275,
        sort: ["Action", "Fantasy", "Adventure"],
        animePic: "https://tse4.mm.bing.net/th/id/OIP.MGRRsyeq3kMGdUIG01DVQgHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];

    return <section className="flex flex-col gap-[20px] " >

        <SectionHead title={"Top Views"} size={"20"}/>

        {TopAnime.map((e , i ) => <TopCard key={i} episode={e.episodeNum} name={e.animeName} views={e.viewsNum} pic={e.animePic}/>)}
    </section>
}

export default TopViews