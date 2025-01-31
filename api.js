// (c) Koshik Kumar
const rateLimit = require("express-rate-limit");
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();


// Trust the proxy to get the real client IP
app.set("trust proxy", 1);


// Enable CORS for all routes
app.use(cors());


// Rate limiter configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many requests, please try again later after 15 minutes.",
  },
});


// Apply rate limiting to all API routes
app.use("/api/", apiLimiter);


// Fetch randomQuotes endpoint
const randomQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "randomQuotes.json"), "utf8"),
);
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * randomQuotesData.length);
  return randomQuotesData[randomIndex];
}
app.get("/api/random", (req, res) => {
  const quote = getRandomQuote();
  res.json(quote);
});


// Fetch animeQuotes endpoint
const animeQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "animeQuotes.json"), "utf8"),
);
function getAnimeQuote(animeName = null, characterName = null) {
  let filteredQuotes = animeQuotesData;
  if (animeName) {
    filteredQuotes = filteredQuotes.filter(
      (quote) => quote.anime.toLowerCase() === animeName.toLowerCase()
    );
  }
  if (characterName) {
    filteredQuotes = filteredQuotes.filter(
      (quote) => quote.character.toLowerCase() === characterName.toLowerCase()
    );
  }
  if (filteredQuotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  } else {
    return { error: "No matching quotes found." };
  }
}
app.get("/api/random/anime", (req, res) => {
  const { anime, character } = req.query;
  const quote = getAnimeQuote(anime, character);
  res.json(quote);
});


// Fetch deathQuotes endpoint
const deathQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "deathQuotes.json"), "utf8"),
);
function getDeathQuote() {
  const randomIndex = Math.floor(Math.random() * deathQuotesData.length);
  return deathQuotesData[randomIndex];
}
app.get("/api/random/death", (req, res) => {
  const quote = getDeathQuote();
  res.json(quote);
});

// Fetch happinessQuotes endpoint
const happinessQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "happinessQuotes.json"), "utf8"),
);
function getHappinessQuote() {
  const randomIndex = Math.floor(Math.random() * happinessQuotesData.length);
  return happinessQuotesData[randomIndex];
}
app.get("/api/random/happiness", (req, res) => {
  const quote = getHappinessQuote();
  res.json(quote);
});


// Fetch inspirationQuotes endpoint
const inspirationQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "inspirationQuotes.json"), "utf8"),
);
function getInspirationQuote() {
  const randomIndex = Math.floor(Math.random() * inspirationQuotesData.length);
  return inspirationQuotesData[randomIndex];
}
app.get("/api/random/inspiration", (req, res) => {
  const quote = getInspirationQuote();
  res.json(quote);
});


// Fetch loveQuotes endpoint
const loveQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "loveQuotes.json"), "utf8"),
);
function getLoveQuote() {
  const randomIndex = Math.floor(Math.random() * loveQuotesData.length);
  return loveQuotesData[randomIndex];
}
app.get("/api/random/love", (req, res) => {
  const quote = getLoveQuote();
  res.json(quote);
});


// Fetch poetryQuotes endpoint
const poetryQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "poetryQuotes.json"), "utf8"),
);
function getPoetryQuote() {
  const randomIndex = Math.floor(Math.random() * poetryQuotesData.length);
  return poetryQuotesData[randomIndex];
}
app.get("/api/random/poetry", (req, res) => {
  const quote = getPoetryQuote();
  res.json(quote);
});


// Fetch romanceQuotes endpoint
const romanceQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "romanceQuotes.json"), "utf8"),
);
function getRomanceQuote() {
  const randomIndex = Math.floor(Math.random() * romanceQuotesData.length);
  return romanceQuotesData[randomIndex];
}
app.get("/api/random/romance", (req, res) => {
  const quote = getRomanceQuote();
  res.json(quote);
});


// Fetch scienceQuotes endpoint
const scienceQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "scienceQuotes.json"), "utf8"),
);
function getScienceQuote() {
  const randomIndex = Math.floor(Math.random() * scienceQuotesData.length);
  return scienceQuotesData[randomIndex];
}
app.get("/api/random/science", (req, res) => {
  const quote = getScienceQuote();
  res.json(quote);
});


// Fetch successQuotes endpoint
const successQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "successQuotes.json"), "utf8"),
);
function getSuccessQuote() {
  const randomIndex = Math.floor(Math.random() * successQuotesData.length);
  return successQuotesData[randomIndex];
}
app.get("/api/random/success", (req, res) => {
  const quote = getSuccessQuote();
  res.json(quote);
});


// Fetch timeQuotes endpoint
const timeQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "timeQuotes.json"), "utf8"),
);
function getTimeQuote() {
  const randomIndex = Math.floor(Math.random() * timeQuotesData.length);
  return timeQuotesData[randomIndex];
}
app.get("/api/random/time", (req, res) => {
  const quote = getTimeQuote();
  res.json(quote);
});


// Fetch truthQuotes endpoint
const truthQuotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "assets", "truthQuotes.json"), "utf8"),
);
function getTruthQuote() {
  const randomIndex = Math.floor(Math.random() * truthQuotesData.length);
  return truthQuotesData[randomIndex];
}
app.get("/api/random/truth", (req, res) => {
  const quote = getTruthQuote();
  res.json(quote);
});


// Fetch all tags
app.get("/api/category", (req, res) => {
  try {
    const tags = JSON.parse(
      fs.readFileSync(path.join(__dirname, "assets", "category.json"), "utf8"),
    );
    res.json(tags);
  } catch (error) {
    res.status(500).json({
      error: "Error fetching category list.",
    });
  }
});

// Docs page route 
app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});


// Home page route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


module.exports = app;
