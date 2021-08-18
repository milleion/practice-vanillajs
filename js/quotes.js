const quotes = [
  {
    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
    author: "Louis Pasteur",
  },
  {
    quote: "Without Art, we should have no notion of the sacred; without Science, we should always worship false gods.",
    author: "W.H. Auden",
  },
  {
    quote: "If I have been able to see further, it was only because I stood on the shoulders of giants.",
    author: "Isaac Newton",
  },
  {
    quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
    author: "Albert Einstein",
  },
  {
    quote: "Insanity: doing the same thing over and over again and expecting different results.",
    author: "Albert Einstein",
  },
  {
    quote: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    quote: "When all think alike, no one thinks very much.",
    author: "Albert Einstein",
  },
  {
    quote: "Nothing in life is to be feared. It is only to be understood.",
    author: "Marie Curie",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = chosenQuote.quote + "\n";
author.innerText = chosenQuote.author;
