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
    "Click more if you miss me 😘"
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
  }, Math.random() * 2000 + 3000); // 3000–5000 ms
}
