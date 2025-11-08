import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "99",
    period: "/month",
    description: "Perfect for small teams",
    features: [
      "Up to 50 interviews/month",
      "Basic analytics",
      "Email support",
      "2 team members",
      "Interview recording",
      "Feedback templates",
    ],
  },
  {
    name: "Professional",
    price: "299",
    period: "/month",
    description: "For growing companies",
    popular: true,
    features: [
      "Up to 200 interviews/month",
      "Advanced analytics",
      "Priority support",
      "10 team members",
      "Interview recording",
      "Feedback templates",
      "Custom branding",
      "API access",
      "Integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "1490",
    period: "/month",
    description: "For large organizations",
    features: [
      "Unlimited interviews",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited team members",
      "Interview recording",
      "Feedback templates",
      "Custom branding",
      "API access",
      "Integrations",
      "Custom contracts",
      "SLA guarantee",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pricing so simple, you'll buy instantly
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your hiring needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground shadow-card scale-105' 
                  : 'bg-card border border-border shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <Button 
                className={`w-full mb-8 ${
                  plan.popular 
                    ? 'bg-background text-foreground hover:bg-background/90' 
                    : ''
                }`}
                variant={plan.popular ? 'secondary' : 'default'}
              >
                Get Started
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
