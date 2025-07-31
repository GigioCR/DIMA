import { SectionHeader } from "../../shared";
import { Header } from "../../shared/Header";
import { CurriculumTable } from "./CurriculumTable";
import { Button } from "../../shared/Button";
import { Download } from "lucide-react";
export function QueEvaluaElDima() {
    return (
        <>
            <Header title="Qué Evalúa El DIMA" />
            <div className="flex flex-col items-center justify-center">
                <CurriculumTable />
                <a href="https://drive.google.com/file/d/1yNaI69_1Ga7K2end748YbWRFJNo0K4S9/view" target="_blank" className="mt-8">
                <Button text="Descargar Tabla de Contenidos" icon={<Download />} />
                </a>
            </div>
        </>
    );
}