import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Database, Package, TrendingUp, ShoppingCart, Briefcase, Sparkles, Search } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: 'AI Inventory Management System',
      description: 'Developed AI-driven system for demand forecasting and inventory insights',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['AI/ML', 'Python', 'Data Analytics', 'Forecasting'],
      outcomes: [
        'Improved demand prediction accuracy',
        'Reduced inventory holding costs',
        'Automated reorder point calculations',
      ],
    },
    {
      icon: Package,
      title: 'Custom ERP System',
      description: 'Implemented ERP workflows for business operations and reporting automation',
      color: 'from-purple-500 to-pink-500',
      technologies: ['Odoo ERP', 'Python', 'PostgreSQL', 'Business Process'],
      outcomes: [
        'Streamlined business workflows',
        'Automated reporting processes',
        '35% reduction in manual errors',
      ],
    },
    {
      icon: Database,
      title: 'Custom CRM System',
      description: 'Built CRM platform to manage customer workflows and operational reporting',
      color: 'from-orange-500 to-red-500',
      technologies: ['CRM', 'SQL', 'Dashboard Design', 'Analytics'],
      outcomes: [
        'Enhanced customer data management',
        'Improved sales tracking',
        'Real-time operational insights',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce B2C Platform',
      description: 'Developed full-featured online shopping platform with payment integration',
      color: 'from-green-500 to-emerald-500',
      technologies: ['React', 'Node.js', 'Payment Gateway', 'MongoDB'],
      outcomes: [
        'Seamless shopping experience',
        'Secure payment processing',
        'Mobile-responsive design',
      ],
    },
    {
      icon: Briefcase,
      title: 'B2B Business Consultant Portal',
      description: 'Created professional consulting platform for business advisory services',
      color: 'from-indigo-500 to-blue-500',
      technologies: ['Web Development', 'CRM Integration', 'Analytics', 'Scheduling'],
      outcomes: [
        'Streamlined client onboarding',
        'Automated appointment scheduling',
        'Enhanced client communication',
      ],
    },
    {
      icon: Sparkles,
      title: 'Pandit Ji Astrology Platform',
      description: 'Built astrology consultation website with booking and payment system',
      color: 'from-yellow-500 to-orange-500',
      technologies: ['Web Design', 'Booking System', 'Payment Integration', 'Content Management'],
      outcomes: [
        'Online consultation booking',
        'Secure payment processing',
        'Client testimonial showcase',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization Website',
      description: 'Developed SEO-focused website with analytics and performance tracking',
      color: 'from-pink-500 to-rose-500',
      technologies: ['SEO', 'Google Analytics', 'Performance Optimization', 'Content Strategy'],
      outcomes: [
        'Improved search rankings',
        'Enhanced page load speed',
        'Increased organic traffic',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming business challenges into innovative solutions through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <project.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Outcomes:
                    </p>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
