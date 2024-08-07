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
import { MalichaPage } from '../../page/Project/Malicha';
import { BuywitheasePage } from '../../page/Project/Buywithease';
import { GocipePage } from '../../page/Project/Gocipe';

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
          <Route path="/project-four" element={<MalichaPage />} />
          <Route path="/project-five" element={<BuywitheasePage />} />
          <Route path="/project-six" element={<GocipePage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
