const Card = require('../model/card.js');

exports.createCard = async (req, res) => {
    const { title, description } = req.body;
    console.log("req body",req.body)
    console.log("body",req.body);
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }
  
    try {
      const newCard = new Card({ title, description });
      await newCard.save();
      res.status(201).json(newCard);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create card.' });
    }
  };

  exports.getCards = async (req, res) => {
    try {
      const cards = await Card.find(); // Fetch all cards from MongoDB
      res.status(200).json(cards); // Send the cards data to the frontend
    } catch (error) {
      res.status(500).json({ error: 'Failed to load cards.' });
    }
  };


exports.getCardByTitle = async (req, res) => {
    const { title } = req.params; // extract the title from the URL parameters
  
    try {
      const card = await Card.findOne({ title: { $regex: new RegExp(title, 'i') } }); // case-insensitive search
      if (!card) {
        return res.status(404).json({ error: 'Card not found.' });
      }
      res.status(200).json(card); // return the found card
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve card.' });
    }
  };