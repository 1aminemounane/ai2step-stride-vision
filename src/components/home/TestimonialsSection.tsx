
import React from 'react';

interface TestimonialProps {
  initials: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ initials, name, role, content, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-ai2step-100 flex items-center justify-center">
          <span className="text-ai2step-700 font-bold">{initials}</span>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600">
        {content}
      </p>
      <div className="mt-4 flex">
        <span className="text-yellow-400">{renderStars(rating)}</span>
      </div>
    </div>
  );
};

const renderStars = (rating: number) => {
  return "★".repeat(Math.floor(rating)) + (rating % 1 === 0.5 ? "☆" : "") + "☆".repeat(5 - Math.ceil(rating));
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-ai2step-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-ai2step-600 font-semibold tracking-wide uppercase">Témoignages</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ce que disent nos utilisateurs
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial 
            initials="MS"
            name="Marie S."
            role="Coureuse"
            content="Grâce à AI2Step, j'ai enfin compris pourquoi je ressentais des douleurs lors de mes courses. Les semelles recommandées ont totalement changé mon expérience de course à pied !"
            rating={5}
          />
          
          <Testimonial 
            initials="TD"
            name="Thomas D."
            role="Podologue"
            content="En tant que professionnel, j'utilise AI2Step avec mes patients. La précision de l'analyse et la qualité des rapports sont impressionnantes. Un outil indispensable !"
            rating={5}
          />
          
          <Testimonial 
            initials="LB"
            name="Laura B."
            role="Sportive amateur"
            content="Procédure simple et résultats étonnants. Je ne pensais pas qu'une application pourrait analyser ma marche avec autant de précision. Je recommande vivement !"
            rating={4.5}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
