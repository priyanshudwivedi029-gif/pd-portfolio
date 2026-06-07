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
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-background mesh-grid">
      {/* Premium blurred gradient blobs */}
      <div className="absolute top-1/6 left-1/10 w-[450px] h-[450px] rounded-full blur-[120px] -z-10 pointer-events-none glow-blob-1" />
      <div className="absolute bottom-1/5 right-1/10 w-[450px] h-[450px] rounded-full blur-[120px] -z-10 pointer-events-none glow-blob-2" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 max-w-2xl text-left"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] text-primary text-xs font-bold mb-8 tracking-wider uppercase border border-white/[0.08] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Available for Internships & Opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7.5xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.05]">
            Engineering software <br/>
            <span className="text-gradient">with precision.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground/90 mb-10 leading-relaxed max-w-xl">
            Hi, I'm <strong className="text-foreground font-semibold">Priyanshu Dwivedi</strong>. A Computer Science & Engineering student at AKTU. I specialize in building scalable web applications, optimizing databases, and structuring clean backend logic. I combine engineering discipline with a collaborative sports captain mindset to build products that deliver impact.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 rounded-2xl bg-primary hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5" asChild>
              <a href="#projects">
                Explore Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-2xl border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300" onClick={handleDownload}>
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground/80">
            <a 
              href="https://github.com/priyanshudwivedi029-gif" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:scale-115 transition-all p-2 -m-2"
            >
              <SiGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/priyanshudwivedi029" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary hover:scale-115 transition-all p-2 -m-2"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:priyanshudwivedi029@gmail.com" 
              className="hover:text-primary hover:scale-115 transition-all p-2 -m-2"
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
          {/* Outer glow ring */}
          <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-[32px] p-[2px] bg-gradient-to-tr from-primary/60 via-purple-500/40 to-teal-400/50 shadow-2xl shadow-black/60 group">
            
            {/* Soft backdrop blur blur-radial */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-teal-400/10 rounded-[30px] -z-10 blur-xl opacity-80 group-hover:scale-105 transition-all duration-500" />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-card">
              <img 
                src={profileImage} 
                alt="Priyanshu Dwivedi Profile" 
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative offset frames */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-[32px] -z-20 transition-all duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
