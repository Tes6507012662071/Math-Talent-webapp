import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}


// run : npm run dev