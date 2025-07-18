const Contact = () => (
  <div className="main">
    <h1 className="title">Contact Us</h1>
    <p style={{ fontSize: '1.1em', marginBottom: 30 }}>
      Have questions, feedback, or partnership inquiries? We’d love to hear from you! Fill out the form below or reach us directly at <a href="mailto:support@blogmovies.com" style={{ color: '#00bcd4' }}>support@blogmovies.com</a>.
    </p>
    <form style={{ maxWidth: 500, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <input type="text" placeholder="Your Name" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <input type="email" placeholder="Your Email" style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <textarea placeholder="Your Message" rows={5} style={{ padding: 10, borderRadius: 6, border: '1px solid #00bcd4', fontSize: '1em' }} />
      <button type="submit" style={{ background: '#00bcd4', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', fontWeight: 600, fontSize: '1.1em', cursor: 'pointer', marginTop: 10 }}>Send Message</button>
    </form>
  </div>
);
export default Contact; 