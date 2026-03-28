import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Certified Scrum Master',
      description: 'Professional certification in Agile methodologies',
    },
    {
      icon: Briefcase,
      title: '3+ Years Experience',
      description: 'Proven track record in product operations',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: '35% reduction in manual reporting errors',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Always staying ahead with latest practices',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about bridging the gap between business needs and technical solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Certified Scrum Master with 3 years of experience in Agile project coordination, ERP implementation,
                product operations, and data analytics. Experienced in facilitating Scrum ceremonies, sprint planning,
                Jira task tracking, and cross-functional team coordination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Skilled in working with development teams to deliver AI-driven ERP and CRM systems, improve business
                workflows, and support Agile delivery processes. Seeking opportunities to help teams deliver high-quality
                products using Agile methodology.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 flex items-center justify-center">
                <img
                  src="/image/about.jpeg"
                  alt="Rutuja Kawade"
                  className="rounded-xl shadow-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
