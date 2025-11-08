import testimonialProfile from "@/assets/testimonial-profile.png";

const testimonials = [
  {
    name: "Manu Arora",
    role: "Founder of Aceternity",
    content: "The team at Playful has been incredible to work with. Their attention to detail and commitment to quality is unmatched.",
    image: null,
  },
  {
    name: "Sarah Chen",
    role: "Head of Talent, TechVision Inc.",
    content: "The level of customization and flexibility in the platform is outstanding. We've been able to adapt it perfectly to our unique hiring workflows, and the results have been phenomenal. The customer support team is always there when we need them.",
    image: null,
  },
  {
    name: "James Rodriguez",
    role: "VP of HR, Global Solutions Ltd.",
    content: "Honestly, I'm not even the kind of guy who writes reviews, but this is just incredible. All the things are so intuitive and easy to use. I love the dashboard and how everything flows together seamlessly.",
    image: null,
  },
  {
    name: "Dua Lipa",
    role: "Founder of my heart",
    content: "Look, I'll keep this short. I'm tired of people saying they're busy but they're not. This platform actually saves time. Real gibberish. This page is cool, IDK about playful, just go ahead and buy Aceternity Pro.",
    image: null,
  },
  {
    name: "Emily Nakamura",
    role: "Talent Acquisition Director, Future Dynamics",
    content: "Game-changing platform for our recruitment process. The analytics and insights have helped us make better hiring decisions consistently.",
    image: null,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium mb-8">
            testimonials
          </span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Recruiters love us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            People have chosen us from all over the world to help them with their hiring process. Join us and be part of the revolution.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
          {/* Testimonial Cards Grid */}
          <div className="grid gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {testimonial.role}
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Profile Image */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="rounded-3xl overflow-hidden bg-muted">
                <img 
                  src={testimonialProfile} 
                  alt="Professional testimonial" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
