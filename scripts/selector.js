const ballsArray = [];

for (let i = 0; i < 8 * 4; i++) {
  const tempDiv = document.createElement("div");
  tempDiv.classList.add("ball");
  let rand = Math.random();
  rand = rand * 10;
  rand = rand - (rand % 1);
  rand = rand % 7;
  switch (rand) {
    case 0:
      tempDiv.classList.add("aqua");
      break;
    case 1:
      tempDiv.classList.add("red");
      break;
    case 2:
      tempDiv.classList.add("orange");
      break;
    case 3:
      tempDiv.classList.add("purple");
      break;
    case 4:
      tempDiv.classList.add("green");
      break;
    case 5:
      tempDiv.classList.add("blue");
      break;
    case 6:
      tempDiv.classList.add("yellow");
      break;
    default:
      break;
  }
  tempDiv.setAttribute("data-color", rand);
  ballsArray.push(tempDiv);
}

let filtering = {
  status: false,
  color: null
};

const ballsGrid = document.querySelector("section.selector .items");

ballsArray.forEach(element => ballsGrid.appendChild(element));

const filterCb = event => {
  ballsArray.forEach(ball => {
    if (ballsGrid.contains(ball)) ballsGrid.removeChild(ball);
  });
  if (!filtering.status) {
    filtering.status = true;
    filtering.color = event.target.getAttribute("data-color");
  } else if (
    filtering.status &&
    event.target.getAttribute("data-color") === filtering.color
  ) {
    filtering.status = false;
    filtering.color = null;
  } else {
    filtering.color = event.target.getAttribute("data-color");
  }
  ballsArray.forEach(ball => {
    if (
      ball.getAttribute("data-color") ===
        event.target.getAttribute("data-color") ||
      !filtering.status
    )
      ballsGrid.appendChild(ball);
  });
};

const filterButtons = document.querySelectorAll(
  "section.selector > .selectors > .btn"
);

filterButtons.forEach(button => button.addEventListener("click", filterCb));
