import './App.css';
import './shared-styles/shared.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/Contact';

import DestinationsPage from './pages/DestinationsPage/DestinationsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
      <div className='outer-background'></div>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <div className='card-background'>
                <main>
                  <Navigation />
                  <Welcome />
                  <Contact />
                </main>
              </div>
            </>
          }
        ></Route>
        <Route path='/destinations' element={<DestinationsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
