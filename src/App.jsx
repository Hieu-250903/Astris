import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Companies />
              <Residencies />
              <Value />
              <Contact />
              <GetStarted />
            </>
          } />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/residencies" element={<Residencies />} />
          <Route path="/value" element={<Value />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
