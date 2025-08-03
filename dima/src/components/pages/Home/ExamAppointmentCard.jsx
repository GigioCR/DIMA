import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/shared/Button";
import { Search } from "lucide-react";
import { SectionHeader } from "../../shared";
import { CustomAlert } from "../../shared/CustomAlert";
import { SearchInput } from "../../shared/SearchInput";
import { ResultDisplay } from "../../shared/ResultDisplay";
import { useSearch } from "../../../hooks/useSearch";
import { EXAM_RESULTS } from "../../../data/data";

// Search function for exam appointments
const searchExamAppointment = (carne) => {
  const found = EXAM_RESULTS.find(c => c.carne === carne);
  return found;
};

export function ExamAppointmentCard() {
  const {
    query: carne,
    result,
    isLoading,
    error,
    handleSearch,
    handleQueryChange,
    hasResult,
    hasError
  } = useSearch(searchExamAppointment);

  const handleSubmit = () => {
    handleSearch();
  };

  return (
    <div className="flex flex-col items-center w-full mt-16 px-4">
      <Card className="w-full max-w-xl mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-out">
        <CardHeader>
          <SectionHeader title="Consultar Cita Para Exámen" />
        </CardHeader>
        <CardContent className="space-y-6">
          <SearchInput
            id="carne"
            label="Carné"
            value={carne}
            onChange={handleQueryChange}
            onSubmit={handleSubmit}
            placeholder="Ingrese su carné"
            isLoading={isLoading}
          />

          {hasResult && (
            <ResultDisplay result={result} />
          )}

          {hasError && (
            <CustomAlert
              variant="error"
              title="Carné no encontrado"
              description={error}
              items={[
                "No se encontró una cita para el carné ingresado.",
                "Verifique que el carné ingresado sea correcto."
              ]}
            />
          )}

          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              text={isLoading ? "Consultando..." : "Consultar"}
              icon={<Search size={18} />}
              disabled={isLoading}
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="w-full max-w-xl mx-auto mt-8 text-center font-medium text-gray-600 bg-gray-50 p-4 rounded-xl">
        Ingrese su carné y haga click en consultar para recibir información relevante sobre su cita para el exámen.
      </div>
    </div>
  );
}