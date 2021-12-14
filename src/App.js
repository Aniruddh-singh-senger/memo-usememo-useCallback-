import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Other from './other';
import Routing from './Routing';
import Usecallback from './Usecallback';
import UseMemo from './UseMemo';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Routing" element={<Routing />} />
          <Route path="/other" element={<Other />} />
          <Route path="/Usecallback" element={<Usecallback />} />
          <Route path="/UseMemo" element={<UseMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
