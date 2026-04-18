import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal.",
  "Do what you can, with what you have, where you are.",
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish."
];

app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});