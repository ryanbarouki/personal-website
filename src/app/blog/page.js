'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, FileText, Calendar, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from API route
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[--background] text-[--foreground] font-mono text-sm flex items-center justify-center">
        <div style={{ color: 'var(--accent-yellow)' }}>Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground] font-mono text-sm flex flex-col">
      {/* Header */}
      <header className="border-b p-4" style={{ borderColor: 'var(--accent-yellow)' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 transition-colors" style={{ color: 'var(--foreground)' }}>
              <Terminal size={16} />
              <span style={{ color: 'var(--accent-orange)' }}>~/blog</span>
            </Link>
          </div>
          <nav className="flex flex-row sm:flex-row mt-2 sm:mt-0 space-x-4 sm:space-x-6">
            <Link
              href="/"
              className="transition-colors whitespace-nowrap"
              style={{ color: 'var(--foreground)' }}
            >
              ~/portfolio
            </Link>
            <Link
              href="/blog"
              className="transition-colors whitespace-nowrap"
              style={{ color: 'var(--accent-yellow)' }}
            >
              ~/blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8 flex-1">
        <div className="mb-12">
          <h1 className="text-2xl mb-4" style={{ color: 'var(--accent-yellow)' }}>
            $ cat blog.md
          </h1>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)' }}>
            Welcome to my blog! Where I write things to force me to think clearly.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article 
              key={post.slug} 
              className="border p-6 transition-colors hover:bg-opacity-50"
              style={{ 
                borderColor: 'var(--accent-yellow)',
                backgroundColor: 'transparent'
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="transition-colors"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="flex items-center space-x-2 text-xs" style={{ color: 'var(--accent-aqua)' }}>
                  <Calendar size={12} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--foreground)' }}>
                {post.excerpt}
              </p>
              
              <div className="flex space-x-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs border px-2 py-1" 
                    style={{ 
                      color: 'var(--accent-aqua)', 
                      borderColor: 'var(--accent-aqua)' 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-4">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-xs transition-colors"
                  style={{ color: 'var(--accent-orange)' }}
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
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
    </div>
  );
};

export default Blog;
