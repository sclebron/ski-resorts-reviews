import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './pages/category/category.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Category' element={<Category/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
