import { Header } from "../../shared/Header";
import { SectionHeader } from "../../shared";
import { Button } from "../../shared/Button";
import { ReusableTable } from "../../shared/ReusableTable";
import { Download } from "lucide-react";
import { MoocsCard } from "./MoocsCard";
import {moocsData} from "../../../data/data";
import {LibrosTable} from "./LibrosTable";
import {StepCard} from "../../shared/StepCard";

export function MaterialTeorico() {
    return (
        <>
            <Header title="Material Teórico" />
            <div className="flex flex-col items-center justify-center mt-12 max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <SectionHeader title="Material del Curso de Precálculo" 
                    subtitle="El siguiente material puede ser utilizado para el estudio de conociemientos de precálculo; si desea reforzar conceptos previos, se recomienda consultar el apéndice de este mismo documento." />
                    <a href="https://drive.google.com/file/d/1R0ASHyXXu0stfqMXTpZ1DzAWNPISgfA3/view" target="_blank">
                        <Button text={"Ver Material"} icon={<Download />}/>
                    </a>
                </div>
                
                <div className="mt-20 w-full">
                    <SectionHeader title="Videos de Consulta"/>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-8 mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            La Universidad de Costa Rica cuenta con un repositorio de videos explicativos de contenidos de precálculo. Para ellos puede ingresar a{" "}
                            <a 
                                href="https://www.ucrq.tv/campus-2-0" 
                                target="_blank" 
                                className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-300"
                            >
                                Campus-2-0
                            </a>
                            {" "}o MOOCs.
                        </p>
                        
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#3E49C4] mb-4 flex items-center gap-3">
                                <div className="w-3 h-3 bg-[#3E49C4] rounded-full"></div>
                                Campus 2.0
                            </h3>
                            <h4 className="text-xl font-bold text-[#3E49C4] mb-4 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#3E49C4] rounded-full"></div>
                                    Inscripción en Campus 2.0
                            </h4>
                            <ol className="space-y-3 text-gray-600">
                                <StepCard step={1} text="De click sobre el ícono <strong>Suscribirte</strong>." allowHTML={true} />
                                <StepCard step={2} text="Cree una cuenta ingresando un nombre de usuario, un correo electrónico y una contraseña. Estos son los datos que debe digitar cada vez que consulte el repositorio." />
                                <StepCard step={3} text="De click sobre el botón <strong>Únete</strong>." allowHTML={true} />
                                <StepCard step={4} text="Luego de ingresar, de click sobre <strong>Buscar</strong>. Este se encuentra en la esquina superior izquierda de la pantalla." allowHTML={true} />
                                <StepCard step={5} text="Ingresa el nombre de <strong>Campus 2.0</strong> y accede a los distintos videos." allowHTML={true} />
                            </ol>
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E49C4] mb-4 flex items-center gap-3">
                                <div className="w-3 h-3 bg-[#3E49C4] rounded-full"></div>
                                MOOCs
                            </h3>
                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-[#3E49C4] mb-4 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#3E49C4] rounded-full"></div>
                                    Inscripción en MOOCs
                                </h4>
                                <ol className="space-y-3 text-gray-600">
                                    <StepCard step={1} text="Ingrese a <strong>global.ucr.ac.cr</strong>." allowHTML={true} />
                                    <StepCard step={2} text="Ingrese con su correo UCR o regístrese como usuario con un correo Gmail o Microsoft." />
                                    <StepCard step={3} text="En el buscador de cursos, escriba <strong>&quot;algebra&quot;</strong> para el MOOC Conjuntos y Álgebra o escriba <strong>&quot;funciones&quot;</strong> para el MOOC Principios de Funciones 1." allowHTML={true} />
                                    <StepCard step={4} text="Seleccione el título de la imagen." />
                                    <StepCard step={5} text="Pulse el botón <strong>&quot;Inscribirme&quot;</strong>." allowHTML={true} />
                                </ol>
                            </div>
                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-[#3E49C4] mb-4 flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#3E49C4] rounded-full"></div>
                                    Enlaces MOOCs
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                {moocsData.map((mooc, index) => (
                                    <MoocsCard 
                                        key={index}
                                        title={mooc.title}
                                        onClick={() => window.open(mooc.url, "_blank")}
                                    />
                                ))}
                            </div>
                            </div>
                    </div>
                </div>
                
                <div className="mt-12 w-full">
                    <LibrosTable />
                </div>
            </div>
        </>
    );
}