//If JSON file loads, get the data and call function to create cards from the data.
function executeThisFunctionIfFileLoads(){
  const myPlanets = JSON.parse(this.responseText);
  createPlanetCards(myPlanets.planets);
  initHoverListener(myPlanets.planets);
};

const createPlanetCards = (myDataArray) => {
  let myPlanetString = '';
  myDataArray.forEach(element => {
    myPlanetString += `<div>`;
    myPlanetString += `<h1>${element.name}</h1>`
    myPlanetString += `</div>`;
  });
};

//If JSON file does not successfully load, run error message and stop everything
function executeThisFunctionIfFileFails(){
  console.log("Mistakes have been made");
};

//Javascript initializes, starts by getting JSON data
const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisFunctionIfFileLoads);
  myRequest.addEventListener("error", executeThisFunctionIfFileFails);
  myRequest.open("GET", planets.json);
  myRequest.send();
};

startApplication();