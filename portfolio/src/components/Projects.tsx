import React from 'react';
import { motion } from 'framer-motion';
import { Github, Bot, Cpu, Terminal, ArrowUpRight, Database } from 'lucide-react';
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
    fileName: 'caption_generator.py',
    code: `def process_media(file_path):
    img = Image.open(file_path)
    features = vision_api.analyze(img)
    return nlp.generate(features)

# Output Logs:
[OK] Image parsing complete
[OK] NLP output: "Code with precision."`
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
    fileName: 'server.js',
    code: `app.get("/api/tasks", cache(60), async (req, res) => {
  const tasks = await db.query("SELECT * FROM tasks");
  return res.json(tasks);
});

# Output Logs:
[SQL] Connection successful on port 3306
[OK] GET /api/tasks - 200 OK (72ms)`
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
              <Card className="overflow-hidden border-white/[0.06] bg-background shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:border-primary/30 rounded-2xl">
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
                      <CardDescription className="text-base text-muted-foreground/90 mb-6 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      {/* STAR Details */}
                      <div className="space-y-3.5 border-t border-white/[0.06] pt-5 mb-8">
                        {project.starDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start text-sm leading-relaxed">
                            <span className="font-mono text-primary font-bold min-w-[70px] uppercase text-xs tracking-wider mt-0.5">
                              {detail.label}
                            </span>
                            <span className="text-foreground/90 pl-3 border-l border-white/[0.08]">
                              {detail.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto pt-4">
                      <Button variant="outline" size="sm" className="gap-2 rounded-xl text-sm border-white/[0.08] hover:bg-white/[0.02]" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" /> Code Source
                        </a>
                      </Button>
                      <Button size="sm" className="gap-2 rounded-xl text-sm bg-primary hover:bg-primary/95 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25" asChild>
                        <a href={project.demo}>
                          Live Demo <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* IDE Mockup Preview Panel */}
                  <div className="md:col-span-5 order-1 md:order-2 rounded-xl border border-white/[0.06] bg-[#05050a] flex flex-col justify-start min-h-[260px] overflow-hidden relative shadow-inner text-left font-mono">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/[0.06]">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{project.fileName}</span>
                      <div className="w-10" /> {/* Spacer */}
                    </div>
                    
                    {/* Code Editor Body */}
                    <div className="p-4 overflow-x-auto text-[11px] leading-relaxed text-slate-300 font-mono w-full flex-grow select-none">
                      <pre className="text-left font-mono whitespace-pre">{project.code}</pre>
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
