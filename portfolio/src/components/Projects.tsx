import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projectsList = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    tech: 'Python • NLP • Pillow (PIL)',
    title: 'AI Social Media Caption Generator',
    description: 'A desktop application that automates content creation by extracting visual features from images and generating context-aware, platform-optimized captions.',
    starDetails: [
      { label: 'Context', text: 'Content managers lack fast tools to generate high-quality, metadata-rich copy matched to visual assets.' },
      { label: 'Action', text: 'Engineered a Python pipeline using PIL for image processing, structured GPT prompt chains, and designed a custom GUI.' },
      { label: 'Result', text: 'Accelerated caption generation workflows by 80%, providing zero-config local operations and clean exports.' }
    ],
    github: 'https://github.com/priyanshudwivedi029-gif/social-media-caption-generator',
    demo: '#',
    mockupIcon: <Terminal className="w-16 h-16 text-muted-foreground opacity-40 animate-pulse" />,
    mockupText: 'GUI Engine Active'
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    tech: 'React • Node.js • Express • MySQL',
    title: 'Distributed Task Gateway API',
    description: 'A robust full-stack project manager executing structured RESTful endpoints with sub-100ms response latencies.',
    starDetails: [
      { label: 'Context', text: 'Standard project planners suffer from heavy payloads and slow queries on relational tables.' },
      { label: 'Action', text: 'Configured indexing on foreign keys in MySQL, built custom authorization middleware, and built a React dashboard.' },
      { label: 'Result', text: 'Improved query performance and load time, dropping API endpoint latency by 35% via index caching.' }
    ],
    github: 'https://github.com/priyanshudwivedi029-gif/task-gateway-api',
    demo: '#',
    mockupIcon: <Database className="w-16 h-16 text-muted-foreground opacity-40" />,
    mockupText: 'MySQL Connection: Connected'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-card relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">03. Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">Projects that prove it.</h3>
        </motion.div>

        <div className="space-y-12">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden border-border/80 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 rounded-2xl">
                <div className="grid md:grid-cols-12 gap-8 p-6 md:p-8">
                  
                  {/* Copy Details */}
                  <div className="md:col-span-7 flex flex-col justify-between text-left order-2 md:order-1">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase mb-3.5">
                        {project.icon}
                        <span>{project.tech}</span>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-extrabold mb-4 hover:text-primary transition-colors flex items-center gap-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      {/* STAR Details */}
                      <div className="space-y-3.5 border-t border-border/60 pt-5 mb-8">
                        {project.starDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start text-sm leading-relaxed">
                            <span className="font-mono text-primary font-bold min-w-[70px] uppercase text-xs tracking-wider mt-0.5">
                              {detail.label}
                            </span>
                            <span className="text-foreground/90 pl-3 border-l border-border/60">
                              {detail.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto pt-4">
                      <Button variant="outline" size="sm" className="gap-2 rounded-lg text-sm border-border hover:border-primary/40" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" /> Code Source
                        </a>
                      </Button>
                      <Button size="sm" className="gap-2 rounded-lg text-sm" asChild>
                        <a href={project.demo}>
                          Live Demo <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Mockup Preview Panel */}
                  <div className="md:col-span-5 order-1 md:order-2 bg-secondary/30 rounded-xl border border-border/70 flex flex-col items-center justify-center min-h-[260px] overflow-hidden relative group p-6">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-0" />
                    <div className="relative z-10 text-center flex flex-col items-center justify-center">
                      <div className="p-4 rounded-full bg-background/80 shadow-md border border-border/60 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {project.mockupIcon}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase bg-background/50 px-3 py-1 rounded border border-border/50">
                        {project.mockupText}
                      </span>
                    </div>
                  </div>
                  
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
