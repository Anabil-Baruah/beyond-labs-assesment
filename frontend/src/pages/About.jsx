import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>About</h1>
      <p>This is a secondary route to confirm routing works.</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  );
}
