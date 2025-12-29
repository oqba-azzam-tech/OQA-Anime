import { useState } from 'react';

const FilterDropdown = () => {
    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
        console.log('Selected:', e.target.value);
    };

    return (
        <div className="text-3xl flex max-[700px]:flex-wrap gap-[15px]">
                        <p className="max-[500px]:text-[16px]">Order by : </p>

            <select value={selected} onChange={handleChange} className="bg-secondry border text-white text-center max-[500px]:text-[16px]">
                
                <option className="bg-secondry text-white " value="alphabetical">A-Z</option>
                <option className="bg-secondry text-white " value="range1_10">1-10</option>
                <option className="bg-secondry text-white " value="episode12">12 Episode</option>
            </select>
            
           
        </div>
    );
};

export default FilterDropdown