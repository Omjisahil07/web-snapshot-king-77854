import { CheckCircle2 } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
            23,000+
          </h2>
          <p className="text-xl text-muted-foreground">
            Happy customers worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-card border border-border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-lg font-medium">Interview candidates</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-card border border-border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-lg font-medium">Find proven leads</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-card border border-border">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
            <span className="text-lg font-medium">Filter, select, enjoy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
