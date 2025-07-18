const SignUp = () => (
  <div className="main">
    <h1 className="title">Sign Up</h1>
    <form style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <input type="text" placeholder="Name" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <input type="email" placeholder="Email" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <input type="password" placeholder="Password" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <button type="submit" style={{ background: '#f39c12', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', fontWeight: 600, fontSize: '1.1em', cursor: 'pointer', marginTop: 10 }}>Create Account</button>
    </form>
    <p style={{ marginTop: 20, fontSize: '1em' }}>
      Already have an account? <a href="/login" style={{ color: '#00bcd4', fontWeight: 600 }}>Login</a>
    </p>
  </div>
);
export default SignUp; 