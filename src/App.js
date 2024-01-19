import Navbar from './Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Blogs from './Blogs';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
