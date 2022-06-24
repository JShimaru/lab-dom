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
  document.getElementById("main-title").innerHTML = "Welcome to Dom's House!";

  // Part 2
  document.querySelector("body").style.backgroundColor = "navy";
  // Part 3
  const fList = document.getElementById("favorite-things");
  let text = fList.children[5]
   // console.log(text);
   fList.removeChild(text);
  // Part 4
  let resize = document.querySelectorAll(".special-title");
  for(i=0; i<resize.length; i++){
    resize[i].style.fontSize = "2rem";
  }
  // Part 5
  let races = document.getElementById("past-races");
  //console.log(races)
  let target = races.children[3]
  //console.log(target)
  races.removeChild(target);
  // Part 6
  const newRace = document.createElement("li");
  //console.log(newRace)
  newRace.innerText = "Philadelphia"
  //console.log(newRace)
  races.appendChild(newRace);
  // Part 7
  const newBlog = document.createElement("div");
  newBlog.classList.add("blog-post", "purple");
  
  //console.log(newBlog)

  const header = document.createElement("h1");
  header.innerText = `Philadelphia`
  
 //console.log(header)

  const para = document.createElement("p");
  para.innerText = "I RAN UP AND DOWN THE BOULEVARD!"

  //console.log(para)
 
  newBlog.append(header);
  newBlog.append(para);

  //console.log(newBlog)

  let updatedBlog = document.querySelectorAll(".main")
  updatedBlog[0].appendChild(newBlog)
}