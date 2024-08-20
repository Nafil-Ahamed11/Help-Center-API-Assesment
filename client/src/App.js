import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <CardList searchQuery={searchQuery} /> {/* Pass search query to CardList */}
              <Footer/>
            </>
          } />
          <Route path="/card-form" element={<CardForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
