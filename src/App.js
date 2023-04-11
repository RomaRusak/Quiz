import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import GamesPage from './pages/GamesPage/GamesPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="App-content">
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<HomePage />}></Route>
          <Route path='movies' element={<MoviesPage />} />
          <Route path='series' element={<SeriesPage />}/>
          <Route path='games' element={<GamesPage />}/>
        </Route>
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
