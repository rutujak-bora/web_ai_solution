import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'Bora Multicorp LLP',
      location: 'Pune',
      role: 'ERP & Product Operations Analyst',
      period: '2024 – Present',
      current: true,
      responsibilities: [
        'Supported Agile development of ERP and CRM systems by coordinating tasks with product owners, developers, and business teams',
        'Assisted Scrum ceremonies including sprint planning, backlog tracking, and progress monitoring using Jira',
        'Performed data analysis on Amazon marketplace and global B2B business datasets to support operational decisions',
        'Contributed to AI-based software development projects, supporting sprint planning and workflow coordination',
        'Coordinated with Odoo ERP customization team to implement business processes and automation features',
        'Created dashboards and reports using Excel and SQL to improve business visibility',
      ],
      achievement: 'Reduced manual reporting errors by 35% through automated reporting dashboards',
    },
    {
      company: '64 Square LLP',
      location: 'Pune',
      role: 'Big Data / Operations Data Analyst',
      period: '2021 – 2024',
      current: false,
      responsibilities: [
        'Performed data analysis and reporting for large enterprise datasets',
        'Created MIS dashboards and reports using SQL and Excel for business teams',
        'Worked with cross-functional teams to improve data quality and reporting processes',
        'Supported operational analytics and insights for business stakeholders',
      ],
      achievement: null,
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building excellence through hands-on experience in Agile methodologies and product operations
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">{exp.role}</CardTitle>
                        {exp.current && (
                          <Badge className="bg-green-500 hover:bg-green-600">Current</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievement && (
                    <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-primary mb-1">Key Achievement</p>
                          <p className="text-muted-foreground">{exp.achievement}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
