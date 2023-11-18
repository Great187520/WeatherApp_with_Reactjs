import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityDetailPage from './pages/CityDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/city/:cityName" component={CityDetailPage} />
        {/* Other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
