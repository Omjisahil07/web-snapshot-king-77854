import socialStack from "@/assets/social-stack.png";
import timeChart from "@/assets/time-chart.png";
import feedbackUi from "@/assets/feedback-ui.png";
import meetingCards from "@/assets/meeting-cards.png";
import interviewStatus from "@/assets/interview-status.png";

const FeatureBento = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium mb-6">
            Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Features that will make your life easier
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline your hiring process with powerful tools for sourcing, evaluating, and onboarding top talent - all in one platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Time Tracker Card */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft relative overflow-hidden">
            <div className="absolute -top-4 -right-4 bg-primary/5 w-32 h-32 rounded-full blur-3xl" />
            <div className="relative">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-destructive/10 rounded flex items-center justify-center">
                    <span className="text-destructive text-xs">✕</span>
                  </div>
                  <span className="text-sm font-medium">Time Tracker</span>
                </div>
                <img src={timeChart} alt="Time tracking chart" className="w-full max-w-md" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rank interview, effortlessly</h3>
              <p className="text-muted-foreground">
                State of the art bar chart depiction of interviee's performance
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-primary/10 px-3 py-1 rounded-lg">
              <span className="text-sm">Do not hire Manu, please.</span>
            </div>
          </div>

          {/* Social Integration Card */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft relative overflow-hidden">
            <div className="absolute -bottom-4 -left-4 bg-primary/5 w-32 h-32 rounded-full blur-3xl" />
            <div className="relative">
              <img src={socialStack} alt="Social media integration" className="w-48 h-48 mx-auto mb-6 object-contain" />
              <h3 className="text-2xl font-bold mb-2">Easy social media integration</h3>
              <p className="text-muted-foreground">
                Go from nothing to social media success stories.
              </p>
            </div>
          </div>

          {/* Resume Upload Card */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft relative overflow-hidden">
            <div className="absolute -top-4 -left-4 bg-primary/5 w-32 h-32 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-full max-w-md mx-auto mb-6 p-6 bg-background rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Manu Arora</div>
                    <div className="text-sm text-muted-foreground">69 GB / 80 GB</div>
                  </div>
                  <button className="ml-auto text-muted-foreground">⋯</button>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '86%' }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Easy resume upload</h3>
              <p className="text-muted-foreground">
                Upload and manage candidate resumes with ease
              </p>
            </div>
          </div>

          {/* Interview Feedback Card */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 bg-primary/5 w-32 h-32 rounded-full blur-3xl" />
            <div className="relative">
              <img src={feedbackUi} alt="Interview feedback interface" className="w-full mb-6 rounded-xl" />
              <h3 className="text-2xl font-bold mb-2">Track interview feedback</h3>
              <p className="text-muted-foreground">
                Centralized feedback system for all your interviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBento;
