import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Database, LayoutTemplate, Briefcase, GraduationCap, Mail, Phone, ExternalLink, ShieldCheck, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter">
            <span className="text-primary">&lt;</span>
            Beerappa
            <span className="text-primary"> /&gt;</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-mono text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">01. About</a>
            <a href="#skills" className="hover:text-primary transition-colors">02. Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">03. Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">04. Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">05. Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
          <div className="absolute inset-0 grid-background pointer-events-none opacity-50"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeIn} className="font-mono text-primary mb-4 text-sm md:text-base">
                System.out.println("Hello, World! My name is");
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
                Beerappa K B.
              </motion.h1>
              
              <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-muted-foreground mb-8">
                I build <span className="code-gradient-text">intelligent systems</span>.
              </motion.h2>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Computer Science engineer (JSS STU '25) specializing in <strong className="text-foreground">Full-Stack Development</strong>, <strong className="text-foreground">AI/ML</strong>, and <strong className="text-foreground">QA Automation</strong>. I architect scalable applications, design robust APIs, and integrate intelligent models into production environments.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Button size="lg" className="font-mono rounded-none border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all group" asChild>
                  <a href="#projects">
                    View_Projects() <Code2 className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="font-mono rounded-none border-muted-foreground/30 hover:border-primary/50 hover:text-primary transition-all" asChild>
                  <a href="#contact">
                    Contact_Me()
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-secondary/30 relative border-y border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold font-mono"><span className="text-primary">01.</span> About Me</h2>
                <div className="h-px bg-border flex-1 max-w-xs"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    I'm a Computer Science graduate with hands-on experience spanning the entire software development lifecycle. My expertise lies in building robust backends with <strong className="text-foreground">.NET Core Web API</strong> and <strong className="text-foreground">PostgreSQL</strong>, coupled with dynamic frontends in <strong className="text-foreground">React (TypeScript)</strong>.
                  </p>
                  <p>
                    I design applications using Clean Architecture, Repository/Factory patterns, and JWT authentication. I've delivered production-grade projects featuring SignalR real-time updates, Entity Framework Core, xUnit testing, and Serilog logging, deployed on Azure via CI/CD pipelines.
                  </p>
                  <p>
                    Beyond traditional web development, I am deeply involved in <strong className="text-foreground">AI/ML Engineering</strong> (LangChain, RAG, Azure OpenAI) and <strong className="text-foreground">QA Automation</strong> (Selenium, PyTest, JMeter), allowing me to build, intelligent, and rigorously tested systems from end to end.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="aspect-square max-w-sm mx-auto relative group">
                    <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-300"></div>
                    <div className="absolute inset-0 bg-secondary/80 border border-border backdrop-blur-sm rounded-sm z-10 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
                      <Code2 className="w-32 h-32 text-muted-foreground/30" />
                      <div className="absolute font-mono text-xs text-primary/50 inset-4 overflow-hidden opacity-50 break-words pointer-events-none">
                        {`interface Engineer {
  name: "Beerappa K B";
  degree: "BE Computer Science";
  university: "JSS STU";
  cgpa: 7.60;
  gradYear: 2025;
  roles: ["Full-Stack", "AI/ML", "QA"];
  isAvailable: true;
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl font-bold font-mono"><span className="text-primary">02.</span> Technical Arsenal</h2>
                <div className="h-px bg-border flex-1 max-w-xs"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCategory title="Languages" icon={<Code2 />} skills={["C#", "JavaScript (ES6+)", "TypeScript", "Python", "Java", "HTML5", "CSS3", "SQL"]} />
                <SkillCategory title="Frontend" icon={<LayoutTemplate />} skills={["React", "Hooks", "Context API", "Redux", "Zustand", "Vite", "Recharts", "Responsive UI"]} />
                <SkillCategory title="Backend & APIs" icon={<Database />} skills={[".NET Core Web API", "ASP.NET", "FastAPI", "Flask", "Django", "REST APIs", "JWT Auth", "SignalR"]} />
                <SkillCategory title="Architecture & OOP" icon={<Terminal />} skills={["Clean Architecture", "Repository Pattern", "Factory Pattern", "Strategy Pattern", "Async Programming"]} />
                <SkillCategory title="Databases & Cloud" icon={<Database />} skills={["PostgreSQL", "MS SQL", "MongoDB", "Redis", "Azure SQL", "Azure DevOps", "Docker", "GitHub Actions"]} />
                <SkillCategory title="AI & Automation" icon={<BrainCircuit />} skills={["LangChain", "RAG", "Azure OpenAI", "Selenium", "PyTest", "xUnit", "JMeter", "Moq"]} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-secondary/20 relative border-y border-border/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold font-mono"><span className="text-primary">03.</span> Featured Work</h2>
              <div className="h-px bg-border flex-1 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Enterprise Multi-Agent AI System"
                description="Multi-agent AI system with HR, Finance, and Support agents using LangChain and Azure OpenAI GPT-4o with RAG, Redis memory, JWT auth, and human-in-the-loop approval workflow."
                tech={["Python", "FastAPI", "LangChain", "Azure OpenAI", "React", "PostgreSQL"]}
              />
              <ProjectCard 
                title="CI/CD Pipeline Monitoring Dashboard"
                description="Architected .NET Core Web API using Factory and Strategy design patterns for modular pipeline stage execution. React TypeScript dashboard with real-time status cards, live logs, and notification system."
                tech={["React", "TypeScript", ".NET Core", "SQL Server", "EF Core", "xUnit"]}
              />
              <ProjectCard 
                title="Project & Task Management System"
                description=".NET Core Web API with JWT-based role access control and SignalR real-time updates. Responsive React Kanban board with drag-and-drop task management, Zustand state, and live comments."
                tech={["React", "TypeScript", ".NET Core", "PostgreSQL", "SignalR"]}
              />
              <ProjectCard 
                title="Smart Livestock Health Monitoring"
                description="Built REST APIs with .NET Core using clean architecture, JWT auth, and rule-based alert detection. React dashboard with real-time health trend charts and context API state management."
                tech={["React", "TypeScript", ".NET Core", "PostgreSQL", "EF Core"]}
              />
              <ProjectCard 
                title="AI Resume Analyzer"
                description="AI-powered resume analyzer matching resumes against job descriptions with match scoring, skill gap analysis, and keyword highlighting using interactive dashboards."
                tech={["React", "Groq LLaMA", "Vite", "Recharts"]}
              />
              <ProjectCard 
                title="QA Test Case Generator Web App"
                description="AI-powered QA tool that auto-generates positive, negative, and edge test cases from user stories using NLP. Integrated Selenium WebDriver for automated test execution with HTML reports."
                tech={["Flask", "Selenium", "NLP", "Python", "CI/CD"]}
              />
              <ProjectCard 
                title="Laboratory Information Management System"
                description="Full-stack LIMS with real-time dashboard, RBAC, CRUD, and AI prediction engine for test outcomes with confidence scores across 15 REST APIs."
                tech={["Python", "Flask", "MongoDB", "JWT", "Scikit-learn"]}
              />
              <ProjectCard 
                title="Selenium Automation Framework"
                description="Industry-level test automation framework using Page Object Model (POM) covering login, cart, and checkout flows with parallel execution. GitHub Actions CI/CD pipeline."
                tech={["Python", "Selenium", "PyTest", "GitHub Actions"]}
              />
              <ProjectCard 
                title="REST API Testing & Performance Analysis"
                description="Comprehensive API testing suite validating endpoints with status code checks and response schema validation. Simulated 50–100 concurrent users using JMeter to analyze throughput and error rates."
                tech={["Python", "Requests", "JMeter", "API Testing"]}
              />
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              
              {/* Experience */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-2xl font-bold font-mono"><span className="text-primary">04.</span> Experience</h2>
                  <div className="h-px bg-border flex-1 max-w-[100px]"></div>
                </div>

                <div className="relative pl-8 border-l border-border space-y-12">
                  <div className="relative">
                    <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[42px] top-1"></div>
                    <h3 className="text-xl font-bold text-foreground">Web Development Intern</h3>
                    <div className="text-primary font-mono text-sm mb-4">OCTANET SERVICES PVT LTD | May 2025 – June 2025</div>
                    <ul className="space-y-3 text-muted-foreground text-sm list-none">
                      <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                        Wrote and optimized MySQL queries for data storage and retrieval, improving query performance by 25% within a 4-member Agile team.
                      </li>
                      <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-primary">
                        Developed responsive web applications using Python, HTML, CSS, and JavaScript, improving UI efficiency by 30%.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Education & Certs */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-2xl font-bold font-mono"><span className="text-primary">05.</span> Education & Certs</h2>
                  <div className="h-px bg-border flex-1 max-w-[100px]"></div>
                </div>

                <div className="space-y-8">
                  <Card className="bg-card/50 border-border/50 backdrop-blur rounded-sm rounded-tr-xl">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">BE. Computer Science & Engineering</CardTitle>
                          <CardDescription className="text-primary font-mono mt-1">JSS Science and Technology University, Mysore</CardDescription>
                        </div>
                        <GraduationCap className="text-muted-foreground w-6 h-6" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground flex justify-between font-mono">
                        <span>Graduated: 2025</span>
                        <span className="text-foreground">CGPA: 7.60 / 10</span>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h4 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">Certifications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 p-3 bg-secondary/20 rounded-sm border border-border/50 hover:border-primary/30 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <div className="text-sm font-medium">Full Stack Web Development Bootcamp</div>
                          <div className="text-xs text-muted-foreground font-mono">Udemy, 2025</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-secondary/20 rounded-sm border border-border/50 hover:border-primary/30 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <div className="text-sm font-medium">Data Analyst</div>
                          <div className="text-xs text-muted-foreground font-mono">Excerpt Technologies PVT LTD, 2025</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-secondary/20 rounded-sm border border-border/50 hover:border-primary/30 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <div className="text-sm font-medium">Data Analytics Job Simulation</div>
                          <div className="text-xs text-muted-foreground font-mono">Deloitte, 2025</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-secondary/30 relative border-t border-border/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="font-mono text-primary mb-4 text-sm tracking-widest">06. What's Next?</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                I'm actively looking for opportunities where I can leverage my full-stack, AI, and QA expertise to build robust software systems. My inbox is always open.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                <a href="mailto:beerappakb03@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors bg-background px-6 py-3 rounded-sm border border-border/50 hover:border-primary/50">
                  <Mail className="w-5 h-5" />
                  <span className="font-mono">beerappakb03@gmail.com</span>
                </a>
                <a href="tel:+916362612931" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors bg-background px-6 py-3 rounded-sm border border-border/50 hover:border-primary/50">
                  <Phone className="w-5 h-5" />
                  <span className="font-mono">+91-6362612931</span>
                </a>
              </div>
              
              <Button size="lg" className="font-mono rounded-none px-10 h-14 text-base" asChild>
                <a href="mailto:beerappakb03@gmail.com">Say Hello</a>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center border-t border-border/30 bg-background">
        <p className="font-mono text-xs text-muted-foreground/60 mb-2">Designed & Built by Beerappa K B</p>
        <div className="flex justify-center gap-4 text-xs font-mono text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <span>|</span>
          <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
        </div>
      </footer>
    </div>
  );
}

function SkillCategory({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) {
  return (
    <Card className="bg-card/50 border-border/50 backdrop-blur rounded-sm hover:border-primary/50 transition-colors group">
      <CardHeader className="pb-3 flex flex-row items-center gap-3 space-y-0">
        <div className="p-2 bg-secondary rounded-sm text-primary group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-base font-mono">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-mono bg-secondary/80 text-muted-foreground rounded-sm border border-border/50 group-hover:border-primary/20 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, tech }: { title: string, description: string, tech: string[] }) {
  return (
    <div className="relative group rounded-sm p-6 bg-card/40 border border-border/50 hover:bg-card/80 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Terminal className="w-5 h-5" />
        </div>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View project">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      
      <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto font-mono text-xs text-muted-foreground/80">
        {tech.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
