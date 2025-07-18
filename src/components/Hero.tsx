import React, { useEffect, useState } from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import secureLoginImg from '@/assets/Secure login-amico.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const fullText = "Cybersecurity Engineer | Ethical Hacker";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setSubtitleDone(true);
    }
  }, [currentIndex, fullText]);

  const [nameDisplay, setNameDisplay] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const nameFull = "Raja M";

  useEffect(() => {
    if (nameIndex < nameFull.length) {
      const timer = setTimeout(() => {
        setNameDisplay(prev => prev + nameFull[nameIndex]);
        setNameIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    } else {
      setTypingDone(true);
    }
  }, [nameIndex, nameFull]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-light opacity-90"></div>
      </div>

      {/* Responsive Two-Column Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          {/* Main Title */}
          <div className="fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{' '}
              <span className="relative inline-block align-baseline">
                <span className={`font-bold text-primary${!typingDone ? ' typing-animation' : ''}`}>{nameDisplay}</span>
                <span className="block h-1 w-full bg-primary rounded-full mt-2"></span>
              </span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className="slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="h-16 flex items-center lg:justify-start justify-center">
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-medium text-black${!subtitleDone ? ' typing-animation' : ''}`}>
                {displayText}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="slide-up" style={{ animationDelay: '1s' }}>
            {/* You can add a short description here if needed */}
          </div>

          {/* CTA Buttons */}
          <div className="slide-up flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center" style={{ animationDelay: '1.5s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-cyber"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Responsive Illustration Image */}
        <div className="flex-1 flex justify-center items-center w-full lg:justify-end mt-8 lg:mt-0">
          <img
            src={secureLoginImg}
            alt="Secure Login Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto drop-shadow-xl animate-fade-in"
            style={{ maxHeight: '450px' }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};

export default Hero;