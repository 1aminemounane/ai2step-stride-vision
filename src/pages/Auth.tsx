
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, User, CheckIcon } from "lucide-react";

interface FormData {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if register query param is present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('register') === 'true') {
      setActiveTab('signup');
    }
  }, [location]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (activeTab === 'signup') {
      if (!formData.name?.trim()) {
        newErrors.name = 'Le nom est requis';
      }
      
      if (!formData.passwordConfirm) {
        newErrors.passwordConfirm = 'La confirmation du mot de passe est requise';
      } else if (formData.password !== formData.passwordConfirm) {
        newErrors.passwordConfirm = 'Les mots de passe ne correspondent pas';
      }
    }
    
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Message de succès
      if (activeTab === 'signin') {
        toast({
          title: "Connexion réussie",
          description: "Vous êtes maintenant connecté à votre compte.",
        });
      } else {
        toast({
          title: "Inscription réussie",
          description: "Votre compte a été créé avec succès.",
        });
      }
      
      // Redirection (pour l'instant, nous redirigeons vers la page d'accueil)
      navigate('/');
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {activeTab === 'signin' ? 'Connexion à votre compte' : 'Créer un compte'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {activeTab === 'signin' ? 'Accédez à votre espace personnel' : 'Commencez votre analyse biomécanique'}
            </p>
          </div>
          
          <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Tabs value={activeTab} onValueChange={setActiveTab as (value: string) => void} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signin">Connexion</TabsTrigger>
                <TabsTrigger value="signup">Inscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="signin-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="votre@email.com"
                      />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700">
                      Mot de passe
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="signin-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`pl-10 ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="••••••••"
                      />
                    </div>
                    {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-ai2step-600 focus:ring-ai2step-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Se souvenir de moi
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-ai2step-600 hover:text-ai2step-500">
                        Mot de passe oublié ?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-ai2step-600 hover:bg-ai2step-700"
                      disabled={loading}
                    >
                      {loading ? 'Connexion en cours...' : 'Se connecter'}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? 'border-red-500' : ''}
                      placeholder="Jean Dupont"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                      Mot de passe
                    </label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={errors.password ? 'border-red-500' : ''}
                      placeholder="••••••••"
                    />
                    {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                      Confirmer le mot de passe
                    </label>
                    <Input
                      id="passwordConfirm"
                      name="passwordConfirm"
                      type="password"
                      autoComplete="new-password"
                      value={formData.passwordConfirm}
                      onChange={handleInputChange}
                      className={errors.passwordConfirm ? 'border-red-500' : ''}
                      placeholder="••••••••"
                    />
                    {errors.passwordConfirm && <p className="mt-2 text-sm text-red-600">{errors.passwordConfirm}</p>}
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-ai2step-600 hover:bg-ai2step-700"
                      disabled={loading}
                    >
                      {loading ? 'Inscription en cours...' : 'S\'inscrire'}
                    </Button>
                  </div>
                  
                  <div className="text-sm text-center text-gray-600">
                    En vous inscrivant, vous acceptez nos{' '}
                    <a href="#" className="font-medium text-ai2step-600 hover:text-ai2step-500">
                      conditions d'utilisation
                    </a>{' '}
                    et notre{' '}
                    <a href="#" className="font-medium text-ai2step-600 hover:text-ai2step-500">
                      politique de confidentialité
                    </a>
                    .
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  Pourquoi AI2Step ?
                </span>
              </div>
            </div>
            
            <div className="mt-5 space-y-4">
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">Analyse biomécanique de haute précision</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">Solutions de semelles personnalisées</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">Rapports détaillés et recommandations</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
