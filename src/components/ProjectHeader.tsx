import { NavLink } from "./NavLink";
import { Link, useLocation } from "react-router-dom";
import { FileText, BarChart3, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectHeader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Project Management Dashboard</h1>
            <p className="text-sm text-muted-foreground">Professional Documentation System</p>
          </div>
          
          {!isHomePage && (
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
