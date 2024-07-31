import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://realtime-database-b87bf-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const commentListInDB = ref(database, "commentList");

const inputFieldEl = document.getElementById("input-field");
const sendBtn = document.querySelector(".send-button");
const createdAt = document.querySelector(".created")

sendBtn.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(commentListInDB, inputValue);
  clearInputFieldEl();
});

onValue(commentListInDB, function (snapshot) {
  let commentsArray = object.entries(snapshot.val());
});

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

// document.querySelector(".main").addEventListener("click", function (event) {
//   if (event.target.classList.contains("plus-btn")) {
//     let scoreElement = event.target.parentNode.querySelector(".score");
//     let currentScore = parseInt(scoreElement.textContent);
//     scoreElement.textContent = currentScore + 1;
//   }
// });

document.querySelector(".main").addEventListener("click", function (event) {
  if (event.target.classList.contains("reply")) {
    let commentDiv = event.target.closest(".comment-container");
    if (!commentDiv.querySelector(".reply-input")) {
      let inputField = document.createElement("div");
      inputField.classList.add("reply-input");
      inputField.innerHTML = `<span>
        <img class="avatar"
            src="./images/avatars/image-juliusomo.png"
            alt=""
            width="30px"/> 
      </span>
      <input type="text" placeholder="Reply to this comment..." id="input-field" />
      <span><button class="reply-button">reply</button></span>`;
      commentDiv.appendChild(inputField);
    }
  }
});
document.querySelector(".main").addEventListener("click",function(event){
  if(event.target.classList.contains("reply-button")){
    let commentDiv = event.target.closest(".comment-container")
    let inputField = commentDiv.querySelector(".reply-input")
    let commentReply = document.createElement("div")
    commentReply.classList.add("comment-reply")
    inputField.remove()
    commentReply.innerHTML = `<div class="comment" id="comment1">
          <span class="score-box">
            <button class="plus-btn">+</button>
            <p class="score">12</p>
            <button class="minus-btn">-</button>
          </span>
          <div>
            <div class="comment-id">
              <span class="id">
                <img
                  src="./images/avatars/image-amyrobson.png"
                  alt=""
                  width="30px"
                />
                <p>amyrobson</p>
                <p class="created">1 month ago</p>
              </span>
              <span>
                <button class="reply">
                  <img src="./images/icon-reply.svg" alt="" />Reply
                </button>
              </span>
            </div>
            <p class="paragraph">
              Woah, your project looks awesome! How long have you been coding
              for? I'm still new, but think I want to dive into React as well
              soon. Perhaps you can give me an insight on where I can learn
              React? Thanks!
            </p>
          </div>
        </div>`;
        commentDiv.appendChild(commentReply)
  }
})
// document.querySelectorAll(".reply").forEach(function (replyButton) {
//   replyButton.addEventListener("click", function () {
//     let commentDiv = replyButton.closest(".comment-container");
//     if (!commentDiv.querySelector(".reply-input")) {
//       let inputField = document.createElement("div");
//       inputField.classList.add("reply-input");
//       inputField.innerHTML = `<span
//         ><img
//           class="avatar"
//           src="./images/avatars/image-juliusomo.png"
//           alt=""
//           width="30px"
//       /></span>
//       <input type="text" placeholder="Reply to this comment..." id="input-field" />
//       <span><button class="reply-button">reply</button></span>`;
//       commentDiv.appendChild(inputField);
//     }
//   });
// });

document.querySelectorAll(".plus-btn").forEach(function (plusButton) {
  plusButton.addEventListener("click", function () {
    let scoreElement = plusButton.parentNode.querySelector(".score");
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 1;
  });
});
document.querySelectorAll(".minus-btn").forEach(function (plusButton) {
  plusButton.addEventListener("click", function () {
    if (
      parseInt(plusButton.parentNode.querySelector(".score").textContent) > 0
    ) {
      let scoreElement = plusButton.parentNode.querySelector(".score");
      let currentScore = parseInt(scoreElement.textContent);
      scoreElement.textContent = currentScore - 1;
    }
  });
});
function timeCreated(){

}
