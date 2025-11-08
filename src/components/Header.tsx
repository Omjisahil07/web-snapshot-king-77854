import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
            <span className="text-2xl font-bold">Playful</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-primary transition-colors">
              Home
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="px-6">
              Get started →
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
