import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import avatarRow from "@/assets/avatar-row.png";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Avatar Row */}
          <div className="mb-8 flex justify-center">
            <div className="flex -space-x-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-background" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-background" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-background" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-4 border-background" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-4 border-background" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-4 border-background" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            People love us
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Playful is loved by thousands of people across the world, be part of the community and join us.
          </p>

          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Enter your work email"
              className="bg-background border-border"
            />
            <Button size="lg" className="whitespace-nowrap px-8">
              Book a call
            </Button>
          </div>

          {/* Powered by Badge */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Powered by</span>
            <div className="flex items-center gap-1.5 font-semibold text-foreground">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
              </svg>
              Aceternity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;