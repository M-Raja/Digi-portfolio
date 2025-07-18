import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Github, Linkedin, InstagramIcon, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollToTopButton component
  const ScrollToTopButton = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setVisible(window.scrollY > 200);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return visible ? (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all border border-white/80 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    ) : null;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient-cyber"></span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-8">
                {navItems.map((item) =>
                  item.id === 'blog' ? (
                    <a
                      key={item.id}
                      href="https://medium.com/@raja-m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium transition-cyber hover:text-primary ${
                        activeSection === item.id 
                          ? 'text-primary border-b-2 border-primary' 
                          : 'text-black'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-medium transition-cyber hover:text-primary ${
                        activeSection === item.id 
                          ? 'text-primary border-b-2 border-primary' 
                          : 'text-black'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Social Icons - Right Side */}
            <div className="hidden md:flex items-center space-x-3 ml-4">
              <a href="mailto:raja.madhavann@gmail.com" aria-label="Email" className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                <Mail className="h-5 w-5 text-red-500" />
              </a>
              <a href="https://github.com/M-Raja" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/m-raja-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              </a>
              <a href="https://www.instagram.com/___raja.m__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                <InstagramIcon className="h-5 w-5 text-pink-500" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
                {navItems.map((item) =>
                  item.id === 'blog' ? (
                    <a
                      key={item.id}
                      href="https://medium.com/@raja-m"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-cyber ${
                        activeSection === item.id 
                          ? 'text-primary bg-primary/10' 
                          : 'text-black hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-cyber ${
                        activeSection === item.id 
                          ? 'text-primary bg-primary/10' 
                          : 'text-black hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>
              {/* Divider for separation */}
              <div className="flex justify-center">
                <div className="w-1/2 border-t border-border mt-6 mb-2"></div>
              </div>
              {/* Social Icons - Mobile, under nav */}
              <div className="flex justify-center items-center space-x-3 mb-2">
                <a href="mailto:raja.madhavann@gmail.com" aria-label="Email" className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                  <Mail className="h-5 w-5 text-red-500" />
                </a>
                <a href="https://github.com/M-Raja" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/m-raja-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                </a>
                <a href="https://www.instagram.com/___raja.m__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="rounded-full bg-white p-2 shadow hover:scale-110 hover:shadow-lg transition-transform">
                  <InstagramIcon className="h-5 w-5 text-pink-500" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ScrollToTopButton />
    </>
  );
};

export default Navigation;