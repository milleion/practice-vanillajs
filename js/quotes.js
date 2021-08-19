const quotes = [
  {
    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    quote: "Let your joy be in your journey - not in some distant goal.",
    author: "Tim Cook",
  },
  {
    quote: "Don’t let the noise of others’ opinions drown out your own inner voice.",
    author: "Steve Jobs",
  },
  {
    quote: "It’s fine to celebrate success, but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  {
    quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
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
    quote: "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
    author: "Elon Musk",
  },
  {
    quote: "PSome people don't like change, but you need to embrace change if the alternative is disaster.",
    author: "Elon Musk",
  },
  {
    quote: "If you're changing the world, you're working on important things. You're excited to get up in the morning.",
    author: "Larry Page",
  },
  {
    quote: "Life’s too short to hang out with people who aren’t resourceful.",
    author: "Jeff Bezos",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = chosenQuote.quote + "\n";
author.innerText = chosenQuote.author;
