const body = document.body;

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    const buttonId = e.target.id;
    const colors = {
      "grey": "grey",
      "blue": "blue",
      "pink": "pink"
    };

    body.style.backgroundColor = colors[buttonId] || "yellow";
  }
});
