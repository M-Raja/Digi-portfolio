import React from 'react';
import { ExternalLink, Github, Shield, Zap, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-3.png';
import project2 from '@/assets/project-4.png';
import project3 from '@/assets/project-8.png';

const Projects = () => {
  const projects = [
    {
      title: 'Advanced Penetration Testing Framework',
      description: 'Developed a comprehensive automated penetration testing framework that integrates multiple security tools and provides detailed vulnerability reports with remediation recommendations.',
      image: project1,
      status: 'Completed',
      category: 'Security Testing',
      technologies: ['Python', 'Nmap', 'Metasploit', 'Burp Suite', 'Docker', 'FastAPI'],
      features: [
        'Automated vulnerability scanning',
        'Custom exploit development',
        'Detailed reporting system',
        'Integration with CI/CD pipelines',
      ],
      github: 'https://github.com/mraja/pentest-framework',
      demo: 'https://pentest-demo.mraja.dev',
      icon: Shield,
    },
    {
      title: 'Security Audit Dashboard',
      description: 'Built a real-time security monitoring dashboard that aggregates data from multiple security tools and provides actionable insights for security teams.',
      image: project2,
      status: 'Ongoing',
      category: 'Security Monitoring',
      technologies: ['React', 'Node.js', 'MongoDB', 'D3.js', 'WebSocket', 'Redis'],
      features: [
        'Real-time threat visualization',
        'Risk assessment metrics',
        'Automated alert system',
        'Compliance reporting',
      ],
      github: 'https://github.com/mraja/security-dashboard',
      demo: 'https://security-dashboard.mraja.dev',
      icon: Zap,
    },
    {
      title: 'Threat Intelligence Platform',
      description: 'Created a threat intelligence platform that collects, analyzes, and correlates threat data from multiple sources to provide early warning capabilities.',
      image: project3,
      status: 'Completed',
      category: 'Threat Intelligence',
      technologies: ['Python', 'Elasticsearch', 'Kibana', 'TensorFlow', 'Apache Kafka', 'PostgreSQL'],
      features: [
        'Multi-source threat feeds',
        'ML-powered threat detection',
        'IOC correlation engine',
        'Automated threat hunting',
      ],
      github: 'https://github.com/mraja/threat-intel',
      demo: 'https://threat-intel.mraja.dev',
      icon: Search,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Ongoing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient-cyber">Projects</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto mt-0">
            Explore some of my key cybersecurity projects that demonstrate expertise in various security domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border group overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-200 focus:outline-none focus:ring-0 active:outline-none">
              <div className="relative overflow-hidden p-4 border border-border rounded-lg mb-4 bg-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-cyber rounded-md"
                />
              </div>
              <CardContent>
                <CardTitle className="text-lg font-bold text-foreground mb-2 mt-4">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      className="px-3 py-1 text-xs bg-primary text-white border-primary transition-colors duration-200 hover:bg-white hover:text-primary hover:border-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  {project.status === 'Completed' ? (
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md font-medium text-sm">Completed</span>
                  ) : project.status === 'Ongoing' ? (
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-md font-medium text-sm">Ongoing</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-md font-medium text-sm">{project.status}</span>
                  )}
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium flex items-center gap-1 hover:underline"
                  >
                    View <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/M-Raja?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-md px-4 py-2 text-base transition-cyber"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;