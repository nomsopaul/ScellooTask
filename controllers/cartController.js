const { Item } = require('../models/item');

exports.getCart = async (req, res) => {
  try {
    const items = await Item.findAll();
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    
    res.json({ items, totalPrice });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};