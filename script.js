const projectsCards = [
  {
    cardId: "1",
    cardTitle: "My World",
    cardDesc:
      "This project is about building a mobile web application to compare metrics from different countries. This project utilizes an API to retrieve information about countries and continents, which is then displayed through the use of React functions.",
    cardStack: ["React", "Redux", "CSS", "HTML"],
    cardImage: "assets/main-project.PNG",
    cardbackgroundstyle:
      "background:url(./assets/my-world.PNG);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://my-world-sems.onrender.com/",
    projLink: "https://github.com/ShiroYaksha90/react-redux-capstone",
  },
  {
    cardId: "2",
    cardTitle: "Foodo",
    cardDesc:
      "Foodo is a full-cardStack application built with Ruby on Rails. It allows users to create, edit, and delete their own unique recipes. Users can also add ingredients, and follow step-by-step cooking instructions. The app features user authentication, and a responsive design for an optimal user experience",
    cardStack: ["RoR", "Bootstrap", "Rspec", "Postgres"],
    cardImage: "assets/foodo.png",
    cardbackgroundstyle:
      "background:url(./assets/foodo.png);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://foodo.onrender.com/",
    projLink: "https://github.com/ShiroYaksha90/Foodo",
  },
  {
    cardId: "3",
    cardTitle: "Simon game",
    cardDesc:
      "Simon game is an interactive fun web app based on the famous game Simon, the way that it works is that you can press any key to start and it will show you a tile that you have to click on. And as you go from level to level, the patterns get more and more complicated, and at some point you're going to screw up, and it's going to tell you that you’ve got it wrong and game is over, so you can press any key to restart the game.",
    cardStack: ["HTML", "CSS", "Javascript", "JQuery"],
    cardImage: "assets/Simon-game.png",
    cardbackgroundstyle:
      "background:url(./assets/Simon-game.png);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://shiroyaksha90.github.io/Simon-game/",
    projLink: "https://github.com/ShiroYaksha90/Simon-game",
  },
  {
    cardId: "4",
    cardTitle: "Space Hub",
    cardDesc:
      "Space Hub is a web app built with React and Redux, it fetches data from SpaceX API and Displays it.",
    cardStack: ["React", "Redux", "CSS", "HTML"],
    cardImage: "assets/Space-Travelers-Hub.svg",
    cardbackgroundstyle:
      "background:url(./assets/Space-Travelers-Hub.svg);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://space-hub-osb.netlify.app/",
    projLink: "https://github.com/ShiroYaksha90/space-hub-traveler",
  },
  {
    cardId: "5",
    cardTitle: "Math Magician",
    cardDesc:
      "This is a Single Page App (SPA) that allows users to: - Make simple calculations - Read a random quote",
    cardStack: ["React", "API", "CSS"],
    cardImage: "assets/math-magician.PNG",
    cardbackgroundstyle:
      "background:url(./assets/math-magician.PNG);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://basim-math-magician.onrender.com/",
    projLink: "https://github.com/ShiroYaksha90/math-magician",
  },
  {
    cardId: "6",
    cardTitle: "Go movies",
    cardDesc:
      "Go Movies is a simple web app that fetches and stores data in multiple APIs and displays them, it uses modular architecture as well as webpack.",
    cardStack: ["Javascript", "Webpack", "CSS"],
    cardImage: "assets/go-movie.PNG",
    cardbackgroundstyle:
      "background:url(./assets/go-movie.PNG); background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://dheerajsachdeva.github.io/capstone2/dist/",
    projLink: "https://github.com/ShiroYaksha90/javascript-capstone",
  },
];

const cardsContainer = document.querySelector(".cards-container");
cardsContainer.innerHTML = "";
for (let i = 0; i < projectsCards.length; i++) {
  let stackString = "";
  projectsCards[i].cardStack.forEach(
    (stack) =>
      (stackString = `${stackString}<li class="p-2 fs-7 fs-md-6">${stack}</li>`)
  );
  cardsContainer.innerHTML += `<div class="card col-10 col-sm-9 col-md-5 column-large">
          <div class="card-body d-flex flex-column px-4 px-lg-3 gap-3 gap-md-2 pt-7 pt-md-5 pt-lg-7" style="${projectsCards[i].cardbackgroundstyle}">
            <h5 class="card-title fs-1">${projectsCards[i].cardTitle}</h5>
            <p class="card-text fw-light fs-md-5">${projectsCards[i].cardDesc}</p>
            <ul class="d-flex flex-wrap gap-3 gap-lg-2 ps-0 m-0">
            ${stackString}
            </ul>
          </div>
          <button class="border-0 p-3" data-bs-toggle="modal" data-bs-target="#exampleModal" >See Project</button>`;
}

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
