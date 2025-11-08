import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Head of Talent",
    company: "TechCorp",
    content: "This platform has completely transformed our hiring process. We've reduced time-to-hire by 40% and candidate feedback has never been better.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Recruiting Manager",
    company: "StartupHub",
    content: "The automated feedback collection is a game-changer. No more chasing interviewers for their notes. Everything is organized and accessible.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "HR Director",
    company: "Global Solutions",
    content: "Best investment we've made in our recruitment tech stack. The analytics help us continuously improve our interview process.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Recruiters love us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what hiring teams are saying about our platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
