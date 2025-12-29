import { Link } from "react-router-dom"


const  PagesLinks = ({ cat=false  , arrow = false}) => {

    const headerLink =[
            {
                name :"Homepage" ,
                link : "/",
                categories  :[]
            },
            {
                name : `Categories ${arrow ? "∇" : ""} `,
                link : "/Categories",
                categories : [ 
                    {
                        name : "Categories" , 
                        link : "/categories"
                    },
                    {
                        name : "Anime Details" , 
                        link : "/animedetails"
                    },
                    {
                        name : "Anime Watching" , 
                        link : "/animewatching"
                    },
                    {
                        name : "Blog Details"  , 
                        link : "/blogdetails"
                    },{
                        name : "Sign Up " , 
                        link : "/signup"
                    },{
                        name : "Login" , 
                        link : "/login"
                    },
                ]

            },
            {
                name : "OurBlog ",
                link : "/blogpost",
                categories  :[]
            },
            {
                name : "Contact",
                link : "/conact",
                categories  :[]
            },
        ]

    return <>
     {headerLink.map(
         (e , i) =>e?.categories.length==0 ? 
         <li key={i}
          className={` text-gray-3 rounded-[5px]  p-6 duration-300 hover:text-white-1 " }`} > 
            <Link to={e.link} >{e.name}</Link>
         </li>
         
         :<li>
            <div key={i}
          className={`rounded-[5px] catogries-links relative p-6  
           text-gray-3 duration-300 hover:text-white-1`}>

            <Link to={e.link} >{e.name}</Link>

            {cat?  
            <ul className="duration-300  list-none opacity-0 catogries-links-ul absolute left-0 top-[300%] w-[100%] bg-white-1 duration-300">
            { e?.categories?.map((item , index) => <li className="text-[14px] list-none text-back-layout px-[10px] py-[5px]" key={index}> 
                <Link to={item.link}>{item.name}</Link>
            </li> )}
            
        </ul>: "" }
           
         </div> 
         </li>) }
    </>

}

export default PagesLinks