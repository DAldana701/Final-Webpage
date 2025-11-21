import { NavLink } from "./NavLink";
import { Link, useLocation } from "react-router-dom";
import { FileText, BarChart3, Home, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectHeader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const showNavigation = ["/charter", "/status-report", "/star-stories"].includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-card/60">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Project Management Dashboard</h1>
            <p className="text-sm text-muted-foreground">Professional Documentation System</p>
          </div>
          
          {showNavigation && (
            <nav className="flex gap-2">
              <NavLink
                to="/charter"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <FileText className="h-4 w-4" />
                <span className="font-medium">Charter</span>
              </NavLink>
              <NavLink
                to="/status-report"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <BarChart3 className="h-4 w-4" />
                <span className="font-medium">Status Report</span>
              </NavLink>
              <NavLink
                to="/star-stories"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <Star className="h-4 w-4" />
                <span className="font-medium">STAR Stories</span>
              </NavLink>
            </nav>
          )}

          {!isHomePage && !showNavigation && (
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="font-medium">Home</span>
              </Button>
            </Link>
          )}

          {isHomePage && (
            <nav className="flex gap-2">
              <NavLink
                to="/charter"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <FileText className="h-4 w-4" />
                <span className="font-medium">Charter</span>
              </NavLink>
              <NavLink
                to="/status-report"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <BarChart3 className="h-4 w-4" />
                <span className="font-medium">Status Report</span>
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
