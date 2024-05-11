function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    
    var completeBtn = document.createElement("button");
    completeBtn.innerHTML = "&#9660;";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(completeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
