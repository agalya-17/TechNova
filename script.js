
const countDownDate = new Date("Nov 17, 2050  00:00:00").getTime();
const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Event Started🎊!";
  }
}, 1000);

function showPopup(title, topics) {
document.getElementById("popup-title").textContent = title;
const list = document.getElementById("popup-list");
list.innerHTML = "";
topics.forEach(topic => {
const li = document.createElement("li");
li.textContent = topic;
list.appendChild(li);
});
const popup = document.getElementById("popup");
popup.classList.add("show");
}
function closePopup() {
document.getElementById("popup").classList.remove("show");
}