import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    </div>
  );
}

export default App;
