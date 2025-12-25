const EpisodeLoop = ({ AnmieEp=12 }) => {
 
    return <>
            {[...Array(AnmieEp)].map((_, index) => (
            <a href={index} className="flex hover:bg-white hover:text-black duration-400  mx-[10px] bg-white/20 rounded-[4px] py-[15px] px-[20px] ">
                Ep {index+1}
            </a>
            ))}
    
    </>

};
export default EpisodeLoop;


