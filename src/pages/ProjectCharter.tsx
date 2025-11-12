import { ProjectHeader } from "@/components/ProjectHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, FileText, Target, Briefcase, Layers, Users, Package, DollarSign, Wrench, Hammer } from "lucide-react";
import { useState } from "react";

const ProjectCharter = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    section1: true,
    section2: true,
    section3: true,
    section4: true,
    section5: true,
    section6: true,
    section7: true,
    section8: true,
    section9: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const stakeholders = [
    { name: "Family", category: "External", role: "Provide motivation and support throughout the project.", power: "Low", interest: "High", strategy: "Weekly progress updates and feedback discussions." },
    { name: "Friends", category: "External", role: "Share experiences and insights on workplace expectations.", power: "Low", interest: "Medium", strategy: "Biweekly progress discussions and informal feedback." },
    { name: "Professors", category: "External", role: "Offer professional feedback on documents and guidance on career direction.", power: "Medium", interest: "High", strategy: "Weekly or biweekly reviews and mentorship sessions." },
    { name: "Faculty Members", category: "External", role: "Academic support and recommendations for professional growth.", power: "Medium", interest: "Medium", strategy: "Office hours and networking for guidance." },
    { name: "Career Center", category: "External", role: "Resume reviews, mock interviews, and job search support.", power: "High", interest: "High", strategy: "Multiple appointments for tailored guidance and resources." },
    { name: "Industry Recruiters", category: "External", role: "Provide job opportunities and professional insights.", power: "High", interest: "Medium", strategy: "Networking events and informational interviews." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      <ProjectHeader />
      
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Student Information */}
        <Card className="mb-8 shadow-lg border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Student Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="text-sm font-medium text-muted-foreground mb-1">Student Name</div>
                <div className="text-lg font-semibold text-foreground">Daniel Aldana</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="text-sm font-medium text-muted-foreground mb-1">Course</div>
                <div className="text-lg font-semibold text-foreground">Managing IT Projects</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="text-sm font-medium text-muted-foreground mb-1">Semester</div>
                <div className="text-lg font-semibold text-foreground">Fall 2025</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Section 1: Project Title & Description */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section1} onOpenChange={() => toggleSection('section1')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">1. Project Title & Description</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section1 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-6">
                  <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">Project Title: Business-Aligned Job Hunt</h3>
                    <p className="text-foreground/90 mb-4 leading-relaxed">
                      This semester-long project focuses on preparing and applying for internships or entry-level roles aligned with my field of study. It includes a structured self-assessment of my academic and professional achievements, the creation and customization of job application materials, and the collection of targeted feedback from professors, counselors, and peers to strengthen readiness and confidence. Throughout this process, I will apply knowledge from information systems, IT, and cybersecurity to progress toward meaningful, career-aligned opportunities.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      <strong className="text-primary">Project Goal:</strong> To achieve measurable progress toward securing a business-aligned internship or entry-level position by preparing professional application materials, submitting at least three targeted applications, and building a networking pipeline that generates recruiter or interview opportunities.
                    </p>
                  </div>

                  <div className="bg-success/10 border-l-4 border-success rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-success mb-4 flex items-center gap-2">
                      📈 Success Metrics:
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-success font-bold">•</span>
                        <span>Submit <strong>3–5 applications</strong> by semester end</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-success font-bold">•</span>
                        <span>Obtain <strong>at least 80% positive feedback</strong> on resume drafts from stakeholders</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-success font-bold">•</span>
                        <span>Expand my LinkedIn network by <strong>2 or more professional connections</strong></span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 2: Vision, Mission & Strategy Alignment */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section2} onOpenChange={() => toggleSection('section2')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">2. Vision, Mission & Strategy Alignment</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section2 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Mission Statement</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      To pursue meaningful learning and career opportunities in business, information systems, and cybersecurity by developing professional skills, completing targeted projects, and achieving goals through persistence and discipline.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Vision Statement</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      To secure a position in a business or technology-related field within one to three years after graduation — achieving financial stability through continuous learning, professional growth, and strategic career planning.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Strategic Goal Support</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Expand my professional network by engaging with key stakeholders and building reliable connections</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Strengthen self-directed learning through study plans and cybersecurity concept reviews</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Ensure my skills and knowledge align with employer and managerial expectations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Prepare confidently for professional certification pursuits</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground italic mt-4">
                      This project supports my mission by reinforcing career readiness through structured skill development and a targeted job search. It advances my vision by positioning me for success in business, information systems, and cybersecurity roles.
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 3: Business Case */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section3} onOpenChange={() => toggleSection('section3')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">3. Business Case & Justification</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section3 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Professional Value:</h4>
                    <p className="text-muted-foreground italic mb-3">
                      These outcomes will enhance my employability and readiness for future roles in business and cybersecurity.
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Strengthen existing skills and acquire new ones throughout project execution</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Expanding my professional network via stakeholder engagement and feedback</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Demonstrating authenticity and commitment through tailored, high-quality application materials</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Gaining firsthand experience in the job search process and professional communication</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Personal Value:</h4>
                    <p className="text-muted-foreground italic mb-3">
                      These outcomes will reinforce resilience and motivation throughout the job search process.
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Building confidence through proactive engagement with new professionals</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Addressing imposter syndrome through feedback and reflection</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Reinforcing self-esteem by recognizing academic and professional progress</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Maintaining focus by aligning daily actions with my mission and long-term goals</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Learning Outcomes:</h4>
                    <p className="text-muted-foreground italic mb-3">
                      These outcomes will equip me with the practical and interpersonal skills needed for professional success.
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Mastery in resume, cover letter, and portfolio development</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Effective self-presentation through networking events and digital platforms (LinkedIn, portfolio site)</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Clear and professional communication in interviews and correspondence</span></li>
                      <li className="flex gap-2"><span className="text-primary">•</span><span>Improved follow-up and relationship-building techniques that sustain professional connections</span></li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 4: High-Level Scope */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section4} onOpenChange={() => toggleSection('section4')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Layers className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">4. High-Level Scope</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section4 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* In Scope */}
                    <div className="bg-success/5 border-l-4 border-success rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-success mb-4 flex items-center gap-2">
                        ✅ In Scope for Semester Project
                      </h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex gap-2"><span>•</span><span>Conduct self-assessments of academic and professional skills</span></li>
                        <li className="flex gap-2"><span>•</span><span>Utilize CSULA Career Center resources for resume reviews, interview preparation, and job search support</span></li>
                        <li className="flex gap-2"><span>•</span><span>Engage with faculty, students, and professionals for feedback and guidance</span></li>
                        <li className="flex gap-2"><span>•</span><span>Tailor resumes, cover letters, and application materials for specific job postings</span></li>
                        <li className="flex gap-2"><span>•</span><span>Review relevant coursework to identify and showcase applicable skills</span></li>
                        <li className="flex gap-2"><span>•</span><span>Research organizations to understand business values, culture, and requirements</span></li>
                        <li className="flex gap-2"><span>•</span><span>Conduct at least three informational interviews and establish a minimum of two new professional connections</span></li>
                      </ul>
                    </div>

                    {/* Roadmap */}
                    <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        🗺️ Roadmap Items (Within 6 Months Post-Semester)
                      </h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex gap-2"><span>•</span><span>Follow up with stakeholders on ongoing career progress</span></li>
                        <li className="flex gap-2"><span>•</span><span>Apply lessons from new coursework to strengthen technical and professional capabilities</span></li>
                        <li className="flex gap-2"><span>•</span><span>Continue hands-on learning to reinforce cybersecurity and business concepts</span></li>
                        <li className="flex gap-2"><span>•</span><span>Develop a professional portfolio (e.g., GitHub projects, personal website)</span></li>
                        <li className="flex gap-2"><span>•</span><span>Pursue an internship or entry-level position aligned with business and cybersecurity goals</span></li>
                      </ul>
                    </div>

                    {/* Out of Scope */}
                    <div className="bg-destructive/5 border-l-4 border-destructive rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                        ❌ Out of Scope
                      </h4>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex gap-2"><span>•</span><span>Applying for mid- to senior-level roles (long-term goal, beyond current project scope)</span></li>
                        <li className="flex gap-2"><span>•</span><span>Attempting high-level certification during the semester (outside project timeline)</span></li>
                        <li className="flex gap-2"><span>•</span><span>Developing a two-page "high-level" resume (not feasible within project capacity)</span></li>
                        <li className="flex gap-2"><span>•</span><span>Applying to out-of-state positions (beyond current logistical limits)</span></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 5: Stakeholder Register */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section5} onOpenChange={() => toggleSection('section5')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">5. Stakeholder Register</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section5 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-border p-3 text-left font-semibold text-sm">Stakeholder</th>
                          <th className="border border-border p-3 text-left font-semibold text-sm">Category</th>
                          <th className="border border-border p-3 text-left font-semibold text-sm">Role/Interest</th>
                          <th className="border border-border p-3 text-left font-semibold text-sm">Power</th>
                          <th className="border border-border p-3 text-left font-semibold text-sm">Interest</th>
                          <th className="border border-border p-3 text-left font-semibold text-sm">Engagement Strategy</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stakeholders.map((stakeholder, index) => (
                          <tr key={index} className="hover:bg-secondary/20 transition-colors">
                            <td className="border border-border p-3 text-sm font-medium">{stakeholder.name}</td>
                            <td className="border border-border p-3 text-sm text-muted-foreground">{stakeholder.category}</td>
                            <td className="border border-border p-3 text-sm text-muted-foreground">{stakeholder.role}</td>
                            <td className="border border-border p-3 text-sm text-muted-foreground">{stakeholder.power}</td>
                            <td className="border border-border p-3 text-sm text-muted-foreground">{stakeholder.interest}</td>
                            <td className="border border-border p-3 text-sm text-muted-foreground">{stakeholder.strategy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 6: Deliverables */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section6} onOpenChange={() => toggleSection('section6')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Package className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">6. Project Deliverables</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section6 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Deliverable 1 */}
                    <div className="bg-gradient-to-br from-card to-primary/5 border-l-4 border-primary rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">Job Application Package</h4>
                      <p className="text-sm text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 6</p>
                      <div className="space-y-3 text-sm text-foreground/80">
                        <div>
                          <strong className="text-foreground">SMART Description:</strong> Create a professional job application package with a tailored resume, cover letter, and LinkedIn profile optimized for business and IT roles.
                        </div>
                        <div>
                          <strong className="text-foreground">Definition of Done:</strong>
                          <ul className="mt-2 space-y-1 ml-4">
                            <li>• Resume receives 80% positive feedback from Career Center</li>
                            <li>• Cover letter template customized for 2–3 target roles</li>
                            <li>• LinkedIn profile updated with professional summary and keywords</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Deliverable 2 */}
                    <div className="bg-gradient-to-br from-card to-primary/5 border-l-4 border-primary rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">Networking Portfolio</h4>
                      <p className="text-sm text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 10</p>
                      <div className="space-y-3 text-sm text-foreground/80">
                        <div>
                          <strong className="text-foreground">SMART Description:</strong> Document networking activities including contacts, events, and follow-ups with at least three professionals.
                        </div>
                        <div>
                          <strong className="text-foreground">Definition of Done:</strong>
                          <ul className="mt-2 space-y-1 ml-4">
                            <li>• Minimum of three informational interviews completed</li>
                            <li>• Contact log includes 5+ professionals</li>
                            <li>• Follow-up emails sent within 48 hours</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Deliverable 3 */}
                    <div className="bg-gradient-to-br from-card to-primary/5 border-l-4 border-primary rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">Application Tracker</h4>
                      <p className="text-sm text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 12</p>
                      <div className="space-y-3 text-sm text-foreground/80">
                        <div>
                          <strong className="text-foreground">SMART Description:</strong> Maintain an active tracker for at least three targeted job applications with submission details and follow-ups.
                        </div>
                        <div>
                          <strong className="text-foreground">Definition of Done:</strong>
                          <ul className="mt-2 space-y-1 ml-4">
                            <li>• Each record includes company, role, and submission date</li>
                            <li>• At least one follow-up per application</li>
                            <li>• Weekly updates maintained</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Deliverable 4 */}
                    <div className="bg-gradient-to-br from-card to-primary/5 border-l-4 border-primary rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary mb-2">Interview Readiness Kit</h4>
                      <p className="text-sm text-muted-foreground mb-4">Type: Tangible | Owner: Daniel | Due: Week 8</p>
                      <div className="space-y-3 text-sm text-foreground/80">
                        <div>
                          <strong className="text-foreground">SMART Description:</strong> Develop a Q&A bank and complete at least two mock interviews with integrated feedback.
                        </div>
                        <div>
                          <strong className="text-foreground">Definition of Done:</strong>
                          <ul className="mt-2 space-y-1 ml-4">
                            <li>• Final Q&A document submitted</li>
                            <li>• Two mock interview feedback forms included</li>
                            <li>• Documented revisions showing applied feedback</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 7: Budget Estimation */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section7} onOpenChange={() => toggleSection('section7')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">7. Budget Estimation</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section7 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Budget Estimation Overview</h4>
                    <p className="text-foreground/80 mb-4">
                      This project relies primarily on personal effort and free student resources. Most expenses relate to time investment, minimal materials, and optional professional tools. A 15% contingency reserve is included to manage unforeseen costs.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Labor Costs</h4>
                    <p className="text-foreground/80 mb-4">
                      The primary cost is the student's own labor — including development of deliverables, networking, and application preparation. Estimated <strong>72–96 hours</strong> at <strong>$20/hour</strong> yields a total labor range of <strong>$1,440–$1,920</strong>.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse mb-6">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-border p-3 text-left font-semibold text-sm">Category</th>
                          <th className="border border-border p-3 text-left font-semibold text-sm">% of Total</th>
                          <th className="border border-border p-3 text-right font-semibold text-sm">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-secondary/20">
                          <td className="border border-border p-3 text-sm">Labor</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">80.9%</td>
                          <td className="border border-border p-3 text-sm text-right font-medium">$1,680.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/20">
                          <td className="border border-border p-3 text-sm">Equipment/Software</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">1.4%</td>
                          <td className="border border-border p-3 text-sm text-right font-medium">$30.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/20">
                          <td className="border border-border p-3 text-sm">Materials</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">1.7%</td>
                          <td className="border border-border p-3 text-sm text-right font-medium">$35.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/20">
                          <td className="border border-border p-3 text-sm">Services</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">2.9%</td>
                          <td className="border border-border p-3 text-sm text-right font-medium">$60.00</td>
                        </tr>
                        <tr className="hover:bg-secondary/20">
                          <td className="border border-border p-3 text-sm">Contingency</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">13.0%</td>
                          <td className="border border-border p-3 text-sm text-right font-medium">$270.75</td>
                        </tr>
                        <tr className="bg-primary/10 font-bold">
                          <td className="border border-border p-3 text-sm">Total Estimated Budget</td>
                          <td className="border border-border p-3 text-sm">100%</td>
                          <td className="border border-border p-3 text-sm text-right">$2,075.75</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-warning/10 border-l-4 border-warning rounded-lg p-4">
                    <p className="text-sm text-foreground/80 italic">
                      <strong>Assumptions:</strong> 84 hours at $20/hr; Equipment/Software $30; Materials $35; Services $60; 15% contingency applied.
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 8: Project Methodology */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section8} onOpenChange={() => toggleSection('section8')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wrench className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">8. Project Methodology</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section8 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Project Methodology: Hybrid (Predictive + Iterative)</h4>
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      Given the project's balance between structured deliverables and adaptive activities, a <strong>Hybrid methodology</strong> — combining <strong>Predictive</strong> and <strong>Iterative</strong> elements — was selected.
                    </p>
                    <ul className="space-y-4 text-foreground/80">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">Predictive Planning:</strong>
                          <p className="mt-1">Applied to milestone-based deliverables such as the <strong>Job Application Package</strong>, <strong>Networking Portfolio</strong>, and <strong>Interview Readiness Kit</strong>, ensuring each component maintains a clear scope, timeline, and quality standard.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <div>
                          <strong className="text-foreground">Iterative Cycles:</strong>
                          <p className="mt-1">Used for recurring and adaptive tasks like <strong>application submissions</strong> and <strong>networking activities</strong>, managed through weekly sprints. This allows for continuous improvement and flexibility based on feedback.</p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-muted-foreground italic mt-4">
                      This approach provides both structure and adaptability, supporting steady progress while integrating insights from professors, counselors, and other stakeholders. It mirrors professional project management practices that balance defined goals with responsive, real-world learning.
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Section 9: Project Tools */}
          <Card className="shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
            <Collapsible open={openSections.section9} onOpenChange={() => toggleSection('section9')}>
              <CollapsibleTrigger className="w-full">
                <CardHeader className="bg-gradient-to-r from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Hammer className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">9. Project Tools</CardTitle>
                    </div>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openSections.section9 ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Overview</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      A combination of digital tools was used to plan, organize, and manage this project efficiently. Each platform supports the hybrid methodology by offering both structure and flexibility in execution.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Tool Evaluation</h4>
                    <p className="text-foreground/80 mb-3">
                      Three primary platforms were evaluated: <strong>Microsoft Project</strong>, <strong>Trello</strong>, and <strong>Monday.com</strong>.
                    </p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Microsoft Project:</strong> Offers advanced scheduling features but is less suitable for iterative task updates.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Trello:</strong> Provides an intuitive Agile interface but lacks advanced timeline visualization.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Monday.com:</strong> Combines both — offering Gantt charts, timelines, and Kanban boards in one workspace.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Selected Tool: Monday.com</h4>
                    <p className="text-foreground/80 mb-3">
                      <strong>Monday.com</strong> was chosen as the central project management tool. It allows predictive planning for structured deliverables (such as the Job Application Package and Interview Kit) while supporting iterative tracking of networking and application tasks through Kanban boards.
                    </p>
                    <p className="text-foreground/80 mb-2">The platform enables:</p>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Clear visualization of task dependencies (e.g., applications linked to finalized resumes)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Alignment of project milestones with class timelines</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Seamless integration of feedback, revisions, and scheduling updates</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectCharter;