import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function TopicCard({ title, onClick }) {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 rounded-xl shadow-lg h-32 flex justify-center"
      onClick={onClick}
    >
      <CardHeader className="text-center align-middle">
        <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}