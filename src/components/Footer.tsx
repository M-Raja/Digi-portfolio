import React from 'react';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/M-Raja', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/m-raja-/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:raja.madhavann@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-light border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient-cyber">M Raja</span>
            </div>
            <p className="text-black max-w-md mb-6">
              Cybersecurity Engineer passionate about protecting digital infrastructure and staying ahead of evolving threats.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-cyber"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-black hover:text-primary transition-cyber text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <span className="block text-foreground">
                <span role="img" aria-label="email">📧</span> <a href="mailto:raja.madhavann@gmail.com" className="text-primary hover:underline">raja.madhavann@gmail.com</a>
              </span>
              <span className="block text-foreground">
                <span role="img" aria-label="pin">📍</span> Chennai, India
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section - full width */}
      <div className="w-full bg-blue-600 py-6 mt-4">
        <p className="text-center text-white/80 text-sm">
          © {currentYear} M Raja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;