import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Award, BookOpen } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "OOP & DSA Base",
      desc: "Strong core logic using Java, Algorithms, and structured programming."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Full-Stack Dev",
      desc: "Building clean UI in React, integrated with Node.js and SQL/NoSQL databases."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Team Captaincy",
      desc: "AKTU sports competitor, channeling leadership and team synergy."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "B.Tech CSE 2027",
      desc: "Computer Science & Engineering student at APJAKTU, Lucknow."
    }
  ];

  return (
    <section id="about" className="py-28 bg-card relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">01. About Me</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">The engineer behind the execution.</h3>
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-background border border-border/80 shadow-xs hover-glow-card flex flex-col items-start text-left"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">{stat.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Copy Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center text-left prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed"
          >
            <p className="mb-6">
              I am a dedicated Computer Science and Engineering student (B.Tech, Class of 2027) with a deep focus on building scalable web software. I value clean code, structural integrity, and solid logic.
            </p>
            <p className="mb-6">
              My core engine runs on **Java, Object-Oriented Programming (OOP), and Data Structures & Algorithms**. I leverage these fundamentals to construct database-backed web architectures using **React, JavaScript, MySQL, and MongoDB**. I focus on performance, database optimization, and intuitive UI layout.
            </p>
            <p>
              Beyond coding, my character has been shaped on the football pitch. Having served as a school sports captain and competed in district leagues and zonal competitions, I understand accountability, focus, and collaboration under pressure. I bring this same drive and team-first mentality to engineering teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
