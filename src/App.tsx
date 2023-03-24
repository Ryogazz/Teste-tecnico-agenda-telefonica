import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Relatorio from './pages/Relatorio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relatorio" element={<Relatorio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
