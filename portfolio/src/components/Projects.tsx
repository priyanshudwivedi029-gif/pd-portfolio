import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">03. Featured Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Projects that prove it.</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-border bg-background shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-4">
                  <Bot className="w-5 h-5" />
                  <span>Python • NLP • UI Design</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold mb-4">Social Media Caption Generator</CardTitle>
                <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                  A sophisticated Python application that automatically generates creative, context-aware captions for social media posts. It leverages image asset processing and natural language processing (NLP) techniques to analyze visual content and produce highly relevant, engaging text.
                </CardDescription>
                
                <ul className="space-y-2 mb-8 text-sm text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Implemented complex file-handling pipelines to manage image ingestion.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Integrated basic NLP processing to dramatically improve caption relevance.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    Designed an intuitive, clean UI ensuring seamless interaction with the underlying generation engine.
                  </li>
                </ul>

                <div className="flex gap-4 mt-auto">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" /> Source Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" /> View Demo
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2 bg-secondary rounded-lg border border-border flex items-center justify-center min-h-[300px] overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                <div className="text-center p-8">
                  <Bot className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground font-mono text-sm">[AI Generation Interface Mockup]</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
