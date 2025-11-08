import { X, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import socialStack from "@/assets/social-stack.png";
import interviewStatus from "@/assets/interview-status.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden py-20">
      {/* Decorative Elements */}
      <div className="absolute left-10 bottom-20 hidden lg:block" style={{ transform: 'rotate(-15deg)' }}>
        <img src={socialStack} alt="" className="w-64 opacity-80" />
      </div>
      
      <div className="absolute right-10 bottom-20 hidden lg:block" style={{ transform: 'rotate(8deg)' }}>
        <img src={interviewStatus} alt="" className="w-80 opacity-80" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Record interviews.{" "}
              <span className="text-foreground">Centralise feedback</span>{" "}
              automatically.
            </h2>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-xl mx-auto mb-12">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Pages</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Studio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Clients</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright and Social Icons */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">© Playful Aceternity LLC</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
