import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../page/About';
import { HomePage } from '../../page/Home';
import { PortfolioPage } from '../../page/Portfolio';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
