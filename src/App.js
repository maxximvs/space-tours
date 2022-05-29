import './App.css';
import './shared-styles/shared.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import DestinationsPage from './pages/DestinationsPage/DestinationsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import BookJourneyPage from './pages/BookJourneyPage/BookJourneyPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DestinationsProvider } from './context/destinations/DestinationsContext';

function App() {
  return (
    <Router>
      <DestinationsProvider>
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
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
          <Route path='/book-journey' element={<PrivateRoute />}>
            <Route
              path='/book-journey/:destinationId'
              element={<BookJourneyPage />}
            />
          </Route>
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <ToastContainer
          theme='dark'
          transition={Slide}
          position='top-center'
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </DestinationsProvider>
    </Router>
  );
}

export default App;
