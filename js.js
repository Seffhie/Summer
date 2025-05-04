function plantFlower() {
  const garden = document.getElementById('garden');
  const element = document.createElement('div');

  // 50/50 chance to plant a flower or heart
  element.className = Math.random() > 0.5 ? 'flower' : 'heart';
  garden.appendChild(element);

  // Sweet messages list
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

  // Create notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Random position
  notification.style.position = 'fixed';
  notification.style.left = Math.random() * 80 + 10 + '%';
  notification.style.top = Math.random() * 80 + 10 + '%';
  notification.style.zIndex = 9999;
  document.body.appendChild(notification);

  // Auto-remove after 3–5 seconds
  setTimeout(() => {
  notification.remove();
}, Math.random() * 3000 + 7000); // 7000–10000 ms
