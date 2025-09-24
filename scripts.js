const cont = document.querySelector('.outer')
let arr = [];
let arr1 = [];
for (let i = 0; i < 16; i++) {
  arr1[i] = document.createElement('div');
  arr1[i].classList.add('row');
  cont.appendChild(arr1[i]);
}
arr.push(arr1);

for (let i = 0; i < 16; i++) {
  let arr2 = [];
  for (let j = 0; j < 16; j++) {
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
    item.style.backgroundColor = 'lightgray';
  });
});
