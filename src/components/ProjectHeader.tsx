import { NavLink } from "./NavLink";
import { FileText, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export const ProjectHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 transition-all duration-300" style={{ paddingTop: isScrolled ? '0.5rem' : '1rem', paddingBottom: isScrolled ? '0.5rem' : '1rem' }}>
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
            <h1 className="text-2xl font-bold text-foreground">Project Management Dashboard</h1>
            <p className="text-sm text-muted-foreground">Professional Documentation System</p>
          </div>
          <nav className={`flex gap-2 transition-all duration-300 ${isScrolled ? 'ml-auto' : ''}`}>
            <NavLink
              to="/"
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
        </div>
      </div>
    </header>
  );
};
