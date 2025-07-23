import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function PasosParaInscribirse() {

    return (
        <div className="w-2/3 max-w-5xl flex flex-col items-center justify-center mt-12">
                <h1 className="text-[#3E49C4] text-3xl font-bold mb-4 text-center">Pasos para inscribirse</h1>
                <video src="https://www.youtube.com/watch?v=4-UbHw8eDzM&t=20s" width="600" height="300" controls="controls" autoplay="false" className="m-4"/>
                <div className="w-full max-w-xl mx-auto m-6 text-center text-black">
                <p>Debe ingresar al entorno de información DiMa, indicado más adelante, donde encontrará el formulario de inscripción. Al ingresar al entorno se le solicitará la información:</p>
                
                <ol>
                    <li>
                        <p><strong>Nombre de usuario. </strong>Acá debe colocar el nombre de usuario institucional asignado por la Universidad de Costa Rica cuando le comunicó la admisión a carrera, por ejemplo: pedro.segura sin el @ucr.ac.cr.</p>
                    </li>                    
                    <li>
                        <p><strong>Contraseña. </strong>Es la contraseña de la cuenta institucional, la que usted asoció al correo institucional.</p>
                    </li>
                </ol>
                
                <p>Para entrar al entorno de información dé clic sobre el siguiente botón y siga los pasos que se describen a continuación.</p>
                </div>
                <Button className="w-full sm:w-2/3 max-w-xs rounded-full bg-white border border-sky-500 hover:bg-sky-500 text-sm sm:text-lg font-semibold text-black flex items-center justify-center gap-2 py-4 sm:py-6 px-4">
                Entrar al entorno de información
                </Button>
        </div>
    );
}