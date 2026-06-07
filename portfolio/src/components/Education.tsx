import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    period: "2023 – 2027",
    score: "CGPA: 6.88 / 10",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Software Engineering"]
  },
  {
    degree: "Senior Secondary School (Class XII)",
    institution: "Rani LaxmiBai Memorial School, Lucknow",
    period: "2021 – 2023",
    score: "Percentage: 62.8%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science (Python)"]
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Rani LaxmiBai Memorial School, Lucknow",
    period: "2019 – 2021",
    score: "Percentage: 82.5%",
    coursework: ["General Sciences", "Mathematics", "Social Sciences", "Information Technology"]
  }
];

const certifications = [
  {
    title: "Python Full Stack Development",
    issuer: "SRDT Solutions",
    detail: "Comprehensive training in building web services, managing server routes, and setting up relational databases."
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    detail: "Completed simulated technology consulting tasks, analyzing client requirements and designing tech-driven solutions."
  }
];

const leadershipActivities = [
  {
    title: "AKTU Zonal Football Competitor",
    desc: "Competed in high-level zonal sports meets. Developed strict self-discipline, resilience under match pressure, and collaborative playbook coordination."
  },
  {
    title: "Lucknow District League Football",
    desc: "Played in organized league tournaments, cultivating high-speed situational decision-making and seamless team alignment."
  },
  {
    title: "School Sports Captain",
    desc: "Elected to lead and coordinate sports events for 500+ students. Managed team selection, scheduled practices, and resolved conflicts under tight timelines."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">04. Background</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">Education & Leadership.</h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Education Timeline */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h4 className="text-2xl font-bold text-foreground">Education</h4>
            </div>
            
            <div className="space-y-8 relative pl-6 border-l-2 border-border/80">
              {educationData.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Pulse Glow Ring */}
                  <div className="absolute -left-[32px] top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="absolute w-2 h-2 rounded-full bg-background scale-75" />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-30" />
                  </div>
                  
                  <div className="p-5 rounded-2xl glass-panel border border-white/[0.05] hover:border-primary/25 transition-colors shadow-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full">{item.period}</span>
                      <span className="text-xs font-semibold text-muted-foreground bg-white/[0.04] px-2.5 py-1 rounded-full">{item.score}</span>
                    </div>
                    <h5 className="font-bold text-foreground text-lg mb-1">{item.degree}</h5>
                    <p className="text-sm text-muted-foreground mb-4">{item.institution}</p>
                    
                    {/* Coursework list */}
                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.06]">
                      {item.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="text-[11px] font-medium text-foreground/80 bg-white/[0.04] border border-white/[0.05] px-2 py-0.5 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications and Leadership */}
          <div className="lg:col-span-6 space-y-12 text-left">
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-bold text-foreground">Certifications</h4>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-5 rounded-2xl glass-panel border border-white/[0.05] hover-glow-card shadow-2xl relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                    <h5 className="font-bold text-foreground text-base mb-1.5 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary shrink-0" />
                      {cert.title}
                    </h5>
                    <div className="text-xs font-semibold text-primary/80 mb-2.5 font-mono">{cert.issuer}</div>
                    <p className="text-xs text-muted-foreground/85 leading-relaxed">{cert.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership & Synergy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-bold text-foreground">Leadership & Collaboration</h4>
              </div>
              <div className="space-y-4">
                {leadershipActivities.map((act, idx) => (
                  <div key={idx} className="p-5 rounded-2xl glass-panel border border-white/[0.05] hover-glow-card shadow-2xl flex gap-4 group">
                    <span className="text-primary font-mono text-sm font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">0{idx + 1}.</span>
                    <div>
                      <h5 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">{act.title}</h5>
                      <p className="text-xs text-muted-foreground/85 leading-relaxed">{act.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
