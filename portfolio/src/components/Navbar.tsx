import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/60 backdrop-blur-md border-b border-border/40 py-3 shadow-xs' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-primary flex items-center gap-2.5 group">
          <span className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-lg font-extrabold group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-md shadow-primary/25">
            P
          </span>
          <span className="hidden sm:inline-block text-foreground font-semibold group-hover:text-primary transition-colors">Dwivedi</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/95 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
