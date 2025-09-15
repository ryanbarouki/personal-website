'use client'
import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Terminal, Code, FileText } from 'lucide-react';
import Header from './components/Header';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "$ whoami ";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length - 1) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else if (i === fullText.length - 1) {
        setTimeout(() => setTypedText(fullText), 200);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const projects = [
    {
      name: "HNL Dump",
      description: "Beam dump simulation for heavy neutral leptons (HNLs)",
      tech: ["Python", "Numpy"],
      github: "https://github.com/ryanbarouki/HNL_Dump",
    },
    {
      name: "JaxGPT",
      description: "GPT-2 implemented in Flax/JAX.",
      tech: ["Python", "Numpy", "JAX", "Flax"],
      github: "https://github.com/ryanbarouki/JaxGPT",
    },
    {
      name: "flagle.io",
      description: "A daily flag guessing game.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      live: "https://flagle.io"
    },
    {
      name: "angle.wtf",
      description: "A game where you guess what the angle is.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/teuteuf-games/angle",
      live: "https://angle.wtf"
    },
    {
      name: "WikiLinks",
      description: "It's the Wikipedia game but blind!",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/pla324/linker",
      live: "https://wikilinks.app"
    },
    {
      name: "mapl.life",
      description: "Guess where you are in the world from a redacted map! Are you sensing a theme?",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/ryanbarouki/mapl",
      live: "https://mapl.life"
    },
    {
      name: "ForGitAboutIt",
      description: "A git committer for the forgetful scientist. Winner of CompMotifs: Hack the Sciences Hackathon.",
      tech: ["Python", "HTML", "CSS"],
      github: "https://github.com/Jollywatt/auto-commit",
    },
    {
      name: "Cerebrle",
      description: "Brain games to stretch your mind!",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/ryanbarouki/cerebrle",
      live: "https://cerebrle.netlify.app/"
    },
    {
      name: "TwoThirds",
      description: "A social experiment? A game where players simultaneously select a real number between 0 and 100. The winner of the game is the player who select a number closest to 2/3 the average.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/ryanbarouki/two-thirds",
      live: "https://twothirds.app/"
    },
    {
      name: "lsgo",
      description: "It's 'ls' in Go (pronounced 'lesgoooo') but prettier and with more functionality.",
      tech: ["Go"],
      github: "https://github.com/ryanbarouki/lsgo",
    },
    {
      name: "Lambda2D",
      description: "2D rigid body physics simulation in C++",
      tech: ["C++"],
      github: "https://github.com/ryanbarouki/Lambda2D",
    },
    {
      name: "Treasure Trails",
      description: "An online version of the popular board game Labyrinth",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ryanbarouki/treasure-trails",
    },
    {
      name: "AOC 2024",
      description: "Completed advent of code 2024",
      tech: ["Python"],
      github: "https://github.com/ryanbarouki/advent-of-code-2024",
    },
    {
      name: "AOC 2023",
      description: "Completed advent of code 2023",
      tech: ["Python"],
      github: "https://github.com/ryanbarouki/advent-of-code-2023",
    }
  ];

  const skills = [
    "Python", "C++", "C#", "Go", "Haskell", "JavaScript", "React/Next.js", "Node.js", 
    "SQL", "Docker", "AWS", "Windows Security"
  ];

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] font-mono text-sm flex flex-col justify-between">
      {/* Header */}
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="max-w-4xl mx-auto p-8 flex-1">
        {/* Terminal Prompt */}
        <div className="mb-12">
          <div style={{ color: 'var(--accent-yellow)' }}>
            {typedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              _
            </span>
          </div>
          {typedText === fullText && (
            <div className="mt-2 animate-fade-in" style={{ color: 'var(--foreground)' }}>
              <div className="mb-2">Ryan Barouki</div>
              <div className="text-xs" style={{ color: 'var(--foreground)' }}>
                Physics PhD • Climber • Coder
              </div>
            </div>
          )}
        </div>

        {/* About Section */}
        {currentSection === 'about' && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="mb-4 flex items-center" style={{ color: 'var(--accent-yellow)' }}>
                <Code size={16} className="mr-2" />
                about.md
              </h2>
              <div className="leading-relaxed space-y-4" style={{ color: 'var(--foreground)' }}>
                <p>
                  Welcome to my site! This is where I collect my various projects.
                </p>
                <p>
                  I'm currently finishing off my PhD in theoretical physics.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3" style={{ color: 'var(--accent-orange)' }}>// skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map((skill, index) => (
                  <div key={skill} className="text-xs" style={{ color: 'var(--foreground)' }}>
                    <span style={{ color: 'var(--accent-aqua)' }}>[{index + 1}]</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {currentSection === 'projects' && (
          <section className="animate-fade-in">
            <h2 className="mb-6 flex items-center" style={{ color: 'var(--accent-yellow)' }}>
              <FileText size={16} className="mr-2" />
              projects.json
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={project.name} className="border p-4 transition-colors" style={{ borderColor: 'var(--accent-yellow)' }}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>{project.name}</h3>
                    <div className="flex space-x-3">
                      {project.github &&
                      <a href={project.github} className="transition-colors" style={{ color: 'var(--foreground)' }}>
                        <Github size={16} />
                      </a>
                      }
                      {project.live &&
                      <a href={project.live} className="transition-colors" style={{ color: 'var(--foreground)' }}>
                        <ExternalLink size={16} />
                      </a>
                      }
                    </div>
                  </div>
                  <p className="text-xs mb-3" style={{ color: 'var(--foreground)' }}>{project.description}</p>
                  <div className="flex space-x-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs border px-2 py-1" style={{ color: 'var(--accent-aqua)', borderColor: 'var(--accent-aqua)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <section className="animate-fade-in">
            <h2 className="mb-6 flex items-center" style={{ color: 'var(--accent-yellow)' }}>
              <Terminal size={16} className="mr-2" />
              contact.sh
            </h2>
            <div className="space-y-4">
              <div>
                <span style={{ color: 'var(--accent-orange)' }}>#!/bin/bash</span>
              </div>
              <div className="text-xs" style={{ color: 'var(--foreground)' }}>
                # Feel free to reach out for collaboration or just to say hi
              </div>
              <div className="space-y-3 mt-6">
                <a 
                  href="mailto:ryanbarouki@gmail.com" 
                  className="flex items-center space-x-3 transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Mail size={16} />
                  <span>ryanbarouki@gmail.com</span>
                </a>
                <a 
                  href="https://github.com/ryanbarouki" 
                  className="flex items-center space-x-3 transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Github size={16} />
                  <span>github.com/ryanbarouki</span>
                </a>
              </div>
              <div className="mt-8 text-xs" style={{ color: 'var(--foreground)' }}>
                <span style={{ color: 'var(--accent-yellow)' }}>$</span> echo "Thanks for stopping by!"
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
  <footer 
    className="border-t p-4 w-full bg-[--background]"
    style={{ borderColor: 'var(--accent-yellow)' }}
  >
    <div className="max-w-4xl mx-auto text-center text-xs" style={{ color: 'var(--foreground)' }}>
      <span style={{ color: 'var(--accent-yellow)' }}>$</span> MIT License • 2025
    </div>
  </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
