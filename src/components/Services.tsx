import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, GitBranch, LineChart, Settings, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Agile Project Coordination',
      description: 'Expert facilitation of Scrum ceremonies and sprint management',
      features: [
        'Sprint planning & backlog management',
        'Daily standups & retrospectives',
        'Stakeholder communication',
        'Team velocity tracking',
      ],
      pricing: 'Custom',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      title: 'ERP/CRM Implementation',
      description: 'End-to-end implementation and customization of business systems',
      features: [
        'Requirements gathering',
        'System configuration',
        'Process automation',
        'User training & support',
      ],
      pricing: 'Project-based',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: LineChart,
      title: 'Data Analytics & Reporting',
      description: 'Transform data into actionable business insights',
      features: [
        'Dashboard creation',
        'SQL query optimization',
        'MIS reporting',
        'Data visualization',
      ],
      pricing: 'Hourly/Monthly',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: GitBranch,
      title: 'Product Operations Support',
      description: 'Streamline product development and delivery processes',
      features: [
        'Workflow optimization',
        'Cross-functional coordination',
        'Issue tracking & resolution',
        'Process documentation',
      ],
      pricing: 'Retainer',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services & Pricing</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent, flexible pricing for comprehensive Agile and product operations services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button onClick={scrollToContact} variant="outline" className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution 
                that fits your business needs and budget.
              </p>
              <Button onClick={scrollToContact} size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
