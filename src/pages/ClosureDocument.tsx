import { ProjectHeader } from "@/components/ProjectHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/PageTransition";
import { useState, useEffect } from "react";
import { 
  FileCheck, 
  Package, 
  History, 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  BookOpen, 
  Lightbulb, 
  PenTool, 
  Award, 
  ArrowRight 
} from "lucide-react";

const ClosureDocument = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "project-info", title: "Project Information", icon: FileCheck },
    { id: "deliverable", title: "Deliverable Summary", icon: Package },
    { id: "change-log", title: "Change Log", icon: History },
    { id: "performance", title: "Performance Analysis", icon: TrendingUp },
    { id: "stakeholder", title: "Stakeholder Management", icon: Users },
    { id: "risk-issue", title: "Risk and Issue Summary", icon: AlertTriangle },
    { id: "went-well", title: "What Went Well?", icon: CheckCircle },
    { id: "went-poorly", title: "What Didn't Go Well?", icon: XCircle },
    { id: "do-differently", title: "What Would You Do Differently?", icon: RefreshCw },
    { id: "lessons-learned", title: "Lessons Learned Register", icon: BookOpen },
    { id: "key-takeaways", title: "Key Takeaways for Future Projects", icon: Lightbulb },
    { id: "sign-off", title: "Formal Sign-Off", icon: PenTool },
    { id: "recognition", title: "Recognition", icon: Award },
    { id: "whats-next", title: "What's Next", icon: ArrowRight },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("[data-section]");
      let currentSection = "";

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSection = section.getAttribute("data-section") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <ProjectHeader />
        
        {/* Sticky Navigation */}
        <nav className="sticky top-[88px] z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
          <div className="container mx-auto px-6 py-3">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-primary-foreground shadow-md"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <section.icon className="h-4 w-4" />
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-6 py-12 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-16 text-center animate-fade-in relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <FileCheck className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-500">Project Closure</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
              Closure Document
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive project closure documentation including outcomes, lessons learned, and formal sign-off
            </p>
          </div>

          {/* Sections Grid */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card
                key={section.id}
                data-section={section.id}
                className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
                style={{ animationDelay: `${0.1 + index * 0.03}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                      <section.icon className="h-6 w-6" />
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
        </main>
      </div>
    </PageTransition>
  );
};

export default ClosureDocument;
