import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'MongoDB', 'Git', 'GitHub']
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'NLP Basics']
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">02. Technical Arsenal</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Tools I use to build.</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border shadow-sm hover:border-primary hover:text-primary transition-colors"
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
