function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;
  const submitButton = document.getElementById('submitButton');


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = ''; //set it as a empty value in the beginning before user input anything.

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');  //creating new li
      const checkbox = document.createElement('input');  //assign the toDo's title text to the li
      // const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";


      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      // newLi.appendChild(deleteButton);

    });
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    const deleteButton = document.createElement('deleteButton'); //creating deletebutton in JS


    if (!newToDoText.value) { return; }
//to add newToDos avoid submitting empty value
    toDos.push ({
      title: newToDoText.value,
      complete: false,  //since it is a new 'todo', mark checkbox complete function needs to be off
      id: id++ // increment id variable
    });
    newToDoText.value = ''; //clear the text field for users
  }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = ''; //set it as a empty value in the beginning before user input anything.

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');  //creating new li
        const checkbox = document.createElement('input');  //assign the toDo's title text to the li
        const deleteButton = document.createElement('input'); //input is linked to "delete" text
        deleteButton.setAttribute("type", "button"); //setting the deleteButton attribute to "button" type.
        deleteButton.setAttribute("value", "delete"); //setAttribute is a built-in method and always have two prep

        // const deleteButton = document.createElement('button');
        checkbox.type = "checkbox";


        newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);
        // newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', event => {
          event.preventDefault();


          toDoList.removeChild(newLi)//deleting elements from html;

          //todos.filter

          const toRemoveId = toDo.id;
          const filteredTodos = toDos.filter(toDo => toDo.id !== toRemoveId);
          todos = filteredTodos;//the new array after deletion




        });

      });
    }

    addToDoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      createNewToDo();
      newToDoText = '';
      renderTheUI();
    });
    renderTheUI();

  }







window.onload = function() {
  onReady();
};
