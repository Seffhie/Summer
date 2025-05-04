function showNotification(message) {
  const notif = document.createElement("div");
  notif.className = "notification";
  notif.textContent = message;

  // Random position within the viewport
  const maxTop = window.innerHeight - 80; // Adjusted for safe bottom space
  const maxLeft = window.innerWidth - 250; // Adjusted for width of the box

  const top = Math.random() * maxTop;
  const left = Math.random() * maxLeft;

  notif.style.position = "absolute";
  notif.style.top = `${top}px`;
  notif.style.left = `${left}px`;

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000); // stays for 4 seconds
}

const messages = [
  "You're my sunshine 🌞",
  "You make everything better 💖",
  "My heart blooms for you 🌷",
  "You light up my world ✨",
  "Hi Summer! You're loved ❤️",
  "You're my favorite person 🥺",
  "Click more if you miss me 😘",
  "I can't wait to see you again 🥰",
  "You're my reason to smile 😊",
  "Forever and always, you're in my heart 💖"
];

// Trigger random notifications when the user clicks the page
document.body.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  showNotification(messages[randomIndex]);
});
