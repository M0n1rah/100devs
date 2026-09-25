document.querySelector('#yell').addEventListener('click', run);

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lName}!!!`;
  document.querySelector("p").classList.toggle("hidden");
  document.querySelector("img").classList.toggle("hidden");
}