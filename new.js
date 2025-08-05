document.addEventListener("DOMContentLoaded", function () {
  const countEl = document.getElementById("checkout-count");
  if (!countEl) return;

  let currentCount = Math.floor(Math.random() * 5) + 3;

  function renderNumber(num) {
    const span = document.createElement("span");
    span.textContent = num;
    span.style.animation = "slideUp 0.4s ease-in-out forwards";
    countEl.innerHTML = '';
    countEl.appendChild(span);
  }

  function fluctuate() {
    const fluctuation = [0, 1, -1][Math.floor(Math.random() * 3)];
    currentCount = Math.max(1, currentCount + fluctuation);
    renderNumber(currentCount);
  }

  renderNumber(currentCount);
  setInterval(fluctuate, Math.floor(Math.random() * 4000) + 6000);
});
