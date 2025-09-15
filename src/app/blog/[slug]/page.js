import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

async function BlogPost({ params }) {
  const { slug } = params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    console.error('Error loading post:', error);
    post = null;
  }
  
  if (!post) {
    notFound();
  }

    return (
    <div className="min-h-screen font-mono text-sm flex flex-col" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Header */}
      <header className="border-b p-4" style={{ borderColor: 'var(--accent-yellow)' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Terminal size={16} />
            <span style={{ color: 'var(--accent-orange)' }}>~/blog/{post.slug}</span>
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8 flex-1">
        <Link 
          href="/blog"
          className="inline-flex items-center transition-colors hover:opacity-80 mb-8"
          style={{ color: 'var(--accent-blue)' }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'var(--accent-yellow)', 
                      color: 'var(--background)',
                      opacity: 0.9
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="prose prose-gruvbox max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => (
                  <h1 className="text-3xl font-bold mb-6 mt-8" style={{ color: 'var(--accent-yellow)' }}>
                    {children}
                  </h1>
                ),
                h2: ({children}) => (
                  <h2 className="text-2xl font-semibold mb-4 mt-6" style={{ color: 'var(--accent-orange)' }}>
                    {children}
                  </h2>
                ),
                h3: ({children}) => (
                  <h3 className="text-xl font-semibold mb-3 mt-4" style={{ color: 'var(--accent-aqua)' }}>
                    {children}
                  </h3>
                ),
                p: ({children}) => (
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)' }}>
                    {children}
                  </p>
                ),
                code: ({node, inline, className, children, ...props}) => {
                  if (inline) {
                    return (
                      <code 
                        className="px-1 py-0.5 rounded text-sm"
                        style={{ 
                          backgroundColor: 'var(--accent-yellow)', 
                          color: 'var(--background)',
                          opacity: 0.9
                        }}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }
                  return (
                    <pre 
                      className="p-4 my-4 overflow-x-auto rounded border"
                      style={{ 
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--accent-yellow)',
                        filter: 'brightness(0.95)'
                      }}
                    >
                      <code 
                        className="text-sm"
                        style={{ color: 'var(--foreground)' }}
                        {...props}
                      >
                        {children}
                      </code>
                    </pre>
                  );
                },
                ul: ({children}) => (
                  <ul className="mb-4 ml-6 list-disc" style={{ color: 'var(--foreground)' }}>
                    {children}
                  </ul>
                ),
                li: ({children}) => (
                  <li className="mb-2">
                    {children}
                  </li>
                ),
                strong: ({children}) => (
                  <strong className="font-semibold" style={{ color: 'var(--accent-orange)' }}>
                    {children}
                  </strong>
                ),
                em: ({children}) => (
                  <em className="italic" style={{ color: 'var(--accent-purple)' }}>
                    {children}
                  </em>
                ),
                blockquote: ({children}) => (
                  <blockquote 
                    className="border-l-4 pl-4 my-4 italic"
                    style={{ 
                      borderColor: 'var(--accent-blue)',
                      color: 'var(--foreground)',
                      opacity: 0.8
                    }}
                  >
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
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
}

export default BlogPost;
