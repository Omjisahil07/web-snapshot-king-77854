import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoIcon from "@/assets/logo-icon.png";

const faqs = [
  {
    question: "What is the purpose of this website?",
    answer: "This platform helps you streamline your interview process by automatically recording, organizing, and centralizing feedback from user interviews.",
  },
  {
    question: "How do i contact support?",
    answer: "You can reach our support team via email at support@playful.com or through the chat widget on our website. We typically respond within 24 hours.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            {/* Logo Icon */}
            <div className="inline-block mb-8">
              <div className="w-20 h-20 bg-card rounded-2xl shadow-soft flex items-center justify-center">
                <img src={logoIcon} alt="" className="w-12 h-12" />
              </div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              Frequently asked questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
