import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome</h1>
      <p>Your React app is running.</p>
      <p>
        <Link to="/about">Go to About</Link>
      </p>
    </main>
  );
}
