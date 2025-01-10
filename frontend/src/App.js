import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import MyListPage from './components/MyListPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/my-list" element={<MyListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
