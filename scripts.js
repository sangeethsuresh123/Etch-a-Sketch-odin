let arr = [];
function createGrid() {
  for (let i = 0; i < arr.length; i++) { // Iterate through rows
    for (let j = 0; j < arr[i].length; j++) { // Iterate through columns
      arr[i][j].remove(); // Access each element
    }
  }
  arr = [];
  let size = prompt("Enter number of squares per side: ", 16);
  if (size > 100) {
    alert("Size limit reached(max 100)!");
    return;
  }
  const p = document.querySelector('#info');
  p.textContent = `Dimensions: ${size}x${size}`;
  const cont = document.querySelector('.outer')
  let arr1 = [];
  for (let i = 0; i < size; i++) {
    arr1[i] = document.createElement('div');
    arr1[i].classList.add('row');
    cont.appendChild(arr1[i]);
  }
  arr.push(arr1);

  for (let i = 0; i < size; i++) {
    let arr2 = [];
    for (let j = 0; j < size; j++) {
      arr2[j] = document.createElement('square');
      arr2[j].classList.add('square');
      arr[0][i].appendChild(arr2[j]);
    }
    arr.push(arr2);
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => {
    item.addEventListener('mouseover', () => {
      console.log('Element hovered!');
      let red = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      item.style.backgroundColor = `rgb(${red},${green},${blue})`;
      if (!item.style.opacity) item.style.opacity = '1';
      opacity = parseFloat(item.style.opacity);
      item.style.opacity = opacity - 0.1;
    });
  });
}

const button = document.querySelector('#select');
button.addEventListener('click', createGrid);

