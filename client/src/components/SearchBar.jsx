import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/cards/${searchQuery}`);
      setCard(response.data);
      setError(null);
    } catch (err) {
      setError('Card not found.');
      setCard(null);
    }
  };

  return (
    <div className="text-center bg-gray-300 pt-10 min-h-[300px] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-5">How can we help?</h2>
      <div className="relative w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-3 px-5 rounded-full border border-gray-300 text-lg outline-none shadow-sm"
        />
        <button 
          onClick={handleSearch} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg  py-2 px-4 "
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="mt-5"> 
        {card && (
          <div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default SearchBar;
