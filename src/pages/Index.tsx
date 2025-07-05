import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Cpu, Zap, Wifi, Database, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProfileImage from '@/components/ProfileImage';

const Index = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = {
    programming: ['C', 'Python', 'Java', 'HTML', 'CSS', 'Verilog'],
    tools: ['MATLAB', 'Keil (Embedded C)', 'MySQL', 'Xilinx Vivado', 'VMware'],
    soft: ['Communication', 'Leadership', 'Project Management', 'Time Management']
  };

  const projects = [
    {
      title: 'Satellite Image Resolution using DWT',
      description: 'Advanced image processing technique using Discrete Wavelet Transform for satellite imagery enhancement',
      tech: ['MATLAB', 'Image Processing', 'DWT'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'
    },
    {
      title: 'IoT Weather Reporting System',
      description: 'Real-time weather monitoring system using NodeMCU and DHT11 sensor with cloud connectivity',
      tech: ['NodeMCU', 'DHT11', 'IoT', 'Cloud'],
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop'
    },
    {
      title: 'Alcohol Detection & Engine Locking',
      description: 'Safety system using MQ-3 sensor and Arduino UNO to prevent drunk driving',
      tech: ['Arduino UNO', 'MQ-3', 'Embedded C'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop'
    },
    {
      title: 'CRM System in Java',
      description: 'Consumer Relationship Management system with comprehensive customer data handling',
      tech: ['Java', 'MySQL', 'GUI'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop'
    },
    {
      title: 'Servomotor Control using IC 555',
      description: 'Precision motor control system using 555 timer IC for automated positioning',
      tech: ['555 Timer', 'Electronics', 'Control Systems'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'
    },
    {
      title: 'Swiggy Frontend Clone',
      description: 'Responsive web application replicating food delivery platform interface',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop'
    }
  ];

  const certifications = [
    { name: 'Java Programming (NPTEL)', icon: <Code className="w-6 h-6" /> },
    { name: 'Cloud Computing (VIHAVE)', icon: <Globe className="w-6 h-6" /> },
    { name: 'Web Development Frontend (TECHNEXA)', icon: <Globe className="w-6 h-6" /> },
    { name: 'AI & Deep Learning (NSIC)', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Prompt Engineering (Simplilearn)', icon: <Zap className="w-6 h-6" /> },
    { name: 'PCB Simulation (Simplilearn)', icon: <Wifi className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-orbitron font-bold text-xl gradient-text">
              PHANI KRISHNA
            </div>
            <div className="hidden md:flex space-x-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-exo transition-all duration-300 hover:text-neon-blue ${
                    activeSection === item.toLowerCase() ? 'text-neon-blue neon-text' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        
        {/* Animated Waveform */}
        <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center space-x-2 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`waveform-bar bg-gradient-to-t from-neon-blue to-neon-green w-3 rounded-t`}
              style={{ 
                height: `${Math.random() * 100 + 20}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="font-orbitron font-black text-4xl md:text-7xl mb-6 gradient-text animate-pulse-neon">
            KALLEPALLI PHANI KRISHNA
          </h1>
          <div className="font-exo text-xl md:text-2xl mb-8 text-gray-300">
            <span className="inline-block border-r-2 border-neon-blue animate-typewriter overflow-hidden whitespace-nowrap">
              Innovating with Circuits & Code
            </span>
          </div>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Electronics & Communication Engineer | VLSI Design | Embedded Systems | Telecommunication
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-green text-black font-bold px-8 py-3 rounded-lg neon-glow hover:scale-105 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black font-bold px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button 
              variant="ghost" 
              className="text-neon-cyan hover:text-white hover:bg-neon-cyan/20 font-bold px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a B.Tech graduate in Electronics & Communication Engineering with a strong passion for 
                <span className="text-neon-blue font-semibold"> VLSI design</span>, 
                <span className="text-neon-green font-semibold"> Embedded Systems</span>, and 
                <span className="text-neon-magenta font-semibold"> Telecommunication</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With skills ranging from PCB design and MATLAB to full-stack web development, I aim to innovate in 
                remote sensing, semiconductors, and AI applications in electronics.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue">VLSI Design</Badge>
                <Badge className="bg-neon-green/20 text-neon-green border-neon-green">Embedded Systems</Badge>
                <Badge className="bg-neon-magenta/20 text-neon-magenta border-neon-magenta">IoT</Badge>
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">PCB Design</Badge>
              </div>
            </div>
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card neon-border">
              <CardHeader>
                <CardTitle className="text-neon-blue font-orbitron">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} className="bg-neon-blue/20 text-neon-blue border-neon-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-border">
              <CardHeader>
                <CardTitle className="text-neon-green font-orbitron">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} className="bg-neon-green/20 text-neon-green border-neon-green">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card neon-border">
              <CardHeader>
                <CardTitle className="text-neon-magenta font-orbitron">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} className="bg-neon-magenta/20 text-neon-magenta border-neon-magenta">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="glass-card neon-border group hover:neon-glow transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white font-orbitron text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-neon-cyan border-neon-cyan">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-neon-blue hover:text-white hover:bg-neon-blue/20 w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Certifications & Training
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className={`glass-card neon-border hover:neon-glow transition-all duration-300 animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="text-neon-blue">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{cert.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-16 gradient-text">
            Resume
          </h2>
          <div className="glass-card neon-border p-8 rounded-xl">
            <p className="text-xl text-gray-300 mb-8">
              Download my complete resume to learn more about my experience and qualifications.
            </p>
            <Button className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold px-8 py-4 text-lg rounded-lg neon-glow hover:scale-105 transition-all duration-300">
              <Download className="w-6 h-6 mr-3" />
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-orbitron text-neon-blue mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-neon-green" />
                  <span className="text-gray-300">kphanikrishna27@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-neon-blue" />
                  <span className="text-gray-300">+91 9491077343</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="w-6 h-6 text-neon-magenta" />
                  <a href="https://github.com/PHANI-27" className="text-gray-300 hover:text-neon-magenta transition-colors">
                    github.com/PHANI-27
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-neon-cyan" />
                  <a href="#" className="text-gray-300 hover:text-neon-cyan transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <Card className="glass-card neon-border">
              <CardHeader>
                <CardTitle className="text-neon-blue font-orbitron">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/50 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                    required
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-neon-magenta to-neon-purple text-white font-bold py-3 rounded-lg neon-glow hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-orbitron text-xl gradient-text mb-4 md:mb-0">
              PHANI KRISHNA
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://github.com/PHANI-27" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:kphanikrishna27@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Phani Krishna | Made with 💡 in Tech
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
