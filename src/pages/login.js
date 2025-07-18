const Login = () => (
  <div className="main">
    <h1 className="title">Login</h1>
    <form style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <input type="email" placeholder="Email" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <input type="password" placeholder="Password" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <button type="submit" style={{ background: '#00bcd4', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', fontWeight: 600, fontSize: '1.1em', cursor: 'pointer', marginTop: 10 }}>Login</button>
    </form>
    <p style={{ marginTop: 20, fontSize: '1em' }}>
      New to BlogMovies? <a href="/signup" style={{ color: '#f39c12', fontWeight: 600 }}>Sign Up</a>
    </p>
  </div>
);
export default Login; 