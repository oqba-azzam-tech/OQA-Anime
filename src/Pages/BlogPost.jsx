import Banner from "../Components/Banner";
import BlogPic from "../Components/BlogPic";



const Blog = () => {
    const blogPosts = [
    {
        image: "https://wallpapercave.com/wp/wp1991623.png",
        date: "01 March 2020",
        title: "Fate / Stay Night: Unlimited Blade Works",
    },
    {
        image: "https://th.bing.com/th/id/OIP.0EgBM86nsr3Tukk55G0AjwHaKe?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Bok no Hero Academia The Final Season",
    },
    {
        image: "https://th.bing.com/th/id/OIP.sqcTPdhaMwaWedTQ6HCVVgHaKj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Fate/Stay Night Unlimited Blade Works",
    },
    {
        image: "https://tse3.mm.bing.net/th/id/OIP.PB_OB1KEXe08ZHt-__dMlAHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Attack on Titan The Final Season Part 2",
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.j6LCNBp4esGRR8VuvdvR7gHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Demon Slayer Entertainment District Arc",
    },
    {
        image: "https://tse4.mm.bing.net/th/id/OIP.hJRtVkvR4xH5uDrNZgKhugAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Jujutsu Kaisen Season 2: Shibuya Incident",
    }
];

const blogPosts2= [
    {

        image: "https://tse1.mm.bing.net/th/id/OIP.nfa69HcgloJWlYU99ls14gHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Chainsaw Man: Reze Arc",
        id : 0
    },
    {
        image: "https://tse2.mm.bing.net/th/id/OIP.S8aUTLnyb-io1c7z9wPrnwHaJo?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Gachiakuta: The Abyss Wanderer",
        id : 1
    },
    {
        image: "https://tse1.mm.bing.net/th/id/OIP.QUXYYXFD8goMWBqMnOVPMQHaK-?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "BoJack Horseman: Final Season",
        id : 2
    },
    {
        image: "https://tse1.mm.bing.net/th/id/OIP.TTRU-JPgk5lgz7Zxa9RFqQHaLH?cb=ucfimg2&ucfimg=1&w=1000&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Death Parade: Afterlife Tournament",
        id : 3
    },
    {
        image: "https://tse1.mm.bing.net/th/id/OIP.1BoWIWxZVRAS5c5HHt3AAQAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Free! Dive to the Future: World Championships",
        id : 4
    },
    {
        image: "https://tse1.mm.bing.net/th/id/OIP.uqdfzDcxi-xsGbDJ2CLthgHaKe?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        date: "01 March 2020",
        title: "Kaiju No. 8: Monster Defense Force",
        id : 5
    }
];

    return <section >
        <div className="new-font">
        <Banner action={"Our Blog"} pic={"https://wallpapercave.com/wp/wp1991623.png"}/>
        </div>

        <div className="center-cont grid grid-cols-1 min-[990px]:grid-cols-2 gap-[1px]">

            <div className="flex flex-wrap gap-[1px] " >
                
                {blogPosts.map( (e,i) => ( (i%3) === 0 ) ? <BlogPic key={i} size="600" basis={true} date={e.date} name={e.title} pic={e.image}/> :<BlogPic key={i} date={e.date} name={e.title} pic={e.image}/> )} 
            </div>
           
            
            <div className="flex flex-wrap gap-[1px] ">
                {blogPosts2.map( (e,i) => ((i - 2) % 3 === 0) ? <BlogPic key={i} size="600" basis={true} date={e.date} name={e.title} pic={e.image}/> :<BlogPic key={i} date={e.date} name={e.title} pic={e.image}/> )} 
            </div>
        </div>

    </section>
};

export default Blog;