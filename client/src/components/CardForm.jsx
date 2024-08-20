import React, { useState } from 'react';
import axios from 'axios';

const CardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/api/cards', { title, description });
      setTitle('');
      setDescription('');
      setError(null);
      setSuccessMessage(response.data.message);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      setError('Failed to create card. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-8 bg-gray-300 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Create New Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
        <button type="submit" className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-black-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;
