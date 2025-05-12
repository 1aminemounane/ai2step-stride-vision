
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-ai2step-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Prêt à améliorer votre marche ?</span>
            <span className="block text-ai2step-100">Créez votre compte dès maintenant.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/auth?register=true">
                <Button className="py-3 px-6 bg-white text-ai2step-600 hover:bg-gray-100">
                  Commencer gratuitement
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#features">
                <Button variant="outline" className="py-3 px-6 bg-ai2step-500 text-white hover:bg-ai2step-400 border-white">
                  En savoir plus
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
