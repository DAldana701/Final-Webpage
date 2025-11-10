import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { ProgressBar } from "@/components/ProgressBar";
import { ProjectHeader } from "@/components/ProjectHeader";
import { TrendingUp, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const StatusReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProjectHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        {/* Executive Summary */}
        <Card className="shadow-md">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg">
            <CardTitle className="text-3xl">Project Status Report</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Week of November 4-10, 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-success/5 border border-success/20 rounded-lg">
                <div className="text-3xl font-bold text-success mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </div>
              <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">12/15</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="text-center p-4 bg-warning/5 border border-warning/20 rounded-lg">
                <div className="text-3xl font-bold text-warning mb-1">3</div>
                <div className="text-sm text-muted-foreground">Active Risks</div>
              </div>
              <div className="text-center p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-1">15</div>
                <div className="text-sm text-muted-foreground">Days Remaining</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Timeline Status</span>
                <StatusBadge status="on-track" />
              </div>
              <ProgressBar progress={85} variant="success" />
              <p className="text-xs text-muted-foreground mt-2">
                Project is progressing according to schedule. All major milestones achieved on time.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Budget
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Cost Status</span>
                <StatusBadge status="on-track" />
              </div>
              <ProgressBar progress={72} variant="primary" />
              <p className="text-xs text-muted-foreground mt-2">
                Budget utilization is healthy. Currently at 72% with 85% project completion.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-warning" />
                Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Quality Status</span>
                <StatusBadge status="at-risk" />
              </div>
              <ProgressBar progress={78} variant="warning" />
              <p className="text-xs text-muted-foreground mt-2">
                Minor quality concerns identified. Action items created to address before next phase.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Milestones */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Major Milestones</CardTitle>
            <CardDescription>Key deliverables and their current status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-8 w-8 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Requirements Gathering</h4>
                    <p className="text-sm text-muted-foreground">Completed on Feb 28, 2025</p>
                  </div>
                </div>
                <StatusBadge status="completed" />
              </div>

              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-8 w-8 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">System Design</h4>
                    <p className="text-sm text-muted-foreground">Completed on Mar 31, 2025</p>
                  </div>
                </div>
                <StatusBadge status="completed" />
              </div>

              <div className="flex items-center justify-between p-4 bg-primary/5 border border-primary rounded-lg">
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 animate-pulse" />
                  <div>
                    <h4 className="font-semibold">Development Phase</h4>
                    <p className="text-sm text-muted-foreground">In progress - 85% complete</p>
                  </div>
                </div>
                <StatusBadge status="on-track" />
              </div>

              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg opacity-60">
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Testing & QA</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for Nov 25, 2025</p>
                  </div>
                </div>
                <StatusBadge status="on-track" />
              </div>

              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg opacity-60">
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Deployment</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for Jun 30, 2025</p>
                  </div>
                </div>
                <StatusBadge status="on-track" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issues & Risks */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Active Issues
              </CardTitle>
              <CardDescription>Current blockers and challenges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">API Integration Delay</span>
                  <span className="text-xs px-2 py-1 bg-destructive text-destructive-foreground rounded">High</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Third-party API documentation incomplete, causing 2-day delay in integration work.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Action:</span> Escalated to vendor, temporary mock service implemented
                </div>
              </div>

              <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">Team Member Availability</span>
                  <span className="text-xs px-2 py-1 bg-warning text-warning-foreground rounded">Medium</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Lead designer scheduled for other project next week.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Action:</span> Design work prioritized and advanced to this week
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-warning" />
                Risk Register
              </CardTitle>
              <CardDescription>Monitored project risks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">Browser Compatibility</span>
                  <span className="text-xs px-2 py-1 bg-warning text-warning-foreground rounded">Medium</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Legacy browser support may require additional development time.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Mitigation:</span> Early testing scheduled, polyfills identified
                </div>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">Scope Creep</span>
                  <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded">Low</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Stakeholders requesting additional features outside original scope.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Mitigation:</span> Change control process enforced, features logged for Phase 2
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Planned Activities - Next Period</CardTitle>
            <CardDescription>Key activities scheduled for the upcoming week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Complete API Integration</h4>
                  <p className="text-xs text-muted-foreground">Finalize remaining API endpoints and test data flow</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">User Acceptance Testing Prep</h4>
                  <p className="text-xs text-muted-foreground">Prepare test scenarios and user documentation</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Security Audit</h4>
                  <p className="text-xs text-muted-foreground">Conduct comprehensive security review and penetration testing</p>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Performance Optimization</h4>
                  <p className="text-xs text-muted-foreground">Optimize database queries and implement caching strategy</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StatusReport;
