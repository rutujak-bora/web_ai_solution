import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Globe, href: 'https://rutujak-bora.github.io/Portfolio/', label: 'Portfolio' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rutuja-kawade-717865249?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rutujak-bora', label: 'GitHub' },
    { icon: Mail, href: 'mailto:kawadeu@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Rutuja Kawade
              </h3>
              <p className="text-muted-foreground text-sm">
                Certified Scrum Master specializing in Agile project coordination,
                ERP implementation, and product operations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                </li>
                <li>
                  <a href="https://rutujak-bora.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Portfolio</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">Services</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <social.icon className="h-5 w-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Rutuja Kawade. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
