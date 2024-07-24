let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram account gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram account gained 20 followers! Keep it up!");
  }
}

function displayCount() {
    document.getElementById('countDisplay').innerText = count;
}