interface Task {
  id: number;
  title: string;
  status: string;
  startDate: string;
  endDate: string;
}

function store() {
  var taskTitle = (document.getElementById("taskInput") as HTMLInputElement)?.value;
  var taskStatus = (document.getElementById("statusInput") as HTMLInputElement)?.value;
  var startDate = (document.getElementById("startDate") as HTMLInputElement)?.value;
  var endDate = (document.getElementById("endDate") as HTMLInputElement)?.value;

  if (!taskTitle || !taskStatus) {
    alert("Task title and status cannot be empty!");
    return;
  }

  let taskData = localStorage.getItem("tasks") || "";
  taskData += `${Date.now()}|${taskTitle}|${taskStatus}|${startDate}|${endDate};`;
  localStorage.setItem("tasks", taskData);

  renderTasks();
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  if (taskList) {
    taskList.innerHTML = "<tr><th>Title</th><th>Status</th><th>Start Date</th><th>End Date</th></tr>";
    const storedTasks = (localStorage.getItem("tasks") || "").split(";").filter(task => task);
    storedTasks.forEach(taskStr => {
      const [id, title, status, startDate, endDate] = taskStr.split("|");
      taskList.innerHTML += `<tr><td>${title}</td><td>${status}</td><td>${startDate}</td><td>${endDate}</td></tr>`;
    });
  }
}

document.addEventListener("DOMContentLoaded", renderTasks);
