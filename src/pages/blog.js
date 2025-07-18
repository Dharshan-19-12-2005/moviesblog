const Blog = () => (
  <div className="main">
    <h1 className="title">Blog</h1>
    <p style={{ fontSize: '1.15em', marginBottom: 30 }}>
      Welcome to the BlogMovies Blog! Dive into the latest movie reviews, industry news, and community stories.
    </p>
    <div style={{ background: 'rgba(45,45,45,0.7)', borderRadius: 10, padding: 24, marginBottom: 30, boxShadow: '0 2px 8px rgba(0,188,212,0.08)' }}>
      <h2 style={{ color: '#00bcd4', marginBottom: 10 }}>🎬 Featured: The Art of Storytelling in Cinema</h2>
      <p style={{ color: '#c9c9c9', fontSize: '1.05em' }}>
        Discover how directors and writers craft unforgettable stories that captivate audiences worldwide. From script to screen, explore the secrets behind your favorite films.
      </p>
      <a href="#" style={{ color: '#f39c12', fontWeight: 600, textDecoration: 'underline', marginTop: 10, display: 'inline-block' }}>Read More</a>
    </div>
    <p style={{ fontSize: '1.1em', color: '#00bcd4', fontWeight: 500 }}>
      Explore more articles, reviews, and join the conversation!
    </p>
  </div>
);
export default Blog; 