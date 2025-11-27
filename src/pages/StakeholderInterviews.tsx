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
