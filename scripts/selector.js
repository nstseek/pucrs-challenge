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

const ballsGrid = document.querySelector("section.selector .items");

ballsArray.forEach(element => ballsGrid.appendChild(element));
