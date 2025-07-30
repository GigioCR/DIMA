import { useState } from "react";
import { Header } from "../../shared/Header";
import { SectionHeader } from "../../shared";
import { temasMaterialPráctico } from "../../../data/data";
import { TopicCard } from "./TopicCard";
import { TopicModal } from "./TopicModal";

export function MaterialPractico() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTopic(null);
    };

    return (
        <>
            <Header title={"Material Práctico"}/>
            <SectionHeader title="Temas 2025" className="mt-12"/>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {temasMaterialPráctico.map((topic, index) => (
                        <TopicCard
                            key={index}
                            title={topic.title}
                            onClick={() => handleTopicClick(topic)}
                        />
                    ))}
                </div>
            </div>
            
            <TopicModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                topic={selectedTopic}
            />
        </>
    );
}