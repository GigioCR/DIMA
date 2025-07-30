import React from "react";
import { Button } from "@/components/shared/Button";
import { ExternalLink } from "lucide-react";
import { SectionHeader, InfoCard, StepCard, VideoEmbed } from "./components/shared";
import { REGISTRATION_STEPS, VIDEO_URLS, USER_CREDENTIALS_INFO } from "./data/data";

export function PasosParaInscribirse() {
    return (
        <div className="w-full max-w-6xl flex flex-col items-center justify-center mt-20 px-4">

            <div className="w-full max-w-4xl mx-auto mb-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <SectionHeader title="Pasos Para Inscribirse" />
            
            <VideoEmbed 
                src={VIDEO_URLS.main}
                title="Video explicativo DiMa"
                className="mb-12"
            />
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                        Debe ingresar al entorno de información DiMa, indicado más adelante, donde encontrará el formulario de inscripción. Al ingresar al entorno se le solicitará la información:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {USER_CREDENTIALS_INFO.map((info, index) => (
                            <InfoCard
                                key={index}
                                icon={info.icon}
                                title={info.title}
                                description={info.description}
                                example={info.example}
                                note={info.note}
                                bgColor={index === 0 ? "from-blue-50 to-indigo-50" : "from-blue-50 to-indigo-50"}
                                iconColor={index === 0 ? "bg-blue-500" : "bg-blue-500"}
                            />
                        ))}
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mt-8 text-center">
                        Para entrar al entorno de información dé clic sobre el siguiente botón y siga los pasos que se describen a continuación.
                    </p>
                    
                    <div className="flex justify-center p-6">
                        <a href="https://mv1.mediacionvirtual.ucr.ac.cr/login/index.php" target="_blank">
                        <Button
                            text="Entrar al entorno de información"
                            icon={<ExternalLink size={18} />}
                        />
                        </a>
                    </div>
                    
                    <div className="space-y-6 mt-8">
                        {REGISTRATION_STEPS.map((step) => (
                            <StepCard
                                key={step.id}
                                stepNumber={step.id}
                                content={step.content}
                                url={step.url}
                            />
                        ))}
                    </div>
                    
                    <p className="text-center text-lg mt-8 text-gray-700">
                        Si requiere de mayor apoyo, puede observar el siguiente video explicativo:
                    </p>
                    
                    <VideoEmbed 
                        src={VIDEO_URLS.support}
                        title="Video de apoyo DiMa"
                        className="mt-12 mb-12"
                        showPlayIcon={false}
                    />
                </div>
            </div>
        </div>
    );
}