// mockBackend/data.js

const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const names = [
  "Alexis",
  "Avery",
  "Alyssa",
  "Andre",
  "Andrew",
  "Angel",
  "Bennett",
  "Blayne",
  "Brook",
  "Cameron",
  "Destin",
  "Dakota",
  "Davis",
  "Emery",
  "Ezekiel",
  "Kayla",
  "Laila",
  "Leiloni",
  "Lyn",
  "Mia",
  "Peyton",
  "Taylor",
  "Tre",
  "Reed",
  "Rose",
  "Roman",
  "River",
  "Riley",
  "Rowan",
  "Roxas",
  "Skyler",
];

// Sample news feed
const getNewsItem = () => ({
  id: getRandomId(),
  title: "Latest Software Engineering Trends",
  message: "Stay updated with the newest frameworks and tech stacks.",
  imgSrc:
  "https://via.placeholder.com/300x100.png?text=Software+News+Placeholder",
});

// Generate network friends
const getFriend = () => ({
  id: getRandomId(),
  name: randomFromList(names),
  isOnline: Math.random() < 0.5,
});

// Mock API data
export default {
  "/menu": ["Home", "Profile", "Settings"],
  "/news-feed": Array.from({ length: 5 }, getNewsItem),
  "/friends": Array.from({ length: 10 }, getFriend),
};
