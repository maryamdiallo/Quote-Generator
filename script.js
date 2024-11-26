// List of quotes
const quotes = [
    {
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        content: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        content: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        content: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        content: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        content: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        content: "Do not wait for leaders; do it alone, person to person.",
        author: "Mother Teresa"
    },
    {
        content: "It’s not about having the right opportunities. It’s about handling the opportunities right.",
        author: "Mark Cuban"
    },
    {
        content: "Programming isn't about what you know; it's about what you can figure out",
        author: "Chris Pine"
    },
    {
        content: "The difference between a good developer and a great developer is persistence",
        author: "Unknown"
    }
];

// Function to get a random quote
function getRandomQuote() {
    // Select a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the quote on the page
    document.getElementById('quote').innerText = `"${randomQuote.content}" - ${randomQuote.author}`;
}
