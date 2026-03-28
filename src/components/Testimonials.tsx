import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Product Manager',
      company: 'Tech Solutions Inc',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Rutuja\'s expertise in Agile methodologies transformed our product development process. Her ability to coordinate cross-functional teams and maintain clear communication channels was exceptional.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'CTO',
      company: 'Digital Innovations',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The ERP implementation led by Rutuja exceeded our expectations. The automated reporting system she developed reduced our manual errors significantly and improved overall efficiency.',
      rating: 5,
    },
    {
      name: 'Sneha Desai',
      role: 'Operations Director',
      company: 'Global Enterprises',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Working with Rutuja on our CRM project was a game-changer. Her analytical skills and attention to detail ensured we got exactly what we needed to scale our operations.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Analyst',
      company: 'Enterprise Solutions',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Rutuja\'s data analytics expertise helped us uncover insights we didn\'t know existed. Her dashboards are now integral to our decision-making process.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - hear from clients who've experienced the results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="h-8 w-8 text-primary/20 flex-shrink-0" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
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

export default Testimonials;
