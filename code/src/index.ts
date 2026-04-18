import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});




app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


const express = require('express');
const app = express();
const PORT = 3000;

// Sample quotes
const quotes = [
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal.",
  "Do what you can, with what you have, where you are.",
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish."
];

// Route to get random quote
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({
    quote: quotes[randomIndex]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

