import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Code, Database, Layers, Users, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Users,
      title: 'Agile & Scrum',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'Scrum Framework',
        'Sprint Planning & Backlog Tracking',
        'Daily Standups & Retrospectives',
        'Agile Project Coordination',
        'Stakeholder Communication',
      ],
    },
    {
      icon: Code,
      title: 'Tools & Platforms',
      color: 'from-purple-500 to-pink-500',
      skills: ['Jira', 'Odoo ERP', 'Excel & SQL', 'Confluence', 'Git'],
    },
    {
      icon: Layers,
      title: 'Product & Operations',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Product Operations Support',
        'Business Process Improvement',
        'Cross-functional Collaboration',
        'Issue Analysis & Resolution',
        'Workflow Optimization',
      ],
    },
    {
      icon: Database,
      title: 'Technology',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'ERP Systems',
        'CRM Systems',
        'AI-driven Business Applications',
        'Data Analysis & Reporting',
        'Dashboard Creation',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for delivering exceptional Agile and product operations results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      35% Error Reduction
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      Automated Reporting
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      AI-Driven Solutions
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      Cross-Team Coordination
                    </Badge>
                    <Badge variant="secondary" className="text-sm py-1.5 px-3">
                      Process Optimization
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
