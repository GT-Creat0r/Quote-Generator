const categorySelect = document.getElementById("category");
const themeToggle = document.getElementById("themeToggle");
const quoteBox = document.getElementById("quoteBox");
const authorBox = document.getElementById("author");
const previousBtn = document.getElementById("previousBtn");
const randomBtn = document.getElementById("randomBtn");
const nextBtn = document.getElementById("nextBtn");
const increaseFontBtn = document.getElementById("increaseFont");
const decreaseFontBtn = document.getElementById("decreaseFont");

const quotes = {
  science: [
    {
      text: "Science is a way of thinking much more than it is a body of knowledge.",
      author: "Carl Sagan",
    },
    {
      text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      author: "Albert Einstein",
    },
    {
      text: "Somewhere, something incredible is waiting to be known.",
      author: "Carl Sagan",
    },
    {
      text: "If I have seen further it is by standing on the shoulders of Giants.",
      author: "Isaac Newton",
    },
  ],
  motivation: [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Don’t let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
  ],
  funny: [
    {
      text: "My fake plants died because I did not pretend to water them.",
      author: "Mitch Hedberg",
    },
    {
      text: "Behind every great man is a woman rolling her eyes.",
      author: "Jim Carrey",
    },
    {
      text: "People say nothing is impossible, but I do nothing every day.",
      author: "A.A. Milne (Winnie the Pooh)",
    },
    {
      text: "The elevator to success is out of order. You’ll have to use the stairs... one step at a time.",
      author: "Joe Girard",
    },
  ],
};

let currentCategory = "science";
let currentIndex = 0;
let fontSize = 1.2;
const minFontSize = 0.9;
const maxFontSize = 2.0;

function showQuote(category, index) {
  const quote = quotes[category][index];
  quoteBox.textContent = `"${quote.text}`;
  authorBox.textContent = `-${quote.author}`;
}

function updateQuote() {
  showQuote(currentCategory, currentIndex);
}

function setFontSize(size) {
  fontSize = Math.max(minFontSize, Math.min(maxFontSize, size));
  quoteBox.style.fontSize = fontSize + "rem";
}

categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  updateQuote();
});

previousBtn.addEventListener("click", () => {
  const len = quotes[currentCategory].length;
  currentIndex = (currentIndex - 1 + len) % len;
  updateQuote();
});

nextBtn.addEventListener("click", () => {
  const len = quotes[currentCategory].length;
  currentIndex = (currentIndex + 1) % len;
  updateQuote();
});

randomBtn.addEventListener("click", () => {
  const allQuotes = [];
  for (let cat in quotes) {
    allQuotes.push(...quotes[cat]);
  }
  const randomIdx = Math.floor(Math.random() * allQuotes.length);
  const quote = allQuotes[randomIdx];
  quoteBox.textContent = `"${quote.text}`;
  authorBox.textContent = `-${quote.author}`;
});

increaseFontBtn.addEventListener("click", () => {
  setFontSize(fontSize + 0.1);
});
decreaseFontBtn.addEventListener("click", () => {
  setFontSize(fontSize - 0.1);
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
});

updateQuote();
setFontSize(fontSize);
