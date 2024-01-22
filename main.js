const PlayersList = [{ name: "RAHUL SHARMA", country: "INDIA", score: 100 }];
refreshList();
function addPlayer(event) {
  event.preventDefault();
  if (event.target[0].value === "") {
    alert("Please fill All inputs");
  } else {
    const playerList = document.getElementById("player-list");

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const country = document.getElementById("country").value;
    const score = document.getElementById("score").value;

    const playerData = {
      name: firstName.toUpperCase() + " " + lastName.toUpperCase(),
      country: country.toUpperCase(),
      score: Number(score),
    };

    PlayersList.push(playerData);
    PlayersList.sort(
      (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
    );

    playerList.innerHTML = "";
    for (let index = 0; index < PlayersList.length; index++) {
      const player = PlayersList[index];

      const liEl = document.createElement("li");
      const nameContent = document.createElement("span");
      const countryContent = document.createElement("span");
      const curentScore = document.createElement("span");
      const deletebutton = document.createElement("span");

      const increaseScore = document.createElement("button");
      const decreaseScore = document.createElement("button");

      increaseScore.innerText = "+5";
      decreaseScore.innerText = "-5";
      increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
      decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);
      deletebutton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      curentScore.innerText = player.score;
      countryContent.innerText = player.country;
      nameContent.innerText = player.name;

      liEl.append(
        nameContent,
        countryContent,
        curentScore,
        deletebutton,
        increaseScore,
        decreaseScore
      );
      playerList.append(liEl);
    }
  }
}

function refreshList() {
  const playerList = document.getElementById("player-list");
  PlayersList.sort(
    (player1, player2) => parseInt(player2.score) - parseInt(player1.score)
  );

  playerList.innerHTML = "";
  for (let index = 0; index < PlayersList.length; index++) {
    const player = PlayersList[index];

    const liEl = document.createElement("li");
    const nameContent = document.createElement("span");
    const countryContent = document.createElement("span");
    const curentScore = document.createElement("span");
    const deletebutton = document.createElement("span");

    const increaseScore = document.createElement("button");
    const decreaseScore = document.createElement("button");

    increaseScore.innerText = "+5";
    decreaseScore.innerText = "-5";
    deletebutton.setAttribute("onclick", `deleteHandler(${index})`);
    increaseScore.setAttribute("onclick", `increaseScoreHandler(${index})`);
    decreaseScore.setAttribute("onclick", `decreaseScoreHandler(${index})`);
    deletebutton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    curentScore.innerText = player.score;
    countryContent.innerText = player.country;

    nameContent.innerText = player.name;

    liEl.append(
      nameContent,
      countryContent,
      curentScore,
      deletebutton,
      increaseScore,
      decreaseScore
    );
    playerList.append(liEl);
  }
}

function increaseScoreHandler(index) {
  PlayersList[index].score += 5;
  refreshList();
}

function decreaseScoreHandler(index) {
  PlayersList[index].score -= 5;
  refreshList();
}

function deleteHandler(index) {
  PlayersList.splice(index, 1);
  refreshList();
}
