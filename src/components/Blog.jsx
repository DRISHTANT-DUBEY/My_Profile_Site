import { useEffect, useState } from 'react'

// --- Firebase REST config (public read-only) ---
const PROJECT_ID = 'gen-lang-client-0832737230'
const API_KEY = 'AIzaSyA11WWIQE4QGcdSgZlq_I1E3aU1Y_ofFLM'

function calculateReadTime(contentHtml) {
  if (!contentHtml) return '1 min read'
  // Strip HTML tags and count words
  const words = contentHtml.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(Boolean).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}

function formatDate(ts) {
  if (!ts) return ''
  try {
    return new Date(ts).toLocaleString('en-US', { month: 'short', year: 'numeric' })
  } catch {
    return ''
  }
}

async function fetchPublishedPosts() {
  // Use list API to get all posts (avoids the need for composite indexes!)
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/posts?key=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`)
  }
  const data = await res.json()
  if (!data.documents) return []

  const delayClass = ['d1', 'd2', 'd3']

  return data.documents
    .map((doc, index) => {
      const f = doc.fields || {}
      const id = doc.name.split('/').pop()
      const status = f.status?.stringValue || 'draft'
      const title = f.title?.stringValue || 'Untitled'
      const excerpt = f.excerpt?.stringValue || ''
      const tags = f.tags?.arrayValue?.values?.map((v) => v.stringValue) || []
      const content = f.content?.stringValue || ''
      const coverImageUrl = f.coverImageUrl?.stringValue || ''
      const updatedAt = f.updatedAt?.timestampValue || f.createdAt?.timestampValue || doc.updateTime || null
      
      return {
        id,
        status,
        cat: tags[0] || 'General',
        title,
        excerpt: excerpt || (content ? content.replace(/<[^>]*>/g, '').slice(0, 150) + '...' : ''),
        date: formatDate(updatedAt),
        read: calculateReadTime(content),
        content,
        coverImageUrl,
        updatedAt,
      }
    })
    .filter((post) => post.status === 'published')
    .sort((a, b) => {
      const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0
      const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0
      return timeB - timeA
    })
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activePost, setActivePost] = useState(null)

  useEffect(() => {
    fetchPublishedPosts()
      .then(setPosts)
      .catch((err) => {
        console.error('Blog fetch failed:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="sect sect--alt" id="blog">
      {/* Dynamic Keyframe Animations for Modal */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleIn {
          from { transform: scale(0.95) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .blog-content p {
          margin-bottom: 1.25rem;
          color: rgba(239, 246, 243, 0.8);
          font-size: 15.5px;
          line-height: 1.75;
        }
        .blog-content h1, .blog-content h2, .blog-content h3 {
          color: var(--text);
          font-weight: 700;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .blog-content h1 { font-size: 1.8em; }
        .blog-content h2 { font-size: 1.5em; }
        .blog-content h3 { font-size: 1.25em; }
        .blog-content blockquote {
          border-left: 3px solid var(--green);
          padding-left: 1.25rem;
          font-style: italic;
          color: var(--muted);
          margin: 1.5rem 0;
          background: rgba(44, 194, 149, 0.02);
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .blog-content code {
          background: rgba(44, 194, 149, 0.06);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 0.9em;
          color: var(--green);
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          color: rgba(239, 246, 243, 0.8);
        }
        .blog-content pre {
          background: #04100d;
          border: 1px solid rgba(44, 194, 149, 0.1);
          border-radius: 8px;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .blog-content pre code {
          background: none;
          padding: 0;
          color: var(--text);
          font-size: 0.88em;
        }
        .blog-content img {
          max-width: 100%;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        .blog-content a {
          color: var(--green);
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .blog-content a:hover {
          opacity: 0.8;
        }
        
        /* Modal scrollbar customisation */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(44, 194, 149, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(44, 194, 149, 0.4);
        }
      `}</style>

      <div className="sect__inner">
        <div className="sect__head reveal">
          <div>
            <div className="sect__badge">From the Blog</div>
            <h2 className="sect__title">WRITING</h2>
          </div>
          <div className="sect__right">
            <p className="sect__desc">
              Thoughts on AI tooling, developer education, and building in India. No fluff, just signal.
            </p>
            <a href="https://admin-panel-mu-flame.vercel.app" target="_blank" rel="noopener noreferrer" className="sect__link">
              Admin Panel →
            </a>
          </div>
        </div>

        {loading && (
          <div className="blog-grid">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`bcard reveal d${i+1}`}
                style={{ height: '260px', opacity: 0.15, pointerEvents: 'none', background: 'rgba(44, 194, 149, 0.02)' }}
              />
            ))}
          </div>
        )}

        {error && !loading && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', border: '1px dashed rgba(255,102,102,0.2)', borderRadius: '16px', background: 'rgba(255,102,102,0.02)' }}>
            <p style={{ color: '#ff6666', fontSize: '15px', fontWeight: 500 }}>
              Could not load blog posts.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '6px' }}>{error}</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', border: '1px dashed rgba(44, 194, 149, 0.15)', borderRadius: '16px', background: 'rgba(44, 194, 149, 0.01)' }}>
            <p style={{ color: 'var(--muted)', fontSize: '14px', fontFamily: 'DM Mono, monospace' }}>
              No posts published yet. Check back soon!
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map((p, i) => (
              <a 
                key={p.id} 
                href={`#post-${p.slug}`}
                className={`bcard reveal d${(i % 3) + 1}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActivePost(p)
                }}
              >
                <div className="bcard__cat">{p.cat}</div>
                <div className="bcard__title">{p.title}</div>
                <div className="bcard__excerpt">{p.excerpt}</div>
                <div className="bcard__footer">
                  <span>{p.date}</span>
                  <span className="bcard__read">{p.read} →</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* --- Beautiful Blog Post Modal --- */}
      {activePost && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(2, 12, 10, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'modalFadeIn 0.2s ease-out'
          }}
          onClick={() => setActivePost(null)}
        >
          <div 
            className="custom-scrollbar"
            style={{
              backgroundColor: '#05110e',
              border: '1px solid rgba(44, 194, 149, 0.16)',
              borderRadius: '20px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.85), 0 0 100px rgba(44,194,149,0.03)',
              animation: 'modalScaleIn 0.28s cubic-bezier(0.34, 1.3, 0.64, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cover image if available */}
            {activePost.coverImageUrl && (
              <div style={{ width: '100%', height: '260px', overflow: 'hidden', borderBottom: '1px solid rgba(44, 194, 149, 0.08)' }}>
                <img 
                  src={activePost.coverImageUrl} 
                  alt={activePost.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            )}
            
            {/* Modal Body */}
            <div style={{ padding: '40px' }}>
              {/* Close Button */}
              <button 
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(44, 194, 149, 0.05)',
                  border: '1px solid rgba(44, 194, 149, 0.15)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  fontSize: '22px',
                  transition: 'all 0.25s',
                  zIndex: 10,
                  lineHeight: 1
                }}
                onClick={() => setActivePost(null)}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(44, 194, 149, 0.18)'
                  e.currentTarget.style.borderColor = 'rgba(44, 194, 149, 0.35)'
                  e.currentTarget.style.color = 'var(--green)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(44, 194, 149, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(44, 194, 149, 0.15)'
                  e.currentTarget.style.color = 'var(--text)'
                }}
              >
                &times;
              </button>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                color: 'var(--green)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '18px'
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor' }} />
                {activePost.cat}
              </div>

              <h2 style={{
                fontSize: 'clamp(22px, 3.5vw, 34px)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '18px'
              }}>{activePost.title}</h2>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '10.5px',
                color: 'rgba(239, 246, 243, 0.35)',
                marginBottom: '32px',
                borderBottom: '1px solid rgba(44, 194, 149, 0.08)',
                paddingBottom: '16px'
              }}>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.read}</span>
              </div>

              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: activePost.content }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
