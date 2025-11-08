import dashboardPreview from "@/assets/dashboard-preview.png";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border bg-card p-8">
            <img 
              src={dashboardPreview} 
              alt="Platform dashboard showing candidate tracking" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
