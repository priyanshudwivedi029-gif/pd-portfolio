import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">01. About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">The builder behind the code.</h3>
          
          <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
            <p className="mb-6">
              I am a Computer Science and Engineering student (B.Tech, class of 2027) with a deep passion for building things that matter. My foundation is built on solid engineering principles—Java, Data Structures and Algorithms, and Object-Oriented Programming—but my focus is always on the end product.
            </p>
            <p className="mb-6">
              I have hands-on experience crafting full-stack web applications using modern tools like React, JavaScript, HTML, and CSS, backed by robust database architectures in MySQL and MongoDB. I don't just write code; I architect scalable solutions that are efficient and maintainable.
            </p>
            <p>
              When I'm not studying or coding, you'll likely find me on the football field or participating in sports competitions. I believe the teamwork, leadership, and discipline learned in competitive sports directly translate to how I collaborate on engineering teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
