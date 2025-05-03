function plantFlower() {
    const garden = document.getElementById('garden');
    const element = document.createElement('div');
  
    // 50/50 chance to plant a flower or heart
    if (Math.random() > 0.5) {
      element.className = 'flower';
    } else {
      element.className = 'heart';
    }
  
    garden.appendChild(element);
  }
  