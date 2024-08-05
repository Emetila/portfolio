import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../page/About';
import { HomePage } from '../../page/Home';
import { PortfolioPage } from '../../page/Portfolio';
import './App.css';
import { ContactPage } from '../../page/Contact';
import { VotedeckPage } from '../../page/VoteDeck';
import { ProjectonePage } from '../../page/Project/Project1';
import { FamebirdsPage } from '../../page/Project/Famebird';
import { SjfashionPage } from '../../page/Project/SjFashion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project-one" element={<VotedeckPage />} />
          <Route path="/project-two" element={<FamebirdsPage />} />
          <Route path="/votedeck" element={<ProjectonePage />} />
          <Route path="/project-three" element={<SjfashionPage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
