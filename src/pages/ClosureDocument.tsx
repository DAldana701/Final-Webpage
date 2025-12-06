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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
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
                  Overall, I'm proud of my performance and execution throughout this semester-long project. Some of the goals were met, including expanding my LinkedIn profile by at least two connections and practicing and holding three interviews, encouraging the interviewer to ask me questions when I explained my project to them. Expanding my network and strengthening my communication skills was a great success; however, maintaining confidence and motivation proved to be a challenge, mainly when life's issues arose during the execution phase. Although I did not fully complete what I needed to deliver, I believe the project was overall a success, with a satisfaction and success rating of <span className="font-semibold text-indigo-500">7 out of 10</span>.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
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
                          <li>Communicated with new LinkedIn connections in person/online with two of them to maintain relationship</li>
                          <li>Documented three reflections for each interview executed</li>
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
                        Minimal to no progress conducted
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
                          <li>Received two interview feedback; interviewees explained strengths and areas of improvement</li>
                          <li>Documented feedback to showcase growth for future interview opportunities</li>
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
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
                      <TableCell className="text-muted-foreground">Changed scope from CIS focus to Business Focus</TableCell>
                      <TableCell className="text-muted-foreground">
                        When conducting my usual job searching, I noticed that some of the technology focus positions fall under business operations, such as business analyst, sales operations, and marketing/social media marketing. This allowed me to expand my opportunities when choosing potential job positions.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Budget Performance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Despite being a student and most services and tools being provided for free, either fully (ChatGPT) or with limited access (Monday.com), unexpected costs arose for a tool during the project's closure phase. I found myself during week 12 needing to pay <span className="font-semibold text-indigo-500">$25</span> for an AI model to create my closure website. The AI model, called Lovable, was worth the cost because it excels at making applications and websites. Since I've taken Web Design and Development, I've been able to implement my knowledge in UX/UI design, all for the cost of $25. Other than this, no unexpected costs for tools, hosting, or any resources appeared.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500" />
                    Schedule Performance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To a moderate extent, I did meet my milestones throughout my project timeline. Initially, I started rough but managed to pick up the pace quickly. However, in the middle of my execution, I found myself delaying key deliverable milestones that were approaching, needing to change deadlines to give me ample time to complete them. While smart to do, I ended up doing more work than planned to the point where some of the key milestones were done with poor quality, such as job requirement analysis and scheduling stakeholder feedback, or didn't initiate, such as cover letter creation due to focusing on resumes and other milestones (e.g., interviewing).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    The reasoning for the delays was a lack of confidence and motivation, as well as concentrating on different courses and limited job opportunities, despite broadening my scope. Although there were delays, I believe that my time estimates were realistic throughout this project, except for my own lack of motivation, which prevented some key milestones from being completed within the expected timeframe of 2-4 days with excellent quality.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  My communication skills at the start of the semester were weak, and to some extent, they remain a weakness of mine; however, they have improved thanks to this semester-long personal project. Initially, engaging with stakeholders was challenging due to nerves and judgment, which is why my initial communication with stakeholders was limited to professors, peers, and friends I had known from prior semesters.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, over time, I met new people, both through force (e.g., group projects) and on my own time (reaching out on LinkedIn). Now, I'm more comfortable reaching out to new stakeholders on my own, with minimal or no nerves and fear of judgment. The reason being that I managed to approach each stakeholder with a direct, personal tone, stating, <span className="italic">"I'm doing a personal project, may you please review it and provide feedback. Feel free to ask me for any clarification you may need."</span>
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The main issue throughout my project execution was delays in key milestones, which were initially a planned risk before the execution phase; however, it didn't take long before that risk turned into an issue that I needed to address quickly.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <h4 className="font-semibold text-red-500 mb-2">Weeks 6-7: Health Issues</h4>
                    <p className="text-muted-foreground text-sm">
                      A sudden health issue arose, and I needed to prioritize my health over academic work. With workload piling up, many early deliverable tasks were delayed or conducted with poor quality. By week 8, I had improved at managing deadlines while focusing on my health.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <h4 className="font-semibold text-amber-600 mb-2">Weeks 9-11: Limited Opportunities</h4>
                    <p className="text-muted-foreground text-sm">
                      Realized there were hardly any job opportunities to apply to, with one position being reasonable every couple of days. Expanded scope from CIS to business focus, but still needed to adjust deadlines and shift priority focus in week 12.
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Moving Forward</h4>
                  <p className="text-muted-foreground text-sm">
                    I will focus on and monitor potential risks for future projects, as deadlines were significantly altered throughout my execution due to these risks becoming issues. Despite being mainly a solo project, communication is key when you need feedback or for sudden incidents that occur and disrupt your project progress.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Team Communication:</span> Following up with my team to keep everyone on track went well, as I communicated with each member regarding any issues or deadlines, whether related to the course or personal matters. I ensured teammates were up to date on their project progress.
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
                    <span className="font-semibold text-foreground">Stakeholder Feedback:</span> Stakeholder feedback enabled me not only to improve my project execution but also to boost my personal confidence level, as many of the stakeholders I reached out to showed support for my accomplishments, even if they were small. Some motivated me to expand my social circles.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Work-Life Balance:</span> Balancing coursework with project execution was the main issue. Maintaining deadlines was a struggle. During the execution phase, numerous deadlines were adjusted, despite employing a hybrid approach and preparing in advance for potential deadline issues.
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
                    <span className="font-semibold text-foreground">Poor Documentation:</span> Documentation of deliverables and their execution was poor. Completing all deliverables and their tasks wasn't my priority. An unreasonable shift in priority, caused by missed deadlines, lack of motivation, and other issues, was the reason for poor quality deliverables.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Initiation & Planning Phase</h4>
                  <p className="text-muted-foreground text-sm">
                    Communicate with the stakeholder(s) who provided me with the information about the project (in this case, the professor) to clarify the scope, business needs and values, and other crucial execution details. Communicate with teammates about the project's objective and understand what needs to be done during future phases.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Execution & Monitoring Phase</h4>
                  <p className="text-muted-foreground text-sm">
                    Monitor risks and issues more frequently and set reasonable deadlines for deliverables and their associated tasks. Update teammates and stakeholders about problems so they have a clear understanding of why the execution and monitoring didn't go as planned.
                  </p>
                </div>
                <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-500 mb-2">Project-Specific Improvement</h4>
                  <p className="text-muted-foreground text-sm">
                    I would have expanded and focused on other job listing sites such as Indeed, Glassdoor, and LinkedIn for job positions and internships, rather than solely focusing on Handshake. I may have missed out on opportunities that were in my favor based on my experiences and academic achievements.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
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
                      <TableCell className="text-muted-foreground text-sm">Health related issues arose; needed to focus on myself</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Deadlines were changed heavily; future processes done in poor quality</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Allow time for myself; communicate with stakeholders regarding delays</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 9</TableCell>
                      <TableCell><Badge variant="outline">Execution</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Lack of job/internship opportunities</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Delayed deadlines regarding stakeholder communications; loss in potential opportunities</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Strengthen initiation and planning phase; expect and prepare for scope changes</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 11</TableCell>
                      <TableCell><Badge variant="outline">Monitoring</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Lack of documentation despite execution was on track</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Unprepared when stakeholders asked about progress; lack of evidence of completion</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Document when execution phase initiates</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-muted-foreground text-sm">Week 13</TableCell>
                      <TableCell><Badge variant="outline">Closing</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">Stakeholder interview deadlines approaching; changing wasn't an option</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Preventable stress occurred; communication with stakeholders was difficult</TableCell>
                      <TableCell className="text-muted-foreground text-sm">Remind about upcoming deadlines; prioritize deliverables early; keep calm under pressure</TableCell>
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-primary-foreground font-bold text-sm shrink-0">1</span>
                  <p className="text-foreground">
                    <span className="font-semibold">Analyze and communicate about project needs and requirements early on.</span> Communicate with stakeholders about the project's goals, needs, values, scope, and other relevant information during initialization and planning phases.
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
                    <span className="font-semibold">Communicate with team and stakeholders for guidance.</span> Communicating should have been my priority in explaining why progress and processes of deliverables were not smooth.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
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
                    I spoke with my team about the outcomes of my project, my deliverables, and the processes of these deliverables through smaller tasks. My team expressed support for the results of my project. It acknowledged the difficulty of the job hunting process, especially in terms of the lack of internship positions available that fit our needs and values. They valued my personal goals of finding an internship to achieve my mission and vision. They encouraged me to continue searching for and applying to positions, letting this project serve as a stepping stone for future job hunts.
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
                    Each interviewee agreed that I could've made more progress on my deliverables, especially regarding personal issues such as my fear of rejection. However, they mentioned that the project idea was great for me to choose, as it aligns with my personal goals and values. Keiley added that I was honest throughout my project, especially in discussing the issues I faced. Juan appreciated the outcome of my network portfolio and interview, mentioning that I demonstrated professionalism and knowledge, adding that I may already possess strong communication and interviewing skills.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Tech Owl Teammates</h4>
                  <p className="text-sm text-indigo-500 mb-3">Angel, Fatima, Abner, Berenice</p>
                  <p className="text-muted-foreground text-sm">
                    I'm grateful for the opportunity to connect and get to know them. For this project, I am grateful for the feedback I received throughout the semester. My team provided scope suggestions and recommendations, and we met once a week to discuss our project progress.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Professors</h4>
                  <p className="text-sm text-indigo-500 mb-3">Arun Aryal, Daniel Razmjou, Maria Espinoza</p>
                  <p className="text-muted-foreground text-sm">
                    Each professor provided interest and offered guidance regarding my project and the job process. Daniel provided resources regarding certifications, enabling me to pass an entry-level certification. Maria provided insight on stakeholder relationships and confidence when applying.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-lg border border-indigo-500/20">
                  <h4 className="font-semibold text-foreground mb-2">Interviewees</h4>
                  <p className="text-sm text-indigo-500 mb-3">Keiley Anaya, Roshan Roy Suja, Juan Manuel Toledo</p>
                  <p className="text-muted-foreground text-sm">
                    These peers all celebrated small accomplishments that I had previously overlooked. They allowed me to display professionalism and test my understanding of my project, and I'm thankful for choosing them as stakeholders.
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
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 ml-auto">
                  Complete
                </Badge>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Besides focusing on finishing strong in my last semester at CSULA, I will immediately communicate with stakeholders and potential teammates regarding project idea validation, project goals, and the processes that need to be conducted to complete the project thoroughly from the lead stakeholder's perspective.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <span className="font-semibold text-foreground">Review Lessons Learned:</span> Analyze the issues regarding the cause, outcomes, and whether the problem was preventable (if so, how would my team or I have addressed it?).
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
                      <span className="font-semibold text-foreground">Improve Stakeholder Feedback:</span> Improve my communication with stakeholders regarding project feedback and critiques, scheduling interviews early rather than towards the end.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      <span className="font-semibold text-foreground">Priority Focus:</span> Stakeholder communication and project goals are the priorities that enable me to perform well throughout the project timeline.
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
