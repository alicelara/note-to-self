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