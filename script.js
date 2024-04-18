const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

setTimeout(() => {
  popup.classList.add("open");
}, "1000");


closeBtn.addEventListener("click",() =>{
  popup.classList.remove("open");
});
