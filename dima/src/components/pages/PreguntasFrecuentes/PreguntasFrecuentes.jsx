import { SectionHeader } from "../../shared";
import { Footer } from "../../../Footer";
import { Header } from "../../shared/Header";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { preguntasFrecuentas } from "../../../data/data";
import { Button } from "../../ui/button";

export function PreguntasFrecuentes() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
            <Header title="Preguntas Frecuentes"/>
            
            {/* Main Content */}
            <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* FAQ Accordion */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                        {preguntasFrecuentas.map((pregunta, index) => (
                            <AccordionItem 
                                key={pregunta.id} 
                                value={`item-${pregunta.id}`}
                                className="border-b border-sky-100 last:border-b-0"
                            >
                                <AccordionTrigger className="px-6 py-4 hover:bg-sky-50/50 transition-colors duration-200 text-left">
                                    <div className="flex items-start gap-4 w-full">
                                        <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-800 leading-relaxed text-left">
                                            {pregunta.question}
                                        </h3>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6">
                                    <div className="ml-12 pt-2">
                                        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-4 border-l-4 border-sky-400">
                                            <p className="text-gray-700 leading-relaxed">
                                                {pregunta.answer}
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Additional Info Section */}
                <div className="mt-16">
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-sky-800 mb-4">
                                ¿No encontraste la respuesta que buscabas?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Si tienes alguna pregunta adicional sobre el DiMa, no dudes en contactarnos.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="mailto:diagnosticodima.em@ucr.ac.cr">
                                <Button
                                    className="w-full sm:w-auto max-w-md rounded-full bg-gradient-to-r from-white to-gray-50 
                                    border-2 border-sky-500 hover:from-sky-500 hover:to-blue-500 hover:border-sky-600 text-sm sm:text-lg 
                                    font-semibold text-black hover:text-white flex items-center justify-center gap-3 py-4 sm:py-6 px-8 
                                    transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 group cursor-pointer"
                                >
                                        Contactar por Email
                                </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}