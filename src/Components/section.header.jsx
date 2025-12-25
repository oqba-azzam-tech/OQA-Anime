

const SectionHead = ({title , size=30}) => {

    return  <h2 className={`p-2.5 font-semibold uppercas border-l-4 border-primary text-[${size}px]`}>

        {title}

    </h2>

}

export default SectionHead