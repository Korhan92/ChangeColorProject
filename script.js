//Choose a random color
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
const alphanumeric = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

body.style.backgroundColor = "violet"; // starting condition
// you can add an event listener "click" with a function named "changeBackground"
//button.addEventListener('click', changeBackground)   // just for test

// you can add event listener "click" directly with a function
button1.onclick = () => {
  //const colorIndex= parseInt(Math.random()*colors.length+1)
  const colorIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
};

/**** SECOND STEP */
const colorIndex = () => {
  return Math.floor(Math.random() * alphanumeric.length);
};
/* long version
button2.onclick = ()=>{
  const colorCode = `${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}`;
body.style.backgroundColor = "#"+colorCode;
h1.style.color = "#"+colorCode;   // look at CSS for reversing
h1.innerHTML = "#"+colorCode;
}*/

//another long version
// button2.onclick = ()=>{
//   const colorCode = `${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}${alphanumeric[colorIndex()]}`;
//   body.style.backgroundColor = "#"+colorCode;
//   h1.innerHTML = "#"+colorCode;

//   let reverseColor = colorCode.split("").reverse().join("");
//   console.log(reverseColor);
//   h1.style.color = "#"+reverseColor;
// }

// optimum version
button2.onclick = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * alphanumeric.length);
    hexCode += alphanumeric[index];
  }
  h1.textContent = hexCode;
  body.style.backgroundColor = hexCode;
};

// another good version
// button2.onclick = ()=>{
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   body.style.backgroundColor = color;
//   h1.textContent = color;
// }

// smallest version with different options
/*    button2.onclick = () => {
      let color = '#' + Math.random().toString(16).slice(-6);
      //let color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
      //let color = "#" + ((1<<24)*Math.random() | 0).toString(16);
      //let color = '#' + (Math.random().toString(16) + "000000").substring(2,8);
      //let color ='#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
      body.style.backgroundColor = color;
      h1.textContent = color;
    }
    */
