import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Database, Compass } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: ['Java', 'Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Layers className="w-5 h-5 text-primary" />,
    skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Databases & Dev Tools',
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Vercel CLI']
  },
  {
    title: 'Engineering Core',
    icon: <Compass className="w-5 h-5 text-primary" />,
    skills: ['Data Structures (DSA)', 'Algorithms', 'OOP Concepts', 'DBMS Principles', 'NLP Basics']
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">02. Technical Arsenal</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">Tools and concepts I use.</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-2xl glass-panel hover-glow-card flex flex-col items-start text-left shadow-2xl relative overflow-hidden group"
            >
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/80 via-purple-500/50 to-teal-400/20 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3.5 w-full mb-5">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="px-3.5 py-1.5 bg-white/[0.02] text-foreground/90 rounded-lg text-xs font-semibold border border-white/[0.04] hover:border-primary/40 hover:text-primary hover:bg-primary/[0.02] hover:shadow-[0_0_15px_-3px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
