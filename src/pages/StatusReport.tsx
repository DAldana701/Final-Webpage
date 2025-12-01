import { ProjectHeader } from "@/components/ProjectHeader";
import { Card } from "@/components/ui/card";
import { BarChart3, CheckCircle2, AlertTriangle, TrendingUp, Target, FileText, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/PageTransition";

interface WeekReport {
  id: string;
  week: number;
  dateRange: string;
  status: "on-track" | "at-risk";
  statusEmoji: string;
  executiveSummary: string;
  accomplishments: string[];
  issuesRisks: { issues: string; risks: string; mitigation: string; };
  plansNextWeek: string[];
  upcomingMilestones: string[];
  changeSinceLastReport: string;
  projectHealth: string;
  reflection: string;
}

const weeklyReports: WeekReport[] = [
  { id: "week15", week: 15, dateRange: "Nov 23 – 29, 2025", status: "on-track", statusEmoji: "✅", executiveSummary: "Final packet deliverables are nearing completion as project closure deadlines approach. Focus has shifted to roadmap planning and continued monitoring of internship opportunities on Handshake. Completed mock interview sessions with stakeholders and received valuable feedback on behavioral interview preparation.", accomplishments: ["Documented feedback regarding mock/practice interviews from stakeholders", "Reviewed project deliverables completion and initiated lessons learned based on completion and obstacles", "Reviewed roadmap items, began planning, and analyzed more potential, reasonable roadmap items (if necessary)", "Completed parts of the Closure Documents and reviewed project execution phases to ensure this document is authentic and personal"], issuesRisks: { issues: "Challenging to complete the project closure document due to the lack of completion of project deliverables.", risks: "Peer reviews were not initiated despite the deadline being within a couple of days.", mitigation: "Communicate with stakeholders who've seen and heard about my project charter for guidance to ensure closure document is authentic. Communicate with stakeholders (classmates) to request peer reviews and, in return, review their project progress." }, plansNextWeek: ["Complete Closure Document", "Initiate Peer Reviews", "Continue Monitoring Handshake for New Internship", "Review Roadmap Items (Initiation Phase)", "Thanking Stakeholders"], upcomingMilestones: ["Project Closure Document – 12/9/2025: On Track", "Peer Reviews – 12/9/2025: At Risk", "Roadmap Initiation Phase – 12/13/2025: On Track"], changeSinceLastReport: "No changes to report.", projectHealth: "🟢 On Track", reflection: "Thanksgiving week slowed my progress significantly, but I'm grateful for the chance to reflect on how far I've come. The mock interviews were eye-opening—stakeholders congratulated me on achievements I hadn't even given myself credit for. Their feedback on confidence and pushing beyond my comfort zone really hit home. I realized I'm getting better at starting conversations with new people, which used to terrify me. What matters most now is maintaining these relationships instead of letting them fade after a few weeks like I used to. Every new connection brings me closer to understanding the job search process and builds my confidence to actually hit that 'apply' button. The fear is still there, but it's getting quieter." },
  { id: "week14", week: 14, dateRange: "Nov 16 – 22, 2025", status: "at-risk", statusEmoji: "⚠️", executiveSummary: "Project deliverables remain on track with focus shifting to quality assurance. Active job search continues on Handshake with guidance from peer stakeholders on application best practices. Network expansion efforts ongoing with emphasis on maintaining professional relationships and communication skills development.", accomplishments: ["Constructed and Completed Star Stories for Practice", "Scheduled Stakeholder Interview to Satisfy Project Deliverables", "Looking out for Positions on Handshake (roadmap alignment)"], issuesRisks: { issues: "Bit-Sized Lessons Not Initiated—Due to focusing on other coursework and other parts of the final packet, this assignment flew over my head, and now, I'm finding myself starting this assignment a week before it's due.", risks: "Limited time remaining before bite-sized lesson deadline may impact quality of deliverable.", mitigation: "Reduce time from other courses and parts of the final packets to complete this small, but meaningful assignment." }, plansNextWeek: ["Execute Stakeholder Interview", "Initialize Project Closure Document", "Execute Bit-Sized Lesson", "Review of Deliverables Progress and Results"], upcomingMilestones: ["Record Interviewees – 11/29/2025: At Risk", "Bite-Sized Lessons – 11/26/2025: At Risk", "Closure Documents – 12/6/2025: On Track"], changeSinceLastReport: "No changes to report.", projectHealth: "🟡 At Risk", reflection: "Something unexpected happened this week—I've been meeting so many new people that I almost forgot to count them. I exceeded my LinkedIn goal, but the real growth was in the face-to-face connections I made. Joining new clubs and sharing my project story felt natural now, which is wild considering how anxious I used to get about networking. Writing STAR stories forced me to sit with my accomplishments, really look at them, and see value I'd been dismissing. I have this habit of downplaying my wins, but putting them into words made them real and significant. The practice interviews showed me I actually have interesting experiences to talk about—I just need to believe it. The confidence isn't fully there yet, especially when it comes to hitting 'apply' on job postings, but this project is building something inside me that wasn't there before. After semester closure, I know I'll be ready." },
  { id: "week13", week: 13, dateRange: "Nov 9 – 15, 2025", status: "at-risk", statusEmoji: "⚠️", executiveSummary: "This week represents an important turning point as final assignment deadlines are getting close. While good progress was made on documentation updates and website design, some time-sensitive tasks—specifically stakeholder interviews and bite-sized lesson recordings—are still incomplete. These assignments have fixed deadlines that require immediate attention and faster completion. Key achievements include finishing two STAR stories, improving the status report page, and designing a new central website. Moving forward, better time management and reaching out to stakeholders sooner will be important to ensure all remaining work meets quality standards on time.", accomplishments: ["Completed 2 of 5 STAR behavioral interview stories", "Updated and improved the status report web page with better design", "Designed a new, modern central website with improved user experience"], issuesRisks: { issues: "Bite-sized lesson recordings have not been started due to focusing on other coursework and different parts of the final packet. This creates a problem since there are only two weeks left before the deadline.", risks: "Scheduling stakeholder interviews has been difficult because several people I selected are dealing with their own final exams and major projects, making it hard to find time to meet.", mitigation: "Time will be shifted from other courses and final packet work to focus on completing bite-sized lessons. Continuing to reach out to backup stakeholders, with plans to find new interviewees who are available within the next two weeks." }, plansNextWeek: ["Complete remaining STAR behavioral interview stories", "Contact and schedule confirmed interviews with stakeholders", "Start the closure document to capture project insights and lessons learned", "Continue job search activities that align with career goals", "Begin recording bite-sized lesson content"], upcomingMilestones: ["Record Stakeholder Interviews – 11/29/2025: At Risk", "Finalize Central Website Design – 11/29/2025: On Track", "Submit Bite-Sized Lessons – 11/26/2025: At Risk", "Complete Closure Documents – 11/29/2025: On Track"], changeSinceLastReport: "The project website is now live and accessible through the Lovable platform, with GitHub hosting the code repository for version control. A complete redesign has been done for the final webpage, featuring modern design and better usability.", projectHealth: "🟡 At Risk", reflection: "This week reminded me how challenging it can be to balance multiple high-priority tasks at once. While I am proud of the improvements made to the website and status reports, I have to admit that I let some important assignments slip. Realizing that bite-sized lessons and stakeholder interviews were approaching their deadlines faster than expected created real stress—not because the work is too difficult, but because I knew about these deadlines from the beginning and should have planned better. There is no one else to blame; these were tasks I simply did not prioritize well enough. That said, this challenge has taught me the difference between wanting everything to be perfect and actually getting things done. The coming week will test my ability to work under pressure while still maintaining quality. I am confident I can deliver, but this experience will definitely change how I manage deadlines in my future career." },
  { id: "week12", week: 12, dateRange: "Nov 2 – 8, 2025", status: "on-track", statusEmoji: "✅", executiveSummary: "Everything is on track as the project nears closure. Deliverables are being completed and final revisions applied. Collaboration with peers has been constructive, and closure documentation is being drafted. This week underscored the importance of maintaining quality and consistency even as deadlines approach. All planned deliverables remain achievable within scope and timeline.", accomplishments: ["Reviewed and revised documentation for final submission.", "Conducted peer and stakeholder feedback sessions.", "Initiated closure documentation preparation."], issuesRisks: { issues: "No issues identified during this reporting period.", risks: "Timing constraints may impact final review depth.", mitigation: "Prioritized early submission of key deliverables to ensure adequate review time." }, plansNextWeek: ["Complete remaining deliverables and continue limited job-search activities.", "Conduct interview practice sessions with peers and professional stakeholders."], upcomingMilestones: ["Interview Practice – 11/08/2025: At Risk", "Stakeholder Feedback – 11/08/2025: On Track", "Prepare Closure Documents – 11/08/2025: On Track"], changeSinceLastReport: "No changes occurred during this reporting period.", projectHealth: "🟢 On Track", reflection: "This week brought clarity and focus as the project nears its official closure. Having completed most major deliverables, I shifted attention to reflection and refinement—a necessary pivot from execution to documentation and evaluation. Collaborating with peers reminded me that effective project management extends beyond individual deliverables to include communication, accountability, and adaptability. Preparing closure documentation required synthesizing weeks of work into actionable insights, a task that reinforced the value of structured record-keeping and regular reflection. Despite minor timing constraints, I remain confident in delivering high-quality final outputs. Looking ahead, I'm eager to apply the project management skills developed this semester to future professional initiatives." },
  { id: "week11", week: 11, dateRange: "Oct 26 – Nov 1, 2025", status: "on-track", statusEmoji: "✅", executiveSummary: "As the project approaches closure, progress this week focused on refining deliverables, incorporating stakeholder feedback, and supporting peers through their own project milestones. Key achievements include completing revisions based on professional input, continuing limited job-search activities, and drafting preliminary closure documentation. The overall trajectory remains on track, with all scheduled milestones achievable within scope and timeline.", accomplishments: ["Revised project documentation based on stakeholder feedback.", "Supported peers through their project milestones with structured reviews.", "Began drafting closure documentation to capture lessons learned and final deliverables."], issuesRisks: { issues: "No issues identified during this reporting period.", risks: "End-of-course transitions may lead to reduced availability for final tasks.", mitigation: "Prioritized early completion of remaining deliverables and scheduled clear task timelines." }, plansNextWeek: ["Complete remaining deliverables and continue limited job-search activities.", "Conduct interview practice sessions with peers and professional stakeholders."], upcomingMilestones: ["Interview Practice – 11/08/2025: At Risk", "Stakeholder Feedback – 11/08/2025: On Track", "Prepare Closure Documents – 11/08/2025: On Track"], changeSinceLastReport: "No changes occurred during this reporting period.", projectHealth: "🟢 On Track", reflection: "As the project nears its conclusion, this week's focus was on finalizing deliverables and supporting peers through constructive feedback. I began drafting closure documentation and outlining interview sessions with a peer, a professor, and a manager from CHASE. Collaborating with classmates reinforced key project management principles such as alignment between goals, values, and execution. Although progress slowed slightly due to end-of-course transitions, this phase highlights how far I've come—growing from project planning and execution to reflection and mentorship. It's rewarding to see both personal and professional development emerge through consistent engagement and perseverance." },
  { id: "week10", week: 10, dateRange: "Oct 19 – 25, 2025", status: "on-track", statusEmoji: "✅", executiveSummary: "The project remains on track, with steady progress made across key deliverables. The résumé has been finalized and stakeholder feedback incorporated, resulting in improved application readiness. Several job openings have been identified for targeted applications, marking the transition from planning to execution. Communication with stakeholders this week provided valuable insight into maintaining consistent follow-through and confidence in the application process.", accomplishments: ["Conducted focused job hunting and identified multiple potential openings.", "Completed résumé construction and tailored it to professional standards.", "Held feedback sessions with stakeholders to refine job search strategies and résumé quality."], issuesRisks: { issues: "No issues identified during this reporting period.", risks: "Minor scheduling delays may occur due to the application process workload.", mitigation: "Maintain structured application timelines and continue proactive communication with stakeholders." }, plansNextWeek: ["Continue targeted job applications based on identified opportunities.", "Prepare for peer feedback and stakeholder consultations."], upcomingMilestones: ["Resume Finalization & Peer Feedback – 10/25/2025: Completed", "Job Applications Submission – 11/01/2025: On Track", "Draft Status Report – 11/01/2025: On Track"], changeSinceLastReport: "No changes occurred during this reporting period.", projectHealth: "🟢 On Track", reflection: "This week marked a critical transition—moving from preparation into execution. Finalizing my résumé required synthesizing feedback from multiple sources, balancing clarity with professionalism. Identifying job opportunities felt both empowering and slightly overwhelming, but this process reinforced the importance of staying organized and prioritizing roles aligned with my career goals. Stakeholder feedback reminded me that confidence is a skill developed through practice and iteration. I'm encouraged by the progress made and energized to take the next steps, applying to roles to turn preparation into action." },
  { id: "week9", week: 9, dateRange: "Oct 12 – 18, 2025", status: "at-risk", statusEmoji: "⚠️", executiveSummary: "Project progress slowed this week due to reduced availability and shifted priorities, resulting in an At Risk status. While key deliverables such as job hunting research and résumé construction advanced, stakeholder engagement and documentation updates fell behind schedule. Despite these delays, the foundational work completed this week positions the project to recover during the next reporting period through focused effort and improved time management.", accomplishments: ["Continued job hunting research and analyzed target job requirements.", "Advanced résumé construction and customization efforts.", "Conducted initial self-assessment to guide application preparation."], issuesRisks: { issues: "Reduced availability and competing priorities slowed progress on stakeholder engagement and documentation.", risks: "Continued delays may impact the quality and timeliness of upcoming deliverables.", mitigation: "Re-prioritized tasks and scheduled additional time blocks for project work in the upcoming week." }, plansNextWeek: ["Complete résumé construction and finalize application materials.", "Re-engage with stakeholders for feedback and guidance.", "Finalize draft status report and update project documentation."], upcomingMilestones: ["Resume Finalization & Peer Feedback – 10/25/2025: At Risk", "Job Applications Submission – 11/01/2025: At Risk", "Draft Status Report – 11/01/2025: At Risk"], changeSinceLastReport: "Project status changed from On Track to At Risk due to reduced progress.", projectHealth: "🟡 At Risk", reflection: "This week served as a reminder that project success requires consistent focus and intentional prioritization. While external factors contributed to the slowdown, taking ownership of the situation and adjusting plans moving forward is essential. The work completed—particularly in résumé development and job analysis—demonstrates progress, but the delay in stakeholder communication highlighted the importance of maintaining engagement even during busy periods. I'm committed to recovering this week and ensuring that upcoming deliverables meet the project's high standards through structured effort and stakeholder collaboration." },
  { id: "week8", week: 8, dateRange: "Oct 5 – 11, 2025", status: "on-track", statusEmoji: "✅", executiveSummary: "The project continues to perform well with only minor deviations from the planned schedule. This week's focus centered on career platform research and résumé development, both of which progressed as anticipated. Engagement with stakeholders provided clarity on best practices for professional documents and job application strategies. Overall project health remains strong, with all major milestones on track for completion within the established timeline.", accomplishments: ["Conducted research across LinkedIn, Indeed, Handshake, and Career Center platforms.", "Analyzed target job requirements to inform customized résumé development.", "Engaged with stakeholders to gather feedback on job search strategies."], issuesRisks: { issues: "No issues identified during this reporting period.", risks: "Scheduling constraints may slightly impact task completion timelines.", mitigation: "Maintained flexibility in task execution and re-prioritized work as needed to stay on track." }, plansNextWeek: ["Continue résumé construction and customization for selected job opportunities.", "Deepen research into target roles and companies to refine application strategies.", "Hold additional stakeholder consultations for feedback on draft materials."], upcomingMilestones: ["Resume Creation – 10/11/2025: On Track", "Job Requirements Analysis – 10/11/2025: On Track", "Resume Finalization & Peer Feedback – 10/25/2025: On Track"], changeSinceLastReport: "No changes occurred during this reporting period.", projectHealth: "🟢 On Track", reflection: "This week reinforced the importance of structured research and targeted preparation. Analyzing career platforms revealed unique strengths: LinkedIn's professional networking depth, Indeed's breadth of listings, and Handshake's tailored student focus. Understanding these nuances helps me approach job searching more strategically rather than reactively. Additionally, crafting a résumé tailored to specific roles reminded me that quality matters far more than quantity in the application process. Stakeholder feedback this week was invaluable, offering insights that will shape not only my résumé but also my overall approach to professional communication." },
  { id: "week7", week: 7, dateRange: "Sep 28 – Oct 4, 2025", status: "on-track", statusEmoji: "✅", executiveSummary: "The project remains on track, with progress aligning closely with planned milestones. This week's efforts concentrated on initiating résumé construction, job requirements analysis, and engagement with career center resources. Research into ISC2 membership confirmed its relevance to long-term career goals, particularly for cybersecurity roles. All key deliverables are progressing as expected, and stakeholder communication remains consistent.", accomplishments: ["Began résumé construction with a focus on professional clarity and alignment with target roles.", "Analyzed job requirements for multiple cybersecurity and business analyst positions.", "Researched ISC2 mission, membership benefits, and career center tools."], issuesRisks: { issues: "No issues identified during this reporting period.", risks: "No risks identified during this reporting period.", mitigation: "N/A" }, plansNextWeek: ["Continue résumé construction and tailor document to specific job opportunities.", "Deepen job hunting research and identify target companies.", "Engage with stakeholders for feedback on draft résumé and job search strategies."], upcomingMilestones: ["Resume Creation – 10/11/2025: On Track", "Job Requirements Analysis – 10/11/2025: On Track", "CC Research & ISC2 Account Creation – 10/11/2025: Completed"], changeSinceLastReport: "No changes occurred during this reporting period.", projectHealth: "🟢 On Track", reflection: "This week felt productive and forward-focused. Starting the résumé construction process required balancing professional tone with authenticity—showcasing skills and experience without exaggeration. Researching job requirements illuminated patterns in what employers value, particularly around analytical thinking, communication, and adaptability. Exploring ISC2's mission reminded me why cybersecurity remains a compelling long-term career path: the opportunity to contribute to a field that protects critical systems and promotes global security standards. I'm encouraged by the progress made and confident in maintaining this momentum moving forward." },
  { id: "week6", week: 6, dateRange: "Sep 21 – 27, 2025", status: "at-risk", statusEmoji: "⚠️", executiveSummary: "Due to sudden health issues, project progress slowed and fell behind the planned schedule. Essential research tasks were completed, including career platform comparisons and initial exploration of ISC2 membership benefits. However, several deliverables requiring sustained focus were delayed. This setback highlights the importance of schedule flexibility and risk mitigation planning. With adjusted priorities and improved health, the project is expected to recover during the next reporting period.", accomplishments: ["Completed career platform research comparing LinkedIn, Indeed, Handshake, and Career Center.", "Researched ISC2 mission, membership tiers, and professional benefits.", "Maintained communication with stakeholders despite reduced project hours."], issuesRisks: { issues: "Sudden health issues reduced available project hours significantly.", risks: "Delayed deliverables may impact subsequent milestones if not addressed promptly.", mitigation: "Focused on flexible research-based activities requiring less time sensitivity while maintaining project momentum." }, plansNextWeek: ["Create and verify ISC2 account and Career Center (CC) profile.", "Review past application documents and conduct a self-assessment.", "Select targeted jobs for résumé customization."], upcomingMilestones: ["Resume Creation – 9/27/2025: On Track", "Job Requirements Analysis – 10/04/2025: On Track", "CC Research & ISC2 Account Creation – 10/04/2025: At Risk"], changeSinceLastReport: "No changes occurred during this reporting period.", projectHealth: "🟡 At Risk", reflection: "This week's progress began under challenging health circumstances, but consistent effort ensured that essential tasks were completed. Analyzing career platforms revealed distinct advantages: Handshake as the most student-oriented, LinkedIn as the most professional, and Indeed as a balanced option. ISC2's mission to promote cybersecurity worldwide aligns closely with my long-term career goals. Despite reduced hours, the work completed reflects both commitment and adaptability." }
];

const StatusReport = () => {
  const scrollToWeek = (weekId: string) => { const element = document.getElementById(weekId); if (element) { const offset = 160; const elementPosition = element.getBoundingClientRect().top; const offsetPosition = elementPosition + window.pageYOffset - offset; window.scrollTo({ top: offsetPosition, behavior: 'smooth' }); } };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ProjectHeader />
      <nav className="sticky top-[88px] z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            {weeklyReports.map((report) => (<button key={report.id} onClick={() => scrollToWeek(report.id)} className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary whitespace-nowrap">Week {report.week}</button>))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* Hero Header Section */}
        <div className="mb-12 text-center animate-fade-in relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Project Progress Tracking</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
            Weekly Status Reports
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Business-Aligned Job Hunt: Progress tracking from Week 6 to Week 13
          </p>
        </div>

        {/* Weekly Reports */}
        <div className="space-y-16">
          {weeklyReports.map((report) => (
            <Card 
              key={report.id} 
              id={report.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl border-2"
            >
              {/* Week Header */}
              <div
                className={cn(
                  "w-full transition-all duration-300 p-5",
                  report.status === "on-track" 
                    ? "bg-gradient-to-r from-success/20 via-success/10 to-success/5 border-l-4 border-success" 
                    : "bg-gradient-to-r from-warning/20 via-warning/10 to-warning/5 border-l-4 border-warning"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "text-3xl p-3 rounded-lg shadow-md",
                    report.status === "on-track" ? "bg-success/20" : "bg-warning/20"
                  )}>
                    {report.statusEmoji}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-1.5">
                      Week {report.week} Status Report
                    </h2>
                    <div className="flex items-center gap-2">
                      <Badge variant={report.status === "on-track" ? "default" : "destructive"} className="text-sm px-3 py-0.5">
                        {report.dateRange}
                      </Badge>
                      <Badge variant={report.status === "on-track" ? "default" : "secondary"} className="text-sm px-3 py-0.5">
                        {report.status === "on-track" ? "✅ On Track" : "⚠️ At Risk"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week Content */}
              <div className="p-8 space-y-8 bg-gradient-to-b from-card to-muted/10">
                  {/* Executive Summary */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      Executive Summary
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {report.executiveSummary}
                    </p>
                  </div>

                  {/* Accomplishments */}
                  <div className="bg-gradient-to-r from-success/5 to-success/10 p-6 rounded-xl border-l-4 border-success">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-success" />
                      Accomplishments This Week
                    </h3>
                    <ul className="space-y-2">
                      {report.accomplishments.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-success mt-1">✓</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Issues & Risks */}
                  <div className="bg-gradient-to-r from-warning/5 to-destructive/5 p-6 rounded-xl border-l-4 border-warning">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-warning" />
                      Issues & Risks / Mitigations
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="bg-card/50 p-3 rounded-lg">
                        <p><strong className="text-foreground">Issues:</strong> {report.issuesRisks.issues}</p>
                      </div>
                      <div className="bg-card/50 p-3 rounded-lg">
                        <p><strong className="text-foreground">Risks:</strong> {report.issuesRisks.risks}</p>
                      </div>
                      <div className="bg-card/50 p-3 rounded-lg">
                        <p><strong className="text-foreground">Mitigation:</strong> {report.issuesRisks.mitigation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Plans for Next Week */}
                  <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 rounded-xl border-l-4 border-accent">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-accent" />
                      Plans for Next Week
                    </h3>
                    <ul className="space-y-2">
                      {report.plansNextWeek.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-accent mt-1">→</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Upcoming Milestones */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border-l-4 border-secondary">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      <Target className="h-6 w-6 text-secondary" />
                      Upcoming Milestones
                    </h3>
                    <ul className="space-y-2">
                      {report.upcomingMilestones.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-secondary mt-1">●</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Change Since Last Report */}
                  <div className="bg-gradient-to-r from-muted/30 to-muted/10 p-6 rounded-xl border-l-4 border-muted">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      <ListChecks className="h-6 w-6 text-muted-foreground" />
                      Change Since Last Report
                    </h3>
                    <p className="text-muted-foreground">{report.changeSinceLastReport}</p>
                  </div>

                  {/* Project Health */}
                  <div className={cn(
                    "p-5 rounded-xl border-l-4",
                    report.status === "on-track" 
                      ? "bg-gradient-to-r from-success/10 to-success/5 border-success" 
                      : "bg-gradient-to-r from-warning/10 to-warning/5 border-warning"
                  )}>
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                      {report.status === "on-track" ? (
                        <CheckCircle2 className="h-6 w-6 text-success" />
                      ) : (
                        <AlertTriangle className="h-6 w-6 text-warning" />
                      )}
                      Project Health
                    </h3>
                    <p className="text-muted-foreground font-semibold text-lg">{report.projectHealth}</p>
                  </div>

                  {/* Reflection */}
                  <div className="pt-6 border-t-4 border-border bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-sky-50/40 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/15 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="text-2xl">💭</span>
                      Reflection
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base italic">
                      {report.reflection}
                    </p>
                  </div>
                </div>

                {/* Report Footer */}
                <div className="px-8 py-4 bg-muted/30 border-t border-border/50">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="h-px flex-1 bg-border/30" />
                    <span className="font-medium">End of Week {report.week} Report</span>
                    <div className="h-px flex-1 bg-border/30" />
                  </div>
                </div>
            </Card>
          ))}
        </div>
      </main>
      </div>
    </PageTransition>
  );
};

export default StatusReport;
