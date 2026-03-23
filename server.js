const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve all the files inside the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ------------------- YOUR BIG QUESTION LIST -------------------
// Replace this with your own FULL_QUESTIONS array from your original code.
// I'm putting a few sample questions here so you can test.



const FULL_QUESTIONS = [
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Bangkok", "Tokyo"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest ocean on Earth?", options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Ag", "Au"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is home to the kangaroo?", options: ["New Zealand", "Australia", "South Africa", "Brazil"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the hardest natural substance?", options: ["Iron", "Diamond", "Platinum", "Titanium"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who developed the theory of relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest river in the world?", options: ["Amazon", "Yangtze", "Mississippi", "Nile"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who was the first President of the United States?", options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main ingredient in guacamole?", options: ["Tomato", "Onion", "Avocado", "Lime"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which language has the most native speakers?", options: ["English", "Mandarin Chinese", "Spanish", "Hindi"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the smallest prime number?", options: ["0", "1", "3", "2"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted the ceiling of the Sistine Chapel?", options: ["Donatello", "Michelangelo", "Raphael", "Botticelli"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which gas do plants absorb during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the fastest land animal?", options: ["Lion", "Pronghorn", "Cheetah", "Horse"], correct: 2 },

  // 21-40
  { category: "General Knowledge", difficulty: "medium", question: "Who is known as the 'Father of Computers'?", options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Charles Babbage"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the currency of Japan?", options: ["Won", "Yen", "Yuan", "Ringgit"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Odyssey'?", options: ["Sophocles", "Euripides", "Homer", "Virgil"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest desert on Earth?", options: ["Gobi", "Sahara", "Antarctic", "Arabian"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "In which sport is the term 'love' used?", options: ["Soccer", "Tennis", "Cricket", "Baseball"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main component of the Sun?", options: ["Oxygen", "Carbon", "Helium", "Hydrogen"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Edward Jenner"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is known as the 'King of the Jungle'?", options: ["Lion", "Tiger", "Elephant", "Leopard"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the square root of 64?", options: ["6", "7", "9", "8"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Starry Night'?", options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Edvard Munch"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Italy?", options: ["Rome", "Florence", "Venice", "Milan"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is represented by 'O'?", options: ["Gold", "Silver", "Oxygen", "Osmium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote '1984'?", options: ["Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien", "George Orwell"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main language spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the most moons?", options: ["Jupiter", "Uranus", "Neptune", "Saturn"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Lise Meitner"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the boiling point of water (in Celsius)?", options: ["90°C", "95°C", "100°C", "105°C"], correct: 2 },

  // 41-60
  { category: "General Knowledge", difficulty: "medium", question: "Which country gifted the Statue of Liberty to the USA?", options: ["England", "Spain", "Germany", "France"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest mammal?", options: ["Elephant", "Blue whale", "Giraffe", "Great white shark"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Egypt?", options: ["Alexandria", "Luxor", "Cairo", "Giza"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Argon", "Nitrogen", "Carbon dioxide"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Persistence of Memory'?", options: ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Henri Matisse"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the hardest known natural material?", options: ["Gold", "Iron", "Graphite", "Diamond"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Great Gatsby'?", options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest continent?", options: ["Africa", "Asia", "North America", "Europe"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which instrument is used to measure earthquakes?", options: ["Seismograph", "Barometer", "Thermometer", "Anemometer"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national flower of Japan?", options: ["Lotus", "Rose", "Orchid", "Cherry blossom"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered gravity?", options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Stephen Hawking"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Perth"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is liquid at room temperature?", options: ["Sodium", "Gallium", "Mercury", "Bromine"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Last Supper'?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Caravaggio"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest bone in the human body?", options: ["Spine", "Tibia", "Fibula", "Femur"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Pride and Prejudice'?", options: ["Emily Brontë", "Charles Dickens", "Mary Shelley", "Jane Austen"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the smallest prime number greater than 10?", options: ["11", "13", "17", "19"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Morning Star'?", options: ["Mars", "Jupiter", "Venus", "Mercury"], correct: 2 },

  // 61-80
  { category: "General Knowledge", difficulty: "medium", question: "Who is the author of 'The Hobbit'?", options: ["George R.R. Martin", "C.S. Lewis", "J.K. Rowling", "J.R.R. Tolkien"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Germany?", options: ["Munich", "Berlin", "Frankfurt", "Hamburg"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which organ pumps blood through the body?", options: ["Heart", "Lungs", "Liver", "Kidneys"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the most spoken language in the world?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who was the first man to walk on the Moon?", options: ["Buzz Aldrin", "Michael Collins", "Neil Armstrong", "Yuri Gagarin"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is famous for the Great Wall?", options: ["India", "China", "Japan", "Korea"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O2", "H2O"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Scream'?", options: ["Claude Monet", "Edvard Munch", "Gustav Klimt", "Salvador Dalí"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest internal organ in the human body?", options: ["Heart", "Liver", "Lungs", "Brain"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has a ring system?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the light bulb?", options: ["Nikola Tesla", "Alexander Graham Bell", "James Watt", "Thomas Edison"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Spain?", options: ["Barcelona", "Seville", "Madrid", "Valencia"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is the tallest?", options: ["Giraffe", "Elephant", "Ostrich", "Polar bear"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the primary color of a ruby?", options: ["Blue", "Green", "Red", "Yellow"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Catcher in the Rye'?", options: ["J.D. Salinger", "J.D. Salinger", "Harper Lee", "Mark Twain"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Russia?", options: ["Saint Petersburg", "Kiev", "Novosibirsk", "Moscow"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is used in pencils?", options: ["Lead", "Graphite", "Charcoal", "Carbon"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered electricity?", options: ["Albert Einstein", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest country by land area?", options: ["Russia", "Canada", "USA", "China"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is called the 'Blue Planet'?", options: ["Neptune", "Uranus", "Earth", "Venus"], correct: 2 },

  // 81-100
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Hamlet'?", options: ["Christopher Marlowe", "Ben Jonson", "John Milton", "William Shakespeare"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the smallest ocean?", options: ["Arctic", "Southern", "Indian", "Atlantic"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national animal of Australia?", options: ["Koala", "Platypus", "Kangaroo", "Wombat"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who developed the World Wide Web?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which instrument is used to measure wind speed?", options: ["Barometer", "Hygrometer", "Thermometer", "Anemometer"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who is the Greek god of the sea?", options: ["Zeus", "Poseidon", "Hades", "Apollo"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is known for its black and white stripes?", options: ["Zebra", "Okapi", "Tapir", "Panda"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the chemical symbol for silver?", options: ["Si", "Sl", "Sv", "Ag"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Guernica'?", options: ["Salvador Dalí", "Francisco Goya", "Pablo Picasso", "Diego Rivera"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest river in South America?", options: ["Amazon", "Paraná", "Orinoco", "São Francisco"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known for its Great Red Spot?", options: ["Saturn", "Uranus", "Jupiter", "Neptune"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Adventures of Tom Sawyer'?", options: ["Charles Dickens", "Mark Twain", "Herman Melville", "Nathaniel Hawthorne"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of South Africa?", options: ["Johannesburg", "Cape Town", "Durban", "Pretoria"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird is a symbol of peace?", options: ["Eagle", "Dove", "Owl", "Swan"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who was the first person to step on the Moon?", options: ["Buzz Aldrin", "Michael Collins", "Yuri Gagarin", "Neil Armstrong"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Argentina?", options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is the main component of natural gas?", options: ["Oxygen", "Propane", "Methane", "Ethane"], correct: 2 },

  // 101-120 (Pattern: D,B,A,C,C,A,D,B,B,A,D,C,A,C,B,D,B,D,A,C)
  { category: "General Knowledge", difficulty: "medium", question: "Which country is known as the 'Land of Fire and Ice'?", options: ["Norway", "Finland", "Greenland", "Iceland"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In", "Io"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed the 'Moonlight Sonata'?", options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest species of shark?", options: ["Great white shark", "Tiger shark", "Whale shark", "Hammerhead shark"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which U.S. state is known as the 'Sunshine State'?", options: ["California", "Texas", "Florida", "Arizona"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Picture of Dorian Gray'?", options: ["Charles Dickens", "Oscar Wilde", "Bram Stoker", "Mary Shelley"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Turkey?", options: ["Istanbul", "Izmir", "Antalya", "Ankara"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which vitamin is produced when human skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin E"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the deepest ocean in the world?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who is the Greek god of the underworld?", options: ["Hades", "Ares", "Apollo", "Hermes"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country has the most natural lakes?", options: ["USA", "Russia", "Finland", "Canada"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main ingredient in traditional hummus?", options: ["Lentils", "Black beans", "Chickpeas", "Fava beans"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Birth of Venus'?", options: ["Sandro Botticelli", "Titian", "Caravaggio", "Raphael"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the symbol 'K'?", options: ["Krypton", "Calcium", "Potassium", "Sodium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest wall in the world?", options: ["Hadrian's Wall", "Great Wall of China", "Berlin Wall", "Walls of Babylon"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Jungle Book'?", options: ["Lewis Carroll", "H.G. Wells", "Jules Verne", "Rudyard Kipling"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of coffee?", options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national sport of Canada?", options: ["Ice hockey", "Soccer", "Baseball", "Lacrosse"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the structure of DNA?", options: ["Watson and Crick", "Mendel", "Darwin", "Hooke"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which desert is the largest non-polar desert?", options: ["Gobi", "Arabian", "Sahara", "Kalahari"], correct: 2 },

  // 121-140
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Portugal?", options: ["Porto", "Faro", "Coimbra", "Lisbon"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The School of Athens'?", options: ["Donatello", "Raphael", "Michelangelo", "Leonardo da Vinci"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Pluto"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main ingredient in traditional pesto?", options: ["Spinach", "Kale", "Basil", "Parsley"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Adventures of Huckleberry Finn'?", options: ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Edgar Allan Poe"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest by population?", options: ["India", "China", "USA", "Indonesia"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the chemical symbol for tin?", options: ["Ti", "Tn", "T", "Sn"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the printing press?", options: ["William Caxton", "Johannes Gutenberg", "Aldus Manutius", "Johnannes Kepler"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest mountain range in the world?", options: ["Himalayas", "Andes", "Rocky Mountains", "Ural Mountains"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Ice Giant'?", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Thailand?", options: ["Chiang Mai", "Phuket", "Pattaya", "Bangkok"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'War and Peace'?", options: ["Fyodor Dostoevsky", "Ivan Turgenev", "Leo Tolstoy", "Alexander Pushkin"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest bay in the world?", options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bay of Biscay"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Theresa May", "Margaret Thatcher", "Indira Gandhi", "Angela Merkel"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Argentina?", options: ["Córdoba", "Rosario", "Mendoza", "Buenos Aires"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is the largest living primate?", options: ["Gorilla", "Eastern gorilla", "Orangutan", "Chimpanzee"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of wine?", options: ["France", "Spain", "USA", "Italy"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Water Lilies'?", options: ["Claude Monet", "Pierre-Auguste Renoir", "Edgar Degas", "Édouard Manet"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of the Netherlands?", options: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"], correct: 2 },

  // 141-160
  { category: "General Knowledge", difficulty: "medium", question: "Which ocean is the warmest?", options: ["Atlantic", "Southern", "Arctic", "Indian"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Call of the Wild'?", options: ["Jack London", "Jack London", "Ernest Hemingway", "Mark Twain"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national flower of India?", options: ["Lotus", "Rose", "Marigold", "Jasmine"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the highest melting point?", options: ["Tungsten", "Iron", "Carbon", "Platinum"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest desert in Asia?", options: ["Arabian", "Thar", "Gobi", "Taklamakan"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered radium?", options: ["Albert Einstein", "Marie Curie", "Pierre Curie", "Ernest Rutherford"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Sweden?", options: ["Gothenburg", "Malmö", "Uppsala", "Stockholm"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Ringed Planet'?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Little Prince'?", options: ["Antoine de Saint-Exupéry", "Albert Camus", "Jean-Paul Sartre", "Victor Hugo"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Kenya?", options: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest fish in the ocean?", options: ["Marlin", "Swordfish", "Tuna", "Sailfish"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the modern alternating current (AC) system?", options: ["Thomas Edison", "George Westinghouse", "Nikola Tesla", "Michael Faraday"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest river in Africa?", options: ["Nile", "Congo", "Niger", "Zambezi"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal has the longest lifespan?", options: ["Elephant", "Bowhead whale", "Greenland shark", "Galápagos tortoise"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Garden of Earthly Delights'?", options: ["Jan van Eyck", "Hieronymus Bosch", "Pieter Bruegel", "Rogier van der Weyden"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Denmark?", options: ["Aarhus", "Odense", "Aalborg", "Copenhagen"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of vanilla?", options: ["Mexico", "Madagascar", "Indonesia", "India"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Metamorphosis'?", options: ["Franz Kafka", "Franz Kafka", "Thomas Mann", "Hermann Hesse"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Chile?", options: ["Santiago", "Valparaíso", "Concepción", "Viña del Mar"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which gas is known as 'laughing gas'?", options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Sulfur dioxide"], correct: 2 },

  // 161-180
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest volcano on Earth?", options: ["Mauna Kea", "Mount Fuji", "Mount Vesuvius", "Mauna Loa"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Don Quixote'?", options: ["Gabriel García Márquez", "Miguel de Cervantes", "Jorge Luis Borges", "Mario Vargas Llosa"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national bird of the United States?", options: ["Bald eagle", "Golden eagle", "Turkey", "Blue jay"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the symbol 'Pb'?", options: ["Platinum", "Palladium", "Lead", "Phosphorus"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest river in Europe?", options: ["Danube", "Rhine", "Volga", "Dnieper"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the circulation of blood?", options: ["Hippocrates", "William Harvey", "Galen", "Andreas Vesalius"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Poland?", options: ["Kraków", "Wrocław", "Gdańsk", "Warsaw"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal can hold its breath the longest?", options: ["Elephant seal", "Cuvier's beaked whale", "Sperm whale", "Green sea turtle"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Four Seasons'?", options: ["Antonio Vivaldi", "Johann Sebastian Bach", "George Frideric Handel", "Wolfgang Amadeus Mozart"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Belgium?", options: ["Antwerp", "Ghent", "Brussels", "Bruges"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the smallest country in South America?", options: ["Uruguay", "Paraguay", "Guyana", "Suriname"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Stranger'?", options: ["Jean-Paul Sartre", "Albert Camus", "Simone de Beauvoir", "André Gide"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national dish of Spain?", options: ["Paella", "Gazpacho", "Tortilla española", "Jamón ibérico"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the shortest day?", options: ["Mercury", "Mars", "Jupiter", "Saturn"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Night Watch'?", options: ["Johannes Vermeer", "Rembrandt", "Frans Hals", "Jan Steen"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Norway?", options: ["Bergen", "Trondheim", "Stavanger", "Oslo"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country has the most time zones?", options: ["USA", "Russia", "Canada", "Australia"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Color Purple'?", options: ["Toni Morrison", "Maya Angelou", "Zora Neale Hurston", "Alice Walker"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Hungary?", options: ["Budapest", "Debrecen", "Szeged", "Miskolc"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is the primary component of steel?", options: ["Carbon", "Chromium", "Iron", "Nickel"], correct: 2 },

  // 181-200
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest living bird?", options: ["Emu", "Cassowary", "Southern royal albatross", "Ostrich"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the World Wide Web?", options: ["Vinton Cerf", "Tim Berners-Lee", "Robert Kahn", "Larry Roberts"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest railway platform in the world?", options: ["Gorakhpur", "Kharagpur", "Chicago", "London"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Austria?", options: ["Salzburg", "Innsbruck", "Vienna", "Graz"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Kiss'?", options: ["Egon Schiele", "Gustav Klimt", "Oskar Kokoschka", "Edvard Munch"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest island in the Mediterranean?", options: ["Corsica", "Crete", "Sardinia", "Sicily"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country has the highest number of UNESCO World Heritage Sites?", options: ["Spain", "Italy", "France", "China"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Sun Also Rises'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Ireland?", options: ["Dublin", "Cork", "Galway", "Limerick"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which metal is liquid at room temperature?", options: ["Gallium", "Cesium", "Mercury", "Bromine"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest continental mountain range?", options: ["Himalayas", "Rocky Mountains", "Andes", "Andes"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered penicillin?", options: ["Louis Pasteur", "Alexander Fleming", "Joseph Lister", "Robert Koch"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest freshwater lake by volume?", options: ["Baikal", "Tanganyika", "Superior", "Michigan"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Finland?", options: ["Turku", "Tampere", "Helsinki", "Oulu"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Magic Flute'?", options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Giuseppe Verdi", "Richard Wagner"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national animal of Scotland?", options: ["Red deer", "Unicorn", "Highland cow", "Unicorn"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of diamonds?", options: ["Canada", "Russia", "Botswana", "Democratic Republic of Congo"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Old Man and the Sea'?", options: ["Herman Melville", "Ernest Hemingway", "Joseph Conrad", "Jack London"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Greece?", options: ["Athens", "Thessaloniki", "Patras", "Heraklion"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest living marsupial?", options: ["Koala", "Wallaby", "Red kangaroo", "Wombat"], correct: 2 },

  // 201-220 (Pattern continues...)
  { category: "General Knowledge", difficulty: "medium", question: "What is the national flower of England?", options: ["Thistle", "Daffodil", "Shamrock", "Rose"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is the main component of the Earth's core?", options: ["Silicon", "Iron", "Nickel", "Magnesium"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Sound and the Fury'?", options: ["William Faulkner", "Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Vietnam?", options: ["Ho Chi Minh City", "Da Nang", "Hanoi", "Hai Phong"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest species of penguin?", options: ["King penguin", "Adelie penguin", "Emperor penguin", "Gentoo penguin"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the steam engine?", options: ["George Stephenson", "James Watt", "Richard Trevithick", "Thomas Newcomen"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Saudi Arabia?", options: ["Mecca", "Medina", "Jeddah", "Riyadh"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the most volcanoes?", options: ["Earth", "Venus", "Mars", "Io"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Three Musicians'?", options: ["Diego Rivera", "Pablo Picasso", "Frida Kahlo", "Salvador Dalí"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the main language spoken in Argentina?", options: ["Spanish", "Portuguese", "Italian", "French"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest coral reef system?", options: ["Belize Barrier Reef", "New Caledonia Barrier Reef", "Red Sea Coral Reef", "Great Barrier Reef"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Invisible Man' (the novel)?", options: ["H.G. Wells", "Ralph Ellison", "H.G. Wells", "Jules Verne"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Pakistan?", options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which gas is responsible for the smell of rotten eggs?", options: ["Sulfur dioxide", "Methane", "Hydrogen sulfide", "Ammonia"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the neutron?", options: ["Ernest Rutherford", "James Chadwick", "J.J. Thomson", "Niels Bohr"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Malaysia?", options: ["Penang", "Johor Bahru", "Malacca", "Kuala Lumpur"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is known to have three hearts?", options: ["Squid", "Octopus", "Starfish", "Jellyfish"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Blue Danube'?", options: ["Johann Sebastian Bach", "Ludwig van Beethoven", "Franz Liszt", "Johann Strauss II"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Peru?", options: ["Lima", "Cusco", "Arequipa", "Trujillo"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has a day longer than its year?", options: ["Mercury", "Mars", "Venus", "Pluto"], correct: 2 },

  // 221-240
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest stadium in the world by capacity?", options: ["Michigan Stadium", "Camp Nou", "FNB Stadium", "Rungrado 1st of May Stadium"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the airplane?", options: ["Wright brothers", "Wright brothers", "Glenn Curtiss", "Alberto Santos-Dumont"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the national animal of China?", options: ["Giant panda", "Red-crowned crane", "Golden monkey", "Chinese dragon"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is the most abundant in the universe?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Moby-Dick'?", options: ["Nathaniel Hawthorne", "Mark Twain", "Herman Melville", "Edgar Allan Poe"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Switzerland?", options: ["Zurich", "Bern", "Geneva", "Basel"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the world's largest salt flat?", options: ["Bonneville Salt Flats", "Etosha pan", "Salar de Atacama", "Salar de Uyuni"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the electron?", options: ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Niels Bohr"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Nigeria?", options: ["Lagos", "Abuja", "Kano", "Ibadan"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird can fly backwards?", options: ["Hummingbird", "Kingfisher", "Swift", "Woodpecker"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest river in Asia?", options: ["Mekong", "Indus", "Ganges", "Yangtze"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Brave New World'?", options: ["George Orwell", "Ray Bradbury", "Aldous Huxley", "Kurt Vonnegut"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Colombia?", options: ["Bogotá", "Medellín", "Cali", "Cartagena"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which metal is the best conductor of electricity?", options: ["Copper", "Gold", "Silver", "Aluminum"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Hay Wain'?", options: ["J.M.W. Turner", "John Constable", "Thomas Gainsborough", "William Hogarth"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Czech Republic?", options: ["Brno", "Ostrava", "Plzeň", "Prague"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which mammal is known to lay eggs?", options: ["Echidna", "Platypus", "Opossum", "Pangolin"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Hound of the Baskervilles'?", options: ["Agatha Christie", "Arthur Conan Doyle", "Wilkie Collins", "Edgar Allan Poe"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Venezuela?", options: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest flower in the world?", options: ["Titan arum", "Jade vine", "Rafflesia arnoldii", "Hibiscus"], correct: 2 },

  // 241-260
  { category: "General Knowledge", difficulty: "medium", question: "Which country has the most islands?", options: ["Finland", "Canada", "Indonesia", "Sweden"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the laser?", options: ["Gordon Gould", "Theodore Maiman", "Charles Townes", "Arthur Schawlow"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Morocco?", options: ["Rabat", "Casablanca", "Marrakesh", "Fes"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the deepest lake in the world?", options: ["Lake Tanganyika", "Lake Superior", "Lake Baikal", "Lake Vostok"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Canterbury Tales'?", options: ["John Milton", "William Langland", "Geoffrey Chaucer", "Sir Thomas Malory"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Cuba?", options: ["Santiago de Cuba", "Havana", "Camagüey", "Holguín"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the world's largest bay?", options: ["Gulf of Mexico", "Hudson Bay", "Bay of Bengal", "Bay of Bengal"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the law of gravity?", options: ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Albert Einstein"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of New Zealand?", options: ["Auckland", "Wellington", "Christchurch", "Hamilton"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest land animal over short distances?", options: ["Cheetah", "Pronghorn", "Lion", "Springbok"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest glacier in the world?", options: ["Lambert Glacier", "Perito Moreno", "Vatnajökull", "Lambert Glacier"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Frankenstein'?", options: ["Bram Stoker", "Edgar Allan Poe", "Mary Shelley", "Robert Louis Stevenson"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Ireland?", options: ["Dublin", "Cork", "Limerick", "Galway"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is used in thermometers?", options: ["Alcohol", "Mercury", "Mercury", "Gallium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Arnolfini Portrait'?", options: ["Rogier van der Weyden", "Jan van Eyck", "Hans Memling", "Hieronymus Bosch"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Romania?", options: ["Cluj-Napoca", "Timișoara", "Iași", "Bucharest"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal has the largest eyes?", options: ["Blue whale", "Giant squid", "Ostrich", "Elephant"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Tell-Tale Heart'?", options: ["Herman Melville", "Edgar Allan Poe", "Nathaniel Hawthorne", "Washington Irving"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Ukraine?", options: ["Kyiv", "Lviv", "Odesa", "Kharkiv"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the strongest winds?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: 2 },

  // 261-280
  { category: "General Knowledge", difficulty: "medium", question: "Which is the driest non-polar desert?", options: ["Sahara", "Gobi", "Atacama", "Atacama"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the telephone?", options: ["Antonio Meucci", "Alexander Graham Bell", "Elisha Gray", "Thomas Edison"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Ghana?", options: ["Accra", "Kumasi", "Sekondi", "Tamale"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest mammal?", options: ["Elephant", "Blue whale", "Blue whale", "Sperm whale"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Grapes of Wrath'?", options: ["Ernest Hemingway", "William Faulkner", "John Steinbeck", "John Dos Passos"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Iceland?", options: ["Akureyri", "Reykjavík", "Keflavík", "Hafnarfjörður"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest river in the United States?", options: ["Mississippi", "Missouri", "Yukon", "Missouri"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered X-rays?", options: ["Henri Becquerel", "Wilhelm Röntgen", "Marie Curie", "Ernest Rutherford"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Jordan?", options: ["Amman", "Amman", "Aqaba", "Zarqa"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest living reptile?", options: ["Saltwater crocodile", "Nile crocodile", "American alligator", "Komodo dragon"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the highest waterfall in the world?", options: ["Niagara Falls", "Iguazu Falls", "Victoria Falls", "Angel Falls"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Scarlet Letter'?", options: ["Herman Melville", "Edgar Allan Poe", "Nathaniel Hawthorne", "Henry James"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Sri Lanka?", options: ["Colombo", "Kandy", "Galle", "Jaffna"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the symbol 'Na'?", options: ["Nickel", "Nitrogen", "Sodium", "Neon"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Dance' (by Matisse)?", options: ["Pablo Picasso", "Henri Matisse", "André Derain", "Maurice de Vlaminck"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Ethiopia?", options: ["Addis Ababa", "Addis Ababa", "Dire Dawa", "Gondar"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird is the national symbol of the United States?", options: ["Bald eagle", "Golden eagle", "Turkey", "Osprey"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Shining'?", options: ["Stephen King", "Stephen King", "Dean Koontz", "Clive Barker"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bulgaria?", options: ["Sofia", "Plovdiv", "Varna", "Burgas"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the largest volcano in the solar system?", options: ["Earth", "Venus", "Mars", "Jupiter"], correct: 2 },

  // 281-300
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest hot desert?", options: ["Arabian", "Gobi", "Sahara", "Sahara"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the modern periodic table?", options: ["John Newlands", "Dmitri Mendeleev", "Lothar Meyer", "Antoine Lavoisier"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bolivia?", options: ["Sucre", "La Paz", "Cochabamba", "Santa Cruz"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest bird in level flight?", options: ["Peregrine falcon", "Golden eagle", "Common swift", "Frigatebird"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Lord of the Rings'?", options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "C.S. Lewis"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bangladesh?", options: ["Chittagong", "Dhaka", "Khulna", "Rajshahi"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest rodent in the world?", options: ["Beaver", "Porcupine", "Capybara", "Capybara"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the process of pasteurization?", options: ["Joseph Lister", "Louis Pasteur", "Robert Koch", "Edward Jenner"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Serbia?", options: ["Belgrade", "Novi Sad", "Niš", "Subotica"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest lake in Africa?", options: ["Lake Malawi", "Lake Tanganyika", "Lake Victoria", "Lake Turkana"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is used in light bulbs as a filament?", options: ["Carbon", "Tungsten", "Tungsten", "Tungsten"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Handmaid's Tale'?", options: ["Margaret Atwood", "Margaret Atwood", "Ursula K. Le Guin", "Toni Morrison"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Slovenia?", options: ["Ljubljana", "Maribor", "Celje", "Kranj"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which mammal can truly fly?", options: ["Flying squirrel", "Colugo", "Bat", "Sugar glider"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Card Players'?", options: ["Vincent van Gogh", "Paul Cézanne", "Paul Cézanne", "Édouard Manet"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Croatia?", options: ["Split", "Rijeka", "Osijek", "Zagreb"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of olive oil?", options: ["Italy", "Spain", "Greece", "Turkey"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Adventures of Sherlock Holmes'?", options: ["Agatha Christie", "Arthur Conan Doyle", "Dorothy L. Sayers", "G.K. Chesterton"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Ecuador?", options: ["Quito", "Guayaquil", "Cuenca", "Machala"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest species of tiger?", options: ["Bengal tiger", "Indochinese tiger", "Siberian tiger", "Malayan tiger"], correct: 2 },

  // 301-320
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of cocoa beans?", options: ["Ghana", "Indonesia", "Nigeria", "Ivory Coast"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Three Musketeers'?", options: ["Victor Hugo", "Alexandre Dumas", "Jules Verne", "Gaston Leroux"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Mongolia?", options: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest species of bear?", options: ["Grizzly bear", "Polar bear", "Kodiak bear", "Brown bear"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Las Meninas'?", options: ["Francisco Goya", "El Greco", "Diego Velázquez", "Bartolomé Esteban Murillo"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Tunisia?", options: ["Sfax", "Tunis", "Sousse", "Kairouan"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the deepest ocean trench?", options: ["Philippine Trench", "Tonga Trench", "Kuril–Kamchatka Trench", "Mariana Trench"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the seismograph?", options: ["John Milne", "Zhang Heng", "Charles Richter", "Beno Gutenberg"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Nepal?", options: ["Pokhara", "Kathmandu", "Lalitpur", "Bhaktapur"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird lays the largest eggs?", options: ["Ostrich", "Emu", "Cassowary", "Rhea"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of uranium?", options: ["Australia", "Canada", "Namibia", "Kazakhstan"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Secret Garden'?", options: ["Louisa May Alcott", "L.M. Montgomery", "Frances Hodgson Burnett", "E. Nesbit"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Lebanon?", options: ["Beirut", "Tripoli", "Sidon", "Tyre"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which metal is extracted from bauxite?", options: ["Copper", "Zinc", "Aluminum", "Iron"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Nutcracker'?", options: ["Sergei Prokofiev", "Pyotr Ilyich Tchaikovsky", "Igor Stravinsky", "Nikolai Rimsky-Korsakov"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Jamaica?", options: ["Montego Bay", "Spanish Town", "Portmore", "Kingston"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal has the longest migration?", options: ["Wildebeest", "Arctic tern", "Humpback whale", "Monarch butterfly"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Raft of the Medusa'?", options: ["Jacques-Louis David", "Théodore Géricault", "Eugène Delacroix", "Jean-Auguste-Dominique Ingres"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Uruguay?", options: ["Montevideo", "Salto", "Punta del Este", "Colonia del Sacramento"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Evening Star'?", options: ["Mars", "Jupiter", "Venus", "Mercury"], correct: 2 },

  // 321-340
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest active volcano on Earth?", options: ["Kīlauea", "Mount Etna", "Mauna Loa", "Mauna Loa"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Wonderful Wizard of Oz'?", options: ["L. Frank Baum", "L. Frank Baum", "Lewis Carroll", "J.M. Barrie"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Afghanistan?", options: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the smallest bird in the world?", options: ["Bee hummingbird", "Goldcrest", "Bee hummingbird", "Weebill"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered radioactivity?", options: ["Marie Curie", "Pierre Curie", "Henri Becquerel", "Ernest Rutherford"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Latvia?", options: ["Riga", "Riga", "Daugavpils", "Liepāja"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest island in the world?", options: ["Australia", "Antarctica", "Greenland", "Greenland"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Chronicles of Narnia'?", options: ["J.R.R. Tolkien", "C.S. Lewis", "Philip Pullman", "J.K. Rowling"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bolivia?", options: ["Sucre", "La Paz", "Cochabamba", "Santa Cruz"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest fish in the ocean?", options: ["Marlin", "Swordfish", "Sailfish", "Tuna"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the longest bridge in the world (by total length)?", options: ["Hong Kong–Zhuhai–Macau Bridge", "Danyang–Kunshan Grand Bridge", "Lake Pontchartrain Causeway", "Danyang–Kunshan Grand Bridge"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Birth of Venus' (Botticelli)?", options: ["Sandro Botticelli", "Sandro Botticelli", "Titian", "Raphael"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Panama?", options: ["Panama City", "Colón", "David", "Santiago"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the highest electrical conductivity?", options: ["Copper", "Gold", "Silver", "Aluminum"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Four Seasons' (Vivaldi)?", options: ["Antonio Vivaldi", "Antonio Vivaldi", "Johann Sebastian Bach", "George Frideric Handel"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Oman?", options: ["Salalah", "Sohar", "Nizwa", "Muscat"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which mammal is the largest land carnivore?", options: ["Polar bear", "Polar bear", "Kodiak bear", "Tiger"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'A Tale of Two Cities'?", options: ["Charles Dickens", "Charles Dickens", "Victor Hugo", "Alexandre Dumas"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Paraguay?", options: ["Asunción", "Ciudad del Este", "Encarnación", "San Lorenzo"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is called the 'Gas Giant'?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], correct: 2 },

  // 341-360
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest lake in South America?", options: ["Lake Titicaca", "Lake Maracaibo", "Lake Titicaca", "Lake Titicaca"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the parachute?", options: ["Leonardo da Vinci", "Louis-Sébastien Lenormand", "André-Jacques Garnerin", "Fausto Veranzio"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Estonia?", options: ["Tallinn", "Tartu", "Narva", "Pärnu"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest spider in the world?", options: ["Goliath birdeater", "Brazilian wandering spider", "Goliath birdeater", "Huntsman spider"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the circulation of blood?", options: ["William Harvey", "William Harvey", "Galen", "Andreas Vesalius"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Sudan?", options: ["Omdurman", "Khartoum", "Port Sudan", "Kassala"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest lake in the world (by surface area)?", options: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Caspian Sea"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Picture of Dorian Gray'?", options: ["Oscar Wilde", "Oscar Wilde", "Bram Stoker", "Mary Shelley"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Belarus?", options: ["Minsk", "Gomel", "Mogilev", "Vitebsk"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is known for its black and white stripes?", options: ["Zebra", "Okapi", "Zebra", "Tapir"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the highest mountain peak in Africa?", options: ["Mount Kenya", "Mount Stanley", "Mount Meru", "Kilimanjaro"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Scream' (Munch)?", options: ["Edvard Munch", "Edvard Munch", "Gustav Klimt", "Egon Schiele"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Slovenia?", options: ["Ljubljana", "Maribor", "Celje", "Kranj"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is the main component of the Sun?", options: ["Helium", "Carbon", "Hydrogen", "Oxygen"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The War of the Worlds'?", options: ["H.G. Wells", "H.G. Wells", "Jules Verne", "Ray Bradbury"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Lithuania?", options: ["Kaunas", "Klaipėda", "Šiauliai", "Vilnius"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of wheat?", options: ["India", "China", "Russia", "United States"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'Symphony No. 5' (Beethoven)?", options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Franz Schubert", "Johannes Brahms"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Mozambique?", options: ["Maputo", "Beira", "Nampula", "Matola"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest species of dolphin?", options: ["Bottlenose dolphin", "Common dolphin", "Orca (killer whale)", "Amazon river dolphin"], correct: 2 },

  // 361-380
  { category: "General Knowledge", difficulty: "medium", question: "Which is the highest waterfall in Europe?", options: ["Rhine Falls", "Krimml Falls", "Gullfoss", "Vinnufossen"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the radio?", options: ["Nikola Tesla", "Guglielmo Marconi", "Heinrich Hertz", "Alexander Popov"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Singapore?", options: ["Singapore", "Jurong", "Woodlands", "Tampines"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest growing plant?", options: ["Bamboo", "Kudzu", "Bamboo", "Duckweed"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the structure of DNA?", options: ["Watson and Crick", "Watson and Crick", "Rosalind Franklin", "Maurice Wilkins"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Senegal?", options: ["Thiès", "Dakar", "Saint-Louis", "Touba"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest continental mountain range?", options: ["Himalayas", "Rocky Mountains", "Andes", "Andes"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Adventures of Pinocchio'?", options: ["Carlo Collodi", "Carlo Collodi", "Hans Christian Andersen", "Lewis Carroll"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Honduras?", options: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choluteca"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal has the longest lifespan?", options: ["Bowhead whale", "Greenland shark", "Greenland shark", "Galápagos tortoise"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest canyon in the world?", options: ["Grand Canyon", "Copper Canyon", "Fish River Canyon", "Yarlung Tsangpo Grand Canyon"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Girl with a Pearl Earring'?", options: ["Rembrandt", "Johannes Vermeer", "Frans Hals", "Jan Steen"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Cameroon?", options: ["Yaoundé", "Douala", "Garoua", "Bamenda"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is the main component of natural gas?", options: ["Ethane", "Propane", "Methane", "Butane"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Sun Also Rises'?", options: ["Ernest Hemingway", "Ernest Hemingway", "F. Scott Fitzgerald", "John Dos Passos"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Albania?", options: ["Durrës", "Vlorë", "Shkodër", "Tirana"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird is the national bird of India?", options: ["Peacock", "Peacock", "Eagle", "Hornbill"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'Clair de Lune'?", options: ["Maurice Ravel", "Claude Debussy", "Erik Satie", "Camille Saint-Saëns"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Kyrgyzstan?", options: ["Bishkek", "Osh", "Jalal-Abad", "Karakol"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Saturn", "Uranus"], correct: 2 },

  // 381-400
  { category: "General Knowledge", difficulty: "medium", question: "What is the largest lake in Canada?", options: ["Great Bear Lake", "Great Slave Lake", "Lake Winnipeg", "Great Bear Lake"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the dynamo?", options: ["Michael Faraday", "Michael Faraday", "Nikola Tesla", "Thomas Edison"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Myanmar?", options: ["Naypyidaw", "Yangon", "Mandalay", "Bagan"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest land animal over long distances?", options: ["Cheetah", "Pronghorn", "Pronghorn", "Horse"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the antibiotic penicillin?", options: ["Alexander Fleming", "Alexander Fleming", "Howard Florey", "Ernst Chain"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Zambia?", options: ["Kitwe", "Lusaka", "Ndola", "Livingstone"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest river in the United Kingdom?", options: ["Thames", "Severn", "Trent", "Severn"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Strange Case of Dr Jekyll and Mr Hyde'?", options: ["Robert Louis Stevenson", "Robert Louis Stevenson", "Bram Stoker", "H.G. Wells"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of North Korea?", options: ["Pyongyang", "Hamhung", "Chongjin", "Nampo"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest living primate?", options: ["Gorilla", "Eastern gorilla", "Eastern gorilla", "Orangutan"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the deepest point in the Atlantic Ocean?", options: ["Mariana Trench", "Philippine Trench", "Tonga Trench", "Puerto Rico Trench"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Garden of Earthly Delights' (Bosch)?", options: ["Hieronymus Bosch", "Hieronymus Bosch", "Pieter Bruegel", "Jan van Eyck"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Angola?", options: ["Luanda", "Huambo", "Lobito", "Benguela"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the highest melting point?", options: ["Tungsten", "Carbon", "Carbon", "Rhenium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Count of Monte Cristo'?", options: ["Alexandre Dumas", "Alexandre Dumas", "Victor Hugo", "Honoré de Balzac"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Madagascar?", options: ["Toamasina", "Antsirabe", "Mahajanga", "Antananarivo"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is known as the 'ship of the desert'?", options: ["Camel", "Camel", "Dromedary", "Llama"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Marriage of Figaro'?", options: ["Wolfgang Amadeus Mozart", "Wolfgang Amadeus Mozart", "Gioachino Rossini", "Giuseppe Verdi"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Guatemala?", options: ["Guatemala City", "Quetzaltenango", "Antigua", "Escuintla"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is often called Earth's 'sister planet'?", options: ["Mars", "Mercury", "Venus", "Jupiter"], correct: 2 },

  // 401-420
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of copper?", options: ["Peru", "China", "United States", "Chile"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Iliad'?", options: ["Sophocles", "Homer", "Virgil", "Euripides"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Syria?", options: ["Damascus", "Aleppo", "Homs", "Latakia"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest coral reef in the world?", options: ["Belize Barrier Reef", "New Caledonia Barrier Reef", "Great Barrier Reef", "Red Sea Coral Reef"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the law of universal gravitation?", options: ["Isaac Newton", "Albert Einstein", "Isaac Newton", "Galileo Galilei"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bolivia (administrative)?", options: ["Sucre", "La Paz", "Cochabamba", "Santa Cruz"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the deepest lake in the world?", options: ["Lake Tanganyika", "Lake Superior", "Lake Vostok", "Lake Baikal"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the electric battery?", options: ["Benjamin Franklin", "Alessandro Volta", "Luigi Galvani", "Michael Faraday"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Turkmenistan?", options: ["Turkmenabat", "Ashgabat", "Mary", "Dashoguz"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird is the fastest in a dive?", options: ["Peregrine falcon", "Golden eagle", "Gyrfalcon", "Swift"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country has the highest number of volcanoes?", options: ["Japan", "United States", "Russia", "Indonesia"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Time Machine'?", options: ["H.G. Wells", "Jules Verne", "H.G. Wells", "Ray Bradbury"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Libya?", options: ["Tripoli", "Benghazi", "Misrata", "Tobruk"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest species of seal?", options: ["Leopard seal", "Weddell seal", "Southern elephant seal", "Northern elephant seal"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Starry Night' (van Gogh)?", options: ["Vincent van Gogh", "Vincent van Gogh", "Paul Gauguin", "Henri de Toulouse-Lautrec"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Tajikistan?", options: ["Khujand", "Qurghonteppa", "Kulob", "Dushanbe"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which mammal has the longest gestation period?", options: ["Elephant", "African elephant", "Rhinoceros", "Giraffe"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'Ride of the Valkyries'?", options: ["Johann Strauss II", "Richard Wagner", "Franz Liszt", "Gustav Mahler"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Eritrea?", options: ["Asmara", "Massawa", "Keren", "Assab"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Jupiter", "Mars", "Mercury"], correct: 2 },

  // 421-440
  { category: "General Knowledge", difficulty: "medium", question: "Which is the highest mountain peak outside Asia?", options: ["Mount Elbrus", "Denali", "Aconcagua", "Aconcagua"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the mechanical computer (analytical engine)?", options: ["Charles Babbage", "Charles Babbage", "Alan Turing", "John von Neumann"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bosnia and Herzegovina?", options: ["Sarajevo", "Banja Luka", "Mostar", "Tuzla"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest fish in the world?", options: ["Great white shark", "Basking shark", "Whale shark", "Manta ray"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the neutron?", options: ["James Chadwick", "James Chadwick", "Ernest Rutherford", "J.J. Thomson"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Uganda?", options: ["Jinja", "Kampala", "Entebbe", "Gulu"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest desert in the world (non-polar)?", options: ["Arabian", "Gobi", "Sahara", "Sahara"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Jungle Book'?", options: ["Rudyard Kipling", "Rudyard Kipling", "R.M. Ballantyne", "H. Rider Haggard"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Kosovo?", options: ["Pristina", "Prizren", "Mitrovica", "Peć"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal has the largest brain?", options: ["Elephant", "Sperm whale", "Sperm whale", "Human"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest railway line in the world?", options: ["Trans-Siberian Railway", "Trans-Mongolian Railway", "China–Europe Railway", "Trans-Siberian Railway"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Water Lilies' (Monet)?", options: ["Claude Monet", "Claude Monet", "Pierre-Auguste Renoir", "Édouard Manet"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Malawi?", options: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the symbol 'Fe'?", options: ["Fluorine", "Fermium", "Iron", "Francium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Canterbury Tales'?", options: ["Geoffrey Chaucer", "Geoffrey Chaucer", "William Langland", "John Gower"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Montenegro?", options: ["Nikšić", "Podgorica", "Cetinje", "Podgorica"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of natural gas?", options: ["Russia", "United States", "Iran", "Qatar"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Well-Tempered Clavier'?", options: ["Johann Sebastian Bach", "Johann Sebastian Bach", "George Frideric Handel", "Antonio Vivaldi"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Fiji?", options: ["Suva", "Nadi", "Lautoka", "Labasa"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Blue Planet'?", options: ["Neptune", "Uranus", "Earth", "Saturn"], correct: 2 },

  // 441-460
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest island in the Mediterranean?", options: ["Sicily", "Sardinia", "Corsica", "Sicily"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the modern submarine?", options: ["John Holland", "John Holland", "Simon Lake", "David Bushnell"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Namibia?", options: ["Windhoek", "Walvis Bay", "Swakopmund", "Rundu"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the smallest continent by land area?", options: ["Europe", "Antarctica", "Australia", "South America"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the electron?", options: ["J.J. Thomson", "J.J. Thomson", "Ernest Rutherford", "Niels Bohr"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Yemen?", options: ["Aden", "Sana'a", "Taiz", "Al Hudaydah"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest freshwater lake by volume?", options: ["Lake Superior", "Lake Tanganyika", "Lake Baikal", "Lake Baikal"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Portrait of a Lady'?", options: ["Henry James", "Henry James", "Edith Wharton", "William Dean Howells"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of North Macedonia?", options: ["Skopje", "Bitola", "Tetovo", "Prilep"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal can survive the longest without water?", options: ["Camel", "Giraffe", "Kangaroo rat", "Oryx"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the highest active volcano in the world?", options: ["Cotopaxi", "Mount Etna", "Mount Vesuvius", "Nevado Ojos del Salado"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Kiss' (Klimt)?", options: ["Gustav Klimt", "Gustav Klimt", "Egon Schiele", "Oskar Kokoschka"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Papua New Guinea?", options: ["Port Moresby", "Lae", "Mount Hagen", "Madang"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element is a liquid at room temperature?", options: ["Bromine", "Mercury", "Mercury", "Gallium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Hunchback of Notre-Dame'?", options: ["Victor Hugo", "Victor Hugo", "Alexandre Dumas", "Gaston Leroux"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Azerbaijan?", options: ["Ganja", "Sumqayit", "Mingachevir", "Baku"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of silver?", options: ["Peru", "Mexico", "China", "Australia"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'Eine kleine Nachtmusik'?", options: ["Wolfgang Amadeus Mozart", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Joseph Haydn"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bhutan?", options: ["Thimphu", "Paro", "Punakha", "Phuntsholing"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the fastest rotation (shortest day)?", options: ["Saturn", "Jupiter", "Jupiter", "Neptune"], correct: 2 },

  // 461-480
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest river in China?", options: ["Yellow River", "Yangtze River", "Pearl River", "Yangtze River"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the first successful airplane?", options: ["Wright brothers", "Wright brothers", "Alberto Santos-Dumont", "Samuel Langley"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Niger?", options: ["Niamey", "Zinder", "Maradi", "Tahoua"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest penguin species?", options: ["Emperor penguin", "King penguin", "Emperor penguin", "Gentoo penguin"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered X-rays?", options: ["Wilhelm Röntgen", "Wilhelm Röntgen", "Henri Becquerel", "Marie Curie"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Somalia?", options: ["Hargeisa", "Mogadishu", "Kismayo", "Baidoa"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest canyon in the solar system?", options: ["Valles Marineris", "Grand Canyon", "Coprates Chasma", "Valles Marineris"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Divine Comedy'?", options: ["Dante Alighieri", "Dante Alighieri", "Giovanni Boccaccio", "Petrarch"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Gabon?", options: ["Libreville", "Port-Gentil", "Franceville", "Oyem"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which bird is the national symbol of New Zealand?", options: ["Kiwi", "Kea", "Kiwi", "Tui"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest stadium in the world by capacity?", options: ["Rungrado 1st of May Stadium", "Michigan Stadium", "Camp Nou", "Rungrado 1st of May Stadium"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'The Last Supper' (da Vinci)?", options: ["Leonardo da Vinci", "Leonardo da Vinci", "Michelangelo", "Raphael"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Burundi?", options: ["Gitega", "Bujumbura", "Ngozi", "Muyinga"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the symbol 'Pb'?", options: ["Platinum", "Phosphorus", "Lead", "Palladium"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Road Not Taken'?", options: ["Robert Frost", "Robert Frost", "Emily Dickinson", "Walt Whitman"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Lesotho?", options: ["Maseru", "Teyateyaneng", "Mafeteng", "Maseru"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of tea?", options: ["India", "China", "Kenya", "Sri Lanka"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'Boléro'?", options: ["Maurice Ravel", "Maurice Ravel", "Claude Debussy", "Igor Stravinsky"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Brunei?", options: ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet has the largest ring system?", options: ["Jupiter", "Uranus", "Saturn", "Neptune"], correct: 2 },

  // 481-500
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest ocean in the world?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who invented the light bulb (practical incandescent)?", options: ["Thomas Edison", "Thomas Edison", "Joseph Swan", "Nikola Tesla"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Mauritius?", options: ["Port Louis", "Beau Bassin-Rose Hill", "Curepipe", "Quatre Bornes"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the fastest land animal?", options: ["Cheetah", "Pronghorn", "Cheetah", "Lion"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who discovered the theory of evolution by natural selection?", options: ["Charles Darwin", "Charles Darwin", "Alfred Russel Wallace", "Jean-Baptiste Lamarck"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Rwanda?", options: ["Kigali", "Kigali", "Butare", "Gisenyi"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the largest mountain range in Europe?", options: ["Carpathians", "Alps", "Apennines", "Alps"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'Mrs. Dalloway'?", options: ["Virginia Woolf", "Virginia Woolf", "James Joyce", "E.M. Forster"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Djibouti?", options: ["Djibouti City", "Ali Sabieh", "Tadjoura", "Obock"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which animal is the largest reptile?", options: ["Saltwater crocodile", "Nile crocodile", "Saltwater crocodile", "Leatherback sea turtle"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Which is the longest river in South America?", options: ["Paraná", "Orinoco", "São Francisco", "Amazon"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Who painted 'Impression, Sunrise'?", options: ["Claude Monet", "Claude Monet", "Pierre-Auguste Renoir", "Camille Pissarro"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Cyprus?", options: ["Nicosia", "Limassol", "Larnaca", "Paphos"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which element has the symbol 'Au'?", options: ["Silver", "Aluminum", "Gold", "Argon"], correct: 2 },
  { category: "General Knowledge", difficulty: "medium", question: "Who wrote 'The Metamorphosis'?", options: ["Franz Kafka", "Franz Kafka", "Thomas Mann", "Hermann Hesse"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Iceland?", options: ["Reykjavík", "Akureyri", "Keflavík", "Reykjavík"], correct: 3 },
  { category: "General Knowledge", difficulty: "medium", question: "Which country is the largest producer of coffee?", options: ["Vietnam", "Brazil", "Colombia", "Ethiopia"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "Who composed 'The Firebird'?", options: ["Igor Stravinsky", "Igor Stravinsky", "Sergei Prokofiev", "Dmitri Shostakovich"], correct: 1 },
  { category: "General Knowledge", difficulty: "medium", question: "What is the capital of Bahrain?", options: ["Manama", "Riffa", "Muharraq", "Hamad Town"], correct: 0 },
  { category: "General Knowledge", difficulty: "medium", question: "Which planet is known as the 'Ice Giant' along with Neptune?", options: ["Jupiter", "Saturn", "Uranus", "Pluto"], correct: 2 }
];




function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ------------------- GAME LOGIC -------------------
const rooms = new Map(); // roomCode -> { host, players, gameStarted, totalQuestions, questions, currentQuestion }

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // 1. Create a new room
    socket.on('createRoom', ({ playerName, totalQuestions }) => {
        const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        socket.join(roomCode);
        rooms.set(roomCode, {
            host: socket.id,
            players: [{ id: socket.id, name: playerName, score: 0 }],
            gameStarted: false,
            totalQuestions: totalQuestions || 10,
            questions: null,
            currentQuestion: 0
        });
        socket.emit('roomCreated', { roomCode, players: rooms.get(roomCode).players });
    });

    // 2. Join an existing room
    socket.on('joinRoom', ({ roomCode, playerName }) => {
        const room = rooms.get(roomCode);
        if (!room) {
            socket.emit('error', { message: 'Room not found' });
            return;
        }
        if (room.gameStarted) {
            socket.emit('error', { message: 'Game already started' });
            return;
        }
        if (room.players.find(p => p.name === playerName)) {
            socket.emit('error', { message: 'Name already taken' });
            return;
        }
        socket.join(roomCode);
        room.players.push({ id: socket.id, name: playerName, score: 0 });
        rooms.set(roomCode, room);
        io.to(roomCode).emit('playersUpdated', room.players);
        socket.emit('roomJoined', { roomCode, players: room.players });
    });

    // 3. Start the game (only the host can do this)
    socket.on('startGame', ({ roomCode, totalQuestions }) => {
        const room = rooms.get(roomCode);
        if (!room) return;
        if (room.host !== socket.id) {
            socket.emit('error', { message: 'Only host can start the game' });
            return;
        }
        if (room.players.length < 2) {
            socket.emit('error', { message: 'Need at least 2 players' });
            return;
        }
        // Pick random questions from your big list
        const shuffledAll = shuffleArray([...FULL_QUESTIONS]);
        const selected = shuffledAll.slice(0, totalQuestions);
        room.questions = selected;
        room.gameStarted = true;
        room.currentQuestion = 0;
        rooms.set(roomCode, room);
        // Send the first question to everyone
        io.to(roomCode).emit('gameStarted', { question: room.questions[0] });
    });

    // 4. Player submits an answer
    socket.on('submitAnswer', ({ roomCode, answerIndex }) => {
        const room = rooms.get(roomCode);
        if (!room || !room.gameStarted) return;
        const currentQ = room.questions[room.currentQuestion];
        const isCorrect = (answerIndex === currentQ.correct);
        const player = room.players.find(p => p.id === socket.id);
        if (!player) return;

        // Scoring: +4 correct, -1 wrong (skip/ time out handled separately)
        if (isCorrect) {
            player.score += 4;
        } else {
            player.score -= 1;
        }
        io.to(roomCode).emit('leaderboardUpdate', room.players);

        // Wait 2 seconds then move to next question or end game
        setTimeout(() => {
            room.currentQuestion++;
            if (room.currentQuestion >= room.questions.length) {
                io.to(roomCode).emit('gameEnded', room.players);
                rooms.delete(roomCode);
            } else {
                io.to(roomCode).emit('nextQuestion', { question: room.questions[room.currentQuestion] });
            }
        }, 2000);
    });

    // 5. Handle skip (just treat as wrong answer with 0 points? We'll do same as wrong)
    socket.on('skipQuestion', ({ roomCode }) => {
        const room = rooms.get(roomCode);
        if (!room || !room.gameStarted) return;
        const player = room.players.find(p => p.id === socket.id);
        if (!player) return;
        // 0 marks for skip
        io.to(roomCode).emit('leaderboardUpdate', room.players);
        setTimeout(() => {
            room.currentQuestion++;
            if (room.currentQuestion >= room.questions.length) {
                io.to(roomCode).emit('gameEnded', room.players);
                rooms.delete(roomCode);
            } else {
                io.to(roomCode).emit('nextQuestion', { question: room.questions[room.currentQuestion] });
            }
        }, 2000);
    });

    // 6. Handle timeout (same as skip)
    socket.on('timeout', ({ roomCode }) => {
        const room = rooms.get(roomCode);
        if (!room || !room.gameStarted) return;
        setTimeout(() => {
            room.currentQuestion++;
            if (room.currentQuestion >= room.questions.length) {
                io.to(roomCode).emit('gameEnded', room.players);
                rooms.delete(roomCode);
            } else {
                io.to(roomCode).emit('nextQuestion', { question: room.questions[room.currentQuestion] });
            }
        }, 2000);
    });

    // 7. Handle disconnection (remove player, update room)
    socket.on('disconnect', () => {
        for (const [roomCode, room] of rooms.entries()) {
            const index = room.players.findIndex(p => p.id === socket.id);
            if (index !== -1) {
                room.players.splice(index, 1);
                if (room.players.length === 0) {
                    rooms.delete(roomCode);
                } else {
                    if (room.host === socket.id && room.players.length > 0) {
                        room.host = room.players[0].id;
                    }
                    rooms.set(roomCode, room);
                    io.to(roomCode).emit('playersUpdated', room.players);
                }
                break;
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});