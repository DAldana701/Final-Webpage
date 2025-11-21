import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Target, Lightbulb, TrendingUp } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

interface StarStory {
  title: string;
  source: string;
  prompt?: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

const starStories: StarStory[] = [
  {
    title: "Course Project Trust Management",
    source: "PMI Principle 1: Be A Diligent, Respectful, and Caring Steward",
    prompt: "Tell us about a situation where you needed to build or rebuild trust with stakeholders. What actions did you take to demonstrate care and trustworthiness? How did your approach impact the project relationship?",
    situation: "For one of my past courses at CSULA, my teammates and I were required to deliver a 10-minute presentation on our course project. To be specific, this course was about System Analysis and Design that I've taken in Spring 2025, and the presentation focused on three parts: explaining the business values and needs of the system, explaining activity diagrams that showcased the potential processes of the system, and showcasing the mockup and prototype of the system where my team implemented UX/UI design.",
    task: "While I was confident going into this presentation, my two teammates were somewhat stressed, not because of public speaking, but about what to say for their part of the project. You see, before the presentation, my teammates were struggling with their parts of the course project, and I guided them to ensure that completion was on track so that we had time for presentation preparation. However, due to their confusion throughout the project's execution, my teammates were hesitant to present their parts.",
    action: "That's where I needed to have a conversation with both of them and explain what they had executed and achieved, along with translating their execution into scripts to use during the final presentation. They both agreed with my scripts; however, they were hesitant that they might make errors when explaining them upfront. That's where I told them to believe me that nothing bad would happen, and said, \"You designed an activity diagram, right? I'll help you explain the meaning, and you wrote the business needs and values, correct? I'll help you condense the explanation to deliver quickly.\"",
    result: "After explaining the structure of the presentation to my teammates, what to cover during their respective parts, and attending the feedback sections provided by the professor, my teammates were ready to present. Throughout our 10-minute presentation, my teammates did a great job of following the script I suggested. While there were areas for improvement, the final result brought us all relief as we received 100%. Our professor stated that our explanation of the business needs was perfect, but the business values could have been more in-depth. The activity diagrams, in terms of design, were excellent, along with the explanation, and the wireframe and prototype were terrific, as my team demonstrated a strong implementation of UX/UI design principles. After the class ended, my teammates thanked me for guiding the project, and I thanked them for trusting me. We continue to stay in touch and provide each other with support in various courses, which wouldn't have been possible if my teammates hadn't trusted each other."
  },
  {
    title: "Performing in Comfort",
    source: "PMI Principle 2: Create A Collaborative Project Team Environment",
    prompt: "Share an example of how you created an environment where team members felt safe to share ideas or concerns. What specific actions did you take? How did this impact team performance or project outcomes?",
    situation: "At my local church, I manage the youth's responsibilities, where each of them is responsible for small tasks that help keep the service running smoothly. While these tasks are self-explanatory, such as placing cups and bowls at the altar, there are external factors that influence the performance and execution of these tasks. Factors include the audience watching our every move and our leader taking note of feedback. Keep in mind that the age range of these youths is mainly between 5 and 10, so the performance can be rough at times.",
    task: "One Sunday, a member approached me to express a concern she had. She mentioned that due to her health conditions and sudden waves of this condition, she can't perform her assigned task, which was carrying the candle and sitting up front next to the father. Before this event, the adult workers explained to me that she cannot be up front and carry the candle for most of the time, as she would at times cause distractions, as stated by one of the fathers.",
    action: "I immediately took action by explaining to her the available tasks she could do with the other youths and mentioned that she could also sit on the side and rest for today's service. She chose to relax, and once she decided, I explained to the youths that I needed one brave volunteer to carry the candle; however, due to the age range, my choices were limited. Thankfully, one youth took on the role and informed him that you are protected from candle duty next week, but not guaranteed, for being a brave volunteer.",
    result: "The service went well, and although the sudden change in positions affected the candle performance, the overall execution was perfect, and I managed to keep everyone comfortable and satisfied. The main priority was to maintain a relaxed, stress-free environment, as the moment someone feels uncomfortable, their performance would not be in sync with others, leading to disruptions during the service. Seeing everyone perform well, while keeping everyone comfortable by providing support and guidance, really brought me comfort as well. For the youth who sat on the side and couldn't participate in the Sunday service, she came back next Sunday prepared to take on her assigned tasks, which taught me that sometimes, everyone needs a break now and then."
  },
  {
    title: "Necessary Changes, Necessary Communications",
    source: "PMI Principle 3: Effectively Engage with Stakeholders",
    prompt: "Describe a project where stakeholders had conflicting priorities or interests. How did you navigate these competing demands? What approach did you use to find alignment or compromise?",
    situation: "At my local church, all church members attended a semi-annual meeting to learn about the rules, standards, and best practices for conducting Sunday services. Usually, everyone working in the church needs a refresher on the practices that ensure the service runs smoothly and demonstrates professionalism to those attending their weekly Sunday services. Since I manage the youths in executing their tasks that keep the service running, I documented the changes that affected them. The best practices remained the same, but the church leaders introduced new rules. First, I need to ensure that both sides of the church are equal in numbers (e.g., four youths on the left side and four on the right side), and that I, along with all the youths, maintain a professional posture by keeping our hands in a prayer position at all times.",
    task: "The Sunday after the meeting, I reminded my youth team about the new rules, and immediately, most of them had their opinions about these new changes. For starters, the distribution really bothered them because almost all of the youths wanted to help out and participate, which was on the left side. This change resulted in some youths rotating tasks each week, and due to the age range mainly being 5-10, most of them fell asleep or became bored. The second change regarding hand prayer position bothered them, as it was uncomfortable to perform constantly, and some forgot to do so or didn't even want to due to the discomfort.",
    action: "For the distribution and tasks issue, I communicated with the youths, both individually and as a group, to voice their preferences for tasks and who wants to sit out for this week. I ensured that those who were sitting out for this week would be guaranteed tasks for next week, which brought them joy, and, most importantly, a sense of understanding. As for the hand positions, I communicated with the adults and explained the youths' concerns about them being forgettable and uncomfortable. They understood their complaints, and once I received feedback, I told the youths that it's okay if they don't maintain proper hand posture, but to try their best, and I would remind them when it's most necessary to do so, which is usually during prayers.",
    result: "As weeks went on, I communicated about the new changes and how they were feeling, advocating for them to express any concerns they had. Surprisingly, the youth expressed minimal concerns, and quickly, my team adapted to these new changes. What shocked me the most was that on one Sunday, I explained who was doing what, and they immediately said to me, \"We got this.\" The performance of the services was excellent, and the execution was going smoothly; however, I made sure to monitor each youth before, during, and after the service for any concerns, feedback, or discomfort."
  },
  {
    title: "Social Quality over Academic Quantity",
    source: "PMI Principle 6: Demonstrate Leadership Behaviors",
    prompt: "Describe a situation where you actively developed or mentored a team member. What specific actions did you take? How did you demonstrate care and respect while pushing for growth? What was the outcome?",
    situation: "During my senior year of high school, I was invited to and participated in the National Honor Society (NHS), where teachers and counselors recognized me for my outstanding academic performance. With this achievement, I joined NHS meetings to prepare and execute events to enhance the educational environment of my high school. For this specific case, I'll explain the time when I tutored students in math.",
    task: "Due to my comfortable knowledge in algebra and intermediate knowledge in trigonometry, the NHS student president assigned me to guide my senior peers on these math concepts, along with statistics here and there. My goal, as explained by the teacher and the student president, was to develop their confidence in performing high-school-level mathematical concepts. With this goal in mind, I began analyzing the approaches I could take to fulfill it, while keeping students engaged and motivated. What I plan to avoid is pushing students to learn on their own and having them get stuck on one problem.",
    action: "After analyzing the audience, their responses to the environment and responsibilities, and the work itself, I began tutoring the same group of senior students for the next hour, twice a week, for a month straight. During the first week, I approached students with empathy and patient behavior, guiding them through each problem by breaking down complex math scenarios and encouraging mistakes. For the second and third weeks, I continued to approach each student with empathy and supportive behavior; however, I also encouraged students to work independently and rely on one another for support before seeking guidance. If students were stuck on a problem for a long time, I told them it's best to move on to the next one and review it next time. For the last week of tutoring, I demonstrated a motivational figure, encouraging my peers to work in teams when challenged or confused, reviewing and analyzing past mistakes, and promoting quality over quantity, since it's better to learn from performing on your own for four problems than for me to guide you for the whole worksheet.",
    result: "During the final week of tutoring, the professor analyzed my performance and thanked me for not only supporting students through their math difficulties but also for the way I approached my peers, providing a balance of supportiveness and independence. My goal wasn't for the students to like math, but to understand the concepts and rules of the math concepts they were struggling with, while performing well. Most students felt more confident in understanding intermediate algebra problems and the basic rules of trigonometry and statistics. For me, that was my goal, not for them to master these math concepts, but at least to understand the basics so that they can slowly build confidence over time. That is what math is - it takes practice, like learning how to drive. It takes patience, motivation, and supportive behavior for people to learn and perform well."
  },
  {
    title: "Quick Changes, Quick Adaptabilities",
    source: "PMI Principle 7: Tailor Based on Context",
    prompt: "Describe a situation where you faced pressure to deliver quickly but needed to maintain quality standards. How did you balance these competing demands? What approach did you take and what was the outcome?",
    situation: "Occasionally, at my local church, I deliver lectures that align with the service's theme. Luckily, I get to choose when and what scripts I can read, which usually happens on days when the scripts are short in length, since I still struggle with reading Spanish under pressure and stuttering due to nerves from public speaking. To ensure that I read fluently and perform well, I practice three scripts every day, three days before Sunday. However, while this rarely happens, there are times when I'm not assigned a reading and the adult workers still instruct me to do so because someone is unable to attend the service due to unforeseen circumstances.",
    task: "One Sunday, I explained to my youth team what their responsibilities were, as usual, while also determining what to monitor when I'm with them. Suddenly, I was pulled aside and told to practice a script to read, despite not being assigned any reading that day. I was informed about the reason for this sudden change and shown the script to practice, despite the service starting in 20 minutes and needing to leave the preparation room in 10 minutes. Thankfully, the scripture was on the shorter side, but some words were difficult to pronounce, which is why I needed to practice in advance. However, since I had no other choice, I decided to go for it.",
    action: "Immediately, I instructed the youths to remember their duties and explained the sudden change in plan to them. Then, I began practicing and followed my rule when reading. First, I read the script with errors to get a gist of how the flow will need to be and the paragraphs I need to focus on. The second time I read it, I asked other lecturers for guidance on pronouncing the words I had trouble with. The third time, I focused on the paragraphs that are the most time-consuming to master the flow. I completed all this within the 10 minutes I had, and with around 10 minutes to spare, I asked to borrow another lecturer's personal book to practice reading as much as I could while waiting for the ceremony to start. Soon, the 20 minutes were up, and it began.",
    result: "When it was my turn to read, I was nervous heading up to the podium, but I maintained a great body posture, demonstrating confidence. I gave myself 2-3 seconds to calm my breathing and read. I found my flow well for the first paragraph and struggled a bit with the second, but thankfully, the practice came in handy. Despite being internally nervous, the third and fourth paragraphs were the easiest parts to read, maintaining a smooth flow throughout the sentences and concluding strongly, with only minor stuttering in the fifth. Despite being nervous after finishing, I kept a calm and leader-like posture when helping out the youths for the rest of the service. Once the service ended, the workers and lecturers thanked me for maintaining a smooth tone when delivering to the audience. I never expected to work better under pressure, and I'm grateful for my adaptability skills and quick responses when sudden changes occur."
  }
];

const StarStories = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              STAR Stories
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Professional development stories demonstrating leadership, collaboration, and project management principles through real-world experiences.
            </p>
          </div>

          {/* Best Practices Card */}
          <Card className="p-6 mb-8 bg-gradient-to-br from-card via-card to-primary/5 border-l-4 border-l-primary shadow-lg animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              STAR Story Best Practices
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Be specific:</strong> Use concrete details and examples</li>
              <li><strong>Focus on your actions:</strong> Use "I" not "we" when describing your contributions</li>
              <li><strong>Quantify results:</strong> Include numbers, percentages, or measurable outcomes when possible</li>
              <li><strong>Show learning:</strong> Reflect on what you learned and how you grew</li>
              <li><strong>Keep it concise:</strong> Aim for 250-400 words per story</li>
              <li><strong>Be authentic:</strong> Use real experiences from your project or work</li>
            </ul>
          </Card>

          {/* Stories */}
          <div className="space-y-12">
            {starStories.map((story, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Story number indicator */}
                <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <Card className="p-8 pl-12 bg-gradient-to-br from-card via-card to-secondary/10 border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Story Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {story.title}
                    </h2>
                    <Badge className="mb-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30">
                      {story.source}
                    </Badge>
                    {story.prompt && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border-l-4 border-accent">
                        <p className="text-sm font-medium text-muted-foreground italic">
                          <strong className="text-accent">Prompt:</strong> {story.prompt}
                        </p>
                      </div>
                    )}
                  </div>

                  <Separator className="my-6 bg-gradient-to-r from-transparent via-border to-transparent" />

                  {/* STAR Sections */}
                  <div className="space-y-6">
                    {/* Situation */}
                    <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-l-4 border-blue-500">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Situation</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-11">
                        {story.situation}
                      </p>
                    </div>

                    {/* Task */}
                    <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-green-500/10 border-l-4 border-green-500">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-md">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Task</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-11">
                        {story.task}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-l-4 border-purple-500">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Action</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-11">
                        {story.action}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-l-4 border-amber-500">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 shadow-md">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Result</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-11">
                        {story.result}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Divider between stories */}
                {index < starStories.length - 1 && (
                  <div className="mt-12 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-border">
                      <span className="text-xs font-medium text-muted-foreground">Next Story</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StarStories;
