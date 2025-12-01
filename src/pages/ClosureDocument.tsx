import { ProjectHeader } from "@/components/ProjectHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/PageTransition";

const ClosureDocument = () => {
  const sections = [
    { title: "Project Information", number: 1 },
    { title: "Deliverable Summary", number: 2 },
    { title: "Change Log", number: 3 },
    { title: "Performance Analysis", number: 4 },
    { title: "Stakeholder Management", number: 5 },
    { title: "Risk and Issue Summary", number: 6 },
    { title: "What Went Well?", number: 7 },
    { title: "What Didn't Go Well?", number: 8 },
    { title: "What Would You Do Differently?", number: 9 },
    { title: "Lessons Learned Register", number: 10 },
    { title: "Key Takeaways for Future Projects", number: 11 },
    { title: "Formal Sign-Off", number: 12 },
    { title: "Recognition", number: 13 },
    { title: "What's Next", number: 14 },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <ProjectHeader />
        
        <main className="container mx-auto px-6 py-xl">
          <div className="max-w-4xl mx-auto space-y-lg">
            {/* Hero Section */}
            <div className="text-center space-y-4 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Project Closure
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Closure Document
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive project closure documentation including outcomes, lessons learned, and formal sign-off
              </p>
            </div>

            {/* Sections Grid */}
            <div className="grid gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {sections.map((section, index) => (
                <Card
                  key={section.number}
                  className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.15 + index * 0.03}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold shadow-md">
                        {section.number}
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                      In progress
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default ClosureDocument;
