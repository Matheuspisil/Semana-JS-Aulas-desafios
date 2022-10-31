/*
você recebeu um array de usuarios obtendo um novo array com os usuarios premium
*/

const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const premiumUser = users.filter((user) => user.premium);
const nameUser = users.filter((user) => user.name);

console.log(premiumUser);
console.log(nameUser);
