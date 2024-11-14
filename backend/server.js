const express = require('express');
const app = express();
const PORT = 5001;

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});


app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
