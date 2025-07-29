export function Header({ title }) {
    return (
        <>
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-blue-700">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-sky-300/10 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-white/5 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-12 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -rotate-12 scale-150"></div>
      </div>
      
      {/* Main Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
        </div>
      </div>
    </div>
    </>
    );
}
    