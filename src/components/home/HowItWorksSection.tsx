
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowDown, Bot, Camera, Database, Footprints } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ai2step-600 font-semibold tracking-wide uppercase">Comment ça marche</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            En seulement 4 étapes simples
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            De l'enregistrement à la réception de votre rapport personnalisé, notre processus est simple et efficace.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-ai2step-100 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            <div className="relative z-10">
              <Step 
                number={1} 
                title="Créez votre compte"
                description="Inscrivez-vous en quelques clics pour accéder à notre plateforme d'analyse."
                icon={<Bot className="h-16 w-16 text-ai2step-600" />}
                alignRight={true}
                delay="0s"
              />
              
              <Step 
                number={2} 
                title="Téléchargez votre vidéo"
                description="Utilisez notre application pour télécharger une vidéo de votre marche ou enregistrez-en une nouvelle."
                icon={<Camera className="h-16 w-16 text-ai2step-600" />}
                alignRight={false}
                delay="0.5s"
              />
              
              <Step 
                number={3} 
                title="Analyse par IA"
                description="Notre système analyse votre marche et identifie les problèmes biomécaniques."
                icon={<Database className="h-16 w-16 text-ai2step-600" />}
                alignRight={true}
                delay="1s"
              />
              
              <Step 
                number={4} 
                title="Recevez votre rapport"
                description="Obtenez un rapport détaillé et des recommandations pour des semelles personnalisées adaptées à vos besoins."
                icon={<Footprints className="h-16 w-16 text-ai2step-600" />}
                alignRight={false}
                delay="1.5s"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <ArrowDown className="h-10 w-10 mx-auto text-ai2step-600 animate-bounce" />
          <Link to="/auth?register=true">
            <Button className="mt-8 px-8 py-3 bg-ai2step-600 hover:bg-ai2step-700 text-white font-medium rounded-md">
              Commencer mon analyse
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  alignRight: boolean;
  delay: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, alignRight, delay }) => {
  return (
    <div className={`flex flex-col ${alignRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}>
      <div className={`md:w-1/2 mb-6 md:mb-0 ${alignRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <h3 className="text-xl font-bold text-gray-900">{number}. {title}</h3>
        <p className="mt-2 text-gray-600">
          {description}
        </p>
      </div>
      <div className="md:w-12 flex justify-center">
        <div 
          className="h-12 w-12 rounded-full bg-ai2step-600 flex items-center justify-center relative animate-float" 
          style={{ animationDelay: delay }}
        >
          <span className="text-white font-bold">{number}</span>
        </div>
      </div>
      <div className={`md:w-1/2 ${alignRight ? 'md:pl-12' : 'md:pr-12'} flex justify-center`}>
        <div className="h-32 w-32 bg-ai2step-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
