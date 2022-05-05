import './App.css';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className='outer-background'></div>
      <main>
        <Navigation />
        <Welcome />
        <Contact />
      </main>
    </>
  );
}

export default App;
