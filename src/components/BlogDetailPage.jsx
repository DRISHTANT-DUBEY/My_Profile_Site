import { useEffect, useState } from 'react'

const API_BASE_URL = 'https://dd-dev-render-server.onrender.com'

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

export default function BlogDetailPage({ slug }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Scroll to top immediately when page renders
    window.scrollTo(0, 0)

    // Fetch single post content from API endpoint
    fetch(`${API_BASE_URL}/api/posts/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Post not found')
        }
        return res.json()
      })
      .then((data) => {
        setPost({
          ...data,
          cat: data.tags?.[0] || 'General',
          date: formatDate(data.updatedAt),
          read: calculateReadTime(data.content),
        })
      })
      .catch((err) => {
        console.error('Fetch post detail failed:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [slug])

  const goBack = (e) => {
    e.preventDefault()
    window.location.hash = '#blog'
  }

  return (
    <article className="sect" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes detailFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .detail-container {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          animation: detailFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          padding-top: 40px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--green);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
          margin-bottom: 48px;
          transition: all 0.2s;
        }
        .back-link:hover {
          border-color: var(--green);
          transform: translateX(-4px);
        }
        .post-cat {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--green);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
        }
        .post-cat::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
        }
        .post-title {
          font-size: clamp(28px, 5.5vw, 48px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: var(--text);
          margin-bottom: 24px;
        }
        .post-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          margin-bottom: 40px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 24px;
        }
        .post-cover {
          width: 100%;
          height: clamp(240px, 40vh, 480px);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 48px;
          border: 1px solid var(--border);
        }
        .post-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .post-body p {
          margin-bottom: 1.5rem;
          color: rgba(239, 246, 243, 0.85);
          font-size: 16.5px;
          line-height: 1.8;
        }
        .post-body h1, .post-body h2, .post-body h3 {
          color: var(--text);
          font-weight: 700;
          margin-top: 2.25rem;
          margin-bottom: 1rem;
        }
        .post-body h1 { font-size: 1.85em; }
        .post-body h2 { font-size: 1.55em; }
        .post-body h3 { font-size: 1.3em; }
        .post-body blockquote {
          border-left: 3px solid var(--green);
          padding-left: 1.5rem;
          font-style: italic;
          color: var(--muted);
          margin: 2rem 0;
          background: rgba(44, 194, 149, 0.02);
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        .post-body code {
          background: rgba(44, 194, 149, 0.06);
          padding: 3px 8px;
          border-radius: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 0.9em;
          color: var(--green);
        }
        .post-body ul, .post-body ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .post-body li {
          margin-bottom: 0.5rem;
          color: rgba(239, 246, 243, 0.85);
          font-size: 16px;
        }
        .post-body pre {
          background: #04100d;
          border: 1px solid rgba(44, 194, 149, 0.1);
          border-radius: 8px;
          padding: 1.25rem;
          overflow-x: auto;
          margin: 2rem 0;
        }
        .post-body pre code {
          background: none;
          padding: 0;
          color: var(--text);
          font-size: 0.88em;
        }
        .post-body img {
          max-width: 100%;
          border-radius: 12px;
          margin: 2rem 0;
          border: 1px solid var(--border);
        }
        .post-body a {
          color: var(--green);
          text-decoration: underline;
          transition: opacity 0.2s;
        }
        .post-body a:hover {
          opacity: 0.8;
        }
        
        /* Spinner styles */
        .spinner-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(44, 194, 149, 0.1);
          border-top-color: var(--green);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 16px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {loading && (
        <div className="spinner-container">
          <div className="spinner" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'var(--muted)' }}>Loading article...</p>
        </div>
      )}

      {error && !loading && (
        <div className="detail-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <a href="#" onClick={goBack} className="back-link">
            ← Back to home
          </a>
          <div style={{ border: '1px dashed rgba(255,102,102,0.2)', borderRadius: '16px', padding: '40px', background: 'rgba(255,102,102,0.02)' }}>
            <p style={{ color: '#ff6666', fontSize: '16px', fontWeight: 600 }}>Article not found.</p>
            <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '8px' }}>{error}</p>
          </div>
        </div>
      )}

      {!loading && !error && post && (
        <div className="detail-container">
          <a href="#" onClick={goBack} className="back-link">
            ← Back to home
          </a>

          <div className="post-cat">{post.cat}</div>
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.read}</span>
          </div>

          {post.coverImageUrl && (
            <div className="post-cover">
              <img src={post.coverImageUrl} alt={post.title} />
            </div>
          )}

          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      )}
    </article>
  )
}
