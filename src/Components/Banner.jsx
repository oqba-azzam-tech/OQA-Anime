

const Banner = ({pic ,action }) => {

    return <div className="relative w-full h-[300px] my-[30px] overflow-hidden rounded-xl">
            
                <img 
                src={pic}
                className="absolute inset-0 w-full h-full object-cover object-center" 
                alt="Anime background" />
                
                <div className="absolute inset-0 bg-black/70"></div>
                
            
                <div className="relative h-full flex flex-col justify-center items-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                    {action}
                    </h1>
                    <p className="text-3xl text-gray-200 max-w-3xl text-center">
                    Welcome to the official Anime blog.
                    </p>
                </div>
            </div>
}

export default Banner 