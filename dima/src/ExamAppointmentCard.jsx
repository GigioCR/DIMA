import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Search, AlertCircle } from "lucide-react";
import { useState } from "react";

const carnesResultados = [
  { carne: "C12345", fecha: "17/02/2025", hora: "9:00 am", lugar: "Escuela de Matemática, Sede Rodrigo Facio" },
];

export function ExamAppointmentCard() {
  const [carne, setCarne] = useState("");
  const [result, setResult] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = carnesResultados.find(c => c.carne === carne.trim());
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
    <div className="flex flex-col items-center w-full mt-8">
      <Card className="w-full max-w-xl mx-auto border-gray-300 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-[#535ED6]">
            Consultar cita para exámen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
            <label htmlFor="carne" className="text-lg font-semibold text-black">
              Carné
            </label>
            <input
              id="carne"
              type="text"
              className="w-full max-w-md rounded-lg border border-gray-300 py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#535ED6] transition"
              value={carne}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              className="w-2/3 max-w-xs rounded-full bg-sky-400 hover:bg-sky-500 text-lg font-semibold flex items-center justify-center gap-2 py-6"
            >
              <Search className="w-5 h-5" />
              Consultar
            </Button>
          </form>
          {showError && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle>Carné no encontrado</AlertTitle>
              <AlertDescription>
                <ul>
                    <li>No se encontró una cita para el carné ingresado.</li>
                    <li>Verifique que el carné ingresado sea correcto.</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}
          {result && (
            <div className="mt-6 text-center font-semibold text-black">
              <div>Fecha: {result.fecha}</div>
              <div>Hora: {result.hora}</div>
              <div>Lugar: {result.lugar}</div>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="w-full max-w-xl mx-auto mt-6 text-center font-semibold text-black">
        Ingrese su carné y haga click en consultar para recibir información relevante sobre su cita para el exámen.
      </div>
    </div>
  );
}