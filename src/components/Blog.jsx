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

async function fetchPublishedPosts() {
  const url = `${API_BASE_URL}/api/posts`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`)
  }
  const data = await res.json()
  
  const delayClass = ['d1', 'd2', 'd3']

  return data.map((post, index) => {
    const excerptText = post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, '').slice(0, 150) + '...' : '')
    return {
      ...post,
      cat: post.tags?.[0] || 'General',
      excerpt: excerptText,
      date: formatDate(post.updatedAt),
      read: calculateReadTime(post.content),
      delay: delayClass[index % 3]
    }
  })
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPublishedPosts()
      .then(setPosts)
      .catch((err) => {
        console.error('Blog fetch failed:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  // Dynamic IntersectionObserver to trigger scroll reveals on asynchronously loaded posts
  useEffect(() => {
    if (loading) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    
    // Find all reveal elements inside the blog section and observe them
    const elements = document.querySelectorAll('#blog .reveal')
    elements.forEach((el) => io.observe(el))
    
    return () => io.disconnect()
  }, [loading, posts])

  return (
    <section className="sect sect--alt" id="blog">
      <div className="sect__inner">
        <div className="sect__head reveal">
          <div>
            <div className="sect__badge">From the Blog</div>
            <h2 className="sect__title">WRITING</h2>
          </div>
          
        </div>

        {loading && (
          <div className="blog-grid">
            <style>{`
              @keyframes pulseSkeleton {
                0%, 100% { opacity: 0.15; }
                50% { opacity: 0.35; }
              }
              .pulse-skeleton {
                animation: pulseSkeleton 1.6s ease-in-out infinite;
                height: 260px;
                background: rgba(44, 194, 149, 0.03);
                border: 1px solid rgba(44, 194, 149, 0.12);
                border-radius: 16px;
                pointer-events: none;
              }
            `}</style>
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`pulse-skeleton d${i+1}`}
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
            {posts.map((p) => (
              <a 
                key={p.id} 
                href={`#blog/${p.slug}`}
                className={`bcard reveal ${p.delay}`}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.hash = `#blog/${p.slug}`
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
    </section>
  )
}
