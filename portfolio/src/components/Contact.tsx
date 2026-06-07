import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-card border-t border-border/80 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">05. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Let's Connect</h3>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I am actively looking for software engineering internships and junior development opportunities. Whether you want to discuss a project, query my technical background, or simply say hello, feel free to reach out!
          </p>

          <Button size="lg" className="h-14 px-8 text-lg mb-16 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 rounded-xl" asChild>
            <a href="mailto:priyanshudwivedi029@gmail.com">
              <Mail className="mr-2.5 h-5 w-5" /> Let's Collaborate
            </a>
          </Button>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/60 text-left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
              <MapPin className="w-6 h-6 text-primary mb-3.5" />
              <h4 className="font-bold text-foreground mb-1.5">Location</h4>
              <p className="text-muted-foreground text-sm leading-normal">Lucknow, Uttar Pradesh<br/>India</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
              <Phone className="w-6 h-6 text-primary mb-3.5" />
              <h4 className="font-bold text-foreground mb-1.5">Phone Call</h4>
              <a href="tel:+919140432395" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-1.5 font-medium">
                +91 9140432395 <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
              <Mail className="w-6 h-6 text-primary mb-3.5" />
              <h4 className="font-bold text-foreground mb-1.5">Direct Email</h4>
              <a href="mailto:priyanshudwivedi029@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-1.5 font-medium break-all">
                priyanshudwivedi029@gmail.com <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              Designed & Built by Priyanshu Dwivedi
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a 
                href="https://github.com/priyanshudwivedi029-gif" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary hover:scale-110 transition-all p-2"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/priyanshudwivedi029" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary hover:scale-110 transition-all p-2"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
