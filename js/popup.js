var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form"); 
popup.classList.add("modal-show");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
