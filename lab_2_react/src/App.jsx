import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'dark' ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Header />
      <button onClick={toggleTheme} className="m-4 border px-3 py-1 rounded">
        {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
      </button>
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Reviews />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;