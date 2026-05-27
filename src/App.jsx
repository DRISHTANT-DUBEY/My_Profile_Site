import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogDetailPage from './components/BlogDetailPage'

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  // Listen to url hash changes for lightweight client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Scroll-based reveal for .reveal elements
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [currentHash])

  // Route: Blog Detail Page
  if (currentHash.startsWith('#blog/')) {
    const slug = currentHash.replace('#blog/', '')
    return <BlogDetailPage slug={slug} />
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Blog />
    </>
  )
}
