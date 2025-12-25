import { useState } from 'react';

const FilterDropdown = () => {
    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
        console.log('Selected:', e.target.value);
    };

    return (
        <div className="text-3xl flex gap-[15px]">
                        <p>Order by : </p>

            <select value={selected} onChange={handleChange} className="bg-white-1 text-black  text-center">
                
                <option value="alphabetical">A-Z</option>
                <option value="range1_10">1-10</option>
                <option value="episode12">12 Episode</option>
            </select>
            
           
        </div>
    );
};

export default FilterDropdown