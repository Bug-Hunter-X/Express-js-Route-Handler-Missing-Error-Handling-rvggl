const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user data, include error handling here
    // Example with potential error:
    if (isNaN(userId) || userId <= 0) {
      throw new Error('Invalid user ID');
    }
    const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]); // This should be replaced with your actual database query.
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));