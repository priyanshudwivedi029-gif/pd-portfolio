import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiGithub } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import abstractImage from '@/assets/hero-abstract.png';

export default function Hero() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume downloading",
      description: "Priyanshu's resume will begin downloading shortly.",
    });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            I code with <br/><span className="text-primary">intention.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Hi, I'm <strong className="text-foreground">Priyanshu Dwivedi</strong>. A software engineer bridging technical sharpness with human ambition. I build fast, scalable, and beautifully crafted applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" onClick={handleDownload}>
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors p-2 -m-2">
              <SiGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors p-2 -m-2">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:priyanshudwivedi029@gmail.com" className="hover:text-primary transition-colors p-2 -m-2">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            {abstractImage && (
              <img 
                src={abstractImage} 
                alt="Abstract technological representation" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
