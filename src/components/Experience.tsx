import React from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Technical Engineer',
      company: 'Kyndryl India',
      location: 'Chennai,IND',
      duration: '2023 - 2025',
      description: 'Managing Linux, Cloud, Mainframe, and Network operations with a focus on security, vulnerability assessments, and risk mitigation. Collaborating across teams to optimize secure batch workflows, troubleshoot issues, and enhance system resilience.',
      achievements: [
        'Managing Linux, Cloud, and Network-based tasks to ensure system security.',
        'Performing vulnerability assessments and implementing security controls to mitigate risks.',
        'Collaborating with teams to optimize and ensure secure batch processing workflows.',
        'Assisting in threat analysis and security hardening to enhance system resilience.',
        'Actively troubleshoots and resolves batch processing issues, collaborating with cross-functional teams for enhanced operational efficiency.',
      ],
      technologies: ['Cloud(AWS,Azure)', 'Linux', 'Networking', 'Mainframe', 'Servicenow', 'BMC', 'Security Tools'],
    },
    
  ];
  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'SRM Institute of Science and Technology, Chennai, India',
      location: 'Chennai, IND',
      duration: '2020 - 2023',
      achievements: [
        'An undergraduate program that deals with the subjects and topics related to computer science, computer application, and its services. The main aim of this program is to create quality professionals and research fellows who can work in every sector of the world by implementing the technology of computer systems and software.',
        'Relevant Course work: Java , C , SQL , Advanced Java , Angular , Mongodb , Cloud Computing Operating Systems and Software Development.',
      ],
    },
    {
      degree: 'High School',
      institution: 'Santhome HSS, Chennai, India',
      location: 'Chennai, IND',
      duration: '2018 - 2020',
      achievements: [
        'Completed my High School with Major in Computer Science , Maths , Physics and Chemistry..',
      ],
    },
  ];

  
    // Add more education entries as needed

  const certifications = [
    { name: 'CISSP', issuer: 'ISC2', year: '2023', status: 'Current', link: '#' },
    { name: 'CEH', issuer: 'EC-Council', year: '2022', status: 'Current', link: '#' },
    { name: 'GSEC', issuer: 'SANS', year: '2021', status: 'Current', link: '#' },
    { name: 'CISM', issuer: 'ISACA', year: '2023', status: 'Current', link: '#' },
    { name: 'Security+', issuer: 'CompTIA', year: '2019', status: 'Current', link: '#' },
    { name: 'AWS Security', issuer: 'Amazon', year: '2022', status: 'Current', link: '#' },
  ];

  


  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient-cyber">Experience</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto mt-8">
            A journey through cybersecurity roles that have shaped my expertise and passion for protecting digital assets.
          </p>
        </div>

        {/* Experience Timeline */}
        <h3 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center justify-center gap-2">
          <Award className="h-7 w-7 text-primary transition-transform duration-200" />
          Work Experience
        </h3>
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-cyber group hover:scale-105 hover:shadow-lg transition-transform duration-200">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-cyber">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-black">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{exp.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-primary text-white border-primary transition-colors duration-200 hover:bg-white hover:text-primary hover:border-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center justify-center gap-2">
          <Award className="h-7 w-7 text-primary transition-transform duration-200" />
          Education
        </h3>
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-cyber group hover:scale-105 hover:shadow-lg transition-transform duration-200">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-cyber">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg text-primary font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-black">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Certifications & <span className="text-gradient-cyber">Credentials</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-cyber group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-cyber" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">Earned: {cert.year}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      {cert.status}
                    </Badge>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-1 rounded hover:bg-primary/10 transition"
                      aria-label={`View ${cert.name} certificate`}
                    >
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </a>
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

export default Experience;