import testimonialProfile from "@/assets/testimonial-profile.png";
import avatarManu from "@/assets/avatar-manu.png";
import avatarSarah from "@/assets/avatar-sarah.png";
import avatarJames from "@/assets/avatar-james.png";
import avatarDua from "@/assets/avatar-dua.png";
import avatarEmily from "@/assets/avatar-emily.png";

const testimonials = [
  {
    name: "Manu Arora",
    role: "Founder of Aceternity",
    content: "This platform is revolutionary. I hired my first candidate from Playful recruiting and they turned out to be great. Now since I'm asked to write a bigger review so that it fills the first card, I'll just go on and start writing gibberish. This page is cool, IDK about playful, just go ahead and buy Aceternity Pro.",
    image: avatarManu,
  },
  {
    name: "Sarah Chen",
    role: "Head of Talent, TechVision Inc.",
    content: "Working with this platform has transformed our recruitment process. The AI-powered matching system saved us countless hours in finding the perfect candidates.",
    image: avatarSarah,
  },
  {
    name: "James Rodriguez",
    role: "VP of HR, Global Solutions Ltd.",
    content: "The platform's intuitive interface and powerful analytics have completely revolutionized how we approach talent acquisition.",
    image: avatarJames,
  },
  {
    name: "Dua Lipa",
    role: "Founder of my heart",
    content: "The team at Playful has been incredible to work with. Their attention to detail and commitment to quality is unmatched.",
    image: avatarDua,
  },
  {
    name: "Emily Nakamura",
    role: "Talent Acquisition Director, Future Dynamics",
    content: "The level of customization and flexibility in the platform is outstanding. We've been able to adapt it perfectly to our unique hiring workflows, and the results have been phenomenal. The customer support team is always there when we need them.",
    image: avatarEmily,
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
        
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto items-start">
          {/* Testimonial Cards Masonry Grid */}
          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-card shadow-soft"
              >
                <p className="text-foreground leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Profile Image with Watch Review Button */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="rounded-3xl overflow-hidden bg-muted relative group">
                <img 
                  src={testimonialProfile} 
                  alt="Professional testimonial" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <button className="px-6 py-3 bg-background/90 backdrop-blur-sm text-foreground rounded-xl font-medium shadow-lg hover:bg-background transition-all flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    Watch Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
