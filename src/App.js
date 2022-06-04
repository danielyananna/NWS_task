
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CatPage from './components/pages/CatPage';
import CatDetails from './components/pages/CatDetails';
import Header from './components/pages/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header path="/" />
        <Routes>
          <Route exact path="/" element={<CatPage />} />
          <Route exact path="categories/:categoryId" element={<CatDetails />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
