import React from 'react';
import { Shield, Award, Users, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const stats = [
    { icon: Shield, label: 'Years Experience', value: '2+' },
    { icon: Award, label: 'certifications & badges', value: '5' },
    { icon: Users, label: 'Projects Completed', value: '10+' },
    { icon: Code, label: 'Security Tools', value: '25+' },
  ];

  

  return (
    <section id="about" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient-cyber">Me</span>
          </h2>
          
          <p className="text-xl text-black max-w-2xl mx-auto mt-8">
            A passionate Cybersecurity Engineer from Chennai, IND
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed text-justify">
                I'm a cybersecurity enthusiast with a passion for specializing in ethical hacking and As a security-focused developer, I thrive on crafting innovative solutions to tackle cybersecurity challenges. I actively seek opportunities to contribute to groundbreaking projects that redefine security boundaries and make a positive impact. My constant quest for knowledge keeps me at the forefront of cutting-edge cybersecurity technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Certifications & badges
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-cyber group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-cyber" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Progress Bars Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Skill 1 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Shield className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">WEB & ANDROID PENTESTING</span>
                  <span className="font-semibold text-black text-xs ml-auto">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-muted" />
              </div>
              {/* Skill 2 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">CLOUD & COMPUTER NETWORKS</span>
                  <span className="font-semibold text-black text-xs ml-auto">70%</span>
                </div>
                <Progress value={70} className="h-2 bg-muted" />
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">LINUX & BASH SCRIPTING</span>
                  <span className="font-semibold text-black text-xs ml-auto">75%</span>
                </div>
                <Progress value={75} className="h-2 bg-muted" />
              </div>
              {/* Skill 7 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">DOCKER & DEVOPS</span>
                  <span className="font-semibold text-black text-xs ml-auto">65%</span>
                </div>
                <Progress value={65} className="h-2 bg-muted" />
              </div>
              {/* Skill 8 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Award className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">SECURITY AUDITING</span>
                  <span className="font-semibold text-black text-xs ml-auto">80%</span>
                </div>
                <Progress value={80} className="h-2 bg-muted" />
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-8">
              {/* Skill 4 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">PYTHON & JAVA PROGRAMMING</span>
                  <span className="font-semibold text-black text-xs ml-auto">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-muted" />
              </div>
              {/* Skill 5 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">MYSQL & MONGO DB</span>
                  <span className="font-semibold text-black text-xs ml-auto">70%</span>
                </div>
                <Progress value={70} className="h-2 bg-muted" />
              </div>
              {/* Skill 6 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">GIT & OPENSOURCE TECHNOLOGIES</span>
                  <span className="font-semibold text-black text-xs ml-auto">50%</span>
                </div>
                <Progress value={50} className="h-2 bg-muted" />
              </div>
              {/* Skill 9 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Users className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">NETWORKING PROTOCOLS</span>
                  <span className="font-semibold text-black text-xs ml-auto">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-muted" />
              </div>
              {/* Skill 10 */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Code className="text-primary h-4 w-4" />
                  <span className="font-semibold text-black text-xs">API SECURITY</span>
                  <span className="font-semibold text-black text-xs ml-auto">55%</span>
                </div>
                <Progress value={55} className="h-2 bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;