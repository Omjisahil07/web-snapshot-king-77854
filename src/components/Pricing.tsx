import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const plans = [
  {
    name: "Hobby",
    price: "0",
    period: "/month",
    features: [
      "Community forum access",
      "Cancel anytime",
    ],
  },
  {
    name: "Starter",
    price: "299",
    period: "/month",
    popular: true,
    features: [
      "Access to basic analytics reports",
      "Community forum access",
      "Unlimited Tokens",
      "24×7 Support",
      "Everything in Hobby Plan",
      "Cancel anytime",
    ],
  },
  {
    name: "Pro",
    price: "1490",
    period: "/month",
    features: [
      "Real-time data processing",
      "AI-powered insights",
      "Everything in Hobby Plan",
      "Cancel anytime",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium mb-8">
            pricing
          </span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pricing so simple, you'd buy instantly
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pick from our plans and get started in minutes, simple for everyone.
          </p>
        </div>

        {/* Floating Logo Icon */}
        <div className="absolute top-32 right-20 hidden xl:block">
          <div className="w-20 h-20 bg-card rounded-2xl shadow-soft flex items-center justify-center animate-float">
            <img src={logoIcon} alt="" className="w-12 h-12" />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground shadow-card lg:scale-105' 
                  : 'bg-card border border-border shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-medium shadow-soft">
                  Featured
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl">$</span>
                  <span className="text-6xl font-bold tracking-tight">{plan.price}</span>
                  <span className={plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-background text-foreground hover:bg-background/90' 
                    : ''
                }`}
                variant={plan.popular ? 'secondary' : 'default'}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
