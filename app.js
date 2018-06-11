function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
     const newToDoText = document.getElementById('newToDoText');
     const toDoList = document.getElementById('toDoList');

     const deleteToDoButton = document.getElementById("delete-button");

     addToDoForm.addEventListener('submit', () => {
      event.preventDefault();

      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = "checkbox";

      // set the title
      newLi.textContent = title;

      // attach the checkbox to the li
      newLi.appendChild(checkbox);
      

      // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';
  });

  deleteToDoButton.addEventListener("click", ()=>{
    const checkedItem = document.querySelectorAll('input:checked');
    for(let i = 0; i < checkedItem.length; i++){
      const liItem = checkedItem[i].parentElement;
      liItem.remove();
    }
  });



 }

window.onload = function() {
  onReady();
};
