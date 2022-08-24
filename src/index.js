const messages = [
    "David",
    "Juan Carlos",
    "Ivon",
    "Carla",
    "Karen",
    "Paola",
    "Nicol",
    "Carolina",
    "Liam",
    "Layla",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}
module.exports = { randomMsg };