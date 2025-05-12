
import React from 'react';
import { Footprints, Camera, Database } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-ai2step-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ai2step-600 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une meilleure façon d'analyser votre marche
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Notre technologie avancée offre une analyse précise et des solutions adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<Footprints className="h-10 w-10 text-ai2step-600" />}
              title="Analyse biomécanique"
              description="Détection précise des problèmes dans votre marche grâce à notre algorithme d'IA avancé."
            />

            <FeatureCard 
              icon={<Camera className="h-10 w-10 text-ai2step-600" />}
              title="Capture vidéo simple"
              description="Téléchargez une vidéo ou utilisez notre système de capture en temps réel pour une analyse instantanée."
            />

            <FeatureCard 
              icon={<Database className="h-10 w-10 text-ai2step-600" />}
              title="Rapports détaillés"
              description="Recevez des analyses complètes et des recommandations personnalisées pour vos semelles."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="h-20 w-20 rounded-full bg-ai2step-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
