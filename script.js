// Write your JavaScript code here!

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    if (pilotNameInput.value === "" || copilotNameInput.value === "" 
    || fuelLevelInput.value === "" || cargoMassInput.value === ""){
      alert("All fields required.");
      event.preventDefault();
    } else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false
    || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true){
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
    }

    let faultyItemsInput = document.getElementById("faultyItems");
    let launchStatusInput = document.getElementById("launchStatus");
    let pilotStatusInput = document.getElementById("pilotStatus");
    let copilotStatusInput = document.getElementById("copilotStatus");
    let fuelStatusInput = document.getElementById("fuelStatus");
    let cargoStatusInput = document.getElementById("cargoStatus");

    function flightNotReady() {
      faultyItemsInput.style.visibility = "visible";
      launchStatusInput.innerHTML = `Shuttle not ready for launch`;
      launchStatusInput.style.color = "red"; 
    };
    if (fuelLevelInput.value < 10000) {
      flightNotReady();
      fuelStatusInput.innerHTML = `Fuel level too low for launch`;
    } else if (cargoMassInput.value > 10000) {
      flightNotReady();
      cargoStatusInput.innerHTML = `Too much Cargo mass for launch`;
    } else {
      launchStatusInput.innerHTML = `Shuttle is ready for launch`;
      launchStatusInput.style.color = "green";
    };
      pilotStatusInput.innerHTML = `Pilot ${pilotNameInput.value} is ready.`;
      copilotStatusInput.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready.`;
      event.preventDefault();
  });
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
  response.json().then(function(json) {
    const target = document.getElementById("missionTarget");
    let missionTarget = json[Math.floor(Math.random() * json.length)];
    target.innerHTML += `
      <h2>Mission Destination</h2>  
      <ol>
        <li>Name: ${missionTarget.name}</li>
        <li>Diameter: ${missionTarget.diameter}</li>
        <li>Star: ${missionTarget.star}</li>
        <li>Distance from Earth: ${missionTarget.distance}</li>
        <li>Number of Moons: ${missionTarget.moons}</li>
      </ol>
      <img src=${missionTarget.image}>
    `
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
