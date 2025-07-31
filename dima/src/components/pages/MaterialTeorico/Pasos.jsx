export function Pasos({ step, text }) {
    return (
        <li className="flex items-start gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"> {step} </span>
            <span className="text-base leading-relaxed">{text}</span>
        </li>
    );
}