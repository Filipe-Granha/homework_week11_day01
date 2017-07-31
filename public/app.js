 var addCat = function(name, food, picture) { // This function will include the 4 functions bellow
   var ul = createUl();
   var liName = createLiName(name);
   var liFood = createLiFood(food);
   var liPicture = createLiPicture(picture);
   appendElements(ul, liName, liFood, liPicture);
 }

 var createUl = function() {
  var ul = document.createElement("ul");
  ul.classList.add("cat");
  return ul;
 }

 var createLiName = function(name) {
   var liName = document.createElement("li");
   liName.innerText = "Name: " + name ;
   return liName;
 }

 var createLiFood = function(food) {
   var liFood = document.createElement("li");
   liFood.innerText = "Favourite food: " + food;
   return liFood;
 }

 var createLiPicture = function(picture) {
   var liPicture = document.createElement("li");
     liPicture.innerHTML = picture;
                           

   return liPicture;
 }

 var appendElements = function(ul, liName, liFood, liPicture) {
   ul.appendChild(liName);
   ul.appendChild(liFood);
   ul.appendChild(liPicture);
   var cats = document.querySelector("#cats");
   cats.appendChild(ul);
   
 }



 var app = function() {
  
  // var ul = document.createElement("ul");
  // ul.classList.add("cat");

  // var liName = document.createElement("li");
  // liName.innerText = "Name: Tomas";

  // var liFood = document.createElement("li");
  // liFood.innerText = "Favourite food: Crunchy mouse";

  // var liPicture = document.createElement("li");
  // liPicture.innerHTML="<img width='500' src='http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg' />";

  // ul.appendChild(liName);
  // ul.appendChild(liFood);
  // ul.appendChild(liPicture);
  
  // var cats = document.querySelector("#cats");
  // cats.appendChild(ul);

  
  addCat("Tomas", "Cheese", "<img width='500' src='http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg' />")
  addCat("T-Rex", "little birds", "<img width='500' src='https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg' />")
 }

 window.addEventListener("load", app);

 