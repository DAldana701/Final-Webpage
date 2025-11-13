import { ProjectHeader } from "@/components/ProjectHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, BarChart3, Star, Users, CheckCircle, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const projectLinks = [
    {
      title: "Charter",
      icon: FileText,
      href: "/charter",
      description: "View project charter document",
      available: true,
    },
    {
      title: "Reports",
      icon: BarChart3,
      href: "/status-report",
      description: "Weekly status reports",
      available: true,
    },
    {
      title: "STAR Stories",
      icon: Star,
      href: "/star-stories",
      description: "Situation, Task, Action, Result stories",
      available: false,
    },
    {
      title: "Stakeholder Interviews",
      icon: Users,
      href: "/stakeholder-interviews",
      description: "Interview documentation",
      available: false,
    },
    {
      title: "Closure Document",
      icon: CheckCircle,
      href: "/closure",
      description: "Project closure documentation",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <ProjectHeader />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-secondary shadow-elegant animate-fade-in">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="relative p-10">
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
                <Card className="bg-background/95 backdrop-blur-sm border-primary/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
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

                <Card className="bg-background/95 backdrop-blur-sm border-secondary/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
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
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-1.5 bg-gradient-primary rounded-full" />
              <div>
                <h2 className="text-3xl font-bold text-foreground">Documentation Hub</h2>
                <p className="text-muted-foreground">Access project deliverables and reports</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projectLinks.map((link, index) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`group ${!link.available && "pointer-events-none"}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <Card
                    className={`p-6 transition-all duration-300 animate-fade-in relative overflow-hidden ${
                      link.available
                        ? "hover:scale-105 hover:shadow-elegant cursor-pointer border-l-4 border-l-primary/50 hover:border-l-primary"
                        : "opacity-60 border-l-4 border-l-muted"
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl" />
                    <div className="relative flex items-start gap-4">
                      <div
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          link.available
                            ? "bg-gradient-primary text-primary-foreground shadow-md group-hover:shadow-lg group-hover:scale-110"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <link.icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
  );
};

export default Home;
