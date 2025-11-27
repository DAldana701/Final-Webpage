import { PageTransition } from "@/components/PageTransition";
import { ProjectHeader } from "@/components/ProjectHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Target, Lightbulb } from "lucide-react";

const interviews = [
  {
    id: 1,
    name: "Keiley Anaya",
    title: "Data Analytics Student",
    date: "Nov 24, 2025, 10:00am",
    rationale: "The reason for choosing Keiley is that she is someone I personally know and have worked with before this semester. By getting to know her better, I gathered information about her past working experiences and the concentration of her studies, which is data analytics. Due to her extensive work experience, she is a valuable stakeholder for providing insight into project management in her professional life.",
    summary: [
      "When explaining my project charter, I first provided some background context regarding how I ended up choosing a job hunting project, briefly touching on my professional and personal values. Once Keiley had enough context, I began going into details for each section in my project charter. The first half, from overview to scope, was vital for me to explain in detail, since it provides detailed reasoning as to why I chose this career-aligned project. Since we got to know each other in previous semesters, she agreed heavily with the mission and vision statements because she knows that my goal in life is to support myself and my family. Furthermore, she appreciated that I stepped out of my comfort zone, as I tend to keep to myself, so when I mentioned that I may have more than two professional connections, she was proud of my achievements.",
      
      "Regarding my values, she understood the personal and professional values that were instilled in me when executing this project, and further explained that not only does this project allow me to grow professionally, but it also brings personal joy and confidence that positively affects my personal life. Within scope, I explained the limits of what is acceptable to do and what I plan to do in the future when this project, along with activities that are outside the boundaries of this project, however, she mentioned that slowly, some of my out of scope statements will be roadmap items in the near future, and eventually will end up in the in scope section far in the future.",
      
      "I quickly mentioned who my stakeholders are in this project and thanked her for being a part of my project. I skipped the deliverable portion to the very end and noted that the budgeting for this project is mainly $0, except for AI services ($25). In the last two sections, I explained in simple yet detailed terms that my project methodology is hybrid, as most of the deliverables and execution are static and rarely change, with the iterative portion consisting of weekly application documents tailored to job requirements. She immediately asked about the tool I used to manage my progress and mentioned that it was a lot of work to conduct, so the fact that I hadn't forgotten any deadlines was surprising to her. I quickly showed her my Monday.com dashboard, which contained all the deadlines for my deliverables. I explained that due to my lack of awareness, I had completed some of the deliverables before the deadline. However, since I hadn't clicked 'completed' on the dashboard, Monday marked them as late once I remembered to mark them complete.",
      
      "Lastly, I explained the deliverable section, which I detailed here, as it is the backbone of my project. However, I apologize in advance and acknowledge that some of the deliverables I was supposed to execute and document were either not initiated or completed minimally. Keiley stopped me and explained that project results are often altered or not completed in full, and that I should be proud to complete some of the deliverables, such as the Networking Portfolio and the Interview Readiness Kit. She further mentioned that the application documents are quick to complete, but having the confidence to complete them will delay the delivery of this task. Thus, if my application documents aren't prepared, the application trackers' deliverables can never start, all because of my low self-esteem. After having the personal conversation, I completed my project charter explanation in the deliverable section, finalizing what my deliverables were, what I had done, and what my next steps would be after this semester."
    ],
    insights: "As mentioned earlier, Keiley provided me with a number of motivational words, primarily about growing and maintaining my confidence. It's normal to feel 'left behind' and to compare myself to others. She mentioned that rather than focusing on negativity, try to inspire yourself with others' success. She further added that once I find inspiration in others' career progress, I should talk to them and converse about how they achieved their current status. Essentially, it's knocking down two birds with one stone by expanding my network to tackle my imposter syndrome. She was invaluable throughout my conversation about the project charter explanation, and there were many times when she paused and lifted my mood by acknowledging my small achievements, despite my insistence that it was nothing, especially when it came to attending a job fair, as not many would even register or show up."
  },
  {
    id: 2,
    name: "Roshan Roy Suja",
    title: "Computer Science Student",
    date: "Nov 25, 2025, 10:00am",
    rationale: "A friend of mine invited me to a Bible study club, where I met new people with whom I got along really quickly. There are two prominent individuals with whom I got along completely by the second week of joining the club. The first is Roshan, a computer science student who is interested in learning more about my personal project. Since he works as well, he is an excellent fit for this interview.",
    summary: [
      "As usual, I explained my project charter from start to finish in order; however, I skipped the deliverable to the very end, as it's the main section that ties my project together. I explained what my project is, the expected goal, and a brief overview of the success metric by referencing the deliverables executed in this project. Afterward, I explained in detail the purpose of pursuing this career project, and Roshan was very supportive when I mentioned that part of it was doing it for my family, since I want my future me to be financially stable so that I can retire with my parents. When it came to explaining my mission, vision statements, along with the values that come with executing this project, Roshan explained to continue building my relationship with supportive stakeholders since it can solve and strengthen many of my professional and personal values, such as tackling imposter syndrome, strengthening my communication, and building confidence.",
      
      "When it comes to the scope portion of the project, Roshan recommended changing 'out-of-state' to 'out-of-country positions' for the out-of-scope items. The reason is that there may be times when my future job or position requires me to work in another state for a temporary period. He mentioned that this frequently occurs in the medical field. Since IT is growing exponentially, there is a chance that I may need to, for example, monitor security logs for a company data center in Arizona for a short period. After that, I briefly explained the stakeholder register and what confused me about the power portion of the register. I explained that power refers to the extent to which a stakeholder can influence my project, with friends and family having low power and hiring managers having high power. The reason why family is low is that they are unable to help me land an internship; they are more supportive and motivational. However, hiring managers can do so.",
      
      "For budgeting, I briefly stated that nothing was spent on 90% of the project from start to finish, with the expectation of paying for AI services to create the closure website. However, I then followed up by noting that completing and planning this portion of the project was great practice for me, as it gave me insight into how to manage costs and purchase the required tools appropriately when a project has a tight budget. In the last two sections of the project charter, I showcased and explained the project methodology and tools, providing an explanation of how my original methodology had previously employed a predictive approach. However, due to sudden changes that occurred midway through the semester, I had to adopt a more hybrid approach. It was an excellent move for me, as the job application process execution was more efficient when I did it in sprints.",
      
      "As mentioned earlier, I outlined my deliverables and the progress toward completing each stated deliverable. I explained that, out of the four deliverables, I didn't want to conduct a networking portfolio and the interview kit, which required me to conduct three informative/mock interviews and expand my network portfolio by securing at least two new LinkedIn connections. However, Roshan explained that my social ability to converse with others is powerful, which is why I got along with him and Juan (the other interviewee) quickly. I explained that I was shocked too, that here I am conducting interviews with outstanding professionalism and unknowingly expanding my network each week. Once I finished commenting on each of my deliverables, Roshan mentioned something important: that hiring managers hardly keep up with follow-up emails or notes due to the sheer amount of submitted applications received, and usually, senior positions have a higher chance of the manager viewing and responding to follow-up messages. I didn't know about this, but I stated that I will continue to follow up with hiring managers for good manners."
    ],
    insights: "Roshan provided very informative insights when it comes to choosing the correct phrase for an item in my scope section and shed light on the truth about follow-ups for entry-level positions. He mentioned that 'out-of-country' fits better in my case because, as explained before, some positions may require me to move out of state for a temporary period, and if I mention this, hiring managers may turn me down due to just following my personal limitations. As for managing follow-ups, it's excellent that Roshan brought this truth to light and told him that as long as I practice following up with hiring managers, because I took the extra time to actually thank them, despite them not seeing it, I know for a fact that I'm practicing my skills in closing communications and maintaining interest through small conversations."
  },
  {
    id: 3,
    name: "Juan Manuel Toledo",
    title: "Material Engineering Graduate Student",
    date: "Nov 25, 2025, 11:00am",
    rationale: "A friend of mine invited me to a Bible study club, where I met new people with whom I got along really quickly. There are two prominent individuals with whom I got along completely by the second week of joining the club. The second is Juan, an astrophysics graduate student, who is interested in learning about project management in general. With this, I informed him about my stakeholder interview assignment, and he is willing to apply project management concepts to his own experiences.",
    summary: [
      "Juan's conversation for my project charter heavily focused on the values this project brought to me and managing stakeholders. The first few sections were as usual in explanation, the reason why I choose this project (personal goal of mine in forwarding my career path), the values it brought me or plan to bring in (strengthen confidence, expand network, increase communications skills), and how it aligned with my mission and vision statements (obtained an internship as a stepping stone for becoming financially stable in the future).",
      
      "Regarding scope, he enjoyed that I managed to figure out what is and what isn't within the limits of my project because he explained that, usually, projects in his experience are documented in detail when it comes to the tasks planned and the tasks that aren't to exceed time, budget, or maybe it's not logical to execute. In the deliverable section, I mentioned that I planned to execute and deliver the deliverables, and I take accountability for my lack of progress on some of them. I then explained each deliverable as if I had already completed it, so that Juan had a clear idea of what was supposed to be delivered, both physically and digitally.",
      
      "I briefly explained the purpose of the budgeting portion. I added that it was good practice to understand what the necessary resources are before executing my project, despite most resources being free, as I am a student. Furthermore, this portion allowed me to understand how to prioritize resources and how to manage budgets in relation to resource costs, enabling me to utilize resources and budgets to their maximum potential. For the project methodology and tool, I showcased the tool while explaining why I chose a hybrid approach. I added that this approach changed due to sudden changes midway through the semesters, as having the methodology in a predictive state wasn't efficient and reasonable. I pointed out which tasks and deliverables were more predictive and which tasks were more agile, involving quick iterations.",
      
      "After I explained the scope, I mentioned to Juan who my stakeholders were and what I needed to communicate with them so that I could satisfy them based on their power and interests, such as providing weekly to biweekly updates on my project to friends, family, and classmates. After I showed the stakeholder register, Juan asked me how I manage stakeholders when it comes to different ideas or values. I answered this question through an analogy of hosting a Thanksgiving dinner. The stakeholders are the family relatives attending the dinner, and the project manager represents the family itself. Obviously, the family completed the planning phase by having all the necessary resources for executing the dinner, having previously gone grocery shopping and purchased all the items needed for the meal. However, I mentioned that sudden changes may occur, such as stakeholders not being interested in eating a specific meal, stakeholders preferring the family to prepare another meal, or more stakeholders showing up than expected, despite having bought extra in case that issue arose. I mentioned that communication is key to solving each of these challenges and problems because I explained that without properly communicating with your family relatives in an indirect approach, there are bound to be issues (or fights), thus ruining or bringing down the mood on Thanksgiving."
    ],
    insights: "While Juan didn't provide much insight regarding my personal project, he did ask me questions indirectly that were similar to the recording question, especially when it came to the qualities I look for in people, as I explained in the Thanksgiving dinner scenario. He tested what I had learned through this course, and he appreciated that I had grasped all the project management concepts. Furthermore, when it came to the qualities he looks for when hiring, I mentally noted the good qualities he looks for in people and plan to implement those qualities in my daily life so that I can increase my chances of landing a position."
  }
];

const StakeholderInterviews = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
        <ProjectHeader />
        
        <main className="container mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Stakeholder Interviews
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights and perspectives from key project stakeholders
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {interviews.map((interview) => (
              <Card key={interview.id} className="border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        {interview.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {interview.title}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                      <Calendar className="h-3 w-3" />
                      {interview.date}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Selection Rationale */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Selection Rationale</h3>
                    </div>
                    <div className="pl-7 text-muted-foreground leading-relaxed">
                      {interview.rationale}
                    </div>
                  </div>

                  {/* Conversation Summary */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Conversation Summary</h3>
                    </div>
                    <div className="pl-7 space-y-4">
                      {interview.summary.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div className="space-y-3 bg-accent/10 rounded-lg p-6 border border-accent/20">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">Key Insights</h3>
                    </div>
                    <div className="pl-7 text-muted-foreground leading-relaxed">
                      {interview.insights}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default StakeholderInterviews;
