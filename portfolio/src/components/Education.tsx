import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Activity } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    period: "2023 – 2027",
    score: "68.77%"
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Rani LaxmiBai Memorial School",
    period: "2023",
    score: "62.8%"
  },
  {
    degree: "Secondary (X)",
    institution: "Rani LaxmiBai Memorial School",
    period: "2021",
    score: "82.5%"
  }
];

const certifications = [
  "Python Full Stack Development — SRDT",
  "Technology Job Simulation — Deloitte"
];

const extracurriculars = [
  "Participated in AKTU Zonal Sports Competition (focus on teamwork and leadership)",
  "Competed in Lucknow District League Football (high-level competitive matches)",
  "Served as Sports Captain in school (leading and coordinating the sports team)"
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">04. Background</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Education & Experience.</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h4 className="text-2xl font-semibold">Education</h4>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {educationData.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border bg-card shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-sm text-primary">{item.period}</span>
                      <span className="text-xs font-bold bg-secondary px-2 py-1 rounded text-muted-foreground">{item.score}</span>
                    </div>
                    <h5 className="font-bold text-foreground text-lg mb-1">{item.degree}</h5>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certs and Extracurriculars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-semibold">Certifications</h4>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-foreground font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-primary" />
                <h4 className="text-2xl font-semibold">Extracurricular</h4>
              </div>
              <ul className="space-y-4">
                {extracurriculars.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
