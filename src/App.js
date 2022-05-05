import './App.css';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <>
      <div className='outer-background'></div>
      <main>
        <Navigation />
        <Welcome />
      </main>
    </>
  );
}

export default App;
