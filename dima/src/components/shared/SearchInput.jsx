import { Search } from "lucide-react";

export function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Ingrese su búsqueda",
  label,
  id,
  isLoading = false,
  className = "",
  inputClassName = "",
  ...props
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col items-center gap-8 ${className}`}>
      <div className="w-full space-y-3">
        {label && (
          <label htmlFor={id} className="block text-lg font-semibold text-gray-700 text-center">
            {label}
          </label>
        )}
        <input
          id={id}
          type="text"
          className={`w-full max-w-md mx-auto block rounded-xl border-2 border-gray-200 py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-[#535ED6]/20 focus:border-[#535ED6] transition-all duration-300 ease-out shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${inputClassName}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={isLoading}
          {...props}
        />
      </div>
    </form>
  );
}
