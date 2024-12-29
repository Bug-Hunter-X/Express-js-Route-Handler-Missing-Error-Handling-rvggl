const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data
  // ... error handling
  // Missing error handling for invalid user IDs.  If userId is not a number or doesn't exist in DB, it will crash.
  res.json({ id: userId, name: 'John Doe' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));