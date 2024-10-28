document.addEventListener("DOMContentLoaded", function () {

  
    games.forEach((game) => {
      const gameDiv = document.createElement("div");
      gameDiv.innerHTML = `
        <img src="${game.image}" alt="${game.name}" style="width:100%">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
      `;
      gameList.appendChild(gameDiv);
    });
  });
  