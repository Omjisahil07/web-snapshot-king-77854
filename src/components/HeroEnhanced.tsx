import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.png";
import logoIcon from "@/assets/logo-icon.png";
import meetingCards from "@/assets/meeting-cards.png";
import interviewStatus from "@/assets/interview-status.png";
import { ArrowRight } from "lucide-react";

const HeroEnhanced = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <img src={logoIcon} alt="" className="w-24 h-24 opacity-60" />
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <img src={logoIcon} alt="" className="w-16 h-16 opacity-40" />
      </div>

      <div className="absolute bottom-32 left-20 hidden lg:block" style={{ transform: 'rotate(-12deg)' }}>
        <img src={meetingCards} alt="" className="w-48 opacity-80" />
      </div>

      <div className="absolute bottom-40 right-32 hidden lg:block" style={{ transform: 'rotate(8deg)' }}>
        <img src={interviewStatus} alt="" className="w-64 opacity-80" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full text-sm font-medium text-primary-foreground">
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
              New! Record user interviews without recording bots
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
            Record interviews.{" "}
            <span className="text-primary">Centralise feedback</span>{" "}
            automatically.
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Record and organize user interviews automatically. Focus on what matters - connecting with users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Get started - it's free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-12">
            <img 
              src={heroVisual} 
              alt="Interview platform visualization" 
              className="w-full max-w-2xl mx-auto h-auto animate-float"
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroEnhanced;
