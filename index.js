import { tweetsData } from "./data.js";

const tweetBtn = document.getElementById("tweet-btn");
const tweetInput = document.getElementById("tweet-input");
const feed = document.getElementById("feed");

tweetBtn.addEventListener("click", function () {
  console.log(tweetInput.value);
  tweetInput.value = "";
});
