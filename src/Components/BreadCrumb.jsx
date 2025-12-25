import { Link } from 'react-router-dom';
import { ChevronRight} from 'lucide-react';
import { IoHome } from "react-icons/io5";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb__links flex flex-wrap items-center gap-2 py-4 px-6  rounded-xl">
      <Link 
        to="/" 
        className="flex  items-center gap-1 text-gray-3 hover:text-primary transition-colors"
      >
        <IoHome  size={16} />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-gray-500" />
          {index === items.length - 1 ? (
            <span className="text-white-1 font-medium">{item.name}</span>
          ) : (
            <Link 
              to={item.path} 
              className="text-gray-3 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb