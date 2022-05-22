import './App.css';
import './shared-styles/shared.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/Contact';

import DestinationsPage from './pages/DestinationsPage/DestinationsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';

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
        {/* ./profile will be a private route later and for now it will take us to the SignIn and SignUp pages so we can take care of those two before */}
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
