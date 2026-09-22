document.querySelector('#check').addEventListener('click', check);

function check() {

  const day = document.querySelector('#day').value
  const today = day.toLowerCase();
  let kind = '';

  //Conditionals go here
  if (today === 'monday' || today === 'tuesday') {
    kind = "It's a working hard kind of day!";
    document.querySelector('#placeToSee').innerHTML = kind;
  } else if (today === 'wednesday') {
    kind = "It's hump day!";
    document.querySelector('#placeToSee').innerHTML = kind;
  } else if (today === "thursday") {
    kind = "It's Friday Jr.";
    document.querySelector('#placeToSee').innerHTML = kind;
  } else if (today === "friday") {
    kind = "TGIF!";
    document.querySelector('#placeToSee').innerHTML = kind;
  } else {
    kind = "Yippee! It's the weekend!";
    document.querySelector('#placeToSee').innerHTML = kind;
  }
}
