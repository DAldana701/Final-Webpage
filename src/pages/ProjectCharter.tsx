import { ProjectHeader } from "@/components/ProjectHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Target, Briefcase, Layers, Users, Package, DollarSign, Wrench, Hammer, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

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
    { name: "Family", category: "External", role: "Provide motivation and support", power: "Low", interest: "High", strategy: "Weekly updates" },
    { name: "Friends", category: "External", role: "Share workplace insights", power: "Low", interest: "Medium", strategy: "Biweekly discussions" },
    { name: "Professors", category: "External", role: "Professional feedback and guidance", power: "Medium", interest: "High", strategy: "Weekly reviews" },
    { name: "Faculty Members", category: "External", role: "Academic support and recommendations", power: "Medium", interest: "Medium", strategy: "Office hours" },
    { name: "Career Center", category: "External", role: "Resume reviews and job search support", power: "High", interest: "High", strategy: "Multiple appointments" },
    { name: "Industry Recruiters", category: "External", role: "Job opportunities and insights", power: "High", interest: "Medium", strategy: "Networking events" },
  ];

  const navItems = [
    { id: "info", label: "Student Info", icon: FileText },
    { id: "overview", label: "Overview", icon: Target },
    { id: "vision", label: "Vision & Mission", icon: Briefcase },
    { id: "business-case", label: "Business Case", icon: CheckCircle2 },
    { id: "scope", label: "Scope", icon: Layers },
    { id: "stakeholders", label: "Stakeholders", icon: Users },
    { id: "deliverables", label: "Deliverables", icon: Package },
    { id: "milestones", label: "Milestones", icon: DollarSign },
    { id: "resources", label: "Resources", icon: Wrench },
    { id: "assumptions", label: "Risks & Assumptions", icon: Hammer },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProjectHeader />
      
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
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
                      ✅ In Scope
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2"><span>•</span><span>Self-assessments</span></li>
                      <li className="flex gap-2"><span>•</span><span>Career Center resources</span></li>
                      <li className="flex gap-2"><span>•</span><span>Stakeholder feedback</span></li>
                      <li className="flex gap-2"><span>•</span><span>Tailored applications</span></li>
                      <li className="flex gap-2"><span>•</span><span>Coursework review</span></li>
                      <li className="flex gap-2"><span>•</span><span>3+ informational interviews</span></li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                      🗺️ Future Roadmap
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2"><span>•</span><span>Stakeholder follow-ups</span></li>
                      <li className="flex gap-2"><span>•</span><span>Apply new coursework</span></li>
                      <li className="flex gap-2"><span>•</span><span>Hands-on cybersecurity</span></li>
                      <li className="flex gap-2"><span>•</span><span>Professional portfolio</span></li>
                      <li className="flex gap-2"><span>•</span><span>Pursue internships</span></li>
                    </ul>
                  </div>

                  <div className="bg-destructive/5 border-l-4 border-destructive rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                      ❌ Out of Scope
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2"><span>•</span><span>Mid-senior roles</span></li>
                      <li className="flex gap-2"><span>•</span><span>High-level certifications</span></li>
                      <li className="flex gap-2"><span>•</span><span>Two-page resumes</span></li>
                      <li className="flex gap-2"><span>•</span><span>Out-of-state positions</span></li>
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
              <CardContent className="pt-6">
                <div className="overflow-x-auto rounded-lg border border-border/40">
                  <table className="w-full border-collapse bg-card">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Stakeholder</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Category</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Role/Interest</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Power</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Interest</th>
                        <th className="border-b border-border p-4 text-left text-sm font-semibold">Strategy</th>
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
                    <h4 className="text-lg font-semibold text-primary mb-2">Job Application Package</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 6</p>
                    <div className="space-y-3 text-sm text-foreground/80">
                      <p><strong>Description:</strong> Professional package with tailored resume, cover letter, and LinkedIn profile.</p>
                      <div>
                        <strong>Done When:</strong>
                        <ul className="mt-2 space-y-1 ml-4 text-xs">
                          <li>• 80%+ positive feedback from Career Center</li>
                          <li>• Cover letter for 2–3 target roles</li>
                          <li>• LinkedIn updated with keywords</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border-l-4 border-accent rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-accent mb-2">Networking Portfolio</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 10</p>
                    <div className="space-y-3 text-sm text-foreground/80">
                      <p><strong>Description:</strong> Professional connections and informational interviews documentation.</p>
                      <div>
                        <strong>Done When:</strong>
                        <ul className="mt-2 space-y-1 ml-4 text-xs">
                          <li>• 3+ informational interviews completed</li>
                          <li>• 2+ professional connections added</li>
                          <li>• Follow-up plan documented</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border-l-4 border-success rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-success mb-2">Application Submissions</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 14</p>
                    <div className="space-y-3 text-sm text-foreground/80">
                      <p><strong>Description:</strong> Targeted job applications to aligned positions.</p>
                      <div>
                        <strong>Done When:</strong>
                        <ul className="mt-2 space-y-1 ml-4 text-xs">
                          <li>• 3–5 applications submitted</li>
                          <li>• Each with tailored materials</li>
                          <li>• Application tracker maintained</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border-l-4 border-warning rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-warning mb-2">Final Report</h4>
                    <p className="text-xs text-muted-foreground mb-4">Type: Intangible | Owner: Daniel | Due: Week 16</p>
                    <div className="space-y-3 text-sm text-foreground/80">
                      <p><strong>Description:</strong> Comprehensive reflection and progress documentation.</p>
                      <div>
                        <strong>Done When:</strong>
                        <ul className="mt-2 space-y-1 ml-4 text-xs">
                          <li>• All metrics tracked and analyzed</li>
                          <li>• Lessons learned documented</li>
                          <li>• Next steps identified</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 7: Milestones */}
          <section data-section="milestones" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-accent/5">
              <CardHeader className="pb-4 bg-gradient-to-r from-accent/10 via-transparent to-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Key Milestones</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-card border-l-4 border-primary rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-primary">Resume & Materials Complete</h4>
                      <span className="text-sm font-medium text-muted-foreground">Week 6</span>
                    </div>
                    <p className="text-sm text-foreground/80">Professional application package finalized with stakeholder approval</p>
                  </div>

                  <div className="bg-card border-l-4 border-accent rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-accent">Networking Phase Complete</h4>
                      <span className="text-sm font-medium text-muted-foreground">Week 10</span>
                    </div>
                    <p className="text-sm text-foreground/80">Informational interviews conducted and professional connections established</p>
                  </div>

                  <div className="bg-card border-l-4 border-success rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-success">Applications Submitted</h4>
                      <span className="text-sm font-medium text-muted-foreground">Week 14</span>
                    </div>
                    <p className="text-sm text-foreground/80">3–5 targeted job applications submitted with customized materials</p>
                  </div>

                  <div className="bg-card border-l-4 border-warning rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-semibold text-warning">Project Closure</h4>
                      <span className="text-sm font-medium text-muted-foreground">Week 16</span>
                    </div>
                    <p className="text-sm text-foreground/80">Final report completed with documented outcomes and next steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 8: Resources */}
          <section data-section="resources" className="scroll-mt-24">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all bg-muted/20">
              <CardHeader className="pb-4 bg-gradient-to-r from-primary/10 via-transparent to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Resources & Budget</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-primary/40 hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold text-primary mb-4">Key Resources</h4>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong>CSULA Career Center:</strong> Resume reviews, mock interviews, job search support
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong>Faculty & Professors:</strong> Professional guidance and recommendations
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong>Online Platforms:</strong> LinkedIn, job boards, networking tools
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong>Personal Network:</strong> Family, friends, and peers for support
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-accent/40 hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold text-accent mb-4">Budget Allocation</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Professional Development</span>
                        <span className="font-bold text-accent">$150</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Networking Events</span>
                        <span className="font-bold text-accent">$100</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">Materials & Printing</span>
                        <span className="font-bold text-accent">$50</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg font-semibold">
                        <span>Total Budget</span>
                        <span className="text-primary text-lg">$300</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 9: Risks & Assumptions */}
          <section data-section="assumptions" className="scroll-mt-24 mb-12">
            <Card className="shadow-md border border-border/50 hover:shadow-lg transition-all">
              <CardHeader className="pb-4 bg-gradient-to-r from-warning/10 via-transparent to-destructive/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Hammer className="h-6 w-6 text-warning" />
                  </div>
                  <CardTitle className="text-2xl">Risks, Assumptions & Constraints</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-destructive/5 border-l-4 border-destructive rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-destructive mb-4">Risks</h4>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        <div>
                          <strong>Time Constraints:</strong> Balancing coursework with job search activities
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        <div>
                          <strong>Market Competition:</strong> High competition for entry-level positions
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive font-bold">•</span>
                        <div>
                          <strong>Delayed Response:</strong> Slow employer responses affecting timeline
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-primary mb-4">Assumptions</h4>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>Career Center resources remain accessible throughout semester</div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>Stakeholders provide timely feedback and support</div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <div>Job market remains stable with available opportunities</div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-warning/5 border-l-4 border-warning rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-warning mb-4">Constraints</h4>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-warning font-bold">•</span>
                        <div>
                          <strong>Time:</strong> Semester timeline (16 weeks)
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-warning font-bold">•</span>
                        <div>
                          <strong>Budget:</strong> Limited to $300 total
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-warning font-bold">•</span>
                        <div>
                          <strong>Scope:</strong> Entry-level positions only
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectCharter;
