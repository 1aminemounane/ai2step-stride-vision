
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-24 md:pt-40 md:pb-40">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Analyse biomécanique pour</span>
              <span className="block gradient-text">des semelles parfaites</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              AI2Step utilise la vision par ordinateur et l'intelligence artificielle pour analyser votre marche
              et créer des semelles personnalisées qui vous conviennent parfaitement.
            </p>
            <p className="mt-2 text-ai2step-500 font-bold text-xl">
              STEP INTO THE FUTURE<br />
              BUILD YOUR OWN SMART INSOLE WITH AI2STEP
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="rounded-md shadow">
                <Link to="/auth?register=true">
                  <Button className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md text-white bg-ai2step-600 hover:bg-ai2step-700 md:py-4 md:text-lg md:px-10">
                    Commencer
                  </Button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#how-it-works">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10">
                    En savoir plus
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background */}
      <div className="absolute left-0 bottom-0 right-0">
        <svg className="w-full h-48 fill-current text-ai2step-50" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,288L80,261.3C160,235,320,181,480,181.3C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
