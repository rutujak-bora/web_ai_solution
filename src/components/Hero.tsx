import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20" />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Opportunities
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-gray-100 dark:via-purple-100 dark:to-gray-100 bg-clip-text text-transparent animate-fade-in-up">
            Agile & Product Operations Built Your Way
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Certified Scrum Master transforming business ideas into digital reality
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            See proven projects, transparent expertise, and client success stories from a professional who delivers results
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work & Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Hadapsar, Pune</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9359342994</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>kawadeu@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
