var addNewTask = document.getElementById('addtask');
var inputTask = document.getElementById("newtask");
var listTasks = document.getElementById("listOfTasks");

addNewTask.addEventListener('click', function(e){
	if(inputTask.value !== ""){
		listTasks.style.display = "block";
		var newTask = document.createElement("div");
		newTask.className = "taskWrapper";
		newTask.innerHTML = '<input id="checkedTask'+(listTasks.childNodes.length+1) +'" class="taskContent" type="checkbox" />'+ 
							'<span id="taskContent'+(listTasks.childNodes.length+1) +'" class="taskContent">' + inputTask.value +
							'</span>'+
							'<input id="deletetask' + (listTasks.childNodes.length+1) +'" class="deletetask" type="button" value="x" />';
		listTasks.appendChild(newTask);
		inputTask.value = '';
	}

},false);

listTasks.addEventListener('click', function(e) {
	if(e.target.id.indexOf('deletetask') != -1) {
		targetElem = document.getElementById(e.target.id);
		var elementToRemove = targetElem.parentNode;
		elementToRemove.parentNode.removeChild(elementToRemove);
		if(listOfTasks.children.length == 0){
				listTasks.style.display = "none";
			}
	}
}, false);