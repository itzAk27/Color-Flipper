const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn"); //btn is id
const color = document.querySelector(".color"); // color is class

//JavaScript Anonymous Functions Declaration

btn.addEventListener("click", function () { 
  const randomNumber = getRandom();
  console.log(randomNumber);
  // console.log(getRandom());

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; // It Change the text content of element in this eg it is color.
  
});

function getRandom()
{
  let k = Math.random();
  console.log(k);
  return Math.floor(Math.random() * colors.length);
}