import worldMap from "@/assets/world-map.png";

const GlobalAvailability = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-background rounded-full text-sm font-medium border border-border mb-6">
            Availability
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            We are available everywhere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Global reach with local expertise - connecting talent worldwide
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <img 
            src={worldMap} 
            alt="Global availability map" 
            className="w-full h-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalAvailability;
