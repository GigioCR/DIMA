export function Button({handleClick, text, icon = null, ...props}) {
    return (
        <button
            onClick={handleClick}
            {...props}
            className="rounded-full bg-gradient-to-r from-white to-gray-50 
                border-2 border-sky-500 hover:from-sky-500 hover:to-blue-500 hover:border-sky-600 text-sm sm:text-lg 
                font-semibold text-black hover:text-white flex items-center justify-center gap-3 px-6 py-3 
                transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 group cursor-pointer"
          >
            {text}
            {icon ? icon : null}
          </button>
    );
}