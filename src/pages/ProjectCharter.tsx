import { ProjectHeader } from "@/components/ProjectHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Target, Briefcase, Layers, Users, Package, DollarSign, Wrench, Hammer, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";
import projectPlanDiagram from "@/assets/ProjectPlanDiagram.png";

const ProjectCharter = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const stakeholders = [
    { name: "Family", category: "External", role: "Provide motivation and support throughout the project.", power: "Low", interest: "High", strategy: "Weekly progress updates and feedback discussions." },
    { name: "Friends", category: "External", role: "Share experiences and insights on workplace expectations.", power: "Low", interest: "Medium", strategy: "Biweekly progress discussions and informal feedback." },
    { name: "Professors", category: "External", role: "Offer professional feedback on documents and guidance on career direction.", power: "Medium", interest: "High", strategy: "Weekly or biweekly reviews and mentorship sessions." },
    { name: "Hiring Managers", category: "External", role: "Evaluate qualifications and suitability for roles.", power: "High", interest: "High", strategy: "Tailor applications and maintain prompt, professional communication." },
    { name: "Classmates", category: "External", role: "Provide peer insights and interview preparation support.", power: "Low", interest: "Medium", strategy: "Regular peer feedback and mock interview sessions." },
    { name: "Clubs (e.g., CARP)", category: "External", role: "Offer exposure to broader professional environments.", power: "Low", interest: "Medium", strategy: "Monthly updates and event participation." },
    { name: "Professionals (Networking Events)", category: "External", role: "Provide career advice, feedback, and mentorship.", power: "Medium", interest: "High", strategy: "Build and sustain relationships through follow-ups and LinkedIn engagement." },
    { name: "ISC2", category: "Regulatory", role: "Guide certification preparation and maintain standards.", power: "High", interest: "Low", strategy: "Follow certification procedures and resource guidelines." },
    { name: "Career Counselors", category: "External", role: "Offer guidance, review documents, and share networking opportunities.", power: "Medium", interest: "Medium", strategy: "Engage in periodic advising and career planning sessions." },
  ];

  const navItems = [
    { id: "info", label: "Student Info", icon: FileText },
    { id: "overview", label: "Overview", icon: Target },
    { id: "vision", label: "Vision & Mission", icon: Briefcase },
    { id: "business-case", label: "Business Case", icon: CheckCircle2 },
    { id: "scope", label: "Scope", icon: Layers },
    { id: "stakeholders", label: "Stakeholders", icon: Users },
    { id: "deliverables", label: "Deliverables", icon: Package },
    { id: "milestones", label: "Budget", icon: DollarSign },
    { id: "resources", label: "Methodology", icon: Wrench },
    { id: "assumptions", label: "Tools", icon: Hammer },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ProjectHeader />
      
      {/* Sticky Navigation */}
      <nav className="sticky top-[88px] z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Header Section */}
        <div className="mb-16 text-center animate-fade-in relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Project Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
            Project Charter
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Business-Aligned Job Hunt: A comprehensive roadmap for achieving career-aligned opportunities
          </p>
        </div>
        
        {/* Student Information */}
        <section data-section="info" className="mb-12 scroll-mt-24">
          <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-gradient-to-br from-card via-card to-secondary/10">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Student Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background/60 backdrop-blur rounded-lg p-5 border border-border/30 hover:border-primary/40 hover:bg-background/80 transition-all group">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Student Name</div>
                  <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Daniel Aldana</div>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-lg p-5 border border-border/30 hover:border-primary/40 hover:bg-background/80 transition-all group">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Course</div>
                  <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Managing IT Projects</div>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-lg p-5 border border-border/30 hover:border-primary/40 hover:bg-background/80 transition-all group">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Semester</div>
                  <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Fall 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="space-y-8">
          {/* Section 1: Project Overview */}
          <section data-section="overview" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-muted/30">
              <CardHeader className="pb-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Project Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-card border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Project Title: Business-Aligned Job Hunt</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    This semester-long project focuses on preparing and applying for internships or entry-level roles aligned with my field of study. It includes a structured self-assessment of my academic and professional achievements, the creation and customization of job application materials, and the collection of targeted feedback from professors, counselors, and peers to strengthen readiness and confidence. Throughout this process, I will apply knowledge from information systems, IT, and cybersecurity to progress toward meaningful, career-aligned opportunities.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary/50 rounded-lg p-4">
                    <p className="text-foreground/90 font-medium">
                      <strong className="text-primary">Project Goal:</strong> To achieve measurable progress toward securing a business-aligned internship or entry-level position by preparing professional application materials, submitting at least three targeted applications, and building a networking pipeline that generates recruiter or interview opportunities.
                    </p>
                  </div>
                </div>

                <div className="bg-success/5 border border-success/30 rounded-lg p-6 hover:border-success/50 hover:shadow-md transition-all">
                  <h4 className="text-lg font-semibold text-success mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Success Metrics
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2"><span className="text-success">•</span><span>Submit <strong>3–5 applications</strong> by semester end</span></li>
                    <li className="flex gap-2"><span className="text-success">•</span><span>Obtain <strong>at least 80% positive feedback</strong> on resume drafts from stakeholders</span></li>
                    <li className="flex gap-2"><span className="text-success">•</span><span>Expand my LinkedIn network by <strong>2 or more professional connections</strong></span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Vision & Mission */}
          <section data-section="vision" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-accent/5">
              <CardHeader className="pb-4 bg-gradient-to-r from-accent/10 via-transparent to-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Vision, Mission & Strategy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-accent/40 hover:shadow-md transition-all">
                  <h4 className="text-lg font-semibold text-accent mb-3">Mission Statement</h4>
                  <p className="text-foreground/90 leading-relaxed">
                    To pursue meaningful learning and career opportunities in business, information systems, and cybersecurity by developing professional skills, completing targeted projects, and achieving goals through persistence and discipline.
                  </p>
                </div>

                <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all">
                  <h4 className="text-lg font-semibold text-primary mb-3">Vision Statement</h4>
                  <p className="text-foreground/90 leading-relaxed">
                    To secure a position in a business or technology-related field within one to three years after graduation — achieving financial stability through continuous learning, professional growth, and strategic career planning.
                  </p>
                </div>

                <div className="bg-card border-l-4 border-accent rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-accent mb-4">Strategic Goal Support</h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Expand my professional network by engaging with key stakeholders and building reliable connections</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Strengthen self-directed learning through study plans and cybersecurity concept reviews</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Ensure my skills and knowledge align with employer and managerial expectations</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Prepare confidently for professional certification pursuits</span></li>
                  </ul>
                  <p className="text-muted-foreground italic mt-4 text-sm leading-relaxed">
                    This project supports my mission by reinforcing career readiness through structured skill development and a targeted job search. It advances my vision by positioning me for success in business, information systems, and cybersecurity roles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Business Case */}
          <section data-section="business-case" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-muted/20">
              <CardHeader className="pb-4 bg-gradient-to-r from-success/10 via-transparent to-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  </div>
                  <CardTitle className="text-2xl">Business Case & Justification</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-card border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-primary mb-3">Professional Value</h4>
                  <p className="text-muted-foreground italic text-sm mb-3">These outcomes will enhance my employability and readiness for future roles in business and cybersecurity.</p>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Strengthen existing skills and acquire new ones throughout project execution</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Expanding my professional network via stakeholder engagement and feedback</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Demonstrating authenticity and commitment through tailored, high-quality application materials</span></li>
                    <li className="flex gap-2"><span className="text-primary">•</span><span>Gaining firsthand experience in the job search process and professional communication</span></li>
                  </ul>
                </div>

                <div className="bg-card border-l-4 border-accent rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-accent mb-3">Personal Value</h4>
                  <p className="text-muted-foreground italic text-sm mb-3">These outcomes will reinforce resilience and motivation throughout the job search process.</p>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Building confidence through proactive engagement with new professionals</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Addressing imposter syndrome through feedback and reflection</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Reinforcing self-esteem by recognizing academic and professional progress</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Maintaining focus by aligning daily actions with my mission and long-term goals</span></li>
                  </ul>
                </div>

                <div className="bg-card border-l-4 border-success rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-success mb-3">Learning Outcomes</h4>
                  <p className="text-muted-foreground italic text-sm mb-3">These outcomes will equip me with the practical and interpersonal skills needed for professional success.</p>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex gap-2"><span className="text-success">•</span><span>Mastery in resume, cover letter, and portfolio development</span></li>
                    <li className="flex gap-2"><span className="text-success">•</span><span>Effective self-presentation through networking events and digital platforms (LinkedIn, portfolio site)</span></li>
                    <li className="flex gap-2"><span className="text-success">•</span><span>Clear and professional communication in interviews and correspondence</span></li>
                    <li className="flex gap-2"><span className="text-success">•</span><span>Improved follow-up and relationship-building techniques that sustain professional connections</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Scope */}
          <section data-section="scope" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all">
              <CardHeader className="pb-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Project Scope</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-success/5 border-l-4 border-success rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-success mb-4 flex items-center gap-2">
                      ✅ In Scope for Semester Project
                    </h4>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex gap-2"><span>•</span><span>Conduct self-assessments of academic and professional skills</span></li>
                      <li className="flex gap-2"><span>•</span><span>Utilize CSULA Career Center resources for resume reviews, interview preparation, and job search support</span></li>
                      <li className="flex gap-2"><span>•</span><span>Engage with faculty, students, and professionals for feedback and guidance</span></li>
                      <li className="flex gap-2"><span>•</span><span>Tailor resumes, cover letters, and application materials for specific job postings</span></li>
                      <li className="flex gap-2"><span>•</span><span>Review relevant coursework to identify and showcase applicable skills</span></li>
                      <li className="flex gap-2"><span>•</span><span>Research organizations to understand business values, culture, and requirements</span></li>
                      <li className="flex gap-2"><span>•</span><span>Conduct at least three informational interviews and establish a minimum of two new professional connections</span></li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                      🗺️ Roadmap Items (Within 6 Months Post-Semester)
                    </h4>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex gap-2"><span>•</span><span>Follow up with stakeholders on ongoing career progress</span></li>
                      <li className="flex gap-2"><span>•</span><span>Apply lessons from new coursework to strengthen technical and professional capabilities</span></li>
                      <li className="flex gap-2"><span>•</span><span>Continue hands-on learning to reinforce cybersecurity and business concepts</span></li>
                      <li className="flex gap-2"><span>•</span><span>Develop a professional portfolio (e.g., GitHub projects, personal website)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Pursue an internship or entry-level position aligned with business and cybersecurity goals</span></li>
                    </ul>
                  </div>

                  <div className="bg-destructive/5 border-l-4 border-destructive rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                      ❌ Out of Scope
                    </h4>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex gap-2"><span>•</span><span>Applying for mid- to senior-level roles (long-term goal, beyond current project scope)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Attempting high-level certification during the semester (outside project timeline)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Developing a two-page "high-level" resume (not feasible within project capacity)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Applying to out-of-state positions (beyond current logistical limits)</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: Stakeholders */}
          <section data-section="stakeholders" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-accent/5">
              <CardHeader className="pb-4 bg-gradient-to-r from-accent/10 via-transparent to-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Stakeholder Register</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="overflow-x-auto rounded-lg border border-border/40">
                  <table className="w-full border-collapse bg-card">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Stakeholder</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Category</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Role/Interest</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Power</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Interest</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Engagement Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stakeholders.map((stakeholder, index) => (
                        <tr key={index} className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-4 text-sm font-medium">{stakeholder.name}</td>
                          <td className="border-b border-border/30 p-4 text-sm text-muted-foreground">{stakeholder.category}</td>
                          <td className="border-b border-border/30 p-4 text-sm text-muted-foreground">{stakeholder.role}</td>
                          <td className="border-b border-border/30 p-4 text-sm text-muted-foreground">{stakeholder.power}</td>
                          <td className="border-b border-border/30 p-4 text-sm text-muted-foreground">{stakeholder.interest}</td>
                          <td className="border-b border-border/30 p-4 text-sm text-muted-foreground">{stakeholder.strategy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Power-Interest Grid Summary</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/10 border border-success/30 rounded-lg p-4">
                      <h5 className="font-semibold text-success mb-2">High Power / Low Interest – Keep Satisfied</h5>
                      <ul className="text-sm text-foreground/90">
                        <li>• ISC2</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                      <h5 className="font-semibold text-destructive mb-2">High Power / High Interest – Manage Closely</h5>
                      <ul className="text-sm text-foreground/90">
                        <li>• Hiring Managers</li>
                        <li>• Professors</li>
                        <li>• Professionals (Networking Events)</li>
                      </ul>
                    </div>
                    <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
                      <h5 className="font-semibold text-warning mb-2">Low Power / Low Interest – Monitor</h5>
                      <ul className="text-sm text-foreground/90">
                        <li>• Clubs (e.g., CARP)</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h5 className="font-semibold text-primary mb-2">Low Power / High Interest – Keep Informed</h5>
                      <ul className="text-sm text-foreground/90">
                        <li>• Family</li>
                        <li>• Friends</li>
                        <li>• Classmates</li>
                        <li>• Career Counselors</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    Stakeholders vary in influence and engagement level, requiring tailored communication strategies. High-power, high-interest stakeholders (such as hiring managers and professors) will be prioritized for close collaboration and consistent updates. Supportive but lower-power stakeholders (such as family and peers) will receive regular but brief progress communications to sustain motivation and accountability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6: Deliverables */}
          <section data-section="deliverables" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-muted/30">
              <CardHeader className="pb-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Project Deliverables</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-primary mb-2">Job Application Package (Resume Set + Cover Template)</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Mid-Semester (Week 8)</p>
                    <div className="space-y-3 text-sm text-foreground/90">
                      <p><strong>SMART Description:</strong> Develop two one-page resumes — one focused on general business/CIS and one on cybersecurity — along with a reusable cover letter template tailored to specific target roles.</p>
                      <div>
                        <strong>Definition of Done:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Final files exported in professional format (PDF).</li>
                          <li>• Content aligned with at least two to three real job postings.</li>
                          <li>• Reviewed by a professor or career counselor.</li>
                          <li>• Includes documented version history (v1 → v2).</li>
                        </ul>
                      </div>
                      <p className="text-xs text-muted-foreground italic mt-2"><strong>Evidence/Links:</strong> Resume_General.pdf, Resume_Security.pdf, Cover_Template.pdf, feedback notes or screenshots.</p>
                    </div>
                  </div>

                  <div className="bg-card border-l-4 border-accent rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-accent mb-2">Networking Portfolio (Contacts + Informational Interviews)</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: End of Semester (Week 12)</p>
                    <div className="space-y-3 text-sm text-foreground/90">
                      <p><strong>SMART Description:</strong> Build a networking portfolio documenting at least three informational interviews and two new professional LinkedIn connections.</p>
                      <div>
                        <strong>Definition of Done:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Log includes contact names, organizations, discussion topics, and follow-up actions.</li>
                          <li>• Reflections recorded for each interview.</li>
                          <li>• Evidence of connections and interactions captured via screenshots or LinkedIn activity.</li>
                        </ul>
                      </div>
                      <p className="text-xs text-muted-foreground italic mt-2"><strong>Evidence/Links:</strong> Networking_Log.xlsx (or Google Sheet), interview notes, screenshots.</p>
                    </div>
                  </div>

                  <div className="bg-card border-l-4 border-success rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-success mb-2">Application Tracker (Pipeline + Follow-Ups)</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Ongoing; Target by Week 12</p>
                    <div className="space-y-3 text-sm text-foreground/90">
                      <p><strong>SMART Description:</strong> Maintain an active tracker for at least three targeted job applications, documenting submission details, resume versions used, and follow-up actions.</p>
                      <div>
                        <strong>Definition of Done:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Each record includes company name, role, submission date, and next action.</li>
                          <li>• At least one follow-up completed for each open application.</li>
                          <li>• Weekly updates maintained through project completion.</li>
                        </ul>
                      </div>
                      <p className="text-xs text-muted-foreground italic mt-2"><strong>Evidence/Links:</strong> Application_Tracker.xlsx (or Monday.com export), screenshots of progress.</p>
                    </div>
                  </div>

                  <div className="bg-card border-l-4 border-warning rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-warning mb-2">Interview Readiness Kit (Q&A Bank + Mock Feedback)</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 8</p>
                    <div className="space-y-3 text-sm text-foreground/90">
                      <p><strong>SMART Description:</strong> Develop a 1–2 page behavioral and technical Q&A bank and complete at least two mock interviews, integrating feedback into improved responses.</p>
                      <div>
                        <strong>Definition of Done:</strong>
                        <ul className="mt-2 space-y-1 ml-4">
                          <li>• Final Q&A document submitted.</li>
                          <li>• At least two mock interview feedback forms or screenshots included.</li>
                          <li>• Documented revisions showing applied feedback.</li>
                        </ul>
                      </div>
                      <p className="text-xs text-muted-foreground italic mt-2"><strong>Evidence/Links:</strong> QA_Bank.pdf, Mock1_Feedback.png, Mock2_Feedback.png, revision notes.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 7: Budget Estimation */}
          <section data-section="milestones" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-accent/5">
              <CardHeader className="pb-4 bg-gradient-to-r from-accent/10 via-transparent to-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Budget Estimation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Budget Overview</h4>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    This project relies primarily on personal effort and free student resources. Most expenses relate to time investment, minimal materials, and optional professional tools. A 15% contingency reserve is included to manage unforeseen costs.
                  </p>
                </div>

                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Labor Costs</h4>
                  <p className="text-foreground/90 mb-4">
                    The primary cost is the student's own labor — including development of deliverables, networking, and application preparation. Estimated <strong>72–96 hours</strong> at <strong>$20/hour</strong> yields a total labor range of <strong>$1,440–$1,920</strong>.
                  </p>
                  <div className="overflow-x-auto rounded-lg border border-border/40">
                    <table className="w-full border-collapse bg-card">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">Role</th>
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">Hours</th>
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">Rate</th>
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">Estimated Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-3 text-sm">Student PM/Analyst (self)</td>
                          <td className="border-b border-border/30 p-3 text-sm">72–96</td>
                          <td className="border-b border-border/30 p-3 text-sm">$20/hr</td>
                          <td className="border-b border-border/30 p-3 text-sm font-medium">$1,440 – $1,920</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border/40 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-accent mb-4">Equipment & Software</h4>
                    <p className="text-sm text-muted-foreground mb-3">Most tools are freely available through CSULA or open platforms.</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-muted/30 rounded">
                        <span>GitHub Pages / Notion / Google Sheets</span>
                        <span className="font-medium">$0</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted/30 rounded">
                        <span>LinkedIn Learning (via CSULA)</span>
                        <span className="font-medium">$0</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted/30 rounded">
                        <span>Microsoft Office (optional)</span>
                        <span className="font-medium">$0–$60</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted/30 rounded">
                        <span>AI Platforms (ChatGPT, Lovable)</span>
                        <span className="font-medium">$0–$30</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-3">AI tools are used ethically and responsibly to enhance writing clarity, brainstorming, and project planning efficiency.</p>
                  </div>

                  <div className="bg-card border border-border/40 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-success mb-4">Materials & Services</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Materials</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between p-2 bg-muted/30 rounded">
                            <span>Resume Printing</span>
                            <span className="font-medium">$10–$20</span>
                          </div>
                          <div className="flex justify-between p-2 bg-muted/30 rounded">
                            <span>ISC2 CC Prep Materials</span>
                            <span className="font-medium">$0–$60</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Services</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between p-2 bg-muted/30 rounded">
                            <span>Career Center Services</span>
                            <span className="font-medium">$0</span>
                          </div>
                          <div className="flex justify-between p-2 bg-muted/30 rounded">
                            <span>LinkedIn Premium (optional)</span>
                            <span className="font-medium">$40</span>
                          </div>
                          <div className="flex justify-between p-2 bg-muted/30 rounded">
                            <span>Networking Events</span>
                            <span className="font-medium">$20–$40</span>
                          </div>
                          <div className="flex justify-between p-2 bg-muted/30 rounded">
                            <span>Workshops/Meetups</span>
                            <span className="font-medium">$0–$20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-warning mb-3">Contingency & Risk Management</h4>
                  <p className="text-foreground/90 mb-3">
                    A <strong>15% contingency reserve ($150–$250)</strong> covers minor unplanned costs such as transportation or supplies.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li className="flex gap-2"><span className="text-warning">•</span><span><strong>Risk 1 – Certification prep costs exceed budget:</strong> Use free LinkedIn Learning and CSULA materials before purchasing new resources.</span></li>
                    <li className="flex gap-2"><span className="text-warning">•</span><span><strong>Risk 2 – Event transportation or fees higher than expected:</strong> Prioritize virtual or free events.</span></li>
                    <li className="flex gap-2"><span className="text-warning">•</span><span><strong>Risk 3 – Additional printing or supplies required:</strong> Favor digital submissions; print selectively.</span></li>
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Budget Summary</h4>
                  <div className="overflow-x-auto rounded-lg border border-border/40">
                    <table className="w-full border-collapse bg-card">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">Category</th>
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">% of Total</th>
                          <th className="border-b border-border p-3 text-left text-sm font-semibold">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-3 text-sm">Labor</td>
                          <td className="border-b border-border/30 p-3 text-sm">80.9%</td>
                          <td className="border-b border-border/30 p-3 text-sm">$1,680.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-3 text-sm">Equipment/Software</td>
                          <td className="border-b border-border/30 p-3 text-sm">1.4%</td>
                          <td className="border-b border-border/30 p-3 text-sm">$30.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-3 text-sm">Materials</td>
                          <td className="border-b border-border/30 p-3 text-sm">1.7%</td>
                          <td className="border-b border-border/30 p-3 text-sm">$35.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-3 text-sm">Services</td>
                          <td className="border-b border-border/30 p-3 text-sm">2.9%</td>
                          <td className="border-b border-border/30 p-3 text-sm">$60.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/30 transition-colors">
                          <td className="border-b border-border/30 p-3 text-sm">Contingency</td>
                          <td className="border-b border-border/30 p-3 text-sm">13.0%</td>
                          <td className="border-b border-border/30 p-3 text-sm">$270.75</td>
                        </tr>
                        <tr className="bg-primary/10 font-semibold">
                          <td className="p-3 text-sm">Total Estimated Budget</td>
                          <td className="p-3 text-sm">100%</td>
                          <td className="p-3 text-sm text-primary">$2,075.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mt-4">
                    <p className="text-sm text-foreground/90 italic">
                      <strong>Assumptions:</strong> 84 hours at $20/hr; Equipment/Software $30; Materials $35; Services $60; 15% contingency applied.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 8: Project Methodology */}
          <section data-section="resources" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-muted/20">
              <CardHeader className="pb-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Project Methodology</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-card border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-primary mb-3">Hybrid Methodology (Predictive + Iterative)</h4>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Given the project's balance between structured deliverables and adaptive activities, a <strong>Hybrid methodology</strong> — combining <strong>Predictive</strong> and <strong>Iterative</strong> elements — was selected.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold text-primary mb-3">Predictive Planning</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Applied to milestone-based deliverables such as the <strong>Job Application Package</strong>, <strong>Networking Portfolio</strong>, and <strong>Interview Readiness Kit</strong>, ensuring each component maintains a clear scope, timeline, and quality standard.
                    </p>
                  </div>

                  <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-accent/40 hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold text-accent mb-3">Iterative Cycles</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Used for recurring and adaptive tasks like <strong>application submissions</strong> and <strong>networking activities</strong>, managed through weekly sprints. This allows for continuous improvement and flexibility based on feedback.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <p className="text-foreground/90 leading-relaxed">
                    This approach provides both <strong>structure</strong> and <strong>adaptability</strong>, supporting steady progress while integrating insights from professors, counselors, and other stakeholders. It mirrors professional project management practices that balance defined goals with responsive, real-world learning.
                  </p>
                </div>

                {/* Project Methodology Diagram */}
                <div className="bg-card border border-border/40 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-primary mb-4">Project Timeline Diagram</h4>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    The following diagram illustrates the project phases across the semester, showing how tasks flow through <strong>Initialization & Planning</strong>, <strong>Execution</strong>, <strong>Execution & Monitoring</strong>, and <strong>Finalizing, Closing, & Deliver</strong>.
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                    <img 
                      src={projectPlanDiagram} 
                      alt="Project Methodology Timeline Diagram showing phases from Week 2 to Final Week" 
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 9: Project Tools */}
          <section data-section="assumptions" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all">
              <CardHeader className="pb-4 bg-gradient-to-r from-warning/10 via-transparent to-destructive/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Hammer className="h-6 w-6 text-warning" />
                  </div>
                  <CardTitle className="text-2xl">Project Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-card border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-primary mb-3">Overview</h4>
                  <p className="text-foreground/90 leading-relaxed">
                    A combination of digital tools was used to plan, organize, and manage this project efficiently. Each platform supports the hybrid methodology by offering both structure and flexibility in execution.
                  </p>
                </div>

                <div className="bg-card border border-border/40 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-accent mb-4">Tool Evaluation</h4>
                  <p className="text-foreground/90 mb-3">Three primary platforms were evaluated: <strong>Microsoft Project</strong>, <strong>Trello</strong>, and <strong>Monday.com</strong>.</p>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex gap-2"><span className="text-accent">•</span><span><strong>Microsoft Project:</strong> Offers advanced scheduling features but is less suitable for iterative task updates.</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span><strong>Trello:</strong> Provides an intuitive Agile interface but lacks advanced timeline visualization.</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span><strong>Monday.com:</strong> Combines both — offering Gantt charts, timelines, and Kanban boards in one workspace.</span></li>
                  </ul>
                </div>

                <div className="bg-success/5 border-l-4 border-success rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-success mb-3">Selected Tool: Monday.com</h4>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    <strong>Monday.com</strong> was chosen as the central project management tool. It allows predictive planning for structured deliverables (such as the Job Application Package and Interview Kit) while supporting iterative tracking of networking and application tasks through Kanban boards.
                  </p>
                  <div className="bg-card border border-border/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-success mb-3">The platform enables:</h5>
                    <ul className="space-y-2 text-sm text-foreground/90">
                      <li className="flex gap-2"><span className="text-success">•</span><span>Clear visualization of task dependencies (e.g., applications linked to finalized resumes).</span></li>
                      <li className="flex gap-2"><span className="text-success">•</span><span>Alignment of project milestones with class timelines.</span></li>
                      <li className="flex gap-2"><span className="text-success">•</span><span>Seamless integration of feedback, revisions, and scheduling updates.</span></li>
                    </ul>
                  </div>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Once configured, Monday.com provided a cohesive environment for managing progress, maintaining accountability, and visualizing outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
      </div>
    </PageTransition>
  );
};

export default ProjectCharter;
