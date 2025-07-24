import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Search, AlertCircle } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./components/shared";
import { EXAM_RESULTS } from "./constants/data";

export function ExamAppointmentCard() {
  const [carne, setCarne] = useState("");
  const [result, setResult] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = EXAM_RESULTS.find(c => c.carne === carne.trim());
    if (found) {
      setResult(found);
      setShowError(false);
    } else {
      setResult(null);
      setShowError(true);
    }
  };

  const handleInputChange = (e) => {
    setCarne(e.target.value);
    setShowError(false);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center w-full mt-16 px-4">
      <Card className="w-full max-w-xl mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.02]">
        <CardHeader className="pb-6">
          <SectionHeader title="Consultar Cita Para Exámen" />
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="flex flex-col items-center gap-8" onSubmit={handleSubmit}>
            <div className="w-full space-y-3">
              <label htmlFor="carne" className="block text-lg font-semibold text-gray-700 text-center">
                Carné
              </label>
              <input
                id="carne"
                type="text"
                className="w-full max-w-md mx-auto block rounded-xl border-2 border-gray-200 py-4 px-6 text-lg focus:outline-none focus:ring-4 focus:ring-[#535ED6]/20 focus:border-[#535ED6] transition-all duration-300 ease-out shadow-sm hover:shadow-md"
                value={carne}
                onChange={handleInputChange}
                placeholder="Ingrese su carné"
              />
            </div>
            {result && (
              <div className="text-center font-semibold text-gray-800 bg-green-50 p-6 rounded-xl border border-green-200 w-full animate-in slide-in-from-top-2 duration-500">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Fecha: {result.fecha}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Hora: {result.hora}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Lugar: {result.lugar}</span>
                  </div>
                </div>
              </div>
            )}
            {showError && (
            <Alert variant="destructive" className="mt-6 border-red-200 bg-red-50 animate-in slide-in-from-top-2 duration-500">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <AlertTitle className="text-red-800">Carné no encontrado</AlertTitle>
              <AlertDescription className="text-red-700">
                <ul className="space-y-1 mt-2">
                    <li>• No se encontró una cita para el carné ingresado.</li>
                    <li>• Verifique que el carné ingresado sea correcto.</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}
            <Button
              type="submit"
              className="w-full sm:w-auto max-w-md rounded-full bg-gradient-to-r from-white to-gray-50 border-2 border-sky-500 hover:from-sky-500 hover:to-blue-500 hover:border-sky-600 text-sm sm:text-lg font-semibold text-black hover:text-white flex items-center justify-center gap-3 py-4 sm:py-6 px-8 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 group cursor-pointer"
            >
              <div className="bg-sky-500 group-hover:bg-white rounded-full p-2 transition-colors duration-300">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-sky-500 transition-colors duration-300" />
              </div>
              Consultar
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="w-full max-w-xl mx-auto mt-8 text-center font-medium text-gray-600 bg-gray-50 p-4 rounded-xl">
        Ingrese su carné y haga click en consultar para recibir información relevante sobre su cita para el exámen.
      </div>
    </div>
  );
}