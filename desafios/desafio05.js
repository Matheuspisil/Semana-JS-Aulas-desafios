const tvShows = [
  { name: "Breaking Bad", releaseYear: 2008 },
  { name: "Mr. Robot", releaseYear: 2015 },
  { name: "True Detective", releaseYear: 2014 },
  { name: "Hannibal", releaseYear: 2013 },
  { name: "The Handmaid's Tale", releaseYear: 2017 },
  { name: "House M.D.", releaseYear: 2004 },
  { name: "Watchmen", releaseYear: 2019 },
];

// const nomeDaSerie = tvShows.filter(showdatv => showdatv.name ) exibe todo array, não somente, string
const nomeDaSerie = tvShows.reduce(
  (accumulator, { name }) => `${accumulator}- ${name}\n`,
  ""
);
console.log(nomeDaSerie);
