import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">05. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h3>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <Button size="lg" className="h-14 px-8 text-lg mb-16 shadow-lg shadow-primary/20" asChild>
            <a href="mailto:priyanshudwivedi029@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Say Hello
            </a>
          </Button>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/50 text-left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-semibold text-foreground mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">Lucknow, Uttar Pradesh<br/>India</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Phone className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <a href="tel:+919140432395" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 9140432395</a>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Mail className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <a href="mailto:priyanshudwivedi029@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">priyanshudwivedi029@gmail.com</a>
            </div>
          </div>

          <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              Designed & Built by Priyanshu Dwivedi
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors p-2">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
