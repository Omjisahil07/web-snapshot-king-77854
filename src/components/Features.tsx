import { UserSearch, Pencil, Cloud } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const features = [
  {
    icon: UserSearch,
    title: "Centralise system to search for candidates, easy access to the entire database.",
    color: "text-primary",
  },
  {
    icon: Pencil,
    title: "Accelerated speed to shortlist candidates, make notes as you scan and decide later.",
    color: "text-primary",
  },
  {
    icon: Cloud,
    title: "Data is backed up every 2 seconds so that you never lose a single candidate ever again.",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium mb-8">
            Features
          </span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Go from question to hired
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All the features you need to evaluate technical candidates effectively, track hiring pipelines, and find your next star engineer - all in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <p className="text-foreground leading-relaxed">{feature.title}</p>
              </div>
            );
          })}
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-primary p-8 shadow-card">
            <img 
              src={dashboardPreview} 
              alt="Dashboard interface preview" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
