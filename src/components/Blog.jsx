const posts = [
  {
    cat: 'AI Tooling',
    title: "Why I'm Building AI Tools Instead of Just Using Them",
    excerpt:
      "The best way to understand the limits of LLMs is to build the infrastructure around them. Here's what 3 years of shipping AI tools has actually taught me.",
    date: 'May 2025',
    read: '8 min read',
    delay: 'd1',
  },
  {
    cat: 'Education',
    title: 'Teaching CS in the Age of AI Assistants',
    excerpt:
      "AI coding assistants are changing what it means to learn programming. The question isn't whether to embrace them — it's how to use them without bypassing real understanding.",
    date: 'Apr 2025',
    read: '6 min read',
    delay: 'd2',
  },
  {
    cat: 'India · Dev',
    title: 'India is the Next Frontier for Developer Tooling',
    excerpt:
      "A generation of engineers with global ambitions and local context is building the tools the world will use next. Why India's developer ecosystem is at an inflection point.",
    date: 'Mar 2025',
    read: '4 min read',
    delay: 'd3',
  },
]

export default function Blog() {
  return (
    <section className="sect sect--alt" id="blog">
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
            <a href="#" className="sect__link">All posts →</a>
          </div>
        </div>

        <div className="blog-grid">
          {posts.map((p) => (
            <a key={p.title} href="#" className={`bcard reveal ${p.delay}`}>
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
      </div>
    </section>
  )
}
