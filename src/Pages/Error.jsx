import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';

const Error = () => {
  return (
    <div className="min-h-screen bg-back-layout flex flex-col items-center justify-center p-6">
      {/* الشعار أو الرمز */}
      <div className="mb-8">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-dak-blue rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-16 h-16 text-white-1" />
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white-1 font-bold text-lg">4</span>
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center animate-bounce delay-300">
            <span className="text-white-1 font-bold text-lg">4</span>
          </div>
        </div>
      </div>

      {/* رسالة الخطأ */}
      <div className="text-center mb-12">
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-white-1 bg-clip-text text-transparent mb-4">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white-1 mb-6">
          NOT FOUND
        </h2>
        
       

        
      </div>

      {/* أزرار التنقل */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link
          to="/"
          className="group bg-primary hover:bg-white-1 text-white-1 hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
        >
          <Home className="w-5 h-5 group-hover:text-primary" />
          Back to Home Page
        </Link >
        
        
      </div>

     
    </div>
  );
};

export default Error;