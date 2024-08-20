import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/cards'); // Fetch the cards from the backend
        setCards(response.data); // Set the fetched cards to the state
        setLoading(false);
      } catch (err) {
        setError('Failed to load cards. Please try again.');
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto mt-5 mb-5 ">
      <h2 className="text-2xl text-center  font-bold mb-6">Help Cards</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div key={card._id} className="bg-slate-200 p-5 rounded shadow border-2 border-slate-300">
            <h3 className="text-xl font-semibold border-b-2 border-slate-300">{card.title}</h3>
            <p className='mt-3'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
