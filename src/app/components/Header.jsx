import { Terminal } from 'lucide-react';

function Header({ currentSection, setCurrentSection }) {
  return (
    <header className="border-b p-4" style={{ borderColor: 'var(--accent-yellow)' }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Terminal size={16} />
          <span style={{ color: 'var(--foreground)' }}>~/portfolio/{currentSection}</span>
        </div>
        <nav className="flex flex-row sm:flex-row mt-2 sm:mt-0 space-x-4 sm:space-x-6">
          {['about', 'projects', 'contact', 'blog'].map((section) => (
            <button
              key={section}
              onClick={() => {
                if (section === 'blog') {
                  window.location.href = '/blog';
                } else {
                  setCurrentSection(section);
                }
              }}
              className="transition-colors whitespace-nowrap"
              style={{ color: currentSection === section ? 'var(--accent-yellow)' : 'var(--foreground)' }}
            >
              {`${section == 'blog' ? '~' : '.'}/${section}`}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;