import { ProjectHeader } from "@/components/ProjectHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BarChart3, Star, Users, CheckCircle, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
  const projectLinks = [
    {
      title: "Charter",
      icon: FileText,
      href: "/charter",
      description: "View project charter document",
      available: true,
      accentColor: "from-blue-500/40 via-cyan-500/30 to-blue-400/40",
      iconGradient: "from-blue-500 to-cyan-500",
      borderColor: "border-l-blue-500/50 hover:border-l-cyan-500",
    },
    {
      title: "Reports",
      icon: BarChart3,
      href: "/status-report",
      description: "Weekly status reports",
      available: true,
      accentColor: "from-emerald-500/50 via-teal-500/40 to-emerald-400/50",
      iconGradient: "from-emerald-500 to-teal-500",
      borderColor: "border-l-emerald-500/50 hover:border-l-teal-500",
    },
    {
      title: "STAR Stories",
      icon: Star,
      href: "/star-stories",
      description: "Situation, Task, Action, Result stories",
      available: true,
      accentColor: "from-amber-500/50 via-orange-500/40 to-amber-400/50",
      iconGradient: "from-amber-500 to-orange-500",
      borderColor: "border-l-amber-500/50 hover:border-l-orange-500",
    },
    {
      title: "Stakeholder Interviews",
      icon: Users,
      href: "/stakeholder-interviews",
      description: "Interview documentation",
      available: true,
      accentColor: "from-purple-500/40 via-pink-500/30 to-purple-400/40",
      iconGradient: "from-purple-500 to-pink-500",
      borderColor: "border-l-purple-500/50 hover:border-l-pink-500",
    },
    {
      title: "Closure Document",
      icon: CheckCircle,
      href: "/closure",
      description: "Project closure documentation",
      available: false,
      accentColor: "from-indigo-500/20 to-violet-500/20",
      iconGradient: "from-indigo-500 to-violet-500",
      borderColor: "border-l-muted",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <ProjectHeader />
      
      <main className="container mx-auto px-6 py-xl">
        <div className="max-w-5xl mx-auto space-y-lg">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-purple-500 via-teal-400 to-sky-400 bg-[length:300%_100%] animate-gradient-shift shadow-elegant animate-fade-in group">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="absolute inset-0 bg-gradient-accent opacity-30" />
            {/* Floating orbs */}
            <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="relative p-lg md:p-xl">
              <div className="flex items-start justify-between mb-8">
                <div className="space-y-3">
                  <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    Career Development Project
                  </Badge>
                  <h1 className="text-5xl font-bold text-primary-foreground leading-tight">
                    Professional Portfolio &<br />Project Documentation
                  </h1>
                  <div className="h-1.5 w-32 bg-primary-foreground/40 rounded-full" />
                </div>
                <div className="p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm border border-primary-foreground/20">
                  <Briefcase className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/90 backdrop-blur-sm border-border shadow-lg p-6 hover:shadow-elegant hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Student Information</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="text-lg font-semibold text-foreground">Daniel Aldana</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Course</p>
                        <p className="text-sm text-foreground">Managing Information Systems Projects</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/90 backdrop-blur-sm border-border shadow-lg p-6 hover:shadow-elegant hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Project Overview</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Title</p>
                        <p className="text-lg font-semibold text-foreground">Business-Align Job Hunt</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Objective</p>
                        <p className="text-sm text-foreground">
                          Conduct an accurate and honest job hunt to prepare for internships, part-time, 
                          or entry-level opportunities in business and technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-md animate-fade-in relative" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-md">
              <div className="h-12 w-1.5 bg-gradient-to-b from-primary to-accent rounded-full shadow-md animate-pulse" />
              <div>
                <h2 className="text-3xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Documentation Hub</h2>
                <p className="text-muted-foreground mt-1">Access project deliverables and reports</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectLinks.map((link, index) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`group ${!link.available && "pointer-events-none"}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Card
                    className={`p-6 h-full transition-all duration-300 animate-fade-in relative overflow-hidden ${
                      link.available
                        ? `bg-glass backdrop-blur-md border-glass shadow-glass hover:-translate-y-2 hover:shadow-elegant cursor-pointer border-l-4 ${link.borderColor} group`
                        : "opacity-60 border-l-4 border-l-muted bg-card/50 backdrop-blur-sm"
                    }`}
                  >
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${link.accentColor} rounded-full blur-2xl ${link.available ? 'opacity-100 group-hover:opacity-80' : 'opacity-20'} transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start gap-4">
                      <div
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          link.available
                            ? `bg-gradient-to-br ${link.iconGradient} text-primary-foreground shadow-md group-hover:shadow-elegant group-hover:scale-110`
                            : "bg-muted/50 backdrop-blur-sm text-muted-foreground"
                        }`}
                      >
                        <link.icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {link.title}
                          </h3>
                          {!link.available && (
                            <Badge variant="secondary" className="text-xs">
                              Coming Soon
                            </Badge>
                          )}
                          {link.available && (
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                              Available
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      </div>
    </PageTransition>
  );
};

export default Home;
