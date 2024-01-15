const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == '') {
        alert("You must write something");
    } else {
        let taskData = getTaskData();
        taskData.push(inputBox.value);
        saveData(taskData);
        renderTasks();
    }

    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(getTaskData());
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(getTaskData());
    }
}, false);

function saveData(data) {
    localStorage.setItem("data", JSON.stringify(data));
}

function getTaskData() {
    let data = localStorage.getItem("data");
    return data ? JSON.parse(data) : [];
}

function renderTasks() {
    let taskData = getTaskData();
    listContainer.innerHTML = "";
    taskData.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    });
}

function showTasks() {
    renderTasks();
}

showTasks();
