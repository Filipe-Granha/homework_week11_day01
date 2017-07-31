 var app = function() {
  
  var ul = document.createElement("ul");
  ul.classList.add("cat");

  var liName = document.createElement("li");
  liName.innerText = "Name: Tomas";

  var liFood = document.createElement("li");
  liFood.innerText = "Favourite food: Crunchy mouse";

  var liPicture = document.createElement("li");
  liPicture.innerHTML="<img width='500' src='http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg' />";

  ul.appendChild(liName);
  ul.appendChild(liFood);
  ul.appendChild(liPicture);
  
  var cats = document.querySelector("#cats");
  cats.appendChild(ul);
 }

 window.addEventListener("load", app);