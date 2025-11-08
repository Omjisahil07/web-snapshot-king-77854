import { Clock, Users, BarChart3, Bell } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate interview scheduling and feedback collection to focus on what matters most.",
  },
  {
    icon: Users,
    title: "Collaborate Better",
    description: "Share feedback instantly with your team and make faster hiring decisions together.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Get analytics on your hiring process to continuously improve your recruitment.",
  },
  {
    icon: Bell,
    title: "Stay Updated",
    description: "Real-time notifications keep everyone in the loop throughout the hiring process.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Go from question to hire!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage interviews and make great hiring decisions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
