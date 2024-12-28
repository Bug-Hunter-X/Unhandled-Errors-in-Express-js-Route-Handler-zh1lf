const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Internal Server Error'); //Improved error handling
      return; //Stop further execution
    } else if (!user) {
      res.status(404).send('User not found'); //Improved error handling
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});