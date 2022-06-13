let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function() {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.body.getElementsById("main-title").innerHTML = "Welcome to Dom's House!";

  // Part 2
  document.querySelector("body").style.backgroundColor = "navy";
  // Part 3
  let fList = document.body.getElementsById("favorite-things");
    fList.removeChild(fList.lastChild);
  // Part 4
  let resize = document.querySelectorAll(".special-title");
  for(i=0; i<resize.length; i++){
    resize[i].style.fontSize = "2rem";
  }
  // Part 5
  let races = document.getElementById("past-races");
  races.removeChild(races.children[3]);
  // Part 6
  const newRace = document.createElement("li");
  let location = document.createTextNode("Philadelphia");

  newRace.append(location);
  races.appendChild(newRace);
  // Part 7
  const newBlog = document.createElement("div");
  newBlog.classList.add(".blog-post", "purple");

  const header = document.createElement("h1");
  const hText = document.createTextNode("Philadelphia")
  header.appendChild(hText);

  const para = document.createElement("p");
  const pText = document.createTextNode("I RAN UP AND DOWN THE BOULEVARD!");
  para.appendChild(pText);

  newBlog.append(header);
  newBlog.append(para);

  document.getElementsByClassName("main").appendChild(newBlog);
}