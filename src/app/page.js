'use client'
import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Terminal, Code, FileText } from 'lucide-react';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('about');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "$ whoami";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
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
    "Python", "C++", "C#", "Go", "Haskell", "JavaScript/TypeScript", "React/Next.js", "Node.js", 
    "SQL", "Docker", "AWS", "Windows Security"
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono text-sm">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal size={16} />
            <span className="text-gray-500">~/portfolio</span>
          </div>
          <nav className="flex space-x-6">
            {['about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`hover:text-green-300 transition-colors ${
                  currentSection === section ? 'text-green-300' : 'text-gray-500'
                }`}
              >
                ./{section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        {/* Terminal Prompt */}
        <div className="mb-12">
          <div className="text-green-500">
            {typedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              _
            </span>
          </div>
          {typedText === fullText && (
            <div className="mt-2 text-white animate-fade-in">
              <div className="mb-2">Ryan Barouki</div>
              <div className="text-gray-400 text-xs">
                Physics PhD • Climber • Coder
              </div>
            </div>
          )}
        </div>

        {/* About Section */}
        {currentSection === 'about' && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-green-300 mb-4 flex items-center">
                <Code size={16} className="mr-2" />
                about.md
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Welcome to my site! This is where I collect my various projects.
                </p>
                <p>
                  I'm currently finishing off my PhD in theoretical physics.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-green-300 mb-3">// skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map((skill, index) => (
                  <div key={skill} className="text-gray-400 text-xs">
                    <span className="text-green-500">[{index + 1}]</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {currentSection === 'projects' && (
          <section className="animate-fade-in">
            <h2 className="text-green-300 mb-6 flex items-center">
              <FileText size={16} className="mr-2" />
              projects.json
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={project.name} className="border border-gray-800 p-4 hover:border-gray-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">{project.name}</h3>
                    <div className="flex space-x-3">
                      {project.github &&
                      <a href={project.github} className="text-gray-500 hover:text-green-400 transition-colors">
                        <Github size={16} />
                      </a>
                      }
                      {project.live &&
                      <a href={project.live} className="text-gray-500 hover:text-green-400 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                      }
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mb-3">{project.description}</p>
                  <div className="flex space-x-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-green-500 text-xs border border-green-900 px-2 py-1">
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
            <h2 className="text-green-300 mb-6 flex items-center">
              <Terminal size={16} className="mr-2" />
              contact.sh
            </h2>
            <div className="space-y-4">
              <div className="text-gray-300">
                <span className="text-green-500">#!/bin/bash</span>
              </div>
              <div className="text-gray-400 text-xs">
                # Feel free to reach out for collaboration or just to say hi
              </div>
              <div className="space-y-3 mt-6">
                <a 
                  href="mailto:ryanbarouki@gmail.com" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Mail size={16} />
                  <span>ryanbarouki@gmail.com</span>
                </a>
                <a 
                  href="https://github.com/ryanbarouki" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Github size={16} />
                  <span>github.com/ryanbarouki</span>
                </a>
              </div>
              <div className="mt-8 text-gray-500 text-xs">
                <span className="text-green-500">$</span> echo "Thanks for stopping by!"
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 p-4 mt-16">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-xs">
          <span className="text-green-500">$</span> MIT License • 2025
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
