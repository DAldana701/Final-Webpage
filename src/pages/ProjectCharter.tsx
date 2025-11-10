import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Target, DollarSign, AlertTriangle } from "lucide-react";
import { ProjectHeader } from "@/components/ProjectHeader";

const ProjectCharter = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProjectHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        {/* Project Overview */}
        <Card className="shadow-md">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg">
            <CardTitle className="text-3xl">Project Charter</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Comprehensive Project Definition & Authorization
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This project aims to develop a comprehensive web-based solution that streamlines business operations 
                and enhances user engagement through innovative technology. The initiative will deliver measurable 
                improvements in efficiency, customer satisfaction, and market competitiveness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Objectives</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Increase operational efficiency by 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Improve customer satisfaction scores to 95%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Launch MVP within Q2 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Achieve ROI of 150% within 18 months</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-foreground">Success Criteria</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">On-time delivery within budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">95% stakeholder approval rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Zero critical defects at launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">User adoption rate exceeds 80%</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stakeholders */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Key Stakeholders
            </CardTitle>
            <CardDescription>Project team and decision makers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Project Sponsor</h4>
                  <Badge variant="secondary">Executive</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Sarah Johnson, VP of Operations</p>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Project Manager</h4>
                  <Badge variant="secondary">Lead</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Michael Chen, Senior PM</p>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Technical Lead</h4>
                  <Badge variant="secondary">Engineering</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Emily Rodriguez, Solutions Architect</p>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Business Analyst</h4>
                  <Badge variant="secondary">Strategy</Badge>
                </div>
                <p className="text-sm text-muted-foreground">David Kim, Senior BA</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Timeline */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Start Date</span>
                <span className="text-sm text-muted-foreground">Jan 15, 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">End Date</span>
                <span className="text-sm text-muted-foreground">Jun 30, 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Duration</span>
                <span className="text-sm text-muted-foreground">24 weeks</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="text-sm font-medium">Phase</span>
                <Badge>Planning</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Budget */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-5 w-5 text-primary" />
                Budget
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Budget</span>
                <span className="text-sm text-muted-foreground">$250,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Spent to Date</span>
                <span className="text-sm text-muted-foreground">$45,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Remaining</span>
                <span className="text-sm text-muted-foreground">$205,000</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="text-sm font-medium">Status</span>
                <Badge className="bg-success text-success-foreground">On Budget</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Risks */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Key Risks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-warning/5 border border-warning/20 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Resource Availability</span>
                  <Badge variant="outline" className="text-warning border-warning/40">Medium</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Key developers may be unavailable</p>
              </div>
              
              <div className="p-3 bg-destructive/5 border border-destructive/20 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Technical Complexity</span>
                  <Badge variant="outline" className="text-destructive border-destructive/40">High</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Integration challenges expected</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scope */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Project Scope</CardTitle>
            <CardDescription>Deliverables and boundaries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-success">In Scope</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span className="text-muted-foreground">Web application development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span className="text-muted-foreground">User authentication system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span className="text-muted-foreground">Database design and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span className="text-muted-foreground">API integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-success mt-1">✓</span>
                    <span className="text-muted-foreground">Testing and quality assurance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-destructive">Out of Scope</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Mobile native applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Hardware procurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Legacy system migration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Third-party vendor management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Post-launch marketing campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProjectCharter;
