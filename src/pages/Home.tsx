import { ProjectHeader } from "@/components/ProjectHeader";
import { Card } from "@/components/ui/card";
import { FileText, BarChart3, Star, Users, CheckCircle } from "lucide-react";
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
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Career Project Home Page
                </h1>
                <div className="h-1 w-24 bg-gradient-primary rounded-full" />
              </div>

              <div className="grid gap-4 text-foreground">
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[140px]">Name:</span>
                  <span>Daniel Aldana</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[140px]">Course:</span>
                  <span>Managing Information Systems Projects</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[140px]">Project Title:</span>
                  <span>Business-Align Job Hunt</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-primary min-w-[140px]">Description:</span>
                  <span>
                    Conduct an accurate and honest job hunt to prepare myself to apply to
                    internships, part time, or entry-level opportunities in the business world,
                    working with technology.
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Status Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <div className="h-8 w-1 bg-gradient-primary rounded-full" />
              Project Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`group ${!link.available && "pointer-events-none"}`}
                >
                  <Card
                    className={`p-6 transition-all duration-300 hover:shadow-elegant ${
                      link.available
                        ? "hover:scale-105 hover:border-primary/50 cursor-pointer"
                        : "opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          link.available
                            ? "bg-gradient-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.title}
                          </h3>
                          {!link.available && (
                            <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
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
