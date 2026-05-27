import { useEffect, useState } from 'react'

// --- Firebase REST config (public read-only) ---
const PROJECT_ID = 'gen-lang-client-0832737230'
const API_KEY = 'AIzaSyA11WWIQE4QGcdSgZlq_I1E3aU1Y_ofFLM'

async function fetchPublishedPosts() {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery?key=${API_KEY}`
  const body = {
    structuredQuery: {
      from: [{ collectionId: 'posts' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'status' },
          op: 'EQUAL',
          value: { stringValue: 'published' },
        },
      },
      orderBy: [{ field: { fieldPath: 'updatedAt' }, direction: 'DESCENDING' }],
      limit: 3,
    },
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return data
    .filter((item) => item.document)
    .map((item) => {
      const f = item.document.fields || {}
      const id = item.document.name.split('/').pop()
      return {
        id,
        title: f.title?.stringValue || 'Untitled',
        excerpt: f.excerpt?.stringValue || '',
        tags: f.tags?.arrayValue?.values?.map((v) => v.stringValue) || [],
        slug: f.slug?.stringValue || id,
        updatedAt: f.updatedAt?.timestampValue || f.createdAt?.timestampValue || null,
      }
    })
}

function formatDate(ts) {
  if (!ts) return ''
  try {
    return new Date(ts).toLocaleString('en-IN', { month: 'short', year: 'numeric' })
  } catch {
    return ''
  }
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

  const delayClass = ['d1', 'd2', 'd3']

  return (
    <section id="blog" className="reveal">
      <div className="blog-header">
        <div>
          <span className="section-kicker">• FROM THE BLOG</span>
          <h2 className="heading-xl">WRITING</h2>
        </div>
        <div className="blog-meta">
          <p>Thoughts on AI tooling, developer education, and building in India. No fluff, just signal.</p>
          <a href="https://portfolio-eight-ashen.vercel.app/#blog" className="link-arrow">
            ALL POSTS &rarr;
          </a>
        </div>
      </div>

      {loading && (
        <div className="blog-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="blog-card reveal" style={{ height: '220px', opacity: 0.2 }} />
          ))}
        </div>
      )}

      {error && !loading && (
        <p style={{ color: '#ff6666', textAlign: 'center', padding: '2rem' }}>
          Could not load posts. Please try again later.
        </p>
      )}

      {!loading && !error && posts.length === 0 && (
        <p style={{ color: '#666666', textAlign: 'center', padding: '2rem' }}>
          No posts published yet. Check back soon!
        </p>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`blog-card reveal ${delayClass[i % 3]}`}
            >
              {post.tags[0] && (
                <span className="blog-cat">
                  {post.tags[0].toUpperCase()}
                </span>
              )}
              <h3 className="blog-title">{post.title}</h3>
              {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
              <div className="blog-footer">
                <span>{formatDate(post.updatedAt)}</span>
                <span>Read &rarr;</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
