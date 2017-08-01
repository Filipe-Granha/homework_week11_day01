 
 var catsArray = [
 {
   name: "Boba",
   food: "Sock fluff",
   picture: "<img width='500' src='http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg' />"
 },
 {
   name: "Barnaby",
   food: "Tuna",
   picture: "<img width='500' src='https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg' />"
 },
 {
   name: "Max",
   food: "Whiskas Temptations",
   picture: "<img width='500' src='https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg' />"
 },
 {
   name: "Tomas",
   food: "Cheese",
   picture: "<img width='500' src='http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg' />"
 },
 {
   name: "T-Rex",
   food: "little birds",
   picture: "<img width='500' src='https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg' />"
 }
 ];



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
   for(var i = 0; i < catsArray.length; i++)  
   liName.innerText = "Name: " + catsArray[i].name;
   return liName;
 }

 var createLiFood = function(food) {
   var liFood = document.createElement("li");
   for(var i = 0; i < catsArray.length; i++)  
   liFood.innerText = "Favourite food: " + catsArray[i].food;
   return liFood;
 }

 var createLiPicture = function(picture) {
   var liPicture = document.createElement("li");
   for(var i = 0; i < catsArray.length; i++) 
     liPicture.innerHTML = catsArray[i].picture;         
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
  
  
  addCat(catsArray[0]);
  addCat();
  
  // addCat("Tomas", "Cheese", "<img width='500' src='http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg' />")
  // addCat("T-Rex", "little birds", "<img width='500' src='https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg' />")
 }

 window.addEventListener("load", app);

 