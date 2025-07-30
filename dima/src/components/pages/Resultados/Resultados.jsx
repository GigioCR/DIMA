import { SectionHeader } from "../../shared";
import { Header } from "../../shared/Header";

export function Resultados() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
            <Header title="Resultados 2025"/>
            
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction Section */}
                <div className="mb-20">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12">
                        <SectionHeader title="Reporte de Resultados DIMA 2025"/>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                            <p className="text-lg mb-6">
                                A continuación se presenta el reporte interactivo con los resultados del Diagnóstico de los Aprendizajes en Matemática (DiMa) para el año 2025. Este dashboard permite visualizar estadísticas detalladas sobre el desempeño de los estudiantes en las diferentes secciones de la prueba.
                            </p>
                            <p className="text-lg mb-8">
                                Puede interactuar con los gráficos y filtros para explorar los datos según diferentes criterios como carrera, sección de la prueba, y rangos de calificación.
                            </p>
                        </div>
                        
                        {/* PowerBI Iframe Container */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-inner">
                            <div className="relative w-full" style={{ paddingBottom: '62.25%' }}>
                                <iframe 
                                    title="Reporte DIMA 2025" 
                                    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-gray-200"
                                    src="https://app.powerbi.com/view?r=eyJrIjoiODA4NzRjMTItMTkxNC00ZDk4LWIyM2YtYjc2MzlhYmU5ZDk3IiwidCI6ImU3OTg0Y2FjLTI1NDMtNGY4OC04Zjk3LTk1MjQzMzVlNmJjNCIsImMiOjR9&pageName=b9e669f4068c45599728" 
                                    frameBorder="0" 
                                    allowFullScreen="true"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        
                        {/* Additional Information */}
                        <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-200">
                            <h3 className="text-lg font-semibold text-sky-800 mb-3">Información Importante</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-sky-600 mr-2">•</span>
                                    Los datos se actualizan periódicamente conforme se procesan los resultados.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-600 mr-2">•</span>
                                    Para una mejor experiencia, se recomienda visualizar el reporte en pantalla completa.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-600 mr-2">•</span>
                                    Los resultados individuales se envían directamente al correo institucional de cada estudiante.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}