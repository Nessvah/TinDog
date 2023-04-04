import User from "./User";
import userData from "./userData";

// variable to know when to hold the img swap
let isWaiting = false;
const badgeHtml = document.getElementById("badge");
const NUMUSERS = 11;
let userArray = Array();

// function to get the first user and the others
function getNewUser() {
  // get the first user in array
  const nextUserData = userData[userArray.shift()];

  // return instance of user - if there's no more users, return empty obj
  return nextUserData ? new User(nextUserData) : {};
}

// add event listeners to btns
let btns = document.querySelectorAll("button");

// set score badge when btn clicked
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // if is not waiting to return another user
    if (!isWaiting) {
      // passinf the dataset with the info to know
      // which btn was clicked and set the correspoding html

      // render again?
      // render ()

      if (userArray.length === 0) {
        isWaiting = true;
        badgeHtml.innerHTML = user.receiveScore(btn.dataset.badge);

        setTimeout(() => {
          cleanBadge();
          noMoreUsers();

          isWaiting = false;
        }, 1500);
      } else if (userArray.length > 0) {
        isWaiting = true;
        badgeHtml.innerHTML = user.receiveScore(btn.dataset.badge);

        setTimeout(() => {
          user = getNewUser();
          cleanBadge();
          render();

          isWaiting = false;
        }, 1500);
      } else {
        noMoreUsers();
      }
    }
  });
});

// function to populate array
function Array() {
  let arr = [];
  for (let i = 1; i < NUMUSERS; i++) {
    arr.push(i);
  }
  return arr;
}
// function to render the user img and info
function render() {
  document.getElementById("user").innerHTML = user.getUserHtml();
}

// fuction to remove the badge
function cleanBadge() {
  badgeHtml.innerHTML = "";
}

// function to render a message when there's no more users to
// score

function noMoreUsers() {
  isWaiting = true;
  document.getElementById("btnActions").style.display = "none";
  document.getElementById("main").style.border = "none";

  setTimeout(() => {
    document.getElementById("user").innerHTML = `<div class="no-users">
        <h2>Ups... No more users. 🫣</h2>
        <img class="m-1" src="/assets/img/sad_dog.webp" alt="sad dog looking at window"/>
        <h3>Go catch some balls while we get more doggies for you.</h3>
    </div>`;
  });
}

// get the users
let user = getNewUser();

render();
