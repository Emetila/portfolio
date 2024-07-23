import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../page/About';
import { HomePage } from '../../page/Home';
import { PortfolioPage } from '../../page/Portfolio';
import './App.css';
import { ContactPage } from '../../page/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
