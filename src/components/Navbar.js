import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link href="/">BlogMovies</Link>
    </div>
    <ul className="navbar-links">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/login">Login</Link></li>
      <li><Link href="/signup">Sign Up</Link></li>
    </ul>
  </nav>
);

export default Navbar; 