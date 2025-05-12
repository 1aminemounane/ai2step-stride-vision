import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Footprints, Camera, Database, Bot, ArrowDown, CheckIcon } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Features Section */}
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
                <div className="relative p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="h-20 w-20 rounded-full bg-ai2step-100 flex items-center justify-center">
                      <Footprints className="h-10 w-10 text-ai2step-600" />
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Analyse biomécanique</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Détection précise des problèmes dans votre marche grâce à notre algorithme d'IA avancé.
                    </p>
                  </div>
                </div>

                <div className="relative p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="h-20 w-20 rounded-full bg-ai2step-100 flex items-center justify-center">
                      <Camera className="h-10 w-10 text-ai2step-600" />
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Capture vidéo simple</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Téléchargez une vidéo ou utilisez notre système de capture en temps réel pour une analyse instantanée.
                    </p>
                  </div>
                </div>

                <div className="relative p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="h-20 w-20 rounded-full bg-ai2step-100 flex items-center justify-center">
                      <Database className="h-10 w-10 text-ai2step-600" />
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Rapports détaillés</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Recevez des analyses complètes et des recommandations personnalisées pour vos semelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
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
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="text-xl font-bold text-gray-900">1. Créez votre compte</h3>
                      <p className="mt-2 text-gray-600">
                        Inscrivez-vous en quelques clics pour accéder à notre plateforme d'analyse.
                      </p>
                    </div>
                    <div className="md:w-12 flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-ai2step-600 flex items-center justify-center relative animate-float">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 flex justify-center">
                      <div className="h-32 w-32 bg-ai2step-100 rounded-lg flex items-center justify-center">
                        <Bot className="h-16 w-16 text-ai2step-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row-reverse items-center mb-16">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12">
                      <h3 className="text-xl font-bold text-gray-900">2. Téléchargez votre vidéo</h3>
                      <p className="mt-2 text-gray-600">
                        Utilisez notre application pour télécharger une vidéo de votre marche ou enregistrez-en une nouvelle.
                      </p>
                    </div>
                    <div className="md:w-12 flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-ai2step-600 flex items-center justify-center relative animate-float" style={{ animationDelay: "0.5s" }}>
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pr-12 flex justify-center">
                      <div className="h-32 w-32 bg-ai2step-100 rounded-lg flex items-center justify-center">
                        <Camera className="h-16 w-16 text-ai2step-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                      <h3 className="text-xl font-bold text-gray-900">3. Analyse par IA</h3>
                      <p className="mt-2 text-gray-600">
                        Notre système analyse votre marche et identifie les problèmes biomécaniques.
                      </p>
                    </div>
                    <div className="md:w-12 flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-ai2step-600 flex items-center justify-center relative animate-float" style={{ animationDelay: "1s" }}>
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 flex justify-center">
                      <div className="h-32 w-32 bg-ai2step-100 rounded-lg flex items-center justify-center">
                        <Database className="h-16 w-16 text-ai2step-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12">
                      <h3 className="text-xl font-bold text-gray-900">4. Recevez votre rapport</h3>
                      <p className="mt-2 text-gray-600">
                        Obtenez un rapport détaillé et des recommandations pour des semelles personnalisées adaptées à vos besoins.
                      </p>
                    </div>
                    <div className="md:w-12 flex justify-center">
                      <div className="h-12 w-12 rounded-full bg-ai2step-600 flex items-center justify-center relative animate-float" style={{ animationDelay: "1.5s" }}>
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pr-12 flex justify-center">
                      <div className="h-32 w-32 bg-ai2step-100 rounded-lg flex items-center justify-center">
                        <Footprints className="h-16 w-16 text-ai2step-600" />
                      </div>
                    </div>
                  </div>
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
        
        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-ai2step-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-ai2step-600 font-semibold tracking-wide uppercase">Témoignages</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ce que disent nos utilisateurs
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-ai2step-100 flex items-center justify-center">
                    <span className="text-ai2step-700 font-bold">MS</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Marie S.</h4>
                    <p className="text-gray-500">Coureuse</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Grâce à AI2Step, j'ai enfin compris pourquoi je ressentais des douleurs lors de mes courses. Les semelles recommandées ont totalement changé mon expérience de course à pied !"
                </p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-ai2step-100 flex items-center justify-center">
                    <span className="text-ai2step-700 font-bold">TD</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Thomas D.</h4>
                    <p className="text-gray-500">Podologue</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "En tant que professionnel, j'utilise AI2Step avec mes patients. La précision de l'analyse et la qualité des rapports sont impressionnantes. Un outil indispensable !"
                </p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-ai2step-100 flex items-center justify-center">
                    <span className="text-ai2step-700 font-bold">LB</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Laura B.</h4>
                    <p className="text-gray-500">Sportive amateur</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Procédure simple et résultats étonnants. Je ne pensais pas qu'une application pourrait analyser ma marche avec autant de précision. Je recommande vivement !"
                </p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★☆</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ai2step-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Prêt à améliorer votre démarche ?</span>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
