export function ResultDisplay({ result, className = "" }) {
  if (!result) return null;

  const resultItems = [
    { label: "Fecha", value: result.fecha },
    { label: "Hora", value: result.hora },
    { label: "Lugar", value: result.lugar }
  ];

  return (
    <div className={`text-center font-semibold text-gray-800 bg-green-50 p-6 rounded-xl border border-green-200 w-full animate-in slide-in-from-top-2 duration-500 ${className}`}>
      <div className="space-y-2">
        {resultItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>{item.label}: {item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
