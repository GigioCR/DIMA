import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Play, User, Lock, CheckCircle, Monitor, FileText } from "lucide-react";

export function PasosParaInscribirse() {

    return (
        <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">
            <div className="text-center mb-12">
                <h1 className="text-[#3E49C4] text-3xl md:text-4xl font-bold mb-4 tracking-tight">Pasos para inscribirse</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3E49C4] to-sky-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="relative mb-12 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
                    <video 
                        src="https://www.youtube.com/watch?v=4-UbHw8eDzM&t=20" 
                        width="600" 
                        height="300" 
                        controls="controls" 
                        autoplay="false" 
                        className="rounded-xl shadow-lg w-full h-48 sm:h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                            <Play className="w-8 h-8 text-[#3E49C4]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto mb-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                        Debe ingresar al entorno de información DiMa, indicado más adelante, donde encontrará el formulario de inscripción. Al ingresar al entorno se le solicitará la información:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Nombre de usuario</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Acá debe colocar el nombre de usuario institucional asignado por la Universidad de Costa Rica cuando le comunicó la admisión a carrera, por ejemplo: <span className="font-mono bg-white px-2 py-1 rounded text-blue-600">pedro.segura</span> sin el @ucr.ac.cr.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-3">Contraseña</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Es la contraseña de la cuenta institucional, la que usted asoció al correo institucional.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mt-8 text-center">
                        Para entrar al entorno de información dé clic sobre el siguiente botón y siga los pasos que se describen a continuación.
                    </p>
                    <div className="flex justify-center p-6">
                        <Button className="w-full sm:w-auto max-w-md rounded-full bg-gradient-to-r from-white to-gray-50 border-2 border-sky-500 hover:from-sky-500 hover:to-blue-500 hover:border-sky-600 text-sm sm:text-lg font-semibold text-black hover:text-white flex items-center justify-center gap-3 py-4 sm:py-6 px-8 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 group">
                            <div className="bg-sky-500 group-hover:bg-white rounded-full p-2 transition-colors duration-300">
                                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-sky-500 transition-colors duration-300" />
                            </div>
                            Entrar al entorno de información
                        </Button>
                    </div>
                    
                    <div className="space-y-6 mt-8">
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group">
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-500 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-700 leading-relaxed break-words">
                                        Cerciórese que se encuentra en el entorno con nombre: <strong className="text-indigo-700 break-words">I - A - 2025 - RRF - Información Diagnóstico en Matemática DiMa - 000</strong> y que en la barra del buscador aparezca la dirección: <strong className="break-all"><a href="https://mv1.mediacionvirtual.ucr.ac.cr/login/index.php" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 break-all">https://mv1.mediacionvirtual.ucr.ac.cr/login/index.php</a></strong>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group">
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-500 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-700 leading-relaxed break-words">
                                        Inscríbase en el entorno virtual haciendo clic en <strong className="text-indigo-700">"Inscribirme en este entorno virtual"</strong> que aparecerá en la parte derecha de su computadora o parte inferior de la pantalla de su dispositivo móvil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group">
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-500 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-gray-700 leading-relaxed break-words">
                                        Localice la sección <strong className="text-indigo-700">Inscripción DiMa 2025</strong> y complete el formulario con nombre: <strong className="text-indigo-700">Formulario de Inscripción DiMa 2025</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-center text-lg mt-8 text-gray-700">Si requiere de mayor apoyo, puede observar el siguiente video explicativo:</p>
                    <div className="relative mt-12 mb-12 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="flex justify-center relative bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/2xLVcSMcmHI?si=ZHKhk72JepDwQ8RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}