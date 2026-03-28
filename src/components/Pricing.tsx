import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹10,000',
      period: '/month',
      description: 'Perfect for startups and small teams',
      features: [
        { text: '5 pages Website', included: true },
        { text: '1 Year Free Domain Name ( .com .in .org )', included: true },
        { text: '1 Year Free Cloud Hosting', included: true },
        { text: 'Dynamic Website ( Premium Design )', included: true },
        { text: 'Lifetime 24/7 Free Hosting Support', included: true },
        { text: 'Unlimited Images & Videos Upload', included: true },
        { text: 'Free SSL Certificates', included: true },
        { text: 'SEO Friendly Website', included: true },
        { text: '100% Responsive Website', included: true },
        { text: 'Live Chat Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Call Button Integration', included: true },
        { text: 'WhatsApp Button Integration', included: true },
        { text: 'Inquiry Form', included: true },
        { text: '1 Year Free Technical Support For Website', included: true },
        { text: 'Annual Renewal For Hosting Rs.4000.', included: true },
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹15,000',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        { text: '12 pages Website', included: true },
        { text: '1 Year Free Domain Name ( .com .in .org )', included: true },
        { text: '1 Year Free Cloud Hosting', included: true },
        { text: 'Dynamic Website ( Premium Design )', included: true },
        { text: 'Lifetime 24/7 Free Hosting Support', included: true },
        { text: 'Unlimited Images & Videos Upload', included: true },
        { text: 'Free SSL Certificates', included: true },
        { text: 'SEO Friendly Website', included: true },
        { text: 'Admin Portal', included: true },
        { text: '100% Responsive Website', included: true },
        { text: 'Live Chat Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Call Button Integration', included: true },
        { text: 'WhatsApp Button Integration', included: true },
        { text: 'Inquiry Form', included: true },
        { text: '1 Year Free Technical Support For Website', included: true },
        { text: 'Admin Access​', included: true },
        { text: 'Google Search Console Setup', included: true },
        { text: 'Woocommece Features', included: true },
        { text: 'Annual Renewal For Hosting Rs.4000.', included: true },

      ],
      buttonText: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom Plan',
      period: '/month',
      description: 'For large-scale implementations',
      features: [
        { text: 'Pages: According to Requirement', included: true },
        { text: '1 Year Free Domain Name ( .com .in .org )', included: true },
        { text: '1 Year Free Cloud Hosting', included: true },
        { text: 'Dynamic Website ( Premium Design )', included: true },
        { text: 'Lifetime 24/7 Free Hosting Support', included: true },
        { text: 'Unlimited Images & Videos Upload', included: true },
        { text: 'Free SSL Certificates', included: true },
        { text: 'SEO Friendly Website', included: true },
        { text: 'Admin Portal', included: true },
        { text: '100% Responsive Website', included: true },
        { text: 'Live Chat Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Call Button Integration', included: true },
        { text: 'WhatsApp Button Integration', included: true },
        { text: 'Inquiry Form', included: true },
        { text: '1 Year Free Technical Support For Website', included: true },
        { text: 'Admin Access​', included: true },
        { text: 'Google Search Console Setup', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Woocommece Features', included: true },
        { text: 'Annual Renewal For Hosting Rs.4000.', included: true },
      ],
      buttonText: 'Contact Us',
      popular: false,
    },
    {
      name: 'Premium Design E-commerce Plan',
      price: '25,000',
      period: '/month',
      description: 'E-Commerce Website implementation',
      features: [
        { text: '30 pages Website', included: true },
        { text: '1 Year Free Domain Name ( .com .in .org )', included: true },
        { text: '20 Product Categories', included: true },
        { text: '30 Product Listing From Our Side', included: true },
        { text: 'Premium Design', included: true },
        { text: 'Dynamic Website ( Premium Design )', included: true },
        { text: 'Lifetime 24/7 Free Hosting Support', included: true },
        { text: 'Unlimited Images & Videos Upload', included: true },
        { text: 'Free SSL Certificates', included: true },
        { text: 'SEO Friendly Website', included: true },
        { text: 'Admin Portal', included: true },
        { text: '100% Responsive Website', included: true },
        { text: 'Live Chat Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Call Button Integration', included: true },
        { text: 'WhatsApp Button Integration', included: true },
        { text: 'Inquiry Form', included: true },
        { text: '1 Year Free Technical Support For Website', included: true },
        { text: 'Admin Access​', included: true },
        { text: 'Google Search Console Setup', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Woocommece Features', included: true },
        { text: 'Ecommece Features', included: true },
        { text: 'Auto Invoice Bill Generater Features', included: true },
        { text: 'Order Notification Features', included: true },
        { text: 'OTP Verification Features', included: true },
        { text: 'Annual Renewal For Hosting Rs.4000.', included: true },
      ],
      buttonText: 'Contact Us',
      popular: false,
    },
    {
      name: 'Multi-vendor Business & E-commerce Plan',
      price: '50,000',
      period: '/month',
      description: 'Multi-vendor Business & E-commerce Website implementation',
      features: [
        { text: '40 pages Website', included: true },
        { text: '1 Year Free Domain Name ( .com .in .org )', included: true },
        { text: '30 Product Categories', included: true },
        { text: '50 Product Listing From Our Side', included: true },
        { text: 'Premium Design', included: true },
        { text: 'Dynamic Website ( Premium Design )', included: true },
        { text: 'Lifetime 24/7 Free Hosting Support', included: true },
        { text: 'Unlimited Images & Videos Upload', included: true },
        { text: 'Free SSL Certificates', included: true },
        { text: 'SEO Friendly Website', included: true },
        { text: 'Admin Portal', included: true },
        { text: '100% Responsive Website', included: true },
        { text: 'Live Chat Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Call Button Integration', included: true },
        { text: 'WhatsApp Button Integration', included: true },
        { text: 'Inquiry Form', included: true },
        { text: '1 Year Free Technical Support For Website', included: true },
        { text: 'Admin Access​', included: true },
        { text: 'Google Search Console Setup', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Woocommece Features', included: true },
        { text: 'Ecommece Features', included: true },
        { text: 'Auto Invoice Bill Generater Features', included: true },
        { text: 'Order Notification Features', included: true },
        { text: 'OTP Verification Features', included: true },
        { text: 'Annual Renewal For Hosting Rs.4000.', included: true },
      ],
      buttonText: 'Contact Us',
      popular: false,
    },
    {
      name: 'Custom Multi-vendor Business & E-commerce Plan',
      price: 'Custom Plan',
      period: '/month',
      description: 'Custom Multi-vendor Business & E-commerce Website implementation',
      features: [
        { text: 'Pages: According to Requirement', included: true },
        { text: '1 Year Free Domain Name ( .com .in .org )', included: true },
        { text: 'Product Categories: According to Requirement', included: true },
        { text: 'Product Listing: According to Requirement', included: true },
        { text: 'Premium Design', included: true },
        { text: 'Dynamic Website ( Premium Design )', included: true },
        { text: 'Lifetime 24/7 Free Hosting Support', included: true },
        { text: 'Unlimited Images & Videos Upload', included: true },
        { text: 'Free SSL Certificates', included: true },
        { text: 'SEO Friendly Website', included: true },
        { text: '100% Responsive Website', included: true },
        { text: 'Live Chat Integration', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Call Button Integration', included: true },
        { text: 'WhatsApp Button Integration', included: true },
        { text: 'Inquiry Form', included: true },
        { text: '1 Year Free Technical Support For Website', included: true },
        { text: 'Admin Access​', included: true },
        { text: 'Google Search Console Setup', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Woocommece Features', included: true },
        { text: 'Ecommece Features', included: true },
        { text: 'Auto Invoice Bill Generater Features', included: true },
        { text: 'Order Notification Features', included: true },
        { text: 'OTP Verification Features', included: true },
        { text: 'Annual Renewal For Hosting Rs.4000.', included: true },
      ],
      buttonText: 'Contact Us',
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple, Transparent
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include my expertise as a Certified Scrum Master.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all hover:shadow-2xl ${plan.popular
                  ? 'border-2 border-primary shadow-xl md:scale-105'
                  : 'border border-border'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-lg">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="rounded-full bg-green-500/10 p-1 mt-0.5">
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-muted p-1 mt-0.5">
                            <X className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : ''
                      }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">💼 Hourly Consulting</h3>
                <p className="text-muted-foreground mb-6">
                  Need flexible support? Book me for hourly consulting sessions for specific challenges or guidance.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">₹2,000</span>
                  <span className="text-muted-foreground text-lg">/hour</span>
                </div>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="w-full">
                  Book a Session
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">🎯 Custom Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Have unique requirements? Let's create a tailored package that perfectly fits your business needs.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-muted-foreground text-lg">pricing</span>
                </div>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="w-full">
                  Contact Me
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Can I switch plans?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept bank transfers, UPI, and all major payment methods. Custom payment plans available for enterprise clients.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is there a contract period?</h4>
                <p className="text-sm text-muted-foreground">
                  Monthly plans are flexible with no long-term commitment. Enterprise plans may include custom contract terms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you offer refunds?</h4>
                <p className="text-sm text-muted-foreground">
                  We offer a 7-day money-back guarantee if you're not satisfied with the service. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All prices are in Indian Rupees (INR). GST applicable as per government regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
