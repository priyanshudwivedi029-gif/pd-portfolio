import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiGithub } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import profileImage from '@/assets/profile.jpg';

export default function Hero() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Downloading",
      description: "Priyanshu's professional resume will begin downloading shortly.",
    });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden bg-background bg-dot-grid">
      {/* Visual background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 max-w-2xl text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Internships & Opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
            Engineering software <br/>
            <span className="text-gradient">with precision.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Hi, I'm <strong className="text-foreground font-semibold">Priyanshu Dwivedi</strong>. A Computer Science & Engineering student at AKTU. I specialize in building scalable web applications, optimizing databases, and structuring clean backend logic. I combine engineering discipline with a collaborative sports captain mindset to build products that deliver impact.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button size="lg" className="h-13 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 rounded-xl" asChild>
              <a href="#projects">
                Explore Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base rounded-xl" onClick={handleDownload}>
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <a 
              href="https://github.com/priyanshudwivedi029-gif" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:scale-110 transition-all p-2 -m-2"
            >
              <SiGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/priyanshudwivedi029" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:scale-110 transition-all p-2 -m-2"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:priyanshudwivedi029@gmail.com" 
              className="hover:text-primary hover:scale-110 transition-all p-2 -m-2"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative aspect-[3/4] w-full max-w-[340px] group">
            {/* Ambient Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-500" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border bg-card shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-primary/40">
              <img 
                src={profileImage} 
                alt="Priyanshu Dwivedi Profile" 
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            
            {/* Decorative back layer */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 transition-all duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
