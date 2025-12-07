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
  ArrowRight,
  Calendar,
  User,
  FileText,
  Target
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

          {/* Sections */}
          <div className="space-y-8">
            
            {/* Section 1: Project Information */}
            <Card
              data-section="project-info"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Project Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-indigo-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Project Title</p>
                      <p className="font-medium text-foreground">Business-Aligned Job Hunt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-indigo-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Project Manager</p>
                      <p className="font-medium text-foreground">Daniel Aldana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-indigo-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Closure Type</p>
                      <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                        Changed Priority Closure – Stopped due to strategy shift
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Project Description</p>
                    <p className="text-foreground leading-relaxed">
                      Conduct an accurate and honest job hunt to prepare for internships, part-time, or entry-level opportunities in business and technology. The main deliverables expected are a job application package (e.g., resumes, documents), network portfolio/tracker, and mock interview documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Closing Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Overall, I am proud of my performance and execution throughout this semester-long project. Several goals were achieved, including expanding my LinkedIn network by at least two connections and conducting three interviews where I encouraged interviewers to ask questions as I explained my project. Growing my network and strengthening my communication skills were significant successes; however, maintaining confidence and motivation proved challenging, particularly when personal issues arose during the execution phase. Although I did not fully complete all planned deliverables, I believe the project was an overall success, with a satisfaction and success rating of <span className="font-semibold text-indigo-500">7 out of 10</span>.
                </p>
              </div>
            </Card>

            {/* Section 2: Deliverable Summary */}
            <Card
              data-section="deliverable"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <Package className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Deliverable Summary</h2>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Deliverable Name</TableHead>
                      <TableHead>Original Definition of Done</TableHead>
                      <TableHead>Actual Progress</TableHead>
                      <TableHead className="w-[100px]">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Job Application Package (Resume Set + Cover Template)</TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Final files exported in professional format (PDF)</li>
                          <li>Content aligned with at least 2-3 real job postings</li>
                          <li>Reviewed by a professor or career counselor</li>
                          <li>Includes documented version history</li>
                        </ul>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Constructed resume matching similar job requirements across multiple positions</li>
                          <li>Documented version history and areas of revisions</li>
                        </ul>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">Yellow</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Networking Portfolio</TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Log includes contact names, organizations, discussion topics, and follow-up actions</li>
                          <li>Reflections recorded for each interview</li>
                          <li>Evidence of connections captured via screenshots or LinkedIn activity</li>
                        </ul>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Communicated with new LinkedIn connections both in person and online, maintaining relationships with two of them</li>
                          <li>Documented three reflections for each interview conducted</li>
                        </ul>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Green</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Application Tracker</TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Each record includes company name, role, submission date, and next action</li>
                          <li>At least one follow-up completed for each open application</li>
                          <li>Weekly updates maintained through project completion</li>
                        </ul>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        Minimal to no progress made
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Red</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Interview Readiness Kit</TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Final Q&A document submitted</li>
                          <li>At least two mock interview feedback forms or screenshots included</li>
                          <li>Documented revisions showing applied feedback</li>
                        </ul>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Received feedback from two interviews; interviewees highlighted strengths and areas for improvement</li>
                          <li>Documented feedback to demonstrate growth for future interview opportunities</li>
                        </ul>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Green</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Section 3: Change Log */}
            <Card
              data-section="change-log"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <History className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Change Log</h2>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Change No</TableHead>
                      <TableHead className="w-[120px]">Change Date</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>Reason for Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">1</TableCell>
                      <TableCell className="text-muted-foreground">Week 9 (2025-10-19)</TableCell>
                      <TableCell className="text-muted-foreground">Changed scope from CIS focus to business focus</TableCell>
                      <TableCell className="text-muted-foreground">
                        While conducting my usual job search, I noticed that some technology-focused positions fall under business operations, such as business analyst, sales operations, and marketing/social media marketing roles. This realization allowed me to expand my opportunities when selecting potential positions.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Section 4: Performance Analysis */}
            <Card
              data-section="performance"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Performance Analysis</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Budget Performance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Despite being a student with most services and tools provided for free—either fully (ChatGPT) or with limited access (Monday.com)—unexpected costs arose during the project's closure phase. In week 12, I needed to pay <span className="font-semibold text-indigo-500">$25</span> for an AI tool to create my closure website. The tool, called Lovable, was worth the investment because it excels at building applications and websites. Having taken Web Design and Development, I was able to apply my UX/UI design knowledge effectively—all for just $25. Beyond this, no other unexpected costs for tools, hosting, or resources occurred.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500" />
                    Schedule Performance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To a moderate extent, I met my milestones throughout the project timeline. Initially, I had a rough start but managed to pick up the pace quickly. However, midway through execution, I found myself delaying key deliverable milestones, needing to adjust deadlines to allow adequate time for completion. While this was a sensible approach, I ended up with more work than planned, resulting in some milestones being completed with poor quality—such as job requirement analysis and stakeholder feedback scheduling—while others, like cover letter creation, were never initiated due to my focus on resumes and interviews.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The delays were caused by a lack of confidence and motivation, competing coursework demands, and limited job opportunities despite broadening my scope. Although there were delays, I believe my time estimates were generally realistic. My lack of motivation was the primary factor preventing some key milestones from being completed within the expected 2–4 day timeframe with excellent quality.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 5: Stakeholder Management */}
            <Card
              data-section="stakeholder"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Stakeholder Management</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At the start of the semester, my communication skills were weak, and to some extent, they remain an area for growth. However, they have improved significantly thanks to this semester-long personal project. Initially, engaging with stakeholders was challenging due to nervousness and fear of judgment, which is why my early communications were limited to professors, peers, and friends I had known from prior semesters.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Over time, I connected with new people—both through necessity (e.g., group projects) and on my own initiative (reaching out on LinkedIn). Now, I feel more comfortable approaching new stakeholders independently, with minimal nervousness and less fear of judgment. This growth came from learning to approach each stakeholder with a direct, personal tone: <span className="italic">"I'm working on a personal project. Would you please review it and provide feedback? Feel free to ask for any clarification you may need."</span>
                </p>
                <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-500 mb-2">Most Valuable Feedback</h4>
                  <p className="text-foreground italic">
                    "Make applying mechanical, not emotional" — meaning: Don't let your emotions delay your chances of applying to jobs, make it a habit to apply automatically and deal with the emotions later. Rejection is inevitable, and learning from it is the best outcome for the future.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 6: Risk and Issue Summary */}
            <Card
              data-section="risk-issue"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Risk and Issue Summary</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The primary challenge throughout my project execution was delays in key milestones. While this was initially identified as a planned risk before the execution phase, it quickly materialized into an issue that required immediate attention.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <h4 className="font-semibold text-red-500 mb-2">Weeks 6–7: Health Issues</h4>
                    <p className="text-muted-foreground text-sm">
                      A sudden health issue arose, requiring me to prioritize my well-being over academic work. As workload accumulated, many early deliverable tasks were delayed or completed with poor quality. By week 8, I had improved at managing deadlines while still focusing on my health.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <h4 className="font-semibold text-amber-600 mb-2">Weeks 9–11: Limited Opportunities</h4>
                    <p className="text-muted-foreground text-sm">
                      I realized there were very few job opportunities to apply for, with only one reasonable position appearing every few days. I expanded my scope from CIS to business-focused roles but still needed to adjust deadlines and shift priority focus by week 12.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Moving Forward</h4>
                  <p className="text-muted-foreground text-sm">
                    For future projects, I will focus on monitoring potential risks more closely, as deadlines were significantly altered throughout this project when risks became issues. Despite this being primarily a solo project, I learned that communication remains essential—both for obtaining feedback and for addressing sudden incidents that disrupt progress.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 7: What Went Well? */}
            <Card
              data-section="went-well"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">What Went Well?</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Team Communication:</span> Following up with my team to keep everyone on track went well. I communicated with each member about issues and deadlines, whether course-related or personal, and ensured teammates stayed updated on their project progress.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Hybrid Methodology:</span> Changing the project methodology from predictive to hybrid allowed my workflow to be more reasonable and smooth, especially regarding resume construction. A hybrid approach enabled me to change deadlines and modify the structure of planned deliverables.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Stakeholder Feedback:</span> Stakeholder feedback not only helped improve my project execution but also boosted my confidence. Many stakeholders I reached out to expressed support for my accomplishments, even the small ones, and some encouraged me to expand my social circles.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 8: What Didn't Go Well? */}
            <Card
              data-section="went-poorly"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <XCircle className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">What Didn't Go Well?</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Work-Life Balance:</span> Balancing coursework with project execution was the main challenge. Maintaining deadlines proved difficult, and during the execution phase, numerous deadlines were adjusted despite employing a hybrid approach and preparing in advance for potential issues.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Vague Initial Scope:</span> Before the execution phase, my project topic and goal were too vague, as they initially were "Preparing for the CC certification." The feedback I received was that it was a deliverable rather than a goal. I needed to change my planning to align with my new topic of job hunting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Poor Documentation:</span> Documentation of deliverables and their execution was insufficient. Completing all deliverables and associated tasks was not always my priority. An unreasonable shift in focus—caused by missed deadlines, lack of motivation, and other issues—resulted in poor-quality deliverables.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 9: What Would You Do Differently? */}
            <Card
              data-section="do-differently"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">What Would You Do Differently?</h2>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Initiation & Planning Phase</h4>
                  <p className="text-muted-foreground text-sm">
                    I would communicate more thoroughly with the stakeholder(s) who provided project information (in this case, the professor) to clarify the scope, business needs, values, and other crucial execution details. I would also communicate with teammates about the project's objectives and ensure everyone understands what needs to be accomplished in future phases.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Execution & Monitoring Phase</h4>
                  <p className="text-muted-foreground text-sm">
                    I would monitor risks and issues more frequently and set reasonable deadlines for deliverables and associated tasks. I would also update teammates and stakeholders about problems promptly so they clearly understand why execution and monitoring did not proceed as planned.
                  </p>
                </div>
                <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-500 mb-2">Project-Specific Improvement</h4>
                  <p className="text-muted-foreground text-sm">
                    I would have expanded my search to include other job listing sites such as Indeed, Glassdoor, and LinkedIn for positions and internships, rather than focusing solely on Handshake. By limiting my search, I may have missed opportunities that aligned well with my experiences and academic achievements.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 10: Lessons Learned Register */}
            <Card
              data-section="lessons-learned"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Lessons Learned Register</h2>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Date</TableHead>
                      <TableHead className="w-[100px]">SDLC Stage</TableHead>
                      <TableHead>What was the problem?</TableHead>
                      <TableHead>Consequence</TableHead>
                      <TableHead>Lesson Learned</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 5 (Sep 16)</TableCell>
                      <TableCell><Badge variant="outline">Planning</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Project topic was a deliverable rather than a goal</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Project charter sections needed to be changed completely; rough transition to execution</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Communicate with stakeholder about business needs; allow room for mistakes</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 6 (Sep 27)</TableCell>
                      <TableCell><Badge variant="outline">Execution</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Health-related issues arose; needed to focus on myself</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Deadlines were significantly adjusted; subsequent tasks completed with poor quality</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Allow time for personal well-being; communicate with stakeholders regarding delays</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 9</TableCell>
                      <TableCell><Badge variant="outline">Execution</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Lack of job/internship opportunities</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Delayed stakeholder communication deadlines; lost potential opportunities</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Strengthen initiation and planning phases; expect and prepare for scope changes</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 11</TableCell>
                      <TableCell><Badge variant="outline">Monitoring</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Lack of documentation despite execution being on track</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Unprepared when stakeholders asked about progress; lacked evidence of completion</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Document progress as soon as the execution phase begins</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 13</TableCell>
                      <TableCell><Badge variant="outline">Closing</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Stakeholder interview deadlines approaching; changing them was not an option</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Preventable stress occurred; stakeholder communication became difficult</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Set reminders for upcoming deadlines; prioritize deliverables early; remain calm under pressure</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Section 11: Key Takeaways */}
            <Card
              data-section="key-takeaways"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Key Takeaways for Future Projects</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-primary-foreground font-bold text-sm shrink-0">1</span>
                  <p className="text-foreground">
                    <span className="font-semibold">Analyze and communicate project needs and requirements early.</span> Engage with stakeholders about the project's goals, needs, values, scope, and other relevant information during the initiation and planning phases.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-primary-foreground font-bold text-sm shrink-0">2</span>
                  <p className="text-foreground">
                    <span className="font-semibold">Monitor the risk register more often.</span> Many risks I had considered turned out to be issues during execution, resulting in slow progress, poor quality, and deadline delays.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-primary-foreground font-bold text-sm shrink-0">3</span>
                  <p className="text-foreground">
                    <span className="font-semibold">Communicate with the team and stakeholders for guidance.</span> Communication should have been my priority when explaining why progress and deliverable processes were not running smoothly.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-primary-foreground font-bold text-sm shrink-0">4</span>
                  <p className="text-foreground">
                    <span className="font-semibold">Schedule stakeholder feedback early on.</span> Although I informed stakeholders I might need feedback, I never followed up midway through execution, resulting in preventable stress and busy scheduling for feedback sessions.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 12: Formal Sign-Off */}
            <Card
              data-section="sign-off"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <PenTool className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Formal Sign-Off</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-5 w-5 text-indigo-500" />
                    <h4 className="font-semibold text-foreground">Project Manager</h4>
                  </div>
                  <p className="text-muted-foreground">Daniel Aldana</p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-indigo-500" />
                    <h4 className="font-semibold text-foreground">Tech Owls Team Sign-Off</h4>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">December 6, 2025</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I spoke with my team about the outcomes of my project, my deliverables, and how these deliverables were accomplished through smaller tasks. My team expressed support for my results and acknowledged the difficulty of the job hunting process, especially given the lack of internship positions that fit our needs and values. They appreciated my personal goals of finding an internship to achieve my mission and vision, and encouraged me to continue searching and applying for positions—viewing this project as a stepping stone for future job searches.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-indigo-500" />
                    <h4 className="font-semibold text-foreground">Interviewees Sign-Off</h4>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">December 5, 2025</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Keiley Anaya, Roshan Roy Suja, and Juan Manuel Toledo</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Each interviewee acknowledged that I could have made more progress on my deliverables, particularly regarding personal challenges such as my fear of rejection. However, they agreed that the project topic was an excellent choice, as it aligns with my personal goals and values. Keiley noted that I was honest throughout my project, especially when discussing the issues I faced. Juan appreciated the outcome of my network portfolio and interview, observing that I demonstrated professionalism and knowledge, and suggested that I may already possess strong communication and interviewing skills.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 13: Recognition */}
            <Card
              data-section="recognition"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Recognition</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Tech Owl Teammates</h4>
                  <p className="text-sm text-indigo-500 mb-3">Angel Contreras, Fatima Zahra Anammi, Abner Bonilla, Berenice Fuentes</p>
                  <p className="text-muted-foreground text-sm">
                    I'm grateful for the opportunity to connect and get to know them. For this project, I am grateful for the feedback I received throughout the semester. My team provided scope suggestions and recommendations, and we met once a week to discuss our project progress.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Professors</h4>
                  <p className="text-sm text-indigo-500 mb-3">Arun Aryal, Daniel Razmjou, Maria Espinoza</p>
                  <p className="text-muted-foreground text-sm">
                    Each professor showed interest in my work and offered valuable guidance regarding my project and the job search process. Daniel provided resources on certifications, enabling me to pass an entry-level certification. Maria offered insights on stakeholder relationships and building confidence when applying for positions.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Interviewees</h4>
                  <p className="text-sm text-indigo-500 mb-3">Keiley Anaya, Roshan Roy Suja, Juan Manuel Toledo</p>
                  <p className="text-muted-foreground text-sm">
                    These peers celebrated small accomplishments that I had previously overlooked. They gave me the opportunity to demonstrate professionalism and test my understanding of my project. I am grateful for having chosen them as stakeholders.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 14: What's Next */}
            <Card
              data-section="whats-next"
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-elegant transition-all duration-300 scroll-mt-44 animate-fade-in border-l-4 border-l-indigo-500/50 hover:border-l-violet-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-primary-foreground shadow-md">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">What's Next</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Beyond focusing on finishing strong in my final semester at CSULA, I will prioritize early communication with stakeholders and potential teammates regarding project idea validation, goals, and the processes needed to complete projects thoroughly from the lead stakeholder's perspective.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <span className="font-semibold text-foreground">Review Lessons Learned:</span> Analyze issues by examining their causes, outcomes, and whether they were preventable—and if so, how my team or I could have addressed them.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <span className="font-semibold text-foreground">Strengthen Communication:</span> Continue to strengthen my communication skills and expand my social circle, focusing on in-person socializing for face-to-face support and trust.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <span className="font-semibold text-foreground">Improve Stakeholder Feedback:</span> Enhance my communication with stakeholders regarding project feedback and critiques by scheduling interviews early rather than toward the end.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <span className="font-semibold text-foreground">Priority Focus:</span> Stakeholder communication and clear project goals are the key priorities that will enable me to perform well throughout any project timeline.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default ClosureDocument;
