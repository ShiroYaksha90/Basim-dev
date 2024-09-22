const projectsCards = [
  {
    cardId: "1",
    cardTitle: "My World",
    cardDesc:
      "This project is about building a mobile web application to compare metrics from different countries. This project utilizes an API to retrieve information about countries and continents, which is then displayed through the use of React functions.",
    cardStack: ["React", "Redux", "CSS", "HTML"],
    cardImage: "assets/my-world.PNG",
    cardbackgroundstyle:
      "background:url(./assets/my-world.PNG);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://my-world-sems.onrender.com/",
    projLink: "https://github.com/ShiroYaksha90/react-redux-capstone",
  },
  {
    cardId: "2",
    cardTitle: "Foodo",
    cardDesc:
      "Foodo is a full-Stack application built with Ruby on Rails. It allows users to create, edit, and delete their own unique recipes. Users can also add ingredients, and follow step-by-step cooking instructions. The app features user authentication, and a responsive design for an optimal user experience",
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
      "Space Hub utilizes the SpaceX API to fetch information about the various spaceships details and allow visitors to join the various missions. It's built with the React framework to utilize the fluidity of SPA's and Redux for state management.",
    cardStack: ["React", "Redux", "CSS", "HTML"],
    cardImage: "assets/Space-Travelers-Hub.svg",
    cardbackgroundstyle:
      "background:url(./assets/Space-Travelers-Hub.svg);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://space-hub-osb.netlify.app/",
    projLink: "https://github.com/ShiroYaksha90/space-hub-traveler",
  },
  {
    cardId: "5",
    cardTitle: "Hola",
    cardDesc:
      "Hola is a full stack social app that allows users to sign up, log in, follow/unfollow other users, and create posts. It let's users activate thier account, change thier password via email using a hashed token.",
    cardStack: ["RoR", "Postgres", "Bootstrap", "Hotwire"],
    cardImage: "assets/hola-app.svg",
    cardbackgroundstyle:
      "background:url(./assets/hola-app.svg);background-size: 100% 100%;background-repeat: no-repeat;",
    liveLink: "https://hola-fvhk.onrender.com/",
    projLink: "https://github.com/ShiroYaksha90/hola",
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
            <h3 class="card-title fs-1">${projectsCards[i].cardTitle}</h3>
            <p class="card-text fw-light fs-md-5">${projectsCards[i].cardDesc}</p>
            <ul class="d-flex flex-wrap gap-3 gap-lg-2 ps-0 m-0">
            ${stackString}
            </ul>
          </div>
          <button class="border-0 p-3" data-bs-toggle="modal" data-bs-target="#card-${projectsCards[i].cardId}" >See Project</button>`;
}

const cardModal = document.querySelector(".card-modal");
cardModal.innerHTML = "";
projectsCards.forEach((card) => {
  let stackString = "";
  card.cardStack.forEach(
    (stack) =>
      (stackString = `${stackString}<li class="border p-1">${stack}</li>`)
  );
  cardModal.innerHTML += `
  <div class="modal fade" id="card-${card.cardId}" tabindex="-1" aria-labelledby="card-${card.cardId}ModalLabel" aria-hidden="true">
    <div class="modal-dialog d-flex">
      <div class="modal-content align-self-lg-center">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="card-${card.cardId}">${card.cardTitle}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="main-project d-flex flex-column gap-3 gap-md-0">
            <ul class="d-flex gap-2 p-0 fs-md-6">
            ${stackString}
            </ul>
            <div class="modal-details-container d-flex flex-column flex-lg-row gap-lg-3">
              <img src="${card.cardImage}" alt="${card.cardTitle}" loading="lazy">
  
              <div class="modal-details d-flex flex-column justify-content-between my-3 my-lg-0">
                <div class="main-project-details d-flex flex-column align-items-start m-lg-0 gap-lg-3">
                  <p class="fs-md-5">${card.cardDesc}</p>
                </div>
                <div>
                  <button type="button" class="modal-btn border-0 py-2 px-3 px-sm-4"><a href="${card.liveLink}" target="_blank" rel="noopener noreferrer" aria-label="Live link of the project">See Live</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                  </svg></button>
                  <button type="button" class="modal-btn border-0 py-2 px-3 px-sm-4"><a href="${card.projLink}" target="_blank" rel="noopener noreferrer" aria-label="Github repository of the project">See Source</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

/* Form Validation */
const formVar = document.getElementById("form");
const nameVar = document.getElementById("name");
const emailVar = document.getElementById("email");
const messageVar = document.getElementById("message");
const errorMessage = document.getElementById("email-error");

const validateEmail = (email) => {
  const reqularExpression =
    /^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  return reqularExpression.test(email);
};

form.addEventListener("submit", (e) => {
  if (!validateEmail(emailVar.value)) {
    e.preventDefault();
    errorMessage.textContent = "Please enter a valid email";
  } else errorMessage.textContent = "";
});

/* localstorage */

window.addEventListener("DOMContentLoaded", () => {
  const userInput = JSON.parse(localStorage.getItem("data"));
  if (userInput !== null) {
    nameVar.value = userInput.nameId;
    emailVar.value = userInput.mail;
    messageVar.value = userInput.message;
  } else {
    nameVar.value = "";
    emailVar.value = "";
    messageVar.value = "";
  }
});

form.addEventListener("input", () => {
  const obj = {};
  obj.name = nameVar.value;
  obj.mail = emailVar.value;
  obj.message = messageVar.value;
  localStorage.setItem("data", JSON.stringify(obj));
});

// rest form input
const clearInput = () => {
  nameVar.value = "";
  emailVar.value = "";
  messageVar.value = "";
};

window.addEventListener("DOMContentLoaded", () => {
  clearInput();
});

//download resume
const downloadResume = document.querySelector(".download-resume");
downloadResume.addEventListener("click", () => {
  window.open("assets/Basim_Aljazaeri_resume.pdf");
});
