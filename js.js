function plantFlower() {
  const garden = document.getElementById('garden');
  const element = document.createElement('div');

  const types = ['sunflower', 'daisy', 'tulip', 'heart'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  element.className = randomType;

  garden.appendChild(element);

  // Sweet message notification (if you're using that too)
  const messages = [
    "You're my sunshine 🌞",
    "You make everything better 💖",
    "My heart blooms for you 🌷",
    "You light up my world ✨",
    "Hi Summer! You're loved ❤️",
    "You're my favorite person 🥺",
    "Click more if you miss me 😘",
    "I’m so lucky to know you 🍀",
    "You have the prettiest smile 😊",
    "My heart chose you 💘",
    "Thinking of you always 🌼",
    "You're sweeter than candy 🍬",
    "I hope you're smiling right now 😄",
    "I wish I could hug you tight 🤗",
    "You're the reason I’m happy 💞",
    "With you, everything feels right 🌈",
    "You’re my safe space 🏡",
    "You’re the prettiest flower 🌸",
    "I love you more every click 💗",
    "You deserve all the love in the world 🌍"
  ];

  const message = messages[Math.floor(Math.random() * messages.length)];
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, Math.random() * 3000 + 7000); // 7–10 seconds
}
