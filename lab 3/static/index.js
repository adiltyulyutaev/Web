


let ara = document.getElementById('task');
let i =-1;
let tasks = [];
document.onkeyup = function e(e) {
  e = e||window.event;
  if(e.keyCode==13&&ara.value!='')
      addItem();




}

function addItem(){

  tasks.push(ara.value);
  i++;
  document.getElementById('smthing').innerHTML+=create();
  ara.value = '';
}
function create() {

  return `<div class="task" id="${i}">
    <div class="left">
      <img src="https://toppng.com/public/uploads/thumbnail/galochka-4-11551058980u0f4tr6veq.png" alt="галочка" class="img1" onclick="cross(${i})" >
        <p class="item-name">${tasks[i]}</p>
      </div>
      <img class="item-trash id = "trash_${i}" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png" alt="trash" onclick="remove('${i}')">
    </div>`

}
function remove(index) {
  let temp = index;
  document.getElementById(temp).style.display = 'none';
}

function cross(index) {
  let current = document.getElementById(index);
  if(current.classList.length > 1)
    current.classList.remove('item-name2');
  else
    current.classList.add('item-name2');
}
